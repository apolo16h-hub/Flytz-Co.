import {
  AdditiveBlending,
  CircleGeometry,
  Color,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  EdgesGeometry,
  Group,
  HemisphereLight,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Plane,
  RingGeometry,
  Scene,
  TorusGeometry,
  Vector3,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  clamp,
  contactShadowTexture,
  damp,
  dragSpin,
  easeInOutCubic,
  glowTexture,
  makeRenderer,
  pixelRatio,
  reducedMotion,
  register,
  studioEnvironment,
  unregister,
  wake,
  watchVisibility,
} from './core.js';
import { bake } from './geo.js';
import { buildLandmark, materialKit } from './landmarks.js';

/*
 * Landmark stages. Every landmark on the page shares ONE WebGL renderer: each view renders into a
 * corner of the shared drawing buffer and copies the result into its own 2D canvas. That keeps the
 * page to a single extra GPU context however many cards it shows, and compiles each shader once.
 */

let S = null;
function shared(accent) {
  if (S) return S;
  const canvas = document.createElement('canvas');
  const renderer = makeRenderer({ canvas, alpha: true });
  renderer.localClippingEnabled = true;
  renderer.setPixelRatio(1);
  const clipModel = new Plane(new Vector3(0, -1, 0), 1e6);
  const clipGhost = new Plane(new Vector3(0, 1, 0), -1e6);
  const kit = materialKit(accent, [clipModel]);
  S = {
    canvas,
    renderer,
    w: 0,
    h: 0,
    kit,
    clipModel,
    clipGhost,
    cache: new Map(),
    views: new Set(),
    ghostMat: new LineBasicMaterial({ color: new Color(accent).lerp(new Color('#fff3d0'), 0.4), transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending, clippingPlanes: [clipGhost], toneMapped: false }),
    ghostFillMat: new MeshBasicMaterial({ color: new Color(accent), transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending, clippingPlanes: [clipGhost], toneMapped: false }),
    plinthTop: new MeshStandardMaterial({ color: '#141a26', roughness: 0.28, metalness: 0.6 }),
    plinthSide: new MeshStandardMaterial({ color: '#0d111a', roughness: 0.5, metalness: 0.4 }),
    rim: new MeshStandardMaterial({ color: new Color(accent).lerp(new Color('#e3c27e'), 0.35), roughness: 0.25, metalness: 0.9 }),
    shadowMat: new MeshBasicMaterial({ map: contactShadowTexture(), transparent: true, depthWrite: false, opacity: 0.85, toneMapped: false }),
    scanMat: new MeshBasicMaterial({ color: new Color(accent).lerp(new Color('#fff1c8'), 0.5), transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending, toneMapped: false, side: DoubleSide }),
    scanGlowMat: new MeshBasicMaterial({ map: glowTexture(), color: new Color(accent), transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending, toneMapped: false, side: DoubleSide }),
    lost: false,
  };
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    S.lost = true;
    for (const v of [...S.views]) v.lost();
  });
  return S;
}

/** Baked geometry for a landmark, normalised to height 1 with its footprint centred. */
function model(name) {
  if (S.cache.has(name)) return S.cache.get(name);
  const group = buildLandmark(name, S.kit);
  const parts = bake(group);
  let minY = Infinity;
  let maxY = -Infinity;
  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (const { geometry } of parts) {
    geometry.computeBoundingBox();
    const b = geometry.boundingBox;
    minY = Math.min(minY, b.min.y);
    maxY = Math.max(maxY, b.max.y);
    minX = Math.min(minX, b.min.x);
    maxX = Math.max(maxX, b.max.x);
    minZ = Math.min(minZ, b.min.z);
    maxZ = Math.max(maxZ, b.max.z);
  }
  const k = 1 / (maxY - minY);
  const cx = (minX + maxX) / 2;
  const cz = (minZ + maxZ) / 2;
  let radius = 0;
  for (const { geometry } of parts) {
    geometry.translate(-cx, -minY, -cz);
    geometry.scale(k, k, k);
    const p = geometry.attributes.position;
    for (let i = 0; i < p.count; i++) radius = Math.max(radius, Math.hypot(p.getX(i), p.getZ(i)));
  }
  const edges = mergeGeometries(parts.map(({ geometry }) => new EdgesGeometry(geometry, 28)));
  const entry = { parts, edges, radius };
  S.cache.set(name, entry);
  return entry;
}

const MODES = {
  card: { spin: 0.32, hoverSpin: 1.1, elev: 0.2, fill: 0.86, drag: false, dpr: 1.5 },
  stage: { spin: 0.22, hoverSpin: 0.22, elev: 0.16, fill: 0.84, drag: true, dpr: 2 },
  panel: { spin: 0.2, hoverSpin: 0.2, elev: 0.15, fill: 0.86, drag: true, dpr: 2 },
};

export function createLandmark(host, opts = {}) {
  const s = shared(opts.accent || '#c9a24b');
  const mode = MODES[opts.mode] || MODES.stage;
  const reduced = opts.reduced ?? reducedMotion();

  const canvas = document.createElement('canvas');
  canvas.className = 'flytz-landmark3d';
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const scene = new Scene();
  scene.environment = studioEnvironment(s.renderer);
  scene.environmentIntensity = 0.85;
  const key = new DirectionalLight('#fff0d8', 2.6);
  key.position.set(-2.2, 3, 2.6);
  const rim = new DirectionalLight('#9db7ff', 1.8);
  rim.position.set(2.5, 1.6, -2.8);
  scene.add(key, rim, new HemisphereLight('#c9d4ff', '#1a140e', 0.45));
  const camera = new PerspectiveCamera(26, 1, 0.05, 50);

  const turntable = new Group();
  scene.add(turntable);
  const modelGroup = new Group();
  turntable.add(modelGroup);
  const plinth = new Group();
  turntable.add(plinth);
  const scan = new Group();
  scene.add(scan);
  const ring = new Mesh(new RingGeometry(0.965, 1, 96), s.scanMat);
  ring.rotation.x = -Math.PI / 2;
  const disc = new Mesh(new CircleGeometry(1, 48), s.scanGlowMat);
  disc.rotation.x = -Math.PI / 2;
  scan.add(ring, disc);
  scan.visible = false;

  let current = null;
  let ghost = null;
  let radius = 0.5;
  let W = 1;
  let H = 1;
  let dpr = 1;
  let rot = opts.rotation ?? -0.5;
  let vel = 0;
  let spin = reduced ? 0 : mode.spin;
  let hover = false;
  let tiltX = 0;
  let tiltY = 0;
  let px = 0;
  let py = 0;
  let reveal = 1;
  let revealT = 0;
  let drawn = false;
  let ghostFade = 0;
  let time = 0;
  let disposed = false;

  function buildPlinth(r) {
    plinth.clear();
    const R = r * 1.18 + 0.06;
    const top = new Mesh(new CylinderGeometry(R, R, 0.035, 96), s.plinthTop);
    top.position.y = -0.0175;
    const step = new Mesh(new CylinderGeometry(R * 1.06, R * 1.1, 0.05, 96), s.plinthSide);
    step.position.y = -0.06;
    const band = new Mesh(new TorusGeometry(R, 0.006, 6, 120), s.rim);
    band.rotation.x = Math.PI / 2;
    band.position.y = -0.002;
    const shadow = new Mesh(new CircleGeometry(r * 1.25, 48), s.shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.002;
    plinth.add(top, step, band, shadow);
  }

  function setMonument(name, { reveal: doReveal = true } = {}) {
    if (!name || name === current || disposed || s.lost) return;
    current = name;
    const m = model(name);
    modelGroup.clear();
    // Ghost: edge lines plus a faint hologram fill, shown above the cut while the model builds.
    ghost = new Group();
    for (const { geometry, material } of m.parts) {
      modelGroup.add(new Mesh(geometry, material));
      ghost.add(new Mesh(geometry, s.ghostFillMat));
    }
    ghost.add(new LineSegments(m.edges, s.ghostMat));
    modelGroup.add(ghost);
    radius = m.radius;
    buildPlinth(radius);
    scan.scale.setScalar(radius * 1.12 + 0.04);
    fit();
    reveal = doReveal && !reduced ? 0 : 1;
    revealT = 0;
    drawn = false;
    ghostFade = reveal < 1 ? 1 : 0;
    wake();
  }

  function fit() {
    camera.aspect = W / H;
    const vfov = (camera.fov * Math.PI) / 180;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * camera.aspect);
    const R = radius * 1.18 + 0.12;
    const needH = 1.18 / mode.fill;
    const needW = (2 * R) / mode.fill;
    const dist = Math.max(needH / 2 / Math.tan(vfov / 2), needW / 2 / Math.tan(hfov / 2)) + R * 0.6;
    camera.userData.dist = dist;
    camera.near = Math.max(0.05, dist - R * 3);
    camera.far = dist + R * 4 + 4;
    camera.updateProjectionMatrix();
  }

  function resize() {
    W = Math.max(1, host.clientWidth);
    H = Math.max(1, host.clientHeight);
    dpr = Math.min(pixelRatio(2), mode.dpr);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    fit();
    draw();
  }

  function draw() {
    if (!current || s.lost || disposed) return;
    const pw = canvas.width;
    const ph = canvas.height;
    if (pw > s.w || ph > s.h) {
      s.w = Math.max(s.w, pw);
      s.h = Math.max(s.h, ph);
      s.renderer.setSize(s.w, s.h, false);
    }
    const dist = camera.userData.dist || 4;
    const elev = mode.elev + tiltY * 0.12;
    const az = tiltX * 0.3;
    const cy = 0.5;
    camera.position.set(Math.sin(az) * dist * Math.cos(elev), cy + Math.sin(elev) * dist, Math.cos(az) * dist * Math.cos(elev));
    camera.lookAt(0, cy - 0.04, 0);
    // Reveal: the model prints from the base up; edge lines show what is still to come.
    const cut = reveal < 1 ? reveal * 1.02 : 1e6;
    s.clipModel.constant = cut;
    s.clipGhost.constant = reveal < 1 ? -cut : -1e6;
    s.ghostMat.opacity = 0.55 * ghostFade;
    s.ghostFillMat.opacity = 0.07 * ghostFade;
    const scanOn = reveal > 0 && reveal < 1;
    scan.visible = scanOn;
    if (scanOn) {
      scan.position.y = cut;
      const pulse = Math.sin(Math.PI * reveal);
      s.scanMat.opacity = 0.9 * pulse;
      s.scanGlowMat.opacity = 0.35 * pulse;
    }
    if (ghost) ghost.visible = ghostFade > 0.001;
    s.renderer.setViewport(0, 0, pw, ph);
    s.renderer.setScissor(0, 0, pw, ph);
    s.renderer.setScissorTest(true);
    s.renderer.render(scene, camera);
    ctx.clearRect(0, 0, pw, ph);
    ctx.drawImage(s.canvas, 0, s.h - ph, pw, ph, 0, 0, pw, ph);
    drawn = true;
    if (firstFrame) {
      firstFrame();
      firstFrame = null;
    }
  }

  let firstFrame = null;
  const ready = new Promise((resolve) => (firstFrame = resolve));

  const hoverEl = opts.hoverTarget || host;
  const onMove = (e) => {
    const r = hoverEl.getBoundingClientRect();
    px = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
    py = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);
    hover = true;
    wake();
  };
  const onLeave = () => {
    hover = false;
    px = 0;
    py = 0;
    wake();
  };
  if (!reduced && !mode.drag) {
    hoverEl.addEventListener('pointermove', onMove);
    hoverEl.addEventListener('pointerleave', onLeave);
  }
  const drag = mode.drag
    ? dragSpin(host, {
        onDrag: (dx, dy, dtms) => {
          rot += dx * 0.012;
          vel = (dx * 0.012) / (dtms / 1000);
          wake();
        },
        onRelease: () => wake(),
      })
    : null;

  const view = {
    visible: true,
    tick(dt, now) {
      if (!current || s.lost) return false;
      time += dt;
      // Frame time, not wall time: a slow first frame (shader compile) must not skip the reveal.
      if (reveal < 1) {
        revealT += drawn ? dt : 0;
        reveal = easeInOutCubic(Math.min(1, revealT / 2.4));
      } else if (ghostFade > 0) {
        ghostFade = Math.max(0, ghostFade - dt * 1.6);
      }
      const dragging = drag && drag.dragging;
      if (!dragging) {
        spin = damp(spin, reduced ? 0 : hover ? mode.hoverSpin : mode.spin, 3, dt);
        rot += (spin + vel) * dt;
        vel *= Math.exp(-3 * dt);
        if (Math.abs(vel) < 1e-3) vel = 0;
      }
      tiltX = damp(tiltX, hover ? px : 0, 4, dt);
      tiltY = damp(tiltY, hover ? -py : 0, 4, dt);
      turntable.rotation.y = rot;
      turntable.position.y = reduced ? 0 : Math.sin(time * 0.9) * 0.008;
      draw();
      return !reduced || dragging || vel !== 0 || reveal < 1 || ghostFade > 0 || Math.abs(tiltX) > 1e-3 || Math.abs(tiltY) > 1e-3;
    },
    lost() {
      opts.onContextLost?.();
    },
  };

  const ro = new ResizeObserver(() => {
    resize();
    wake();
  });
  ro.observe(host);
  const io = watchVisibility(host, view, '80px');
  s.views.add(view);
  resize();
  register(view);
  if (opts.monument) setMonument(opts.monument, { reveal: opts.reveal !== false });

  return {
    canvas,
    ready,
    setMonument,
    dispose() {
      disposed = true;
      unregister(view);
      s.views.delete(view);
      ro.disconnect();
      io.disconnect();
      drag?.dispose();
      hoverEl.removeEventListener('pointermove', onMove);
      hoverEl.removeEventListener('pointerleave', onLeave);
      plinth.traverse((o) => o.geometry?.dispose());
      ring.geometry.dispose();
      disc.geometry.dispose();
      canvas.remove();
    },
  };
}
