import {
  BoxGeometry,
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  CylinderGeometry,
  Float32BufferAttribute,
  LatheGeometry,
  Mesh,
  Quaternion,
  Vector2,
  Vector3,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/* Small modelling helpers shared by the landmark builders. Every builder works in its own units
   with the base at y = 0; the stage normalises the result to a height of 1. */

export const DEG = Math.PI / 180;
const Y = new Vector3(0, 1, 0);

export function put(group, geometry, material, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new Mesh(geometry, material);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  group.add(m);
  return m;
}

/** Box standing on y (its base), centred on x/z. UVs are scaled so textures keep one density on every face. */
export function box(group, material, w, h, d, x = 0, y = 0, z = 0, ry = 0, density = 0) {
  const g = new BoxGeometry(w, h, d);
  if (density) {
    const uv = g.attributes.uv;
    const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let f = 0; f < 6; f++) {
      for (let i = f * 4; i < f * 4 + 4; i++) uv.setXY(i, uv.getX(i) * dims[f][0] * density, uv.getY(i) * dims[f][1] * density);
    }
  }
  return put(group, g, material, x, y + h / 2, z, 0, ry, 0);
}

/** Cylinder standing on y. */
export function cyl(group, material, rTop, rBottom, h, x = 0, y = 0, z = 0, seg = 24) {
  return put(group, new CylinderGeometry(rTop, rBottom, h, seg), material, x, y + h / 2, z);
}

/** Cylinder (or bar) between two points. */
export function strut(group, material, a, b, r = 0.02, seg = 6, rEnd = r) {
  const dir = new Vector3().subVectors(b, a);
  const len = dir.length();
  const m = new Mesh(new CylinderGeometry(rEnd, r, len, seg), material);
  m.position.copy(a).addScaledVector(dir, 0.5);
  m.quaternion.copy(new Quaternion().setFromUnitVectors(Y, dir.normalize()));
  group.add(m);
  return m;
}

/** Lathe from [radius, y] pairs, bottom to top. */
export function lathe(points, segments = 48) {
  return new LatheGeometry(points.map(([r, y]) => new Vector2(r, y)), segments);
}

/** Resample a [r, y] profile into n evenly spaced rows (smoother lathes and displacement). */
export function resample(points, n) {
  const curve = new CatmullRomCurve3(points.map(([r, y]) => new Vector3(r, y, 0)), false, 'centripetal');
  return curve.getSpacedPoints(n).map((p) => [Math.max(0, p.x), p.y]);
}

/** Displace a lathe's vertices radially: fn(theta, y, r) returns a radius multiplier. */
export function displaceRadial(geometry, fn) {
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const z = p.getZ(i);
    const r = Math.hypot(x, z);
    if (r < 1e-6) continue;
    const th = Math.atan2(x, z);
    const k = fn(th, p.getY(i), r);
    p.setX(i, x * k);
    p.setZ(i, z * k);
  }
  geometry.computeVertexNormals();
  return geometry;
}

/** Per-vertex colours from fn(x, y, z) → Color. */
export function paint(geometry, fn) {
  const p = geometry.attributes.position;
  const col = new Float32Array(p.count * 3);
  const c = new Color();
  for (let i = 0; i < p.count; i++) {
    fn(p.getX(i), p.getY(i), p.getZ(i), c);
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  geometry.setAttribute('color', new Float32BufferAttribute(col, 3));
  return geometry;
}

/** Polar-grid disc with a height function: terrain that meets y = 0 at its rim. */
export function terrain(radius, rings, segments, height) {
  const pos = [];
  const uv = [];
  const idx = [];
  pos.push(0, height(0, 0), 0);
  uv.push(0.5, 0.5);
  for (let r = 1; r <= rings; r++) {
    const rr = (r / rings) * radius;
    for (let s = 0; s < segments; s++) {
      const a = (s / segments) * Math.PI * 2;
      const x = Math.sin(a) * rr;
      const z = Math.cos(a) * rr;
      pos.push(x, r === rings ? 0 : height(x, z), z);
      uv.push(0.5 + x / radius / 2, 0.5 + z / radius / 2);
    }
  }
  const at = (r, s) => (r === 0 ? 0 : 1 + (r - 1) * segments + (s % segments));
  for (let s = 0; s < segments; s++) idx.push(0, at(1, s), at(1, s + 1));
  for (let r = 1; r < rings; r++) {
    for (let s = 0; s < segments; s++) {
      const a = at(r, s);
      const b = at(r + 1, s);
      const c = at(r + 1, s + 1);
      const d = at(r, s + 1);
      idx.push(a, b, d, b, c, d);
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/**
 * Bakes a modelled group into one geometry per material (a handful of draw calls per landmark).
 * Returns [{ geometry, material }].
 */
export function bake(group) {
  group.updateMatrixWorld(true);
  const byMat = new Map();
  group.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    const keep = ['position', 'normal', 'uv'];
    if (o.material.vertexColors) keep.push('color');
    for (const name of Object.keys(g.attributes)) if (!keep.includes(name)) g.deleteAttribute(name);
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) g.setAttribute('uv', new Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (o.material.vertexColors && !g.attributes.color) {
      g.setAttribute('color', new Float32BufferAttribute(new Float32Array(g.attributes.position.count * 3).fill(1), 3));
    }
    g.clearGroups();
    if (!byMat.has(o.material)) byMat.set(o.material, []);
    byMat.get(o.material).push(g);
  });
  const parts = [];
  for (const [material, list] of byMat) {
    const geometry = mergeGeometries(list, false);
    list.forEach((g) => g.dispose());
    if (geometry) parts.push({ geometry, material });
  }
  return parts;
}
