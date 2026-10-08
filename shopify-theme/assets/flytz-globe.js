/* Flytz hero globe — dotted 3D Earth on canvas with flight arcs, destination pins and an orbiting aircraft.
   Drag (or swipe sideways) to spin. Land data: Natural Earth 110m, 2° cells, 1 bit per cell. */
(() => {
  if (customElements.get('flytz-globe')) return;

  const LAND_MASK = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AP/AAAAAAAAAAAAAAAAAAAAAAAAX/z///+AAAAAAAABAAAAAAAAAAAAAYd8P///wAA+AAAAAA8AAAAAAAAAAAwAnw////4AAIAAAAAAGAAAAAAAAAAADivwAf//wAAAAADAAf/wAHYAAAAAADoi3sAP//gAAAAAMAD///sAAAAgBgACfwz/AD/+gAAAwAEHf///+/8gBAP/7/nJdjwD/+AAAH/AA7f///////f4P//////h8H/gAAAf/6//f////////Mf/////9H4D8AeAA+ev///////////AP/////4A0B4AAAD5/////////////Af3////gHgA4AAAH5///////////LwAHgH///gHkAAAAAH4/////////+CIAABAB///4D+AAAAGCx/////////4A8AAIAAf///n/gAAAOCD/////////wA4AAAAAf///n/wAAAbP///////////AgAAAAAP/////wAAADf//////////9AAAAAAAF////0YAAAB///////////9AAAAAAAD////8EAAAB///////////5AAAAAAAD////2AAAAB/f5fP//////wAAAAAAAD////gAAAAfxnwPP//////jAAAAAAAD////AAAAAPCb3/n/////+CAAAAAAAD///8AAAAAfALf/n////+ECAAAAAAAB///8AAAAAGHQP/n/////mMAAAAAAAA///8AAAAAH+Ai///////E8AAAAAAAAf//wAAAAAP/AA///////BgAAAAAAAAP//gAAAAAf/73///////gAAAAAAAAAD/AQAAAAAf////f/////gAAAAAAAAAF+AQAAAAB///+/n/////AAAAAAAAAAC+AAAAAAB///+f0H////AAAAAAAAAAAeAwAAAAD////f/B///8gAAAAAAAAAAeGEAAAAH////v+B/z/AAAAAAAAAAAAPMAgAAAD////n+A/B+gAAAAAAAAAAAD8AAAAAD////n4AeB/AgAAAAAAAAAAAPAAAAAH////3gAcAfAgAAAAAAAAAAADAAAAAD////6AAcAfggAAAAAAAAAAABDwAAAD////8wAMATAIAAAAAAAAAAAAr/AAAB/////gAKASAAAAAAAAAAAAAAH/gAAA/////gACAAAIAAAAAAAAAAAAH/8AAAaH///AAAAsGAAAAAAAAAAAAAH/+AAAAB//+AAAAUOAAAAAAAAAAAAAP/+AAAAB//8AAAAYegAAAAAAAAAAAAP//gAAAD//4AAAAMeBgAAAAAAAAAAAP//8AAAB//wAAAAGdiuAAAAAAAAAAAf///AAAA//wAAAACAQHgAAAAAAAAAAP///gAAA//wAAAABwAHwgAAAAAAAAAH///AAAA//wAAAAACIDQIAAAAAAAAAH//+AAAAf/wAAAAAAAAAAAAAAAAAAAD//+AAAA//wgAAAAABxAAAAAAAAAAAD//+AAAA//wgAAAAAPxgBAAAAAAAAAA//8AAAA//jgAAAAAf5gAAAAAAAAAAAf/8AAAA//DgAAAAAf/gAAAAAAAAAAAf/8AAAAf/DAAAAAD//4CAAAAAAAAAAf/wAAAAf/DAAAAAH//4AAAAAAAAAAAf/AAAAAf+CAAAAAH//8AAAAAAAAAAAf/AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAH4AAAAAAD//+AAAAAAAAAAA/8AAAAAHwAAAAAADwf8AAAAAAAAAAA/gAAAAAAAAAAAAACAH4AIAAAAAAAAB/wAAAAAAAAAAAAAAAD4AEAAAAAAAAB+AAAAAAAAAAAAAAAAAAAGAAAAAAAAB6AAAAAAAAAAAAAAAAAwAMAAAAAAAAA8AAAAAAAAAAAAAAAAAQAYAAAAAAAAB4AAAAAAAAAAAAAAAAAAAwAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAACAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAeAAIP+f/gAAAAAAAAAAAMAAAAAAABP/+H//////AAAAAAAAAAA+AAAAAf////8////////AAAAAAAOEAPAAAB///////////////gAAAP//T//8AAAH//////////////+AAAH/////4AAAH///////////////8AAE//////4ABw////////////////8AAAD//////gCA////////////////wAAAf/////////////////////////+A/4A///////////////////////////////////////////////////////////////////////////////////////';
  const COLS = 180;
  const ROWS = 90;
  const DEG = Math.PI / 180;
  const DEFAULT_PINS = [
    { code: 'CDG', lat: 48.86, lng: 2.35 },
    { code: 'CAI', lat: 30.04, lng: 31.24 },
    { code: 'HND', lat: 35.68, lng: 139.69 },
    { code: 'SYD', lat: -33.87, lng: 151.21 },
    { code: 'GIG', lat: -22.91, lng: -43.17 },
    { code: 'JFK', lat: 40.71, lng: -74.01 },
  ];

  let landBits = null;
  const isLand = (lat, lng) => {
    if (!landBits) {
      const bin = atob(LAND_MASK);
      landBits = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) landBits[i] = bin.charCodeAt(i);
    }
    const r = Math.min(ROWS - 1, Math.max(0, Math.floor((90 - lat) / 2)));
    const c = ((Math.floor((lng + 180) / 2) % COLS) + COLS) % COLS;
    const idx = r * COLS + c;
    return (landBits[idx >> 3] >> (7 - (idx & 7))) & 1;
  };

  const toVec = (lat, lng) => [
    Math.cos(lat * DEG) * Math.sin(lng * DEG),
    Math.sin(lat * DEG),
    Math.cos(lat * DEG) * Math.cos(lng * DEG),
  ];

  const slerp = (a, b, t) => {
    const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
    const om = Math.acos(dot);
    if (om < 1e-4) return a.slice();
    const s = Math.sin(om);
    const k1 = Math.sin((1 - t) * om) / s;
    const k2 = Math.sin(t * om) / s;
    return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
  };

  const hexToRgb = (hex, fallback) => {
    const m = /^#?([0-9a-f]{6})$/i.exec((hex || '').trim());
    if (!m) return fallback;
    const n = parseInt(m[1], 16);
    return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
  };

  // Dots on a Fibonacci sphere, kept where the mask says land.
  let landDots = null;
  const getLandDots = () => {
    if (landDots) return landDots;
    const n = 5200;
    const golden = Math.PI * (3 - Math.sqrt(5));
    landDots = [];
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      const x = Math.cos(th) * r;
      const z = Math.sin(th) * r;
      const lat = Math.asin(y) / DEG;
      const lng = Math.atan2(x, z) / DEG;
      if (isLand(lat, lng)) landDots.push([x, y, z]);
    }
    return landDots;
  };

  class FlytzGlobe extends HTMLElement {
    connectedCallback() {
      this.canvas = this.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.autoSpeed = this.reduced ? 0 : (parseFloat(this.dataset.speed) || 4) * 0.000011;
      this.showPlane = this.dataset.plane !== 'false';
      this.showRoutes = this.dataset.routes !== 'false';
      this.rot = -12 * DEG;
      this.tilt = 0.36;
      this.vel = 0;
      this.time = 0;
      this.last = 0;
      this.visible = true;
      this.dots = getLandDots();
      this.readColors();
      this.readPins();
      this.resize();

      this.ro = new ResizeObserver(() => {
        this.resize();
        this.requestDraw();
      });
      this.ro.observe(this);
      this.io = new IntersectionObserver(([entry]) => {
        this.visible = entry.isIntersecting;
        if (this.visible) this.requestDraw();
      });
      this.io.observe(this);

      this.dragTarget = this.closest('[data-flytz-drag-area]') || this;
      this.onDown = this.onDown.bind(this);
      this.onMove = this.onMove.bind(this);
      this.onUp = this.onUp.bind(this);
      this.onVisibility = () => document.visibilityState === 'visible' && this.requestDraw();
      this.dragTarget.addEventListener('pointerdown', this.onDown);
      window.addEventListener('pointermove', this.onMove, { passive: true });
      window.addEventListener('pointerup', this.onUp);
      window.addEventListener('pointercancel', this.onUp);
      document.addEventListener('visibilitychange', this.onVisibility);

      this.frame = this.frame.bind(this);
      document.fonts?.ready.then(() => this.measureText());
      setTimeout(() => this.measureText(), 1600);
      this.requestDraw();
    }

    disconnectedCallback() {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      this.ro?.disconnect();
      this.io?.disconnect();
      this.dragTarget?.removeEventListener('pointerdown', this.onDown);
      window.removeEventListener('pointermove', this.onMove);
      window.removeEventListener('pointerup', this.onUp);
      window.removeEventListener('pointercancel', this.onUp);
      document.removeEventListener('visibilitychange', this.onVisibility);
    }

    readColors() {
      const cs = getComputedStyle(this);
      this.gold = cs.getPropertyValue('--flytz-gold-rgb').trim() || '201,162,75';
      this.goldSoft = hexToRgb(cs.getPropertyValue('--flytz-gold-soft'), '231,207,150');
      this.fg = cs.getPropertyValue('--color-foreground').trim() || '238,241,247';
      this.font = (cs.getPropertyValue('--font-body-family') || 'sans-serif').trim();
    }

    readPins() {
      let pins = [];
      document.querySelectorAll('script[data-flytz-destinations]').forEach((el) => {
        try {
          const cfg = JSON.parse(el.textContent);
          (cfg.destinations || []).forEach((d) => {
            if (typeof d.lat === 'number' && typeof d.lng === 'number') pins.push({ code: d.code || '', lat: d.lat, lng: d.lng });
          });
        } catch (e) {
          /* ignore malformed config */
        }
      });
      if (pins.length < 2) pins = DEFAULT_PINS;
      this.pins = pins.slice(0, 24).map((p) => ({ ...p, v: toVec(p.lat, p.lng) }));
      const routePins = this.pins.slice(0, 7);
      this.routes = routePins.slice(1).map((p, i) => [routePins[i].v, p.v]);
    }

    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = this.clientWidth || 1;
      const h = this.clientHeight || 1;
      this.W = w;
      this.H = h;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.R = w < 750 ? Math.min(w * 0.47, h * 0.36) : Math.min(w, h) * 0.41;
      this.CX = w / 2;
      this.CY = h * (w < 750 ? 0.5 : 0.55);
      this.measureText();
    }

    // Pin labels are skipped where they would sit behind the hero copy.
    measureText() {
      const hero = this.closest('.flytz-hero');
      const base = this.getBoundingClientRect();
      this.avoid = [];
      hero?.querySelectorAll('.flytz-hero__title > span, .flytz-hero__eyebrow, .flytz-hero__sub, .flytz-hero__ctas').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width) this.avoid.push([r.left - base.left - 8, r.top - base.top - 8, r.right - base.left + 8, r.bottom - base.top + 8]);
      });
    }

    project(v, alt = 1) {
      const cr = Math.cos(this.rot);
      const sr = Math.sin(this.rot);
      const ct = Math.cos(this.tilt);
      const st = Math.sin(this.tilt);
      const x1 = v[0] * cr + v[2] * sr;
      const z1 = -v[0] * sr + v[2] * cr;
      const y2 = v[1] * ct - z1 * st;
      const z2 = v[1] * st + z1 * ct;
      return [this.CX + x1 * this.R * alt, this.CY - y2 * this.R * alt, z2];
    }

    occluded(sx, sy, z) {
      return z < 0 && Math.hypot(sx - this.CX, sy - this.CY) < this.R;
    }

    onDown(e) {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target.closest('a, button, input, select, textarea')) return;
      this.dragging = true;
      this.px = e.clientX;
      this.py = e.clientY;
      this.pt = performance.now();
      this.vel = 0;
      this.classList.add('is-dragging');
    }

    onMove(e) {
      if (!this.dragging) return;
      const now = performance.now();
      const dx = e.clientX - this.px;
      const dy = e.clientY - this.py;
      const dRot = dx / this.R;
      this.rot += dRot;
      this.tilt = Math.min(0.75, Math.max(0.05, this.tilt + dy / this.R / 2));
      this.vel = dRot / Math.max(now - this.pt, 8);
      this.px = e.clientX;
      this.py = e.clientY;
      this.pt = now;
      this.requestDraw();
    }

    onUp() {
      if (!this.dragging) return;
      this.dragging = false;
      this.classList.remove('is-dragging');
      this.requestDraw();
    }

    requestDraw() {
      if (!this.raf) this.raf = requestAnimationFrame(this.frame);
    }

    frame(t) {
      this.raf = null;
      const dt = this.last ? Math.min(t - this.last, 50) : 16;
      this.last = t;
      if (!this.reduced) this.time += dt;
      if (!this.dragging) {
        this.rot += this.autoSpeed * dt + this.vel * dt;
        this.vel *= 0.94;
        if (Math.abs(this.vel) < 1e-6) this.vel = 0;
      }
      this.draw();
      const moving = !this.reduced || this.dragging || this.vel !== 0;
      if (moving && this.visible && document.visibilityState === 'visible') this.requestDraw();
      else this.last = 0;
    }

    draw() {
      const { ctx, W, H, R, CX, CY, gold, goldSoft, fg } = this;
      ctx.clearRect(0, 0, W, H);

      const halo = ctx.createRadialGradient(CX, CY, R * 0.7, CX, CY, R * 1.6);
      halo.addColorStop(0, `rgba(${gold},0.10)`);
      halo.addColorStop(0.35, 'rgba(48,70,130,0.16)');
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, W, H);

      const body = ctx.createRadialGradient(CX - R * 0.35, CY - R * 0.45, R * 0.1, CX, CY, R);
      body.addColorStop(0, '#1b2740');
      body.addColorStop(0.7, '#0e1424');
      body.addColorStop(1, '#090d17');
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();

      const rim = ctx.createLinearGradient(CX - R, CY - R, CX + R, CY + R);
      rim.addColorStop(0, `rgba(${goldSoft},0.55)`);
      rim.addColorStop(0.5, `rgba(${gold},0.12)`);
      rim.addColorStop(1, `rgba(${goldSoft},0.35)`);
      ctx.strokeStyle = rim;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      this.drawGraticule();
      this.drawLand();
      if (this.showRoutes) this.drawRoutes();
      this.drawPins();
      if (this.showPlane) this.drawPlane();

      const shine = ctx.createRadialGradient(CX - R * 0.45, CY - R * 0.55, 0, CX - R * 0.45, CY - R * 0.55, R * 0.9);
      shine.addColorStop(0, `rgba(${fg},0.07)`);
      shine.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.fillStyle = shine;
      ctx.fill();
    }

    drawGraticule() {
      const { ctx, fg } = this;
      ctx.lineWidth = 0.6;
      const line = (pointAt, steps) => {
        ctx.beginPath();
        let pen = false;
        for (let j = 0; j <= steps; j++) {
          const [x, y, z] = this.project(pointAt(j / steps));
          if (z < 0) {
            pen = false;
            continue;
          }
          pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
          pen = true;
        }
        ctx.stroke();
      };
      ctx.strokeStyle = `rgba(${fg},0.08)`;
      for (let lat = -60; lat <= 60; lat += 30) line((f) => toVec(lat, f * 360 - 180), 90);
      ctx.strokeStyle = `rgba(${fg},0.055)`;
      for (let lng = -180; lng < 180; lng += 30) line((f) => toVec(f * 180 - 90, lng), 60);
    }

    drawLand() {
      const { ctx, goldSoft } = this;
      for (const v of this.dots) {
        const [x, y, z] = this.project(v);
        if (z < 0.03) continue;
        ctx.fillStyle = `rgba(${goldSoft},${0.16 + z * 0.62})`;
        ctx.beginPath();
        ctx.arc(x, y, 0.75 + z * 1.05, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    drawRoutes() {
      const { ctx, gold, goldSoft } = this;
      const steps = 48;
      this.routes.forEach(([a, b], i) => {
        const pts = [];
        for (let j = 0; j <= steps; j++) {
          const f = j / steps;
          pts.push(this.project(slerp(a, b, f), 1 + Math.sin(f * Math.PI) * 0.16));
        }
        ctx.beginPath();
        let pen = false;
        for (const [x, y, z] of pts) {
          if (this.occluded(x, y, z)) {
            pen = false;
            continue;
          }
          pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
          pen = true;
        }
        ctx.setLineDash([3, 5]);
        ctx.lineDashOffset = -this.time * 0.02;
        ctx.strokeStyle = `rgba(${gold},0.55)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);

        const head = ((this.time / 3200 + i * 0.37) % 1) * steps;
        const [hx, hy, hz] = pts[Math.floor(head)];
        if (!this.occluded(hx, hy, hz)) {
          const g = ctx.createRadialGradient(hx, hy, 0, hx, hy, 7);
          g.addColorStop(0, `rgba(${goldSoft},0.95)`);
          g.addColorStop(1, `rgba(${goldSoft},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(hx, hy, 7, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    drawPins() {
      const { ctx, gold, goldSoft, fg } = this;
      const pulse = (this.time % 2400) / 2400;
      ctx.font = `600 10px ${this.font}`;
      ctx.textBaseline = 'middle';
      const placed = [];
      const clearOfText = (bx, by, bw) => !(this.avoid || []).some(([l, t, r, b]) => bx < r && bx + bw > l && by + 6 > t && by - 6 < b);
      const fits = (bx, by, bw) =>
        clearOfText(bx, by, bw) && !placed.some(([px, py, pw]) => bx < px + pw + 4 && bx + bw + 4 > px && Math.abs(by - py) < 13);
      const visible = this.pins.map((p) => [p, this.project(p.v)]).filter(([, pr]) => pr[2] >= 0.05).sort((a, b) => b[1][2] - a[1][2]);
      for (const [p, [x, y, z]] of visible) {
        ctx.strokeStyle = `rgba(${gold},${(1 - pulse) * 0.8 * z})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 2 + pulse * 9, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = `rgba(${goldSoft},${0.5 + z * 0.5})`;
        ctx.beginPath();
        ctx.arc(x, y, 2 + z * 1.3, 0, Math.PI * 2);
        ctx.fill();
        if (z > 0.4 && p.code) {
          const label = p.code.split('').join(String.fromCharCode(8202));
          const w = ctx.measureText(label).width;
          let lx = x + 7;
          if (!fits(lx, y - 8, w)) lx = x - 7 - w;
          if (fits(lx, y - 8, w)) {
            placed.push([lx, y - 8, w]);
            ctx.fillStyle = `rgba(${fg},${(z - 0.4) * 1.4})`;
            ctx.fillText(label, lx, y - 8);
          }
        }
      }
    }

    planeAt(a) {
      const Ro = 1.26;
      const inc = 0.42;
      const roll = -0.22;
      const x = Ro * Math.cos(a);
      const y = -Ro * Math.sin(a) * Math.sin(inc);
      const z = Ro * Math.sin(a) * Math.cos(inc);
      const xr = x * Math.cos(roll) - y * Math.sin(roll);
      const yr = x * Math.sin(roll) + y * Math.cos(roll);
      return [this.CX + xr * this.R, this.CY - yr * this.R, z];
    }

    drawPlane() {
      const { ctx, goldSoft } = this;
      const a = this.reduced ? 1.9 : this.time * ((Math.PI * 2) / 15000) + 1.2;

      ctx.lineCap = 'round';
      for (let k = 1; k < 46; k++) {
        const [x1, y1, z1] = this.planeAt(a - k * 0.018);
        const [x2, y2, z2] = this.planeAt(a - (k - 1) * 0.018);
        if (this.occluded(x1, y1, z1) || this.occluded(x2, y2, z2)) continue;
        ctx.strokeStyle = `rgba(${goldSoft},${0.42 * (1 - k / 46)})`;
        ctx.lineWidth = 1.6 * (1 - k / 60);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      const [px, py, pz] = this.planeAt(a);
      if (this.occluded(px, py, pz)) return;
      const [nx, ny] = this.planeAt(a + 0.01);
      const ang = Math.atan2(ny - py, nx - px);
      const s = 1.05 + pz * 0.22;

      const glow = ctx.createRadialGradient(px, py, 0, px, py, 22 * s);
      glow.addColorStop(0, `rgba(${goldSoft},0.28)`);
      glow.addColorStop(1, `rgba(${goldSoft},0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(px, py, 22 * s, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(ang + Math.PI / 2);
      ctx.scale(s, s);
      ctx.fillStyle = '#f3e3b8';
      ctx.beginPath();
      ctx.moveTo(0, -11);
      ctx.bezierCurveTo(1.6, -10, 2, -7, 2, -4);
      ctx.lineTo(11, 2);
      ctx.lineTo(11, 4.4);
      ctx.lineTo(2, 1.6);
      ctx.lineTo(1.5, 8);
      ctx.lineTo(4.6, 10.6);
      ctx.lineTo(4.6, 12.4);
      ctx.lineTo(0, 11.2);
      ctx.lineTo(-4.6, 12.4);
      ctx.lineTo(-4.6, 10.6);
      ctx.lineTo(-1.5, 8);
      ctx.lineTo(-2, 1.6);
      ctx.lineTo(-11, 4.4);
      ctx.lineTo(-11, 2);
      ctx.lineTo(-2, -4);
      ctx.bezierCurveTo(-2, -7, -1.6, -10, 0, -11);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }

  customElements.define('flytz-globe', FlytzGlobe);
})();
