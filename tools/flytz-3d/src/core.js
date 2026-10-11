import {
  ACESFilmicToneMapping,
  CanvasTexture,
  PMREMGenerator,
  RepeatWrapping,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const coarsePointer = () => window.matchMedia('(pointer: coarse)').matches;

let support = null;
export function supported() {
  if (support !== null) return support;
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2');
    support = !!gl;
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
  } catch (e) {
    support = false;
  }
  return support;
}

export function makeRenderer({ canvas, alpha = true, antialias = true } = {}) {
  const renderer = new WebGLRenderer({ canvas, alpha, antialias, powerPreference: 'high-performance' });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x000000, 0);
  return renderer;
}

export const pixelRatio = (cap = 2) => Math.min(window.devicePixelRatio || 1, coarsePointer() ? Math.min(cap, 1.75) : cap);

const envCache = new WeakMap();
export function studioEnvironment(renderer) {
  if (envCache.has(renderer)) return envCache.get(renderer);
  const pmrem = new PMREMGenerator(renderer);
  const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  envCache.set(renderer, env);
  return env;
}

/* ---------- one animation loop for every view; idle views and hidden tabs cost nothing ---------- */
const views = new Set();
let raf = 0;
let last = 0;
function frame(now) {
  raf = 0;
  const dt = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60;
  last = now;
  let busy = false;
  if (!document.hidden) {
    for (const v of views) {
      if (!v.visible) continue;
      try {
        if (v.tick(dt, now / 1000) !== false) busy = true;
      } catch (err) {
        console.error('Flytz 3D:', err);
        views.delete(v);
      }
    }
  }
  if (busy) raf = requestAnimationFrame(frame);
  else last = 0;
}
export function wake() {
  if (!raf) raf = requestAnimationFrame(frame);
}
export function register(view) {
  views.add(view);
  wake();
}
export function unregister(view) {
  views.delete(view);
}
document.addEventListener('visibilitychange', () => !document.hidden && wake());

export function watchVisibility(el, view, rootMargin = '120px') {
  const io = new IntersectionObserver(
    ([entry]) => {
      view.visible = entry.isIntersecting;
      if (view.visible) wake();
    },
    { rootMargin }
  );
  io.observe(el);
  return io;
}

/* ---------- maths ---------- */
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const damp = (current, target, lambda, dt) => current + (target - current) * (1 - Math.exp(-lambda * dt));
export const easeOutCubic = (t) => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
export const easeInOutCubic = (t) => {
  t = clamp(t, 0, 1);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
export const easeOutBack = (t) => {
  t = clamp(t, 0, 1);
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
export function seeded(seed = 1) {
  let s = seed >>> 0 || 1;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

/* ---------- generated textures ---------- */
function canvasTexture(w, h, draw, { repeat = false, color = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const tex = new CanvasTexture(c);
  if (color) tex.colorSpace = SRGBColorSpace;
  if (repeat) tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

let glowTex = null;
export function glowTexture() {
  if (glowTex) return glowTex;
  glowTex = canvasTexture(64, 64, (ctx, w) => {
    const g = ctx.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.2, 'rgba(255,255,255,0.85)');
    g.addColorStop(0.5, 'rgba(255,255,255,0.25)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, w);
  });
  return glowTex;
}

/** Iron-lattice alpha map: diagonal bracing inside panels, as on the Eiffel Tower. */
export function latticeTexture() {
  return canvasTexture(
    128,
    128,
    (ctx, w, h) => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#fff';
      ctx.lineCap = 'square';
      ctx.lineWidth = 9;
      ctx.strokeRect(0, 0, w, h);
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(w, h);
      ctx.moveTo(w, 0);
      ctx.lineTo(0, h);
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
    },
    { repeat: true, color: false }
  );
}

/** Rows of round-headed arches (white = solid wall), for the Colosseum. */
export function archesTexture(rows = 3, perRow = 1) {
  return canvasTexture(
    128,
    128,
    (ctx, w, h) => {
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#000';
      const rh = h / rows;
      for (let r = 0; r < rows; r++) {
        for (let i = 0; i < perRow; i++) {
          const cw = w / perRow;
          const x = i * cw + cw * 0.22;
          const aw = cw * 0.56;
          const y0 = r * rh + rh * 0.22;
          const y1 = (r + 1) * rh - rh * 0.08;
          ctx.beginPath();
          ctx.moveTo(x, y1);
          ctx.lineTo(x, y0 + aw / 2);
          ctx.arc(x + aw / 2, y0 + aw / 2, aw / 2, Math.PI, 0);
          ctx.lineTo(x + aw, y1);
          ctx.closePath();
          ctx.fill();
        }
      }
    },
    { repeat: true, color: false }
  );
}

/** Warm lit windows on dark glass, for towers and city blocks. */
export function windowsTexture(seed = 7) {
  const rnd = seeded(seed);
  return canvasTexture(
    64,
    128,
    (ctx, w, h) => {
      ctx.fillStyle = '#05070c';
      ctx.fillRect(0, 0, w, h);
      for (let y = 4; y < h; y += 8) {
        for (let x = 3; x < w; x += 8) {
          const on = rnd();
          if (on < 0.45) continue;
          ctx.fillStyle = on > 0.9 ? '#ffe2a8' : on > 0.7 ? '#e7b866' : '#7a5a2a';
          ctx.fillRect(x, y, 4, 4);
        }
      }
    },
    { repeat: true }
  );
}

/** Soft round shadow for under models. */
export function contactShadowTexture() {
  return canvasTexture(128, 128, (ctx, w) => {
    const g = ctx.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    g.addColorStop(0, 'rgba(0,0,0,0.75)');
    g.addColorStop(0.5, 'rgba(0,0,0,0.35)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, w);
  });
}

export function disposeTree(root) {
  root.traverse((o) => {
    o.geometry?.dispose?.();
    const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    for (const m of mats) {
      for (const key of ['map', 'alphaMap', 'emissiveMap', 'roughnessMap']) m[key]?.dispose?.();
      m.dispose?.();
    }
  });
}

/** Horizontal drag with momentum, shared by the globe and the landmark turntables. */
export function dragSpin(target, { onDrag, onRelease, onTap, skip = 'a, button, input, select, textarea, label' } = {}) {
  let down = null;
  const start = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    if (e.target.closest(skip)) return;
    down = { x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, t: performance.now(), moved: false };
  };
  const move = (e) => {
    if (!down) return;
    const dx = e.clientX - down.lx;
    const dy = e.clientY - down.ly;
    if (!down.moved && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) down.moved = true;
    const now = performance.now();
    if (down.moved) onDrag?.(dx, dy, Math.max(now - down.t, 8), e);
    down.lx = e.clientX;
    down.ly = e.clientY;
    down.t = now;
  };
  const end = (e) => {
    if (!down) return;
    const wasTap = !down.moved;
    down = null;
    if (wasTap) onTap?.(e);
    else onRelease?.(e);
  };
  target.addEventListener('pointerdown', start);
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('pointerup', end);
  window.addEventListener('pointercancel', end);
  return {
    get dragging() {
      return !!(down && down.moved);
    },
    dispose() {
      target.removeEventListener('pointerdown', start);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
    },
  };
}
