import {
  AdditiveBlending,
  BackSide,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  Float32BufferAttribute,
  FogExp2,
  Group,
  HemisphereLight,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Points,
  RepeatWrapping,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from 'three';
import { buildAirliner } from './plane.js';
import {
  clamp,
  disposeTree,
  easeInOutCubic,
  glowTexture,
  makeRenderer,
  pixelRatio,
  register,
  seeded,
  studioEnvironment,
  unregister,
  windowsTexture,
} from './core.js';

/*
 * The departure scene played between the cart and Shopify checkout: a night stand with the bags
 * going into the hold (check-in), a gold scanner sweeping the aircraft (security), pushback and
 * taxi (boarding), then the take-off roll and climb (take-off). Time-driven, so it always lands
 * on the same beat as the sequence's 3.7 s hand-off.
 */

const COLORSPACE = '\n#include <colorspace_fragment>\n';
const smooth = (a, b, t) => {
  const x = clamp((t - a) / (b - a), 0, 1);
  return x * x * (3 - 2 * x);
};
const lerp = (a, b, t) => a + (b - a) * t;

function canvasTex(w, h, draw, repeat) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 8;
  if (repeat) {
    t.wrapS = t.wrapT = RepeatWrapping;
    t.repeat.set(...repeat);
  }
  return t;
}

/** Point lights rendered as glowing sprites: positions, colours and sizes per light. */
function lightField(list, glow) {
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(list.flatMap((l) => l.p), 3));
  g.setAttribute('color', new Float32BufferAttribute(list.flatMap((l) => [l.c.r, l.c.g, l.c.b]), 3));
  g.setAttribute('aSize', new Float32BufferAttribute(list.map((l) => l.s), 1));
  g.setAttribute('aSeq', new Float32BufferAttribute(list.map((l) => l.q ?? -1), 1));
  const m = new ShaderMaterial({
    uniforms: { uMap: { value: glow }, uScale: { value: 300 }, uTime: { value: 0 }, uIntensity: { value: 1 } },
    vertexShader: `attribute float aSize; attribute float aSeq; attribute vec3 color; uniform float uScale; uniform float uTime;
      varying vec3 vC; varying float vA;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float d = -mv.z; vA = exp(-d * 0.028);
        float seq = 1.0;
        if (aSeq >= 0.0) { float ph = fract(uTime * 2.0); seq = 0.25 + 3.0 * exp(-abs(ph - aSeq) * 40.0); }
        vC = color * seq;
        gl_PointSize = clamp(aSize * uScale / d, 1.5, 64.0);
        gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform sampler2D uMap; uniform float uIntensity; varying vec3 vC; varying float vA;
      void main(){ float a = texture2D(uMap, gl_PointCoord).a * vA * uIntensity; gl_FragColor = vec4(vC * a, a); ${COLORSPACE} }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    toneMapped: false,
    fog: false,
  });
  const pts = new Points(g, m);
  pts.frustumCulled = false;
  return pts;
}

export function createBoarding(host, opts = {}) {
  const accent = new Color(opts.accent || '#c9a24b');
  const DURATION = opts.duration || 3.7;
  const canvas = document.createElement('canvas');
  canvas.className = 'flytz-boarding3d';
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);

  const renderer = makeRenderer({ canvas, alpha: false });
  renderer.setClearColor('#05080f', 1);
  renderer.toneMappingExposure = 1.15;
  const scene = new Scene();
  scene.fog = new FogExp2('#0b1424', 0.03);
  scene.environment = studioEnvironment(renderer);
  scene.environmentIntensity = 0.25;
  const camera = new PerspectiveCamera(38, 1, 0.03, 500);
  const glow = glowTexture();

  /* ---------- sky dome and stars ---------- */
  const sky = new Mesh(
    new SphereGeometry(300, 32, 16),
    new ShaderMaterial({
      uniforms: { uGold: { value: accent.clone() } },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform vec3 uGold; varying vec3 vDir;
        void main(){ float h = vDir.y;
          vec3 top = vec3(0.008, 0.014, 0.035); vec3 mid = vec3(0.035, 0.06, 0.12); vec3 hor = vec3(0.12, 0.13, 0.2);
          vec3 col = mix(hor, mid, smoothstep(0.0, 0.18, h)); col = mix(col, top, smoothstep(0.18, 0.7, h));
          col += uGold * 0.16 * exp(-max(h, 0.0) * 22.0);
          gl_FragColor = vec4(col, 1.0); ${COLORSPACE} }`,
      side: BackSide,
      depthWrite: false,
      fog: false,
    })
  );
  scene.add(sky);
  const rnd = seeded(21);
  const starPos = [];
  for (let i = 0; i < 900; i++) {
    const th = rnd() * Math.PI * 2;
    const y = 0.08 + rnd() * 0.92;
    const r = Math.sqrt(1 - y * y);
    starPos.push(Math.cos(th) * r * 250, y * 250, Math.sin(th) * r * 250);
  }
  const starGeo = new BufferGeometry();
  starGeo.setAttribute('position', new Float32BufferAttribute(starPos, 3));
  const stars = new Points(
    starGeo,
    new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `uniform float uTime; varying float vA; void main(){ vA = 0.45 + 0.55 * sin(uTime * 2.0 + position.x * 0.3 + position.z * 0.2);
        gl_PointSize = 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `varying float vA; void main(){ gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * vA, vA); ${COLORSPACE} }`,
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      fog: false,
    })
  );
  scene.add(stars);

  /* ---------- lighting ---------- */
  scene.add(new HemisphereLight('#3a5280', '#0a0806', 0.7));
  const moon = new DirectionalLight('#9fb6ff', 1.1);
  moon.position.set(-4, 6, -3);
  scene.add(moon);
  const flood = new PointLight('#ffd9a3', 6, 6, 1.4);
  flood.position.set(0.9, 1.1, 1.2);
  scene.add(flood);
  const rimFlood = new PointLight('#ffcf8a', 3, 5, 1.6);
  rimFlood.position.set(-1.2, 0.9, -0.9);
  scene.add(rimFlood);

  /* ---------- ground, runway and apron ---------- */
  const grassTex = canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#0d1118';
    ctx.fillRect(0, 0, w, h);
    const r = seeded(4);
    for (let i = 0; i < 2600; i++) {
      ctx.fillStyle = `rgba(${40 + r() * 30},${48 + r() * 30},${56 + r() * 30},${0.08 + r() * 0.1})`;
      ctx.fillRect(r() * w, r() * h, 2 + r() * 3, 2 + r() * 3);
    }
  }, [60, 60]);
  const ground = new Mesh(new PlaneGeometry(500, 500), new MeshStandardMaterial({ map: grassTex, roughness: 0.95 }));
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  const RW = { x0: -6, x1: 74, w: 1.3 };
  const runwayTex = canvasTex(512, 128, (ctx, w, h) => {
    ctx.fillStyle = '#20242c';
    ctx.fillRect(0, 0, w, h);
    const r = seeded(8);
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = `rgba(255,255,255,${r() * 0.035})`;
      ctx.fillRect(r() * w, r() * h, 3, 1);
    }
    ctx.fillStyle = 'rgba(80,60,40,0.25)';
    ctx.fillRect(0, h * 0.36, w, h * 0.28);
    ctx.fillStyle = 'rgba(240,240,235,0.55)';
    ctx.fillRect(0, 5, w, 3);
    ctx.fillRect(0, h - 8, w, 3);
    ctx.fillRect(0, h / 2 - 2, w * 0.5, 4);
  }, [(RW.x1 - RW.x0) / 3, 1]);
  const runway = new Mesh(new PlaneGeometry(RW.x1 - RW.x0, RW.w), new MeshStandardMaterial({ map: runwayTex, roughness: 0.75, metalness: 0.05 }));
  runway.rotation.x = -Math.PI / 2;
  runway.position.set((RW.x0 + RW.x1) / 2, 0.003, 0);
  scene.add(runway);
  // Threshold "piano keys".
  const keyMat = new MeshBasicMaterial({ color: '#d9d9d2' });
  for (let i = 0; i < 12; i++) {
    if (i === 5 || i === 6) continue;
    const k = new Mesh(new PlaneGeometry(0.5, 0.06), keyMat);
    k.rotation.x = -Math.PI / 2;
    k.position.set(RW.x0 + 0.6, 0.004, -0.5 + i * 0.09);
    scene.add(k);
  }
  const apron = new Mesh(new PlaneGeometry(18, 4.4), new MeshStandardMaterial({ color: '#181b21', roughness: 0.85 }));
  apron.rotation.x = -Math.PI / 2;
  apron.position.set(1, 0.002, -3.4);
  scene.add(apron);

  /* ---------- airfield lights ---------- */
  const W = new Color('#fff1d8');
  const A = new Color('#ffb547');
  const R = new Color('#ff3b30');
  const G = new Color('#3dff8c');
  const B = new Color('#3c7dff');
  const field = [];
  for (let x = RW.x0; x <= RW.x1; x += 0.9) {
    const amber = x > RW.x1 - 12;
    for (const z of [-RW.w / 2 - 0.04, RW.w / 2 + 0.04]) field.push({ p: [x, 0.03, z], c: amber ? A : W, s: 0.09 });
  }
  for (let x = RW.x0 + 0.4; x <= RW.x1; x += 0.45) field.push({ p: [x, 0.012, 0], c: x > RW.x1 - 8 ? R : W, s: 0.05 });
  for (let z = -0.6; z <= 0.6; z += 0.15) {
    field.push({ p: [RW.x0 - 0.05, 0.03, z], c: G, s: 0.1 });
    field.push({ p: [RW.x1 + 0.05, 0.03, z], c: R, s: 0.1 });
  }
  // Approach lights with the sequenced flasher running towards the runway.
  for (let i = 0; i < 14; i++) {
    const x = RW.x0 - 0.8 - i * 0.62;
    field.push({ p: [x, 0.06, 0], c: W, s: 0.18, q: 1 - i / 14 });
    if (i % 3 === 1) for (const z of [-0.36, -0.18, 0.18, 0.36]) field.push({ p: [x, 0.06, z], c: W, s: 0.1 });
  }
  for (let x = -6; x <= 8; x += 0.7) field.push({ p: [x, 0.03, -0.95], c: B, s: 0.08 });
  for (let x = -6; x <= 8; x += 0.35) field.push({ p: [x, 0.012, -1.25], c: G, s: 0.045 });
  const fieldLights = lightField(field, glow);
  scene.add(fieldLights);

  /* ---------- terminal, tower and skyline ---------- */
  const win = windowsTexture(17);
  win.repeat.set(70, 1);
  const terminal = new Group();
  const body = new Mesh(new BoxGeometry(18, 0.34, 1.4), new MeshStandardMaterial({ color: '#10141c', roughness: 0.55, metalness: 0.5 }));
  body.position.set(1, 0.17, -6.6);
  const glass = new Mesh(new BoxGeometry(18, 0.13, 0.02), new MeshStandardMaterial({ color: '#06080c', roughness: 0.15, metalness: 0.8, emissiveMap: win, emissive: new Color('#ffffff'), emissiveIntensity: 1.1 }));
  glass.position.set(1, 0.2, -5.89);
  const roof = new Mesh(new BoxGeometry(18.6, 0.04, 1.8), new MeshStandardMaterial({ color: '#1d222c', roughness: 0.6, metalness: 0.4 }));
  roof.position.set(1, 0.36, -6.5);
  terminal.add(body, glass, roof);
  const bridgeMat = new MeshStandardMaterial({ color: '#2a303b', roughness: 0.5, metalness: 0.5 });
  for (const x of [-5, -2, 3.5, 6.5]) {
    const br = new Mesh(new BoxGeometry(0.14, 0.11, 1.4), bridgeMat);
    br.position.set(x, 0.24, -5.2);
    terminal.add(br);
  }
  const towerMat = new MeshStandardMaterial({ color: '#1c212b', roughness: 0.5, metalness: 0.4 });
  const tower = new Mesh(new CylinderGeometry(0.12, 0.18, 1.9, 16), towerMat);
  tower.position.set(8.5, 0.95, -7.6);
  const cab = new Mesh(new CylinderGeometry(0.34, 0.26, 0.28, 16), new MeshStandardMaterial({ color: '#0a0d12', emissive: new Color('#7fb2ff'), emissiveIntensity: 0.55, roughness: 0.2, metalness: 0.7 }));
  cab.position.set(8.5, 2.02, -7.6);
  const cabRoof = new Mesh(new CylinderGeometry(0.38, 0.38, 0.05, 16), towerMat);
  cabRoof.position.set(8.5, 2.19, -7.6);
  terminal.add(tower, cab, cabRoof);
  scene.add(terminal);
  const beacons = lightField([{ p: [8.5, 2.3, -7.6], c: R, s: 0.3 }, { p: [1, 0.42, -6.6], c: R, s: 0.15 }], glow);
  scene.add(beacons);

  const skyTex = windowsTexture(29);
  const cityMat = new MeshStandardMaterial({ color: '#06080d', roughness: 0.6, emissiveMap: skyTex, emissive: new Color('#ffffff'), emissiveIntensity: 1.4 });
  const city = new InstancedMesh(new BoxGeometry(1, 1, 1), cityMat, 90);
  const o = new Object3D();
  const rc = seeded(13);
  for (let i = 0; i < 90; i++) {
    const h = 0.6 + rc() ** 2 * 4.2;
    o.position.set(-40 + rc() * 90, h / 2, -32 - rc() * 18);
    o.scale.set(0.8 + rc() * 1.6, h, 0.8 + rc() * 1.4);
    o.updateMatrix();
    city.setMatrixAt(i, o.matrix);
  }
  scene.add(city);
  const cityGlow = [];
  for (let i = 0; i < 70; i++) cityGlow.push({ p: [-40 + rc() * 90, 0.2 + rc() * 3.6, -31 - rc() * 18], c: rc() > 0.85 ? R : new Color('#ffd28a'), s: 0.5 + rc() * 0.6 });
  const cityLights = lightField(cityGlow, glow);
  scene.add(cityLights);

  /* ---------- the aircraft ---------- */
  const jet = buildAirliner({ detail: 'high', accent: '#' + accent.getHexString() });
  const GEAR_H = 0.12;
  jet.group.position.set(0, GEAR_H, 0);
  scene.add(jet.group);
  const doorOpen = -1.25;
  if (jet.parts.cargoDoor) jet.parts.cargoDoor.rotation.x = doorOpen;
  // Dark hold opening revealed behind the cargo door.
  const hold = new Mesh(new PlaneGeometry(0.07, 0.042), new MeshBasicMaterial({ color: '#020306' }));
  hold.position.set(0.17, -0.0185, 0.0567);
  jet.group.add(hold);
  const landing = lightField(
    [
      { p: [0.36, -0.07, 0], c: W, s: 0.2 },
      { p: [0.05, -0.03, 0.12], c: W, s: 0.16 },
      { p: [0.05, -0.03, -0.12], c: W, s: 0.16 },
    ],
    glow
  );
  landing.material.uniforms.uIntensity.value = 0;
  jet.group.add(landing);

  /* ---------- ground crew: belt loader with bags, baggage tug ---------- */
  const crew = new Group();
  scene.add(crew);
  const hiVis = new MeshStandardMaterial({ color: '#e9e4d6', roughness: 0.5 });
  const darkMetal = new MeshStandardMaterial({ color: '#2a2f38', roughness: 0.6, metalness: 0.4 });
  const goldMat = new MeshStandardMaterial({ color: accent, roughness: 0.35, metalness: 0.7 });
  const ivoryMat = new MeshStandardMaterial({ color: '#efe6d2', roughness: 0.5 });
  const doorWorld = new Vector3(0.17, GEAR_H - 0.03, 0.075);
  const beltStart = new Vector3(0.36, 0.035, 0.5);
  const beltDir = new Vector3().subVectors(doorWorld, beltStart);
  const beltLen = beltDir.length();
  const tyre = new MeshStandardMaterial({ color: '#0c0d10', roughness: 0.8 });
  const wheels = (group, pts, r = 0.012) => {
    for (const [x, z] of pts) {
      const wh = new Mesh(new CylinderGeometry(r, r, 0.008, 12), tyre);
      wh.rotation.x = Math.PI / 2;
      wh.position.set(x, r, z);
      group.add(wh);
    }
  };
  const loader = new Group();
  const belt = new Mesh(new BoxGeometry(0.05, 0.012, beltLen), darkMetal);
  belt.position.copy(beltStart).addScaledVector(beltDir, 0.5);
  belt.lookAt(doorWorld);
  const chassis = new Group();
  const deck = new Mesh(new BoxGeometry(0.07, 0.022, 0.2), hiVis);
  deck.position.y = 0.03;
  chassis.add(deck);
  wheels(chassis, [[-0.035, -0.07], [0.035, -0.07], [-0.035, 0.07], [0.035, 0.07]]);
  chassis.position.set(beltStart.x - 0.04, 0, beltStart.z - 0.1);
  chassis.lookAt(doorWorld.x, 0, doorWorld.z);
  loader.add(belt, chassis);
  crew.add(loader);
  const bags = [];
  for (let i = 0; i < 5; i++) {
    const bag = new Mesh(new BoxGeometry(0.032, 0.02, 0.026), i % 2 ? ivoryMat : goldMat);
    bags.push(bag);
    crew.add(bag);
  }
  const tug = new Group();
  const tugBody = new Mesh(new BoxGeometry(0.07, 0.03, 0.045), hiVis);
  tugBody.position.y = 0.028;
  const cabin = new Mesh(new BoxGeometry(0.03, 0.025, 0.04), darkMetal);
  cabin.position.set(-0.012, 0.055, 0);
  tug.add(tugBody, cabin);
  wheels(tug, [[-0.022, -0.025], [0.022, -0.025], [-0.022, 0.025], [0.022, 0.025]], 0.01);
  for (let i = 1; i <= 2; i++) {
    const cart = new Mesh(new BoxGeometry(0.08, 0.008, 0.045), darkMetal);
    cart.position.set(-0.1 * i, 0.022, 0);
    tug.add(cart);
    wheels(tug, [[-0.1 * i - 0.028, -0.024], [-0.1 * i + 0.028, -0.024], [-0.1 * i - 0.028, 0.024], [-0.1 * i + 0.028, 0.024]], 0.008);
    for (let j = 0; j < 3; j++) {
      const bag = new Mesh(new BoxGeometry(0.022, 0.016, 0.03), (i + j) % 2 ? goldMat : ivoryMat);
      bag.position.set(-0.1 * i - 0.024 + j * 0.024, 0.034, 0);
      tug.add(bag);
    }
  }
  const tugLight = lightField([{ p: [-0.012, 0.075, 0], c: A, s: 0.1 }], glow);
  tug.add(tugLight);
  tug.position.set(0.72, 0, 0.36);
  tug.rotation.y = -0.35;
  crew.add(tug);
  const mast = new Mesh(new CylinderGeometry(0.008, 0.012, 1.1, 8), darkMetal);
  mast.position.set(-1.4, 0.55, -2.4);
  scene.add(mast);
  scene.add(lightField([{ p: [-1.4, 1.12, -2.4], c: new Color('#ffd9a3'), s: 0.9 }, { p: [2.2, 1.12, -2.6], c: new Color('#ffd9a3'), s: 0.9 }], glow));
  const mast2 = mast.clone();
  mast2.position.set(2.2, 0.55, -2.6);
  scene.add(mast2);

  /* ---------- security scanner ---------- */
  const scanMat = new ShaderMaterial({
    uniforms: { uColor: { value: accent.clone().lerp(new Color('#fff1c8'), 0.35) }, uAlpha: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform vec3 uColor; uniform float uAlpha; varying vec2 vUv;
      void main(){ float edge = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y) * smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
        float a = (0.18 + 0.82 * pow(1.0 - abs(vUv.x - 0.5) * 2.0, 8.0)) * edge * uAlpha;
        gl_FragColor = vec4(uColor * a, a); ${COLORSPACE} }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    side: DoubleSide,
    toneMapped: false,
    fog: false,
  });
  const scanGroup = new Group();
  const scanSheet = new Mesh(new PlaneGeometry(1.3, 0.42), scanMat);
  scanSheet.rotation.y = Math.PI / 2;
  scanSheet.position.y = 0.17;
  const ringMat = new MeshBasicMaterial({ color: accent.clone().lerp(new Color('#fff1c8'), 0.5), transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false, toneMapped: false, fog: false });
  const scanRing = new Mesh(new TorusGeometry(0.066, 0.0035, 8, 48), ringMat);
  scanRing.rotation.y = Math.PI / 2;
  scanRing.position.y = GEAR_H;
  const scanLine = new Mesh(new PlaneGeometry(0.012, 1.4), ringMat);
  scanLine.rotation.x = -Math.PI / 2;
  scanLine.position.y = 0.006;
  scanGroup.add(scanSheet, scanRing, scanLine);
  scanGroup.visible = false;
  scene.add(scanGroup);

  /* ---------- choreography ---------- */
  const shots = [
    // time, camera position, look-at
    [0.0, [1.2, 0.3, 1.32], [0.1, 0.08, 0.05]],
    [0.75, [0.82, 0.3, 1.42], [0.02, 0.1, 0]],
    [1.45, [-0.95, 0.38, 1.35], [0.15, 0.1, 0]],
    [2.15, [-0.9, 0.55, 2.3], [0.9, 0.12, 0]],
    [3.0, [1.6, 0.4, 2.7], [2.8, 0.3, 0]],
    [3.7, [3.4, 0.55, 3.0], [6.2, 1.1, 0]],
    [5.0, [4.4, 0.75, 3.4], [10, 3, 0]],
  ];
  const camPos = new Vector3();
  const camLook = new Vector3();
  const tmpA = new Vector3();
  const tmpB = new Vector3();
  let portrait = false;
  function cameraAt(t, planePos) {
    let i = 0;
    while (i < shots.length - 2 && t > shots[i + 1][0]) i++;
    const [t0, p0, l0] = shots[i];
    const [t1, p1, l1] = shots[i + 1];
    const k = easeInOutCubic(clamp((t - t0) / (t1 - t0), 0, 1));
    camPos.set(lerp(p0[0], p1[0], k), lerp(p0[1], p1[1], k), lerp(p0[2], p1[2], k));
    camLook.set(lerp(l0[0], l1[0], k), lerp(l0[1], l1[1], k), lerp(l0[2], l1[2], k));
    // From the take-off roll on, the camera keeps the aircraft framed.
    const follow = smooth(2.3, 3.0, t);
    camLook.lerp(tmpA.copy(planePos).add(tmpB.set(0.35, 0.05, 0)), follow * 0.85);
    if (portrait) camPos.sub(camLook).multiplyScalar(1.55).add(camLook);
    camera.position.copy(camPos);
    camera.lookAt(camLook);
  }

  const planePos = new Vector3();
  function planeAt(t) {
    // Taxi from the stand, then roll, rotate and climb out.
    const taxi = smooth(1.45, 2.15, t) * 0.35;
    const roll = Math.max(0, t - 2.1);
    const x = taxi + 3.1 * roll * roll + 0.5 * roll;
    const lift = Math.max(0, t - 2.95);
    const y = GEAR_H + 0.55 * lift * lift + 0.9 * lift * smooth(2.95, 3.3, t);
    planePos.set(x, y, 0);
    return planePos;
  }

  const bagPath = (u) => tmpA.copy(beltStart).addScaledVector(beltDir, u);
  let time = 0;
  function update(t) {
    time = t;
    fieldLights.material.uniforms.uTime.value = t;
    stars.material.uniforms.uTime.value = t;
    // Aircraft.
    const p = planeAt(t);
    jet.group.position.copy(p);
    const pitch = smooth(2.75, 3.05, t) * 0.2 - smooth(3.4, 4.2, t) * 0.04;
    jet.group.rotation.set(0, 0, pitch);
    jet.update(t);
    if (jet.parts.cargoDoor) jet.parts.cargoDoor.rotation.x = doorOpen * (1 - smooth(0.62, 0.95, t));
    hold.visible = t < 0.95;
    if (jet.parts.gear) {
      const up = smooth(3.25, 3.6, t);
      jet.parts.gear.scale.y = 1 - up * 0.92;
      jet.parts.gear.position.y = up * 0.04;
    }
    landing.material.uniforms.uIntensity.value = smooth(1.9, 2.2, t) * 1.6;
    // Bags ride the belt into the hold, one after another.
    bags.forEach((bag, i) => {
      const u = clamp((t + 0.25 - i * 0.14) / 0.42, 0, 1);
      bag.visible = u > 0 && u < 1;
      bag.position.copy(bagPath(u));
      bag.position.y += 0.016;
      bag.rotation.y = -0.6;
    });
    // Ground crew pulls away before pushback.
    const away = smooth(0.85, 1.6, t);
    loader.position.set(away * 0.25, 0, away * 0.55);
    tug.position.set(0.72 + away * 1.1, 0, 0.36 + away * 0.3);
    tugLight.material.uniforms.uIntensity.value = t % 0.6 < 0.3 ? 1.4 : 0.25;
    beacons.material.uniforms.uIntensity.value = t % 1.2 < 0.5 ? 1.3 : 0.2;
    // Security: a gold scanner sweeps nose to tail.
    const s = clamp((t - 0.72) / 0.7, 0, 1);
    scanGroup.visible = s > 0 && s < 1;
    scanGroup.position.set(lerp(0.56, -0.56, easeInOutCubic(s)), 0, 0);
    const pulse = Math.sin(Math.PI * s);
    scanMat.uniforms.uAlpha.value = pulse * 1.3;
    ringMat.opacity = pulse;
    // The ring hugs the fuselage: narrower towards the nose and tail.
    const fx = scanGroup.position.x;
    const r = fx > 0.3 ? 1 - ((fx - 0.3) / 0.2) ** 2 * 0.75 : fx < -0.19 ? 1 - ((-0.19 - fx) / 0.31) * 0.7 : 1;
    scanRing.scale.setScalar(Math.max(0.2, r));
    cameraAt(t, p);
  }

  /* ---------- sizing and loop ---------- */
  let Wpx = 1;
  let Hpx = 1;
  function resize() {
    Wpx = host.clientWidth || window.innerWidth;
    Hpx = host.clientHeight || window.innerHeight;
    const dpr = pixelRatio(1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(Wpx, Hpx, false);
    camera.aspect = Wpx / Hpx;
    portrait = camera.aspect < 0.9;
    camera.fov = portrait ? 52 : 38;
    // The sequence's HUD sits along the bottom: lift the picture so the aircraft stays clear of it.
    camera.setViewOffset(Wpx, Hpx, 0, Hpx * (portrait ? 0.14 : 0.09), Wpx, Hpx);
    camera.updateProjectionMatrix();
    const scale = (Hpx * dpr) / (2 * Math.tan((camera.fov * Math.PI) / 360));
    scene.traverse((obj) => {
      if (obj.isPoints && obj.material.uniforms?.uScale) obj.material.uniforms.uScale.value = scale;
    });
  }

  let playing = false;
  let t0 = null;
  const view = {
    visible: true,
    tick(dt, now) {
      if (!playing) return false;
      if (t0 === null) t0 = now;
      update(now - t0);
      renderer.render(scene, camera);
      return true;
    },
  };

  const ro = new ResizeObserver(() => {
    resize();
    if (!playing) {
      update(time);
      renderer.render(scene, camera);
    }
  });
  ro.observe(host);
  resize();
  update(0);
  let ready = Promise.resolve();
  try {
    renderer.compile(scene, camera);
    renderer.render(scene, camera);
  } catch (err) {
    ready = Promise.reject(err);
  }
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    playing = false;
    opts.onContextLost?.();
  });

  return {
    canvas,
    ready,
    duration: DURATION,
    /** Start the sequence from the top; it keeps flying after the hand-off until stopped. */
    play() {
      t0 = null;
      playing = true;
      register(view);
    },
    /** Render one moment (seconds) without playing: used for stills and tests. */
    seek(t) {
      playing = false;
      unregister(view);
      update(t);
      renderer.render(scene, camera);
    },
    reset() {
      playing = false;
      unregister(view);
      update(0);
      renderer.render(scene, camera);
    },
    dispose() {
      playing = false;
      unregister(view);
      ro.disconnect();
      disposeTree(scene);
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}
