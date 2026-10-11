import {
  AdditiveBlending,
  BackSide,
  BufferAttribute,
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  CylinderGeometry,
  DirectionalLight,
  Float32BufferAttribute,
  Group,
  HemisphereLight,
  LineBasicMaterial,
  LineSegments,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  Raycaster,
  RingGeometry,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  TubeGeometry,
  Vector2,
  Vector3,
} from 'three';
import { LAND } from './data/landmask.js';
import { buildAirliner } from './plane.js';
import {
  clamp,
  disposeTree,
  dragSpin,
  easeOutBack,
  easeOutCubic,
  glowTexture,
  makeRenderer,
  pixelRatio,
  reducedMotion,
  register,
  seeded,
  studioEnvironment,
  unregister,
  wake,
  watchVisibility,
} from './core.js';

const DEG = Math.PI / 180;
const UP = new Vector3(0, 1, 0);

export const latLngToVec = (lat, lng, r = 1) =>
  new Vector3(Math.cos(lat * DEG) * Math.sin(lng * DEG) * r, Math.sin(lat * DEG) * r, Math.cos(lat * DEG) * Math.cos(lng * DEG) * r);

let landBits = null;
function isLand(lat, lng) {
  if (!landBits) {
    const bin = atob(LAND.b64);
    landBits = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) landBits[i] = bin.charCodeAt(i);
  }
  const r = clamp(Math.floor((90 - lat) / LAND.step), 0, LAND.rows - 1);
  const c = ((Math.floor((lng + 180) / LAND.step) % LAND.cols) + LAND.cols) % LAND.cols;
  const idx = r * LAND.cols + c;
  return (landBits[idx >> 3] >> (7 - (idx & 7))) & 1;
}

const COLORSPACE = '\n#include <colorspace_fragment>\n';

function landDots(step) {
  const rnd = seeded(42);
  const pos = [];
  const rand = [];
  let row = 0;
  for (let lat = -82; lat <= 84; lat += step, row++) {
    const n = Math.max(1, Math.round((360 / step) * Math.cos(lat * DEG)));
    for (let i = 0; i < n; i++) {
      const lng = -180 + ((i + (row % 2) * 0.5) * 360) / n;
      if (!isLand(lat, lng)) continue;
      const v = latLngToVec(lat, lng, 1.004);
      pos.push(v.x, v.y, v.z);
      rand.push(rnd());
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('aRand', new Float32BufferAttribute(rand, 1));
  return g;
}

function graticule() {
  const pts = [];
  const seg = 120;
  for (let lat = -60; lat <= 60; lat += 30) {
    for (let i = 0; i < seg; i++) {
      const a = latLngToVec(lat, (i / seg) * 360, 1.002);
      const b = latLngToVec(lat, ((i + 1) / seg) * 360, 1.002);
      pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
  }
  for (let lng = 0; lng < 360; lng += 30) {
    for (let i = 0; i < seg / 2; i++) {
      const a = latLngToVec(-90 + (i / (seg / 2)) * 180, lng, 1.002);
      const b = latLngToVec(-90 + ((i + 1) / (seg / 2)) * 180, lng, 1.002);
      pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pts, 3));
  return g;
}

function starfield(count = 1400) {
  const rnd = seeded(7);
  const pos = [];
  const size = [];
  const rand = [];
  for (let i = 0; i < count; i++) {
    const u = rnd() * 2 - 1;
    const th = rnd() * Math.PI * 2;
    const r = 40 + rnd() * 40;
    const s = Math.sqrt(1 - u * u);
    pos.push(Math.cos(th) * s * r, u * r, -Math.abs(Math.sin(th) * s * r) - 8);
    size.push(rnd() < 0.08 ? 2.4 : 0.8 + rnd() * 1.1);
    rand.push(rnd());
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('aSize', new Float32BufferAttribute(size, 1));
  g.setAttribute('aRand', new Float32BufferAttribute(rand, 1));
  return g;
}

function slerp(a, b, t) {
  const dot = clamp(a.dot(b), -1, 1);
  const om = Math.acos(dot);
  if (om < 1e-4) return a.clone();
  const s = Math.sin(om);
  return a.clone().multiplyScalar(Math.sin((1 - t) * om) / s).add(b.clone().multiplyScalar(Math.sin(t * om) / s));
}

export function createGlobe(host, opts = {}) {
  const reduced = opts.reduced ?? reducedMotion();
  const gold = new Color(opts.accent || '#c9a24b');
  const goldSoft = new Color(opts.accentSoft || '#e7cf96');
  const pins = (opts.pins || []).slice(0, 24);

  const canvas = document.createElement('canvas');
  canvas.className = 'flytz-globe3d';
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);
  const labelsEl = document.createElement('div');
  labelsEl.className = 'flytz-globe3d__labels';
  (opts.labelsParent || host).appendChild(labelsEl);

  const renderer = makeRenderer({ canvas, alpha: true });
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    opts.onContextLost?.();
  });
  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 400);
  camera.position.set(0, 0, 4);
  scene.environment = studioEnvironment(renderer);

  const sun = new DirectionalLight('#fff3dd', 2.4);
  sun.position.set(-3, 2.5, 3);
  scene.add(sun, new HemisphereLight('#9fb4ff', '#0a0d16', 0.8));

  const world = new Group();
  const globe = new Group();
  world.add(globe);
  scene.add(world);

  /* ---------- stars ---------- */
  const starMat = new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPixelRatio: { value: 1 } },
    vertexShader: `attribute float aSize; attribute float aRand; uniform float uTime; uniform float uPixelRatio; varying float vA;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * uPixelRatio * 1.6;
      vA = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * (0.6 + aRand * 1.8) + aRand * 40.0)); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
      float a = smoothstep(0.5, 0.0, d) * vA; gl_FragColor = vec4(vec3(0.92, 0.94, 1.0) * a, a); ${COLORSPACE} }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    toneMapped: false,
  });
  const stars = new Points(starfield(), starMat);
  scene.add(stars);

  /* ---------- ocean sphere ---------- */
  const sphereMat = new ShaderMaterial({
    uniforms: {
      uDeep: { value: new Color('#060a14') },
      uLit: { value: new Color('#1a2742') },
      uRim: { value: new Color('#2c4f9e') },
      uGold: { value: gold.clone() },
      uLightDir: { value: new Vector3(-0.55, 0.5, 0.67).normalize() },
      uReveal: { value: 1 },
    },
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uDeep; uniform vec3 uLit; uniform vec3 uRim; uniform vec3 uGold; uniform vec3 uLightDir; uniform float uReveal;
      varying vec3 vN; varying vec3 vV;
      void main(){ vec3 n = normalize(vN); float l = clamp(dot(n, uLightDir), 0.0, 1.0);
        vec3 col = mix(uDeep, uLit, pow(l, 1.5));
        float f = pow(1.0 - clamp(dot(n, vV), 0.0, 1.0), 3.2);
        col += uRim * f * 0.55 + uGold * f * f * 0.08;
        vec3 h = normalize(uLightDir + vV); col += vec3(1.0, 0.9, 0.75) * pow(clamp(dot(n, h), 0.0, 1.0), 220.0) * 0.05;
        gl_FragColor = vec4(col * uReveal, 1.0);
        #include <tonemapping_fragment>
        ${COLORSPACE} }`,
  });
  const sphere = new Mesh(new SphereGeometry(1, 96, 64), sphereMat);
  globe.add(sphere);

  /* ---------- graticule ---------- */
  const grid = new LineSegments(graticule(), new LineBasicMaterial({ color: '#c7d3f0', transparent: true, opacity: 0.06, depthWrite: false }));
  globe.add(grid);

  /* ---------- land dots ---------- */
  const dotMat = new ShaderMaterial({
    uniforms: {
      uColor: { value: goldSoft.clone() },
      uScale: { value: 400 },
      uSize: { value: 0.0105 },
      uTime: { value: 0 },
      uReveal: { value: reduced ? 1 : 0 },
    },
    vertexShader: `attribute float aRand; uniform float uScale; uniform float uSize; varying float vFacing; varying float vRand;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * normalize(position));
        vFacing = dot(n, normalize(-mv.xyz)); vRand = aRand;
        gl_PointSize = uSize * uScale / -mv.z * (0.8 + 0.4 * aRand); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uTime; uniform float uReveal; varying float vFacing; varying float vRand;
      void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
        float shape = smoothstep(0.5, 0.15, d);
        float face = smoothstep(0.02, 0.4, vFacing);
        float tw = 0.82 + 0.18 * sin(uTime * 1.6 + vRand * 50.0);
        float show = smoothstep(vRand, vRand + 0.08, uReveal * 1.1);
        float a = shape * face * (0.32 + 0.68 * vFacing) * show;
        gl_FragColor = vec4(uColor * tw * a, a); ${COLORSPACE} }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    toneMapped: false,
  });
  const dots = new Points(landDots(window.innerWidth < 750 ? 1.35 : 1.05), dotMat);
  globe.add(dots);

  /* ---------- atmosphere ---------- */
  const atmoMat = new ShaderMaterial({
    uniforms: { uColor: { value: new Color('#3b6cf5') }, uIntensity: { value: reduced ? 1 : 0 } },
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uIntensity; varying vec3 vN; varying vec3 vV;
      void main(){ float d = clamp(-dot(normalize(vN), vV), 0.0, 1.0);
        float i = pow(d, 2.4) * 1.6 * uIntensity;
        gl_FragColor = vec4(uColor * i, i); ${COLORSPACE} }`,
    side: BackSide,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    toneMapped: false,
  });
  const atmosphere = new Mesh(new SphereGeometry(1, 64, 48), atmoMat);
  atmosphere.scale.setScalar(1.2);
  world.add(atmosphere);

  /* ---------- city beacons ---------- */
  const glow = glowTexture();
  const beamGeo = new CylinderGeometry(0.0018, 0.0055, 1, 10, 1, true);
  beamGeo.translate(0, 0.5, 0);
  const beamMat = new ShaderMaterial({
    uniforms: { uColor: { value: goldSoft.clone() }, uAlpha: { value: 1 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 uColor; uniform float uAlpha; varying vec2 vUv;
      void main(){ float a = pow(1.0 - vUv.y, 1.6) * 0.85 * uAlpha; gl_FragColor = vec4(uColor * a, a); ${COLORSPACE} }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    toneMapped: false,
  });
  const ringGeo = new RingGeometry(0.82, 1, 48);
  const headGeo = new SphereGeometry(0.0105, 12, 10);
  const headMat = new MeshBasicMaterial({ color: goldSoft, toneMapped: false });
  const hitGeo = new SphereGeometry(0.05, 8, 6);
  const hitMat = new MeshBasicMaterial({ visible: false });
  const pinObjs = pins.map((pin, i) => {
    const pos = latLngToVec(pin.lat, pin.lng, 1.0);
    const normal = pos.clone().normalize();
    const g = new Group();
    g.position.copy(pos);
    g.quaternion.setFromUnitVectors(UP, normal);
    const beam = new Mesh(beamGeo, beamMat.clone());
    beam.scale.set(1, 0.07 + (i % 3) * 0.018, 1);
    const head = new Mesh(headGeo, headMat);
    const ringMat = new MeshBasicMaterial({ color: gold, transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending, toneMapped: false });
    const ring = new Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.002;
    const halo = new Points(
      new BufferGeometry().setAttribute('position', new Float32BufferAttribute([0, 0, 0], 3)),
      new ShaderMaterial({
        uniforms: { uMap: { value: glow }, uColor: { value: goldSoft.clone() }, uSize: { value: 26 }, uPixelRatio: { value: 1 }, uAlpha: { value: 1 } },
        vertexShader: `uniform float uSize; uniform float uPixelRatio; void main(){ gl_PointSize = uSize * uPixelRatio; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: `uniform sampler2D uMap; uniform vec3 uColor; uniform float uAlpha; void main(){ float a = texture2D(uMap, gl_PointCoord).a * 0.55 * uAlpha; gl_FragColor = vec4(uColor * a, a); ${COLORSPACE} }`,
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        toneMapped: false,
      })
    );
    const hit = new Mesh(hitGeo, hitMat);
    hit.userData.pin = pin;
    g.add(beam, head, ring, halo, hit);
    g.scale.setScalar(reduced ? 1 : 0.0001);
    globe.add(g);
    return { pin, group: g, beam, ring, halo, hit, normal, phase: (i * 0.37) % 1, label: null };
  });

  /* ---------- flight routes ---------- */
  const arcObjs = [];
  if (opts.showRoutes !== false) {
    const routePins = pins.slice(0, 7);
    for (let i = 1; i < routePins.length; i++) {
      const a = latLngToVec(routePins[i - 1].lat, routePins[i - 1].lng);
      const b = latLngToVec(routePins[i].lat, routePins[i].lng);
      const ang = Math.acos(clamp(a.dot(b), -1, 1));
      const lift = 0.06 + 0.22 * (ang / Math.PI);
      const pts = [];
      for (let k = 0; k <= 40; k++) {
        const t = k / 40;
        pts.push(slerp(a, b, t).multiplyScalar(1.004 + Math.sin(t * Math.PI) * lift));
      }
      const geo = new TubeGeometry(new CatmullRomCurve3(pts), 120, 0.0034, 6, false);
      const mat = new ShaderMaterial({
        uniforms: { uColor: { value: goldSoft.clone() }, uHead: { value: 0 }, uDraw: { value: reduced ? 1 : 0 } },
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: `uniform vec3 uColor; uniform float uHead; uniform float uDraw; varying vec2 vUv;
          void main(){ if (vUv.x > uDraw) discard; float d = uHead - vUv.x; if (d < 0.0) d += 1.0;
            float comet = exp(-d * 10.0); float a = 0.16 + comet * 1.15; gl_FragColor = vec4(uColor * a, a); ${COLORSPACE} }`,
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        toneMapped: false,
      });
      const arc = new Mesh(geo, mat);
      globe.add(arc);
      arcObjs.push({ mesh: arc, mat, offset: (i * 0.37) % 1, delay: 1.25 + i * 0.14 });
    }
  }

  /* ---------- airliner on orbit, with nav lights and a ribbon contrail ---------- */
  let plane = null;
  const PLANE_SCALE = 0.125;
  const orbit = new Group();
  orbit.rotation.order = 'ZYX';
  orbit.rotation.set(0.42, 0, -0.22);
  world.add(orbit);
  const TRAIL = 72;
  const trailPos = new Float32Array(TRAIL * 2 * 3);
  const trailFade = new Float32Array(TRAIL * 2);
  const trailIdx = [];
  for (let i = 0; i < TRAIL - 1; i++) {
    const a = i * 2;
    trailIdx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  for (let i = 0; i < TRAIL; i++) trailFade[i * 2] = trailFade[i * 2 + 1] = 1 - i / (TRAIL - 1);
  const trailGeo = new BufferGeometry();
  trailGeo.setAttribute('position', new BufferAttribute(trailPos, 3));
  trailGeo.setAttribute('aFade', new BufferAttribute(trailFade, 1));
  trailGeo.setIndex(trailIdx);
  const trailMat = new ShaderMaterial({
    uniforms: { uColor: { value: goldSoft.clone() }, uAlpha: { value: 0 } },
    vertexShader: `attribute float aFade; varying float vF; void main(){ vF = aFade; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 uColor; uniform float uAlpha; varying float vF; void main(){ float a = pow(vF, 1.6) * 0.5 * uAlpha; gl_FragColor = vec4(uColor * a, a); ${COLORSPACE} }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    toneMapped: false,
  });
  const trail = new Mesh(trailGeo, trailMat);
  trail.frustumCulled = false;
  let trailReady = false;
  if (opts.showPlane !== false) {
    plane = buildAirliner({ detail: 'low', accent: '#' + gold.getHexString() });
    plane.group.scale.setScalar(PLANE_SCALE);
    orbit.add(plane.group);
    scene.add(trail);
  }
  const ORBIT_R = 1.27;

  const planeWorld = new Vector3();
  const tmpM = new Matrix4();

  /* ---------- labels ---------- */
  const labelText = (pin) => pin.code || pin.title || '';
  for (const o of pinObjs) {
    if (!labelText(o.pin)) continue;
    // Pins that lead somewhere are buttons; the rest are plain captions.
    const interactive = !!(o.pin.handle || o.pin.url);
    const b = document.createElement(interactive ? 'button' : 'span');
    b.className = 'flytz-globe3d__pin';
    b.hidden = true;
    b.innerHTML = `<span class="flytz-globe3d__code"></span><span class="flytz-globe3d__name"></span>`;
    b.querySelector('.flytz-globe3d__code').textContent = o.pin.code || '';
    b.querySelector('.flytz-globe3d__name').textContent = o.pin.title || '';
    if (interactive) {
      b.type = 'button';
      b.setAttribute('aria-label', `${o.pin.title || o.pin.code}${o.pin.code && o.pin.title ? ', ' + o.pin.code : ''}. ${opts.openLabel || 'Open the capsule'}`);
      if (o.pin.handle) b.dataset.handle = o.pin.handle;
      b.addEventListener('click', (e) => opts.onPinClick?.(o.pin, e));
    } else {
      b.setAttribute('aria-hidden', 'true');
    }
    b.addEventListener('pointerenter', () => (o.hover = true));
    b.addEventListener('pointerleave', () => (o.hover = false));
    b.addEventListener('focus', () => (o.hover = true));
    b.addEventListener('blur', () => (o.hover = false));
    labelsEl.appendChild(b);
    o.label = b;
  }

  /* ---------- sizing ---------- */
  let W = 1;
  let H = 1;
  let radiusPx = 1;
  let avoid = [];
  let offX = 0;
  let offY = 0;
  const fov = (camera.fov * Math.PI) / 180;
  function resize() {
    W = host.clientWidth || 1;
    H = host.clientHeight || 1;
    const dpr = pixelRatio(2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    radiusPx = W < 750 ? Math.min(W * 0.47, H * 0.36) : Math.min(W, H) * 0.41;
    const dist = H / 2 / (radiusPx * Math.tan(fov / 2));
    camera.position.set(0, 0, dist);
    camera.near = Math.max(0.05, dist - 3);
    camera.far = dist + 200;
    camera.updateProjectionMatrix();
    world.position.y = W < 750 ? 0 : -(0.05 * H) / radiusPx;
    dotMat.uniforms.uScale.value = (H * dpr) / (2 * Math.tan(fov / 2));
    starMat.uniforms.uPixelRatio.value = dpr;
    pinObjs.forEach((o) => (o.halo.material.uniforms.uPixelRatio.value = dpr));
    measureAvoid();
    render();
  }
  function measureAvoid() {
    const base = host.getBoundingClientRect();
    const parent = labelsEl.parentElement.getBoundingClientRect();
    offX = base.left - parent.left;
    offY = base.top - parent.top;
    const els = typeof opts.avoid === 'function' ? opts.avoid() : opts.avoidSelectors ? [...document.querySelectorAll(opts.avoidSelectors)] : [];
    avoid = els.map((el) => {
      const r = el.getBoundingClientRect();
      return [r.left - base.left - 10, r.top - base.top - 10, r.right - base.left + 10, r.bottom - base.top + 10];
    }).filter((r) => r[2] > r[0]);
  }

  /* ---------- state + interaction ---------- */
  let rot = -12 * DEG;
  let tilt = 0.36;
  let vel = 0;
  let time = 0;
  let intro = reduced ? 1 : 0;
  let introStart = null;
  const autoSpeed = reduced ? 0 : (Number.isFinite(opts.speed) ? opts.speed : 4) * 0.011;
  const dragTarget = opts.dragArea || host;
  const raycaster = new Raycaster();
  const ndc = new Vector2();
  const drag = dragSpin(dragTarget, {
    onDrag: (dx, dy, dtms) => {
      rot += dx / radiusPx;
      tilt = clamp(tilt + dy / radiusPx / 2, 0.05, 0.75);
      vel = dx / radiusPx / (dtms / 1000);
      wake();
    },
    onRelease: () => wake(),
    onTap: (e) => {
      const r = canvas.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
      ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      const hits = raycaster.intersectObjects([sphere, ...pinObjs.map((o) => o.hit)], false);
      const first = hits[0];
      if (first && first.object.userData.pin) opts.onPinClick?.(first.object.userData.pin, e);
    },
  });
  let lastScroll = window.scrollY;
  const onScroll = () => {
    const d = window.scrollY - lastScroll;
    lastScroll = window.scrollY;
    if (!reduced) {
      vel += d * 0.0009;
      wake();
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- per-frame update ---------- */
  const camDir = new Vector3();
  const tmpV = new Vector3();
  const tmpN = new Vector3();
  const tmpQ = globe.quaternion.clone();
  const trailHist = new Array(TRAIL);
  const orbitPos = new Vector3();
  const orbitFwd = new Vector3();
  const orbitUp = new Vector3();
  const orbitRight = new Vector3();
  function updateLabels() {
    const placed = [];
    const list = [];
    for (const o of pinObjs) {
      if (!o.label) continue;
      o.group.getWorldPosition(tmpV);
      tmpN.copy(o.normal).applyQuaternion(globe.getWorldQuaternion(tmpQ));
      camDir.copy(camera.position).sub(tmpV).normalize();
      const facing = tmpN.dot(camDir);
      tmpV.project(camera);
      list.push({ o, facing, x: (tmpV.x * 0.5 + 0.5) * W, y: (-tmpV.y * 0.5 + 0.5) * H });
    }
    list.sort((a, b) => b.facing - a.facing);
    const labelsOn = intro >= 0.75;
    for (const { o, facing, x, y } of list) {
      let show = labelsOn && facing > 0.22;
      const w = o.w || 54;
      // Labels sit to the right of their pin, or to the left near the right edge; never off screen.
      let lx = x + 10;
      if (lx + w > W - 6) lx = x - 10 - w;
      const ly = y - 22;
      if (show) {
        const box = [lx, ly, lx + w, ly + 22];
        if (lx < 6 || ly < 6 || ly + 22 > H - 6) show = false;
        if (show && avoid.some((r) => box[0] < r[2] && box[2] > r[0] && box[1] < r[3] && box[3] > r[1])) show = false;
        if (show && placed.some((p) => box[0] < p[2] + 4 && box[2] + 4 > p[0] && box[1] < p[3] + 2 && box[3] + 2 > p[1])) show = false;
        if (show) placed.push(box);
      }
      if (document.activeElement === o.label) show = true;
      if (o.label.hidden === show) o.label.hidden = !show;
      if (show) {
        o.label.style.transform = `translate3d(${(lx + offX).toFixed(1)}px, ${(ly + offY).toFixed(1)}px, 0)`;
        o.label.style.opacity = String(clamp((facing - 0.22) * 5, 0, 1));
        if (!o.w) o.w = o.label.offsetWidth;
      }
    }
  }
  function updatePlane(t) {
    if (!plane) return;
    const a = reduced ? 1.9 : t * ((Math.PI * 2) / 16) + 1.2;
    const pos = orbitPos.set(Math.cos(a) * ORBIT_R, 0, Math.sin(a) * ORBIT_R);
    const fwd = orbitFwd.set(-Math.sin(a), 0, Math.cos(a));
    const upv = orbitUp.copy(pos).normalize();
    const right = orbitRight.crossVectors(fwd, upv);
    tmpM.makeBasis(fwd, upv, right);
    plane.group.position.copy(pos);
    plane.group.quaternion.setFromRotationMatrix(tmpM);
    plane.group.rotateX(Math.sin(t * 0.9) * 0.18);
    const appear = reduced ? 1 : easeOutCubic((intro - 0.45) / 0.4);
    plane.group.scale.setScalar(PLANE_SCALE * Math.max(appear, 0.0001));
    plane.update(t);
    // contrail in world space
    plane.group.getWorldPosition(planeWorld);
    const tail = planeWorld.clone().add(tmpV.copy(fwd).transformDirection(orbit.matrixWorld).multiplyScalar(-0.05 * appear));
    if (!trailReady) {
      for (let i = 0; i < TRAIL; i++) trailHist[i] = tail.clone();
      trailReady = true;
    }
    trailHist.pop();
    trailHist.unshift(tail);
    for (let i = 0; i < TRAIL; i++) {
      const p = trailHist[i];
      const q = trailHist[Math.min(i + 1, TRAIL - 1)];
      const tangent = tmpV.copy(p).sub(q);
      if (tangent.lengthSq() < 1e-10) tangent.set(1, 0, 0);
      const toCam = camDir.copy(camera.position).sub(p);
      const side = tmpN.crossVectors(tangent, toCam).normalize().multiplyScalar(0.0085 * (1 - i / TRAIL) * appear);
      trailPos.set([p.x + side.x, p.y + side.y, p.z + side.z, p.x - side.x, p.y - side.y, p.z - side.z], i * 6);
    }
    trailGeo.attributes.position.needsUpdate = true;
    trailMat.uniforms.uAlpha.value = appear;
  }

  let firstFrame = null;
  const ready = new Promise((resolve) => (firstFrame = resolve));
  function render() {
    renderer.render(scene, camera);
    if (firstFrame) {
      firstFrame();
      firstFrame = null;
    }
  }

  const view = {
    visible: true,
    tick(dt, now) {
      if (!reduced) time += dt;
      if (!reduced && intro < 1) {
        if (introStart === null) introStart = now;
        intro = Math.min(1, (now - introStart) / 2.2);
      }
      if (!drag.dragging) {
        // Hold still while a label is hovered or focused, so it can be clicked.
        const focusPause = labelsEl.contains(document.activeElement) || pinObjs.some((o) => o.hover) ? 0 : 1;
        rot += (autoSpeed * focusPause + vel) * dt;
        vel *= Math.exp(-3.4 * dt);
        if (Math.abs(vel) < 1e-4) vel = 0;
      }
      const e = easeOutCubic(intro);
      globe.rotation.set(tilt, rot + (1 - e) * 1.1, 0);
      world.scale.setScalar(0.86 + 0.14 * e);
      atmoMat.uniforms.uIntensity.value = e;
      dotMat.uniforms.uReveal.value = reduced ? 1 : clamp(intro * 1.4, 0, 1);
      dotMat.uniforms.uTime.value = time;
      starMat.uniforms.uTime.value = time;
      pinObjs.forEach((o, i) => {
        const pop = reduced ? 1 : easeOutBack(clamp((intro * 2.2 - 0.9 - i * 0.06) / 0.5, 0, 1));
        const hover = o.hover ? 1.6 : 1;
        o.group.scale.setScalar(Math.max(pop, 0.0001) * hover);
        const ph = (time / 2.4 + o.phase) % 1;
        o.ring.scale.setScalar(0.012 + ph * 0.05);
        o.ring.material.opacity = (1 - ph) * 0.75 * pop;
        o.halo.material.uniforms.uAlpha.value = pop;
      });
      arcObjs.forEach((a) => {
        a.mat.uniforms.uDraw.value = reduced ? 1 : clamp((intro * 2.2 - a.delay) / 0.9, 0, 1);
        a.mat.uniforms.uHead.value = (time / 3.2 + a.offset) % 1;
      });
      world.updateMatrixWorld(true);
      updatePlane(time);
      updateLabels();
      render();
      return !reduced || drag.dragging || vel !== 0;
    },
  };

  const ro = new ResizeObserver(() => {
    resize();
    wake();
  });
  ro.observe(host);
  const io = watchVisibility(host, view, '0px');
  document.fonts?.ready.then(measureAvoid);
  const avoidTimer = setTimeout(measureAvoid, 1700);
  resize();
  register(view);

  return {
    canvas,
    ready,
    dispose() {
      unregister(view);
      clearTimeout(avoidTimer);
      ro.disconnect();
      io.disconnect();
      drag.dispose();
      window.removeEventListener('scroll', onScroll);
      disposeTree(scene);
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
      labelsEl.remove();
    },
  };
}
