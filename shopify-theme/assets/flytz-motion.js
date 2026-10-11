/* Flytz motion layer.
   Loads the WebGL scenes (assets/flytz-3d.js) on devices that can run them; everything else keeps
   the lighter 2D versions. Shoppers with data saver on, or on low-memory devices, never download it. */
(() => {
  if (window.Flytz && window.Flytz.load3D) return;
  const Flytz = (window.Flytz = window.Flytz || {});
  const cfg = window.flytzConfig || {};

  let capable = null;
  Flytz.can3D = () => {
    if (capable !== null) return capable;
    capable = false;
    if (!cfg.threeD || !cfg.threeSrc) return capable;
    const conn = navigator.connection;
    if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ''))) return capable;
    if ((navigator.deviceMemory || 4) < 2 || (navigator.hardwareConcurrency || 4) < 3) return capable;
    try {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (gl) {
        capable = true;
        const lose = gl.getExtension('WEBGL_lose_context');
        if (lose) lose.loseContext();
      }
    } catch (e) {
      capable = false;
    }
    return capable;
  };

  let pending = null;
  /** Resolves with the Flytz3D library, or rejects when 3D is off or unavailable. */
  Flytz.load3D = () => {
    if (pending) return pending;
    pending = new Promise((resolve, reject) => {
      if (window.Flytz3D) return resolve(window.Flytz3D);
      if (!Flytz.can3D()) return reject(new Error('Flytz 3D unavailable'));
      const script = document.createElement('script');
      script.src = cfg.threeSrc;
      script.async = true;
      script.fetchPriority = 'low';
      script.onload = () => (window.Flytz3D ? resolve(window.Flytz3D) : reject(new Error('Flytz 3D failed to start')));
      script.onerror = () => reject(new Error('Flytz 3D failed to load'));
      document.head.appendChild(script);
    });
    pending.catch(() => {});
    return pending;
  };

  /* ---------- <flytz-landmark>: a real-time 3D landmark over the SVG line art ----------
     data-mode="card" turns on its own and leans towards the pointer; "stage" and "panel" can be
     dragged. The panel's landmark follows its `monument` attribute and builds up on every change. */
  if (!customElements.get('flytz-landmark')) {
    class FlytzLandmark extends HTMLElement {
      static get observedAttributes() {
        return ['monument'];
      }

      connectedCallback() {
        this.host = this.parentElement;
        if (this.view || this.io || !Flytz.can3D()) return;
        if (this.dataset.mode === 'panel' && !this.getAttribute('monument')) return;
        this.io = new IntersectionObserver((entries) => entries.some((e) => e.isIntersecting) && this.mount(), { rootMargin: '250px' });
        this.io.observe(this);
      }

      disconnectedCallback() {
        this.io?.disconnect();
        this.io = null;
        this.teardown();
      }

      attributeChangedCallback(name, oldValue, value) {
        if (!value || oldValue === value) return;
        if (this.view) this.view.setMonument(value, { reveal: true });
        else if (this.isConnected && this.dataset.mode === 'panel' && Flytz.can3D()) this.mount();
      }

      mount() {
        if (this.mounting) return;
        this.mounting = true;
        this.io?.disconnect();
        this.io = null;
        Flytz.load3D()
          .then((lib) => {
            if (!this.isConnected) return;
            const accent = getComputedStyle(this).getPropertyValue('--flytz-gold').trim();
            this.view = lib.createLandmark(this, {
              monument: this.getAttribute('monument') || undefined,
              mode: this.dataset.mode || 'stage',
              accent: accent || undefined,
              hoverTarget: this.closest('.flytz-dest-card') || undefined,
              onContextLost: () => this.teardown(),
            });
            this.view.ready.then(() => {
              if (!this.view) return;
              this.classList.add('is-ready');
              this.host?.classList.add('has-3d');
            });
          })
          .catch(() => {})
          .finally(() => {
            this.mounting = false;
          });
      }

      teardown() {
        this.view?.dispose();
        this.view = null;
        this.classList.remove('is-ready');
        this.host?.classList.remove('has-3d');
      }
    }
    customElements.define('flytz-landmark', FlytzLandmark);
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- <flytz-board>: split-flap departures board ---------- */
  if (!customElements.get('flytz-board')) {
    const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:·→';
    const queue = new Set();
    let raf = 0;
    const pump = (now) => {
      raf = 0;
      for (const job of queue) {
        if (now < job.next) continue;
        const ch = job.steps.shift();
        job.tile.textContent = ch;
        job.tile.classList.remove('is-flip');
        void job.tile.offsetWidth;
        job.tile.classList.add('is-flip');
        job.next = now + 46;
        if (!job.steps.length) queue.delete(job);
      }
      if (queue.size) raf = requestAnimationFrame(pump);
    };
    const schedule = (tile, final, delay) => {
      const steps = [];
      const spins = final === ' ' ? 2 : 3 + Math.floor(Math.random() * 5);
      for (let i = 0; i < spins; i++) steps.push(CHARSET[Math.floor(Math.random() * CHARSET.length)]);
      steps.push(final === ' ' ? '\u00a0' : final);
      queue.add({ tile, steps, next: performance.now() + delay });
      if (!raf) raf = requestAnimationFrame(pump);
    };

    class FlytzBoard extends HTMLElement {
      connectedCallback() {
        if (this.cells) return;
        try {
          this.statuses = JSON.parse(this.dataset.statuses || '{}');
        } catch (e) {
          this.statuses = {};
        }
        const statusWidth = Math.max(0, ...Object.values(this.statuses).map((v) => v.length));
        this.cells = [...this.querySelectorAll('[data-flap]')].map((cell) => {
          const text = cell.textContent.trim();
          const width = cell.hasAttribute('data-status') ? Math.max(statusWidth, text.length) : text.length;
          const label = document.createElement('span');
          label.className = 'visually-hidden';
          label.textContent = text;
          const tiles = document.createElement('span');
          tiles.className = 'flytz-flaps';
          tiles.setAttribute('aria-hidden', 'true');
          for (let i = 0; i < width; i++) {
            const t = document.createElement('span');
            t.className = 'flytz-flap';
            t.textContent = reduced ? text[i] || '\u00a0' : '\u00a0';
            tiles.append(t);
          }
          cell.replaceChildren(label, tiles);
          return { cell, label, tiles: [...tiles.children], text };
        });
        this.tickClock();
        this.clockTimer = setInterval(() => this.tickClock(), 15000);
        if (reduced) return;
        this.io = new IntersectionObserver(
          (entries) => {
            if (!entries.some((e) => e.isIntersecting)) return;
            this.io.disconnect();
            this.io = null;
            this.intro();
          },
          { threshold: 0.25 }
        );
        this.io.observe(this);
      }

      disconnectedCallback() {
        this.io?.disconnect();
        clearInterval(this.clockTimer);
        clearInterval(this.statusTimer);
      }

      tickClock() {
        const el = this.querySelector('[data-board-clock]');
        if (!el) return;
        const d = new Date();
        el.textContent = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      }

      flipTo(entry, text, delay = 0) {
        entry.text = text;
        entry.label.textContent = text;
        entry.tiles.forEach((tile, i) => schedule(tile, (text[i] || ' ').toUpperCase(), delay + i * 28));
      }

      intro() {
        const rows = [...this.querySelectorAll('.flytz-board__row:not(.flytz-board__row--head)')];
        this.cells.forEach((entry) => {
          const row = rows.indexOf(entry.cell.closest('.flytz-board__row'));
          this.flipTo(entry, entry.text, Math.max(0, row) * 110);
        });
        // Every few seconds a departure updates, as on a real board.
        const statusCells = this.cells.filter((e) => e.cell.hasAttribute('data-status'));
        const keys = Object.keys(this.statuses);
        if (!statusCells.length || keys.length < 2) return;
        this.statusTimer = setInterval(() => {
          if (document.hidden) return;
          const entry = statusCells[Math.floor(Math.random() * statusCells.length)];
          const current = entry.cell.dataset.status;
          const next = keys[(keys.indexOf(current) + 1 + Math.floor(Math.random() * (keys.length - 1))) % keys.length];
          entry.cell.dataset.status = next;
          this.flipTo(entry, this.statuses[next]);
        }, 5200);
      }
    }
    customElements.define('flytz-board', FlytzBoard);
  }

  /* ---------- section headings rise in word by word ---------- */
  if (!reduced && 'IntersectionObserver' in window) {
    const split = (el) => {
      if (el.dataset.flytzSplit === 'done' || el.children.length) return;
      const text = el.textContent.trim();
      if (!text) return;
      el.dataset.flytzSplit = 'done';
      el.setAttribute('aria-label', text);
      el.textContent = '';
      text.split(/\s+/).forEach((word, i) => {
        const outer = document.createElement('span');
        outer.className = 'flytz-word';
        outer.setAttribute('aria-hidden', 'true');
        const inner = document.createElement('span');
        inner.textContent = word;
        inner.style.setProperty('--w', i);
        outer.append(inner);
        el.append(outer, ' ');
      });
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-revealed');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    const watch = (root = document) => {
      root.querySelectorAll('.flytz-title, [data-flytz-split]').forEach((el) => {
        if (el.dataset.flytzSplit === 'done') return;
        split(el);
        if (el.dataset.flytzSplit === 'done') io.observe(el);
      });
    };
    const start = () => watch();
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
    document.addEventListener('shopify:section:load', (e) => watch(e.target));
  }

  /* ---------- cards tilt towards the pointer, with a moving glare ---------- */
  if (!reduced && finePointer) {
    const TILT = '[data-flytz-tilt], .flytz-dest-card, .card-wrapper, .pv-card';
    const glareHost = (card) => card.querySelector('.card__inner, .pv-card__media') || card;
    let active = null;
    let frame = 0;
    let last = null;
    const apply = () => {
      frame = 0;
      if (!active || !last) return;
      const r = active.getBoundingClientRect();
      const x = (last.clientX - r.left) / r.width;
      const y = (last.clientY - r.top) / r.height;
      active.style.setProperty('--flytz-ry', `${((x - 0.5) * 10).toFixed(2)}deg`);
      active.style.setProperty('--flytz-rx', `${((0.5 - y) * 8).toFixed(2)}deg`);
      active.style.setProperty('--flytz-gx', `${(x * 100).toFixed(1)}%`);
      active.style.setProperty('--flytz-gy', `${(y * 100).toFixed(1)}%`);
    };
    const leave = (card) => {
      card.classList.remove('is-tilting');
      card.style.removeProperty('--flytz-rx');
      card.style.removeProperty('--flytz-ry');
    };
    document.addEventListener(
      'pointermove',
      (e) => {
        const card = e.target instanceof Element ? e.target.closest(TILT) : null;
        if (card !== active) {
          if (active) leave(active);
          active = card;
          if (card) {
            const host = glareHost(card);
            if (!host.querySelector(':scope > .flytz-glare')) {
              const glare = document.createElement('span');
              glare.className = 'flytz-glare';
              glare.setAttribute('aria-hidden', 'true');
              host.append(glare);
            }
            card.classList.add('is-tilting');
          }
        }
        last = e;
        if (active && !frame) frame = requestAnimationFrame(apply);
      },
      { passive: true }
    );
    document.addEventListener('pointerleave', () => active && leave(active), true);
    document.documentElement.addEventListener('mouseleave', () => {
      if (active) leave(active);
      active = null;
    });
  }

  /* ---------- magnetic call-to-action buttons ---------- */
  if (!reduced && finePointer) {
    const MAGNET = '.flytz-hero__ctas .button, .flytz-cta .button, [data-flytz-magnetic]';
    let held = null;
    document.addEventListener(
      'pointermove',
      (e) => {
        const btn = e.target instanceof Element ? e.target.closest(MAGNET) : null;
        if (held && held !== btn) {
          held.style.removeProperty('translate');
          held = null;
        }
        if (!btn) return;
        held = btn;
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        btn.style.translate = `${(dx * 6).toFixed(1)}px ${(dy * 4).toFixed(1)}px`;
      },
      { passive: true }
    );
  }

  /* ---------- scroll progress as a flight path along the top of the page ---------- */
  const flight = document.querySelector('[data-flytz-flight]');
  if (flight) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      flight.style.setProperty('--p', p.toFixed(4));
      flight.classList.toggle('is-airborne', p > 0.01);
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  /** Asks the destination explorer to open a capsule; falls back to the collection page. */
  Flytz.openDestination = (handle, url, trigger) => {
    const request = new CustomEvent('flytz:open-destination', { cancelable: true, detail: { handle, trigger } });
    document.dispatchEvent(request);
    if (!request.defaultPrevented && url) window.location.href = url;
  };
})();
