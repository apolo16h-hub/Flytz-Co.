import {
  BufferGeometry,
  CanvasTexture,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Group,
  MeshStandardMaterial,
  RepeatWrapping,
  SRGBColorSpace,
  Shape,
  ShapeGeometry,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
} from 'three';
import { archesTexture, seeded, windowsTexture } from './core.js';
import { DEG, box, cyl, displaceRadial, lathe, paint, put, resample, strut, terrain } from './geo.js';
import { LAND } from './data/landmask.js';

/* ---------- materials ---------- */

/** Every landmark material. `clip` planes are attached by the stage for the build-up reveal. */
export function materialKit(accent = '#c9a24b', clippingPlanes = []) {
  const std = (color, roughness = 0.6, metalness = 0, extra = {}) =>
    new MeshStandardMaterial({ color, roughness, metalness, clippingPlanes, ...extra });
  const gold = new Color(accent).lerp(new Color('#e3c27e'), 0.35);
  const kit = {
    gold: std(gold, 0.26, 0.9),
    goldGlow: std(gold, 0.3, 0.6, { emissive: new Color('#ffc65a'), emissiveIntensity: 1.6 }),
    ivory: std('#ece4d2', 0.5),
    marble: std('#f1ece2', 0.32),
    marbleShade: std('#cfc6b6', 0.45),
    sand: std('#d1b07c', 0.85),
    sandDark: std('#a98a5c', 0.9),
    stone: std('#c4b293', 0.8),
    stoneDark: std('#8b7c66', 0.85),
    limestone: std('#cdb98f', 0.7),
    patina: std('#6ea995', 0.5, 0.35),
    steel: std('#c9d2de', 0.22, 0.9),
    slate: std('#363c4b', 0.55, 0.2),
    dark: std('#14161c', 0.5, 0.1),
    red: std('#b8382c', 0.45),
    black: std('#1b1b1f', 0.4),
    terracotta: std('#b87650', 0.8),
    terracottaDark: std('#8a5236', 0.85),
    teal: std('#2f7c6e', 0.4, 0.2),
    tile: std('#f4f1ea', 0.3, 0, { side: DoubleSide }),
    glass: std('#262a33', 0.12, 0.85),
    soap: std('#ebe7de', 0.55, 0, { emissive: new Color('#fff1d6'), emissiveIntensity: 0.12 }),
    thatch: std('#5c4a36', 0.9),
    ground: std('#ffffff', 0.92, 0, { vertexColors: true }),
    lattice: null,
  };
  const arches = archesTexture(4, 1);
  arches.wrapS = arches.wrapT = RepeatWrapping;
  kit.arcade = std('#c9b28c', 0.8, 0, { alphaMap: arches, alphaTest: 0.5, side: DoubleSide });
  const win = windowsTexture(11);
  kit.tower = std('#a9b6c8', 0.2, 0.85, { emissiveMap: win, emissive: new Color('#ffffff'), emissiveIntensity: 0.9 });
  kit.globeSkin = std('#ffffff', 0.45, 0.25, { map: globeTexture(gold) });
  kit.all = Object.values(kit).filter((m) => m && m.isMaterial);
  return kit;
}

function globeTexture(gold) {
  const c = document.createElement('canvas');
  c.width = LAND.cols * 2;
  c.height = LAND.rows * 2;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#13203a';
  ctx.fillRect(0, 0, c.width, c.height);
  const bin = atob(LAND.b64);
  ctx.fillStyle = '#' + gold.getHexString();
  for (let r = 0; r < LAND.rows; r++) {
    for (let col = 0; col < LAND.cols; col++) {
      const i = r * LAND.cols + col;
      if ((bin.charCodeAt(i >> 3) >> (7 - (i & 7))) & 1) ctx.fillRect(col * 2, r * 2, 2, 2);
    }
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/* ---------- shared shapes ---------- */

/** Pointed (Islamic / gothic) arch outline: width w, springing height h, total height h + w * rise. */
function pointedArch(w, h, rise = 0.75) {
  const s = new Shape();
  const hw = w / 2;
  s.moveTo(-hw, 0);
  s.lineTo(-hw, h);
  s.quadraticCurveTo(-hw, h + w * rise * 0.6, 0, h + w * rise);
  s.quadraticCurveTo(hw, h + w * rise * 0.6, hw, h);
  s.lineTo(hw, 0);
  s.closePath();
  return s;
}
/** Round arch outline. */
function roundArch(w, h) {
  const s = new Shape();
  const hw = w / 2;
  s.moveTo(-hw, 0);
  s.lineTo(-hw, h);
  s.absarc(0, h, hw, Math.PI, 0, true);
  s.lineTo(hw, 0);
  s.closePath();
  return s;
}
/** Flat shape placed on a face: ry rotates it to face the given direction. */
function decal(group, shape, material, x, y, z, ry = 0) {
  return put(group, new ShapeGeometry(shape, 8), material, x, y, z, 0, ry, 0);
}
/** Prism from a 2D shape in the XY plane, extruded `depth` along Z and centred on it. */
function prism(shape, depth) {
  const g = new ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 10 });
  g.translate(0, 0, -depth / 2);
  return g;
}
/** Four faces around a square of half-size `half`: calls fn(x, z, ry) with each face's centre and facing. */
function aroundSquare(half, fn) {
  fn(0, half, 0);
  fn(half, 0, Math.PI / 2);
  fn(0, -half, Math.PI);
  fn(-half, 0, -Math.PI / 2);
}

/* ---------- landmarks ---------- */

function eiffel(k) {
  const g = new Group();
  // Leg centre line as [distance from axis, height].
  const P = [[1.0, 0], [0.8, 0.28], [0.6, 0.6], [0.43, 0.95], [0.31, 1.25], [0.2, 1.65], [0.12, 2.15], [0.065, 2.6], [0.04, 2.85]];
  const rAt = (y) => {
    for (let i = 1; i < P.length; i++) {
      if (y <= P[i][1]) {
        const t = (y - P[i - 1][1]) / (P[i][1] - P[i - 1][1]);
        return P[i - 1][0] + (P[i][0] - P[i - 1][0]) * t;
      }
    }
    return P[P.length - 1][0];
  };
  const corner = (y, q, inset = 0) => {
    const r = rAt(y) - inset;
    const a = (45 + 90 * q) * DEG;
    return new Vector3(Math.cos(a) * r, y, Math.sin(a) * r);
  };
  // Legs: chains of tapered bars along the curve.
  for (let q = 0; q < 4; q++) {
    for (let i = 1; i < P.length; i++) {
      const y0 = P[i - 1][1];
      const y1 = P[i][1];
      const t0 = 0.075 * (1 - y0 / 3.2) + 0.012;
      const t1 = 0.075 * (1 - y1 / 3.2) + 0.012;
      strut(g, k.gold, corner(y0, q), corner(y1, q), t0, 4, t1);
    }
  }
  // Lattice bracing: rings and X-braces between the legs.
  const levels = [0.12, 0.36, 0.6, 0.78, 0.95, 1.1, 1.25, 1.45, 1.65, 1.9, 2.15, 2.4, 2.6];
  for (const y of levels) {
    for (let q = 0; q < 4; q++) strut(g, k.gold, corner(y, q), corner(y, (q + 1) % 4), 0.008, 4);
  }
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] <= 0.6) continue;
    for (let q = 0; q < 4; q++) {
      const n = (q + 1) % 4;
      strut(g, k.gold, corner(levels[i - 1], q), corner(levels[i], n), 0.006, 4);
      strut(g, k.gold, corner(levels[i - 1], n), corner(levels[i], q), 0.006, 4);
    }
  }
  // The four great arches under the first platform.
  for (let q = 0; q < 4; q++) {
    const a = (90 * q) * DEG;
    const arch = new TorusGeometry(0.52, 0.022, 6, 28, Math.PI);
    arch.scale(1, 0.78, 1);
    const m = put(g, arch, k.gold, Math.cos(a + Math.PI / 2) * 0.58, 0.12, Math.sin(a + Math.PI / 2) * 0.58, 0, -a, 0);
    m.rotateX(-0.42);
  }
  // Platforms with gilded rails.
  const deck = (y, half, h) => {
    box(g, k.gold, half * 2, h, half * 2, 0, y, 0);
    box(g, k.gold, half * 2 + 0.06, 0.012, half * 2 + 0.06, 0, y + h + 0.03, 0);
  };
  deck(0.58, rAt(0.6) * 0.78, 0.07);
  deck(1.22, rAt(1.25) * 0.78, 0.05);
  box(g, k.gold, 0.13, 0.1, 0.13, 0, 2.78, 0);
  cyl(g, k.gold, 0.025, 0.04, 0.06, 0, 2.88, 0, 8);
  cyl(g, k.gold, 0.006, 0.012, 0.24, 0, 2.94, 0, 6);
  return g;
}

function bigben(k) {
  const g = new Group();
  box(g, k.stoneDark, 1.25, 0.24, 1.25, 0, 0, 0);
  box(g, k.limestone, 1.0, 3.3, 1.0, 0, 0.24, 0);
  // Vertical tracery ribs and string courses.
  aroundSquare(0.5, (x, z, ry) => {
    for (let i = -2; i <= 2; i++) {
      const off = i * 0.17;
      box(g, k.stone, 0.035, 3.2, 0.035, x + Math.cos(ry) * off, 0.3, z - Math.sin(ry) * off);
    }
  });
  for (const y of [1.2, 2.35]) box(g, k.stone, 1.06, 0.06, 1.06, 0, y, 0);
  for (const [x, z] of [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]]) {
    box(g, k.stone, 0.13, 3.45, 0.13, x, 0.24, z);
    put(g, new ConeGeometry(0.06, 0.22, 4), k.gold, x, 3.8, z, 0, Math.PI / 4, 0);
  }
  // Clock stage with four gilded faces.
  box(g, k.limestone, 1.2, 1.2, 1.2, 0, 3.54, 0);
  aroundSquare(0.6, (x, z, ry) => {
    const face = new Group();
    put(face, new CircleGeometry(0.38, 40), k.ivory, 0, 0, 0.012);
    put(face, new TorusGeometry(0.39, 0.032, 8, 40), k.gold, 0, 0, 0.02);
    for (let h = 0; h < 12; h++) {
      const a = (h / 12) * Math.PI * 2;
      box(face, k.dark, 0.02, 0.06, 0.01, Math.sin(a) * 0.31, Math.cos(a) * 0.31 - 0.03, 0.02).rotation.z = -a;
    }
    box(face, k.dark, 0.022, 0.24, 0.012, 0.05, -0.02, 0.03).rotation.z = -0.5;
    box(face, k.dark, 0.022, 0.18, 0.012, -0.04, -0.01, 0.034).rotation.z = 0.9;
    box(face, k.gold, 0.96, 0.05, 0.03, 0, 0.44, 0.01);
    box(face, k.gold, 0.96, 0.05, 0.03, 0, -0.49, 0.01);
    face.position.set(x, 4.14, z);
    face.rotation.y = ry;
    g.add(face);
  });
  // Belfry with tall openings, then the slate spire.
  box(g, k.limestone, 1.04, 0.72, 1.04, 0, 4.74, 0);
  aroundSquare(0.525, (x, z, ry) => {
    for (const off of [-0.27, 0, 0.27]) {
      decal(g, pointedArch(0.13, 0.36, 0.5), k.dark, x + Math.cos(ry) * off, 4.86, z - Math.sin(ry) * off, ry);
    }
  });
  box(g, k.gold, 1.12, 0.05, 1.12, 0, 5.46, 0);
  put(g, new ConeGeometry(0.76, 1.25, 4), k.slate, 0, 5.51 + 0.625, 0, 0, Math.PI / 4, 0);
  for (const [x, z] of [[-0.44, -0.44], [0.44, -0.44], [0.44, 0.44], [-0.44, 0.44]]) {
    put(g, new ConeGeometry(0.07, 0.42, 4), k.gold, x, 5.72, z, 0, Math.PI / 4, 0);
  }
  box(g, k.gold, 0.22, 0.32, 0.22, 0, 6.38, 0);
  put(g, new ConeGeometry(0.11, 0.62, 4), k.gold, 0, 6.7 + 0.31, 0, 0, Math.PI / 4, 0);
  return g;
}

function colosseum(k) {
  const g = new Group();
  const RX = 1.6;
  const RZ = 1.3;
  const N = 128;
  // Outer wall height: intact on one side, ruined steps on the other.
  const wallH = (a) => {
    const d = Math.abs(((a + Math.PI) % (Math.PI * 2)) - Math.PI);
    if (d < 1.9) return 1.0;
    if (d < 2.05) return 0.86;
    if (d < 2.2) return 0.74;
    return 0.62;
  };
  const shell = (rx, rz, h0, inset, mat, archCount) => {
    const pos = [];
    const uv = [];
    for (let i = 0; i < N; i++) {
      const a0 = (i / N) * Math.PI * 2;
      const a1 = ((i + 1) / N) * Math.PI * 2;
      const h = Math.min(wallH((a0 + a1) / 2), h0);
      const p0 = [Math.sin(a0) * (rx - inset), Math.cos(a0) * (rz - inset)];
      const p1 = [Math.sin(a1) * (rx - inset), Math.cos(a1) * (rz - inset)];
      const u0 = (i / N) * archCount;
      const u1 = ((i + 1) / N) * archCount;
      pos.push(p0[0], 0, p0[1], p1[0], 0, p1[1], p1[0], h, p1[1], p0[0], 0, p0[1], p1[0], h, p1[1], p0[0], h, p0[1]);
      uv.push(u0, 0, u1, 0, u1, h, u0, 0, u1, h, u0, h);
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new Float32BufferAttribute(uv, 2));
    geo.computeVertexNormals();
    put(g, geo, mat);
  };
  shell(RX, RZ, 1.0, 0, k.arcade, 64);
  shell(RX, RZ, 1.0, 0.13, k.arcade, 64);
  // Cornices along the wall top and tiers.
  for (const [y, hMax] of [[0.25, 1], [0.5, 1], [0.75, 1]]) {
    const ring = new TorusGeometry(1, 0.012, 4, 96);
    ring.rotateX(Math.PI / 2);
    ring.scale(RX + 0.005, 1, RZ + 0.005);
    put(g, ring, k.stone, 0, y * hMax, 0);
  }
  // Seating bowl stepping down to the arena.
  const seats = [];
  for (let i = 0; i <= 6; i++) seats.push([1.45 - i * 0.13, 0.82 - i * 0.12], [1.45 - (i + 1) * 0.13, 0.82 - i * 0.12]);
  seats.reverse();
  const bowl = lathe([[0.55, 0.05], ...seats.filter(([r]) => r > 0.56)], 96);
  bowl.scale(1, 1, RZ / RX);
  put(g, bowl, k.stone);
  const arena = new CircleGeometry(0.62, 64);
  arena.rotateX(-Math.PI / 2);
  arena.scale(1, 1, RZ / RX);
  put(g, arena, k.sand, 0, 0.06, 0);
  const base = new CylinderGeometry(1, 1, 0.05, 96);
  base.scale(RX + 0.08, 1, RZ + 0.08);
  put(g, base, k.stoneDark, 0, 0.025, 0);
  return g;
}

function parthenon(k) {
  const g = new Group();
  const L = 2.6;
  const W = 1.2;
  box(g, k.marbleShade, L + 0.3, 0.07, W + 0.3, 0, 0, 0);
  box(g, k.marble, L + 0.2, 0.07, W + 0.2, 0, 0.07, 0);
  box(g, k.marble, L + 0.1, 0.07, W + 0.1, 0, 0.14, 0);
  const y0 = 0.21;
  const colH = 0.92;
  box(g, k.marbleShade, L - 0.46, colH, W - 0.42, 0, y0, 0);
  const column = (x, z) => {
    cyl(g, k.marble, 0.042, 0.054, colH - 0.05, x, y0, z, 14);
    box(g, k.marble, 0.12, 0.05, 0.12, x, y0 + colH - 0.05, z);
  };
  for (let i = 0; i < 8; i++) {
    const z = -W / 2 + 0.06 + (i * (W - 0.12)) / 7;
    column(-L / 2 + 0.06, z);
    column(L / 2 - 0.06, z);
  }
  for (let i = 1; i < 16; i++) {
    const x = -L / 2 + 0.06 + (i * (L - 0.12)) / 16;
    column(x, -W / 2 + 0.06);
    column(x, W / 2 - 0.06);
  }
  const top = y0 + colH;
  box(g, k.marble, L + 0.04, 0.1, W + 0.04, 0, top, 0);
  box(g, k.gold, L + 0.06, 0.035, W + 0.06, 0, top + 0.1, 0);
  box(g, k.marble, L + 0.08, 0.06, W + 0.08, 0, top + 0.135, 0);
  // Pediment and roof: a triangular prism along the length.
  const tri = new Shape([new Vector2(-(W + 0.1) / 2, 0), new Vector2((W + 0.1) / 2, 0), new Vector2(0, 0.24)]);
  const roof = prism(tri, L + 0.1);
  roof.rotateY(Math.PI / 2);
  put(g, roof, k.marble, 0, top + 0.195, 0);
  for (const s of [-1, 1]) put(g, new SphereGeometry(0.03, 10, 8), k.gold, s * (L / 2 + 0.05), top + 0.44, 0);
  return g;
}

function fuji(k) {
  const g = new Group();
  const profile = resample([[2.0, 0], [1.55, 0.14], [1.15, 0.36], [0.85, 0.62], [0.6, 0.92], [0.4, 1.2], [0.26, 1.4], [0.19, 1.47], [0.12, 1.45]], 48);
  profile.push([0.0, 1.42]);
  const m = lathe(profile, 120);
  displaceRadial(m, (th, y) => (y > 1.44 ? 1 : 1 + (0.035 * Math.sin(th * 9) + 0.02 * Math.sin(th * 17 + 1.3)) * (1 - y / 1.5)));
  const rock = new Color('#4c5674');
  const snow = new Color('#eef2f8');
  const forest = new Color('#2d3b33');
  paint(m, (x, y, z, c) => {
    const th = Math.atan2(x, z);
    const line = 0.98 + 0.07 * Math.sin(th * 5) + 0.05 * Math.sin(th * 11 + 2);
    const streak = Math.max(0, Math.sin(th * 9)) * 0.22;
    if (y > line - streak * (y > 0.65 ? 1 : 0)) c.copy(snow);
    else if (y < 0.18) c.copy(forest).lerp(rock, y / 0.18);
    else c.copy(rock);
  });
  put(g, m, k.ground);
  // Torii gate in front of the mountain.
  const torii = new Group();
  for (const x of [-0.22, 0.22]) cyl(torii, k.red, 0.028, 0.034, 0.52, x, 0, 0, 12);
  box(torii, k.red, 0.56, 0.035, 0.04, 0, 0.37, 0);
  box(torii, k.red, 0.66, 0.045, 0.07, 0, 0.47, 0);
  box(torii, k.black, 0.74, 0.03, 0.09, 0, 0.515, 0);
  box(torii, k.red, 0.04, 0.1, 0.035, 0, 0.405, 0);
  torii.position.set(0, 0, 1.72);
  torii.scale.setScalar(1.2);
  g.add(torii);
  return g;
}

function greatwall(k) {
  const g = new Group();
  const hills = (x, z) =>
    0.78 * Math.exp(-((x - 0.1) ** 2 + (z - 0.1) ** 2) / 0.5) +
    0.58 * Math.exp(-((x + 1.15) ** 2 + (z - 0.45) ** 2) / 0.3) +
    0.66 * Math.exp(-((x - 1.15) ** 2 + (z + 0.2) ** 2) / 0.28) +
    0.3 * Math.exp(-((x + 0.3) ** 2 + (z + 1.1) ** 2) / 0.4);
  const R = 2.0;
  const fade = (x, z) => Math.max(0, 1 - (Math.hypot(x, z) / R) ** 4);
  const h = (x, z) => hills(x, z) * fade(x, z);
  const land = terrain(R, 36, 96, h);
  const green = new Color('#4f6a3b');
  const pale = new Color('#7d8f57');
  const earth = new Color('#7c6a4c');
  paint(land, (x, y, z, c) => {
    const e = 0.0015;
    const slope = Math.hypot(h(x + e, z) - h(x - e, z), h(x, z + e) - h(x, z - e)) / (2 * e);
    c.copy(green).lerp(pale, Math.min(1, y * 1.2)).lerp(earth, Math.min(1, Math.max(0, slope - 0.9) * 0.8));
  });
  put(g, land, k.ground);
  const path = [[-1.75, 0.55], [-1.2, 0.42], [-0.65, -0.05], [-0.05, 0.12], [0.55, -0.12], [1.12, -0.18], [1.7, 0.3]];
  const pts = [];
  for (let i = 0; i < path.length - 1; i++) {
    for (let s = 0; s < 14; s++) {
      const t = s / 14;
      const p0 = path[Math.max(0, i - 1)];
      const p1 = path[i];
      const p2 = path[i + 1];
      const p3 = path[Math.min(path.length - 1, i + 2)];
      const cr = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
      const x = cr(p0[0], p1[0], p2[0], p3[0]);
      const z = cr(p0[1], p1[1], p2[1], p3[1]);
      pts.push(new Vector3(x, h(x, z), z));
    }
  }
  pts.push(new Vector3(path[path.length - 1][0], h(...path[path.length - 1]), path[path.length - 1][1]));
  const towers = new Set([14, 42, 70]);
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const len = a.distanceTo(b) + 0.01;
    const yaw = Math.atan2(b.x - a.x, b.z - a.z);
    const pitch = Math.atan2(b.y - a.y, Math.hypot(b.x - a.x, b.z - a.z));
    const seg = box(g, k.stone, 0.15, 0.15, len, 0, 0, 0);
    seg.position.set(mid.x, mid.y + 0.04, mid.z);
    seg.rotation.set(-pitch, yaw, 0, 'YXZ');
    if (i % 2 === 0) {
      for (const side of [-1, 1]) {
        const c = box(g, k.stone, 0.03, 0.035, 0.035, 0, 0, 0);
        c.position.set(mid.x + Math.cos(yaw) * 0.06 * side, mid.y + 0.13, mid.z - Math.sin(yaw) * 0.06 * side);
        c.rotation.set(-pitch, yaw, 0, 'YXZ');
      }
    }
    if (towers.has(i)) {
      const t = box(g, k.stoneDark, 0.26, 0.32, 0.26, a.x, a.y - 0.02, a.z, yaw);
      t.rotation.y = yaw;
      for (const [dx, dz] of [[-0.11, -0.11], [0.11, -0.11], [0.11, 0.11], [-0.11, 0.11], [0, 0.11], [0, -0.11], [0.11, 0], [-0.11, 0]]) {
        const c = box(g, k.stoneDark, 0.045, 0.045, 0.045, 0, 0, 0);
        c.position.set(a.x + dx * Math.cos(yaw) + dz * Math.sin(yaw), a.y + 0.32, a.z - dx * Math.sin(yaw) + dz * Math.cos(yaw));
        c.rotation.y = yaw;
      }
    }
  }
  return g;
}

function tajmahal(k) {
  const g = new Group();
  box(g, k.marbleShade, 2.7, 0.06, 2.7, 0, 0, 0);
  box(g, k.marble, 2.6, 0.14, 2.6, 0, 0.06, 0);
  const base = 0.2;
  // Chamfered-square mausoleum.
  const s = 0.68;
  const c = 0.2;
  const plan = new Shape([
    new Vector2(-s + c, -s), new Vector2(s - c, -s), new Vector2(s, -s + c), new Vector2(s, s - c),
    new Vector2(s - c, s), new Vector2(-s + c, s), new Vector2(-s, s - c), new Vector2(-s, -s + c),
  ]);
  const body = new ExtrudeGeometry(plan, { depth: 0.9, bevelEnabled: false });
  body.rotateX(-Math.PI / 2);
  put(g, body, k.marble, 0, base, 0);
  // Great iwan on each face, smaller arches beside it and on the chamfers.
  aroundSquare(s + 0.004, (x, z, ry) => {
    const fx = Math.cos(ry);
    const fz = -Math.sin(ry);
    box(g, k.marble, 0.6, 0.86, 0.04, x, base, z, ry);
    decal(g, pointedArch(0.36, 0.42, 0.55), k.marbleShade, x + Math.sin(ry) * 0.022, base + 0.1, z + Math.cos(ry) * 0.022, ry);
    decal(g, pointedArch(0.26, 0.36, 0.5), k.glass, x + Math.sin(ry) * 0.024, base + 0.12, z + Math.cos(ry) * 0.024, ry);
    for (const off of [-0.4, 0.4]) {
      for (const yy of [0.12, 0.5]) {
        decal(g, pointedArch(0.14, 0.18, 0.5), k.marbleShade, x + fx * off + Math.sin(ry) * 0.003, base + yy, z + fz * off + Math.cos(ry) * 0.003, ry);
      }
    }
  });
  // Drum, onion dome and gilded finial.
  cyl(g, k.marble, 0.43, 0.45, 0.24, 0, base + 0.9, 0, 48);
  const dome = lathe(resample([[0.45, 0], [0.53, 0.14], [0.56, 0.3], [0.5, 0.48], [0.36, 0.64], [0.18, 0.78], [0.06, 0.88], [0.0, 0.92]], 24), 64);
  put(g, dome, k.marble, 0, base + 1.14, 0);
  const fin = base + 2.05;
  cyl(g, k.gold, 0.012, 0.02, 0.2, 0, fin - 0.02, 0, 8);
  put(g, new SphereGeometry(0.03, 12, 10), k.gold, 0, fin + 0.06, 0);
  put(g, new SphereGeometry(0.022, 12, 10), k.gold, 0, fin + 0.12, 0);
  put(g, new TorusGeometry(0.035, 0.008, 6, 16, Math.PI * 1.4), k.gold, 0, fin + 0.22, 0, 0, 0, -Math.PI * 0.2);
  // Chhatris on the roof corners.
  for (const [x, z] of [[-0.45, -0.45], [0.45, -0.45], [0.45, 0.45], [-0.45, 0.45]]) {
    cyl(g, k.marble, 0.13, 0.13, 0.04, x, base + 0.9, z, 16);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      cyl(g, k.marble, 0.012, 0.012, 0.14, x + Math.sin(a) * 0.1, base + 0.94, z + Math.cos(a) * 0.1, 6);
    }
    const d = lathe(resample([[0.13, 0], [0.13, 0.04], [0.1, 0.11], [0.04, 0.16], [0, 0.18]], 10), 20);
    put(g, d, k.marble, x, base + 1.08, z);
    cyl(g, k.gold, 0.005, 0.008, 0.06, x, base + 1.26, z, 6);
  }
  // Four minarets.
  for (const [x, z] of [[-1.16, -1.16], [1.16, -1.16], [1.16, 1.16], [-1.16, 1.16]]) {
    cyl(g, k.marble, 0.05, 0.065, 1.55, x, base, z, 16);
    for (const y of [0.52, 1.02, 1.5]) cyl(g, k.marble, 0.095, 0.08, 0.04, x, base + y, z, 16);
    cyl(g, k.marble, 0.07, 0.07, 0.03, x, base + 1.62, z, 12);
    put(g, new SphereGeometry(0.07, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), k.marble, x, base + 1.65, z);
    cyl(g, k.gold, 0.004, 0.008, 0.07, x, base + 1.72, z, 6);
  }
  return g;
}

function burj(k) {
  const g = new Group();
  const H = 3.6;
  cyl(g, k.tower, 0.17, 0.2, H, 0, 0, 0, 6);
  // Three wings stepping back in a spiral.
  const steps = [[0, 0.95, 0.66], [0.95, 1.6, 0.54], [1.6, 2.2, 0.44], [2.2, 2.75, 0.34], [2.75, 3.2, 0.25]];
  for (let w = 0; w < 3; w++) {
    const a = (w * 120 + 90) * DEG;
    const lift = w * 0.18;
    steps.forEach(([y0, y1, len], i) => {
      const ya = i === 0 ? 0 : y0 + lift;
      const yb = Math.min(y1 + lift, H);
      if (yb <= ya) return;
      const L = len;
      const m = box(g, k.tower, 0.26, yb - ya, L, 0, 0, 0, 0, 6);
      m.position.set(Math.cos(a) * (L / 2), ya + (yb - ya) / 2, Math.sin(a) * (L / 2));
      m.rotation.y = -a + Math.PI / 2;
      cyl(g, k.tower, 0.13, 0.13, yb - ya, Math.cos(a) * L, ya, Math.sin(a) * L, 16);
    });
  }
  // Spire.
  cyl(g, k.steel, 0.02, 0.12, 1.5, 0, H, 0, 12);
  cyl(g, k.steel, 0.006, 0.02, 0.5, 0, H + 1.5, 0, 8);
  cyl(g, k.goldGlow, 0.012, 0.012, 0.03, 0, H + 1.95, 0, 8);
  // Podium.
  const pod = new CylinderGeometry(0.95, 1.0, 0.1, 6);
  put(g, pod, k.slate, 0, 0.05, 0, 0, Math.PI / 6, 0);
  return g;
}

function pyramids(k) {
  const g = new Group();
  const stepped = (cx, cz, side, h, steps, mat, cap) => {
    for (let i = 0; i < steps; i++) {
      const s = side * (1 - i / steps);
      box(g, mat, s, h / steps + 0.002, s, cx, (i * h) / steps, cz);
    }
    if (cap) put(g, new ConeGeometry((side / steps) * 0.75, (h / steps) * 1.4, 4), cap, cx, h + (h / steps) * 0.7 - 0.01, cz, 0, Math.PI / 4, 0);
  };
  stepped(-0.62, 0.42, 1.55, 1.0, 16, k.sand, k.gold);
  // Khafre keeps its smooth casing near the top.
  const kh = new ConeGeometry(1.4 / Math.SQRT2, 0.94, 4, 1);
  put(g, kh, k.sandDark, 0.62, 0.47, -0.4, 0, Math.PI / 4, 0);
  const cap = new ConeGeometry((1.4 / Math.SQRT2) * 0.22, 0.94 * 0.22, 4, 1);
  put(g, cap, k.limestone, 0.62, 0.94 - 0.103 + 0.002, -0.4, 0, Math.PI / 4, 0);
  stepped(1.5, -1.05, 0.72, 0.46, 10, k.sand, null);
  // The Sphinx keeps watch in front.
  const sx = -0.1;
  const sz = 1.38;
  box(g, k.sandDark, 0.12, 0.09, 0.34, sx, 0, sz - 0.02);
  box(g, k.sandDark, 0.13, 0.06, 0.14, sx, 0, sz + 0.2);
  box(g, k.sandDark, 0.09, 0.1, 0.09, sx, 0.08, sz + 0.13);
  box(g, k.sand, 0.13, 0.05, 0.06, sx, 0.13, sz + 0.11);
  return g;
}

function koutoubia(k) {
  const g = new Group();
  box(g, k.terracottaDark, 1.12, 0.12, 1.12, 0, 0, 0);
  box(g, k.terracotta, 1.0, 3.2, 1.0, 0, 0.12, 0);
  // Arched panels: different on every level, as on the real minaret.
  aroundSquare(0.505, (x, z, ry) => {
    const sx = Math.cos(ry);
    const sz = -Math.sin(ry);
    decal(g, pointedArch(0.12, 0.26, 0.5), k.terracottaDark, x, 0.75, z, ry);
    for (const off of [-0.16, 0.16]) decal(g, pointedArch(0.11, 0.24, 0.5), k.terracottaDark, x + sx * off, 1.45, z + sz * off, ry);
    decal(g, roundArch(0.2, 0.2), k.terracottaDark, x, 1.5, z, ry);
    box(g, k.terracottaDark, 0.7, 0.62, 0.02, x, 2.05, z, ry);
    for (const off of [-0.22, 0, 0.22]) decal(g, pointedArch(0.1, 0.3, 0.5), k.dark, x + sx * off + Math.sin(ry) * 0.012, 2.12, z + sz * off + Math.cos(ry) * 0.012, ry);
  });
  box(g, k.teal, 1.03, 0.16, 1.03, 0, 2.86, 0);
  box(g, k.terracotta, 1.06, 0.06, 1.06, 0, 3.02, 0);
  box(g, k.terracotta, 1.0, 0.24, 1.0, 0, 3.08, 0);
  const merlons = (half, y, size) => {
    const n = Math.round((half * 2) / (size * 1.8));
    for (let i = 0; i <= n; i++) {
      const t = -half + (i * half * 2) / n;
      for (const [x, z] of [[t, -half], [t, half], [-half, t], [half, t]]) {
        box(g, k.terracotta, size, size * 0.9, size, x, y, z);
        box(g, k.terracotta, size * 0.5, size * 0.45, size * 0.5, x, y + size * 0.9, z);
      }
    }
  };
  merlons(0.47, 3.32, 0.09);
  // Lantern, dome and the three golden spheres.
  box(g, k.terracotta, 0.42, 0.62, 0.42, 0, 3.32, 0);
  aroundSquare(0.212, (x, z, ry) => decal(g, pointedArch(0.12, 0.2, 0.5), k.dark, x, 3.44, z, ry));
  box(g, k.teal, 0.44, 0.06, 0.44, 0, 3.86, 0);
  merlons(0.2, 3.94, 0.05);
  put(g, new SphereGeometry(0.17, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), k.terracotta, 0, 3.94, 0);
  cyl(g, k.gold, 0.008, 0.008, 0.5, 0, 4.06, 0, 6);
  [[0.075, 4.22], [0.06, 4.36], [0.045, 4.47]].forEach(([r, y]) => put(g, new SphereGeometry(r, 16, 12), k.gold, 0, y, 0));
  return g;
}

function liberty(k) {
  const g = new Group();
  // Star-fort base and pedestal.
  const star = new Shape();
  for (let i = 0; i < 22; i++) {
    const r = i % 2 ? 0.62 : 0.86;
    const a = (i / 22) * Math.PI * 2;
    const v = [Math.cos(a) * r, Math.sin(a) * r];
    if (i) star.lineTo(...v);
    else star.moveTo(...v);
  }
  const fort = new ExtrudeGeometry(star, { depth: 0.18, bevelEnabled: false });
  fort.rotateX(-Math.PI / 2);
  put(g, fort, k.stoneDark);
  box(g, k.stone, 0.8, 0.12, 0.8, 0, 0.18, 0);
  box(g, k.limestone, 0.62, 0.78, 0.62, 0, 0.3, 0);
  aroundSquare(0.315, (x, z, ry) => decal(g, roundArch(0.16, 0.22), k.stoneDark, x, 0.6, z, ry));
  box(g, k.stone, 0.7, 0.06, 0.7, 0, 1.08, 0);
  box(g, k.limestone, 0.52, 0.14, 0.52, 0, 1.14, 0);
  const y0 = 1.28;
  // Robe with folds.
  const robe = lathe(resample([[0.2, 0], [0.215, 0.12], [0.2, 0.45], [0.17, 0.82], [0.145, 1.0], [0.11, 1.1], [0.07, 1.15], [0.0, 1.17]], 30), 40);
  displaceRadial(robe, (th, y) => 1 + (y < 0.95 ? 0.06 * Math.sin(th * 11 + y * 4) * (1 - y) : 0));
  put(g, robe, k.patina, 0, y0, 0);
  // Head and crown.
  put(g, new SphereGeometry(0.072, 20, 16), k.patina, 0, y0 + 1.24, 0.005);
  put(g, new TorusGeometry(0.072, 0.014, 6, 24), k.patina, 0, y0 + 1.27, 0, Math.PI / 2 - 0.15, 0, 0);
  for (let i = 0; i < 7; i++) {
    const a = (-60 + i * 20) * DEG;
    const base = new Vector3(Math.sin(a) * 0.07, y0 + 1.28, Math.cos(a) * 0.04);
    strut(g, k.patina, base, base.clone().add(new Vector3(Math.sin(a) * 0.12, 0.07, Math.cos(a) * 0.06)), 0.012, 4, 0.001);
  }
  // Raised right arm with the golden torch.
  const shoulder = new Vector3(0.11, y0 + 1.08, 0);
  const hand = new Vector3(0.17, y0 + 1.6, 0.02);
  strut(g, k.patina, shoulder, hand, 0.036, 10, 0.03);
  cyl(g, k.patina, 0.03, 0.02, 0.1, hand.x, hand.y - 0.02, hand.z, 10);
  cyl(g, k.gold, 0.05, 0.022, 0.06, hand.x, hand.y + 0.08, hand.z, 14);
  const flame = new ConeGeometry(0.035, 0.12, 12);
  put(g, flame, k.goldGlow, hand.x, hand.y + 0.2, hand.z);
  // Left arm holding the tablet.
  strut(g, k.patina, new Vector3(-0.11, y0 + 1.05, 0), new Vector3(-0.15, y0 + 0.82, 0.07), 0.032, 8);
  const tab = box(g, k.patina, 0.1, 0.2, 0.035, -0.15, y0 + 0.72, 0.1);
  tab.rotation.set(0.15, 0.3, 0.25);
  return g;
}

function chichen(k) {
  const g = new Group();
  const n = 9;
  const H = 0.11;
  for (let i = 0; i < n; i++) {
    const s = 1.9 - i * 0.16;
    box(g, i % 2 ? k.stone : k.limestone, s, H, s, 0, i * H, 0);
    box(g, k.stoneDark, s + 0.012, 0.018, s + 0.012, 0, i * H + H * 0.5, 0);
  }
  const top = n * H;
  // Stairways on all four sides with serpent balustrades.
  aroundSquare(0, (x0, z0, ry) => {
    const stair = new Group();
    const run = (1.9 - 0.62) / 2;
    const steps = 18;
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      box(stair, k.limestone, 0.36, top / steps + 0.003, run / steps + 0.004, 0, t * top, 0.95 - 0.005 - t * run - run / steps / 2 + 0.02);
    }
    for (const sx of [-0.21, 0.21]) {
      strut(stair, k.stoneDark, new Vector3(sx, 0.04, 0.99), new Vector3(sx, top + 0.02, 0.31), 0.025, 4);
      box(stair, k.stoneDark, 0.07, 0.07, 0.1, sx, 0, 1.02);
    }
    stair.rotation.y = ry;
    g.add(stair);
  });
  box(g, k.limestone, 0.56, 0.06, 0.56, 0, top, 0);
  box(g, k.stone, 0.48, 0.3, 0.48, 0, top + 0.06, 0);
  box(g, k.limestone, 0.52, 0.07, 0.52, 0, top + 0.36, 0);
  aroundSquare(0.242, (x, z, ry) => {
    for (const off of [-0.11, 0, 0.11]) box(g, k.dark, 0.06, 0.18, 0.01, x + Math.cos(ry) * off, top + 0.06, z - Math.sin(ry) * off, ry);
  });
  return g;
}

function redeemer(k) {
  const g = new Group();
  const prof = resample([[1.6, 0], [1.3, 0.12], [0.95, 0.38], [0.7, 0.72], [0.5, 1.02], [0.33, 1.24], [0.2, 1.36], [0.12, 1.4], [0, 1.41]], 36);
  const m = lathe(prof, 96);
  const rnd = seeded(5);
  const bumps = Array.from({ length: 6 }, () => [rnd() * 6, 2 + Math.floor(rnd() * 5)]);
  displaceRadial(m, (th, y) => {
    let d = 0;
    for (const [ph, f] of bumps) d += Math.sin(th * f + ph + y * 3) * 0.035;
    return 1 + d * (1 - y / 1.5) + (Math.abs(Math.sin(th)) > 0.92 && y > 0.6 ? -0.05 : 0);
  });
  const forest = new Color('#2b4632');
  const rock = new Color('#6c6b68');
  const lit = new Color('#3e5c3f');
  paint(m, (x, y, z, c) => {
    const th = Math.atan2(x, z);
    const cliff = y > 0.75 + 0.18 * Math.sin(th * 3 + 1) || (y > 0.4 && Math.sin(th * 2 + 0.5) > 0.6);
    c.copy(cliff ? rock : y < 0.5 ? forest : lit);
  });
  put(g, m, k.ground);
  const y0 = 1.4;
  box(g, k.soap, 0.32, 0.05, 0.32, 0, y0, 0);
  box(g, k.soap, 0.12, 0.2, 0.12, 0, y0 + 0.05, 0);
  const robe = lathe(resample([[0.07, 0], [0.075, 0.1], [0.065, 0.4], [0.055, 0.52], [0.04, 0.56], [0.0, 0.57]], 18), 28);
  put(g, robe, k.soap, 0, y0 + 0.25, 0);
  box(g, k.soap, 0.62, 0.045, 0.05, 0, y0 + 0.73, 0);
  for (const s of [-1, 1]) box(g, k.soap, 0.05, 0.07, 0.06, s * 0.31, y0 + 0.71, 0);
  put(g, new SphereGeometry(0.035, 16, 12), k.soap, 0, y0 + 0.86, 0);
  return g;
}

function machu(k) {
  const g = new Group();
  const greens = [new Color('#3d5a35'), new Color('#4f7243'), new Color('#61834f')];
  const rockC = new Color('#7b766c');
  // Huayna Picchu rising behind the citadel.
  const peak = lathe(resample([[0.9, 0], [0.64, 0.32], [0.44, 0.78], [0.31, 1.18], [0.2, 1.52], [0.1, 1.78], [0.03, 1.88], [0, 1.9]], 36), 72);
  const rnd = seeded(9);
  const lumps = Array.from({ length: 6 }, () => [rnd() * 6, 2 + Math.floor(rnd() * 5)]);
  displaceRadial(peak, (th, y) => 1 + lumps.reduce((s, [ph, f]) => s + Math.sin(th * f + ph + y * 1.5) * 0.06, 0) * (1 - y / 2.2));
  paint(peak, (x, y, z, c) => {
    const th = Math.atan2(x, z);
    const cliff = Math.sin(th * 5 + y * 3) > 0.62 || (y > 1.35 && Math.sin(th * 3) > 0.1);
    c.copy(cliff ? rockC : greens[0]).lerp(greens[1], cliff ? 0 : Math.max(0, 0.5 - y * 0.3));
  });
  put(g, peak, k.ground, 0.2, 0, -0.85);
  // Ridge with stepped agricultural terraces.
  const ridge = lathe(resample([[1.55, 0], [1.4, 0.12], [1.15, 0.3], [0.8, 0.42], [0.3, 0.47], [0, 0.48]], 20), 64);
  ridge.scale(1, 1, 0.62);
  paint(ridge, (x, y, z, c) => c.copy(greens[1]).lerp(greens[2], y));
  put(g, ridge, k.ground, 0, 0, 0.25);
  for (let i = 0; i < 6; i++) {
    const r = 1.42 - i * 0.1;
    const band = new CylinderGeometry(r, r + 0.02, 0.05, 48, 1, false, -0.95, 1.9);
    band.scale(1, 1, 0.62);
    const m = put(g, band, i % 2 ? k.ground : k.ground, 0, i * 0.07 + 0.02, 0.25);
    paint(m.geometry, (x, y, z, c) => c.copy(y > 0.02 ? greens[2] : rockC));
  }
  // Stone houses with thatched roofs on the plateau.
  const rnd2 = seeded(3);
  for (let i = 0; i < 14; i++) {
    const x = -0.75 + (i % 7) * 0.24 + rnd2() * 0.05;
    const z = 0.1 + Math.floor(i / 7) * 0.24 + rnd2() * 0.05;
    const ry = rnd2() * 0.4;
    box(g, k.stone, 0.12, 0.07, 0.09, x, 0.47, z, ry);
    if (i % 3 !== 1) {
      const roof = prism(new Shape([new Vector2(-0.065, 0), new Vector2(0.065, 0), new Vector2(0, 0.06)]), 0.1);
      put(g, roof, k.thatch, x, 0.54, z, 0, ry + Math.PI / 2, 0);
    }
  }
  return g;
}

function opera(k) {
  const g = new Group();
  // Podium and the broad stair.
  box(g, k.stoneDark, 2.3, 0.08, 1.2, 0, 0, 0);
  box(g, k.limestone, 2.1, 0.16, 1.0, 0, 0.08, 0);
  for (let i = 0; i < 6; i++) box(g, k.limestone, 0.5 - i * 0.04, 0.03, 0.4, 1.25 - i * 0.04, 0.08 + i * 0.027, 0);
  // Shells: half-domes on sphere sections, tilted like sails; glass fills their open faces.
  const sail = (x, z, size, lean, dir, stretch = 1) => {
    const shell = new Group();
    // Sphere section reshaped into a pointed sail: narrower and shallower towards its tip.
    const T = (x, y, z) => [x * (1 - 0.32 * y * y), 1.3 * Math.pow(y, 0.75), z * (1 - 0.3 * y)];
    const dome = new SphereGeometry(1, 28, 16, 0, Math.PI, 0, Math.PI / 2);
    const p = dome.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const [x, y, z] = T(p.getX(i), Math.max(0, p.getY(i)), p.getZ(i));
      p.setXYZ(i, x, y, z);
    }
    dome.computeVertexNormals();
    put(shell, dome, k.tile);
    const half = new Shape();
    half.moveTo(-0.98, 0);
    for (let i = 0; i <= 24; i++) {
      const a = Math.PI - (i / 24) * Math.PI;
      const [x, y] = T(Math.cos(a) * 0.98, Math.sin(a) * 0.98, 0);
      half.lineTo(x, y);
    }
    half.lineTo(0.98, 0);
    put(shell, new ShapeGeometry(half, 1), k.glass, 0, 0, -0.02, 0, 0, 0).rotation.y = Math.PI;
    shell.scale.set(0.42 * size, 0.62 * size * stretch, 0.6 * size);
    shell.rotation.set(0, dir * Math.PI / 2, 0);
    shell.rotateX(-lean);
    shell.position.set(x, 0.24, z);
    g.add(shell);
  };
  sail(-0.55, -0.22, 1.0, 0.35, -1);
  sail(-0.15, -0.22, 0.84, 0.35, -1);
  sail(0.2, -0.22, 0.66, 0.35, -1);
  sail(0.62, -0.22, 0.44, 0.2, 1);
  sail(-0.5, 0.26, 0.82, 0.35, -1);
  sail(-0.15, 0.26, 0.68, 0.35, -1);
  sail(0.15, 0.26, 0.52, 0.35, -1);
  sail(0.5, 0.26, 0.36, 0.2, 1);
  return g;
}

function globe(k) {
  const g = new Group();
  const base = lathe(resample([[0.42, 0], [0.4, 0.04], [0.3, 0.07], [0.12, 0.1], [0.07, 0.16], [0.06, 0.4], [0.0, 0.42]], 20), 48);
  put(g, base, k.gold);
  const axis = new Group();
  axis.position.y = 1.15;
  axis.rotation.z = 23.4 * DEG;
  g.add(axis);
  const sphere = put(axis, new SphereGeometry(0.62, 64, 40), k.globeSkin);
  sphere.rotation.y = -0.6;
  put(axis, new TorusGeometry(0.7, 0.018, 8, 96, Math.PI * 1.25), k.gold, 0, 0, 0, 0, Math.PI / 2, -Math.PI * 0.625 + Math.PI / 2);
  cyl(axis, k.gold, 0.012, 0.012, 1.5, 0, -0.75, 0, 8);
  put(axis, new SphereGeometry(0.03, 12, 10), k.gold, 0, 0.76, 0);
  cyl(g, k.gold, 0.035, 0.05, 0.2, 0, 0.38, 0, 16);
  return g;
}

export const BUILDERS = { eiffel, bigben, colosseum, parthenon, fuji, greatwall, tajmahal, burj, pyramids, koutoubia, liberty, chichen, redeemer, machu, opera, globe };

/** Builds a landmark group (unbaked). Unknown names fall back to the globe. */
export function buildLandmark(name, kit) {
  return (BUILDERS[name] || BUILDERS.globe)(kit);
}
