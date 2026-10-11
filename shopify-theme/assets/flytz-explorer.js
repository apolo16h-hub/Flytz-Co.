/* Flytz destination explorer — region map → country chips → slide-in capsule panel.
   Real destinations load their products through the Section Rendering API
   (collection URL + ?section_id=flytz-capsule-products) so prices follow the shopper's market. */
(() => {
  if (customElements.get('flytz-explorer')) return;

  const MAP = { w: 1000, h: 501, latTop: 84, latBottom: -58 };
  const miller = (lat) => 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * (lat * Math.PI) / 180));
  const yTop = miller(MAP.latTop);
  const yBot = miller(MAP.latBottom);
  const projectMap = (lat, lng) => {
    const clamped = Math.max(Math.min(lat, MAP.latTop), MAP.latBottom);
    return [((lng + 180) / 360) * MAP.w, ((yTop - miller(clamped)) / (yTop - yBot)) * MAP.h];
  };
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const setHash = (url) => {
    try {
      window.history.replaceState(null, '', url);
    } catch (e) {
      /* sandboxed frames may refuse history updates; the panel works without them */
    }
  };
  const FOCUSABLE = 'a[href], button:not([disabled]), select:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const escapeHtml = (s) =>
    String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  const garmentIcon = (type) => {
    const tee = '<path d="M18 10 L26 6 Q32 12 38 6 L46 10 L52 22 L44 26 L44 56 H20 V26 L12 22 Z"/>';
    const jacket = '<path d="M16 10 L26 5 Q32 11 38 5 L48 10 L54 30 L46 32 L46 58 H18 V32 L10 30 Z"/><path d="M32 11 V58 M24 34 h4 M24 42 h4"/>';
    const trouser = '<path d="M20 6 H44 L46 58 H36 L32 26 L28 58 H18 Z"/><path d="M20 14 H44"/>';
    const knit = '<path d="M18 12 L28 6 Q32 10 36 6 L46 12 L50 24 L44 27 V56 H20 V27 L14 24 Z"/><path d="M20 34 h24 M20 42 h24 M20 50 h24" opacity=".5"/>';
    const acc = '<circle cx="32" cy="34" r="18"/><path d="M24 20 Q32 4 40 20"/>';
    const shorts = '<path d="M18 10 H46 L50 42 H36 L32 26 L28 42 H14 Z"/>';
    const map = { Tee: tee, Shirt: tee, Overshirt: jacket, Jacket: jacket, Parka: jacket, Coat: jacket, Trench: jacket, Blazer: jacket, Set: jacket, Hoodie: knit, Knit: knit, Fleece: knit, Trouser: trouser, Denim: trouser, Shorts: shorts, Accessory: acc };
    return `<svg viewBox="0 0 64 64" aria-hidden="true">${map[type] || tee}</svg>`;
  };

  class FlytzExplorer extends HTMLElement {
    connectedCallback() {
      const cfgEl = this.querySelector('script[data-flytz-destinations]');
      try {
        this.cfg = JSON.parse(cfgEl.textContent);
      } catch (e) {
        console.error('Flytz explorer: invalid destination config', e);
        return;
      }
      this.strings = this.cfg.strings || {};
      this.destinations = (this.cfg.destinations || []).filter((d) => d && d.handle);
      this.cache = new Map();
      this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      this.map = this.querySelector('.flytz-explorer__map');
      this.regionsEl = this.querySelector('.flytz-explorer__regions');
      this.countriesEl = this.querySelector('.flytz-explorer__countries');
      this.panel = this.querySelector('.flytz-panel');
      this.overlay = this.querySelector('.flytz-panel-overlay');
      this.stage = this.panel.querySelector('.flytz-stage');
      this.tiltEl = this.panel.querySelector('.flytz-stage__tilt');
      this.productsEl = this.panel.querySelector('[data-panel-products]');

      this.regions = (this.cfg.regions || []).map((r) => ({
        ...r,
        items: this.destinations.filter((d) => d.region === r.id),
      }));
      const known = new Set(this.regions.map((r) => r.id));
      const orphans = this.destinations.filter((d) => !known.has(d.region));
      if (orphans.length) this.regions.push({ id: 'worldwide', label: this.strings.worldwide || 'Worldwide', items: orphans });

      this.renderRegions();
      this.renderPins();
      this.bind();

      const first = this.regions.find((r) => r.id === this.dataset.defaultRegion && r.items.length) || this.regions.find((r) => r.items.length);
      if (first) this.selectRegion(first.id, false, false);

      const match = /^#destination-([\w-]+)$/.exec(window.location.hash);
      if (match && this.find(match[1])) {
        this.scrollIntoView({ behavior: 'auto', block: 'center' });
        this.open(match[1]);
      }
    }

    disconnectedCallback() {
      document.removeEventListener('click', this.onDocClick, true);
      document.removeEventListener('flytz:open-destination', this.onOpenRequest);
      document.removeEventListener('keydown', this.onKeydown);
      document.documentElement.classList.remove('flytz-locked');
    }

    find(handle) {
      return this.destinations.find((d) => d.handle === handle);
    }

    /* ---------- rendering ---------- */
    renderRegions() {
      this.regionsEl.innerHTML = this.regions
        .map(
          (r) =>
            `<button type="button" class="flytz-chip" data-region="${escapeHtml(r.id)}" aria-pressed="false"${r.items.length ? '' : ' disabled'}>${escapeHtml(r.label)}</button>`
        )
        .join('');
      this.map?.querySelectorAll('.flytz-map-region[data-region]').forEach((path) => {
        const region = this.regions.find((r) => r.id === path.dataset.region);
        const empty = !region || !region.items.length;
        path.classList.toggle('is-empty', empty);
        if (empty) {
          path.setAttribute('aria-disabled', 'true');
          path.setAttribute('tabindex', '-1');
        }
      });
    }

    renderPins() {
      const g = this.map?.querySelector('.flytz-map-pins');
      this.pinEls = [];
      if (!g) return;
      g.textContent = '';
      // Pins are a pointer shortcut; keyboard and screen-reader users have the country chips.
      g.setAttribute('aria-hidden', 'true');
      this.destinations.forEach((d) => {
        if (typeof d.lat !== 'number' || typeof d.lng !== 'number') return;
        const [x, y] = projectMap(d.lat, d.lng);
        const pin = document.createElementNS(SVG_NS, 'g');
        pin.setAttribute('class', 'flytz-map-pin-g');
        pin.dataset.destination = d.handle;
        const hit = document.createElementNS(SVG_NS, 'circle');
        hit.setAttribute('class', 'flytz-map-pin-hit');
        hit.setAttribute('cx', x.toFixed(1));
        hit.setAttribute('cy', y.toFixed(1));
        const ring = document.createElementNS(SVG_NS, 'circle');
        ring.setAttribute('class', 'flytz-map-pin-ring');
        ring.setAttribute('cx', x.toFixed(1));
        ring.setAttribute('cy', y.toFixed(1));
        ring.style.animationDelay = `${(Math.random() * 2).toFixed(2)}s`;
        const dot = document.createElementNS(SVG_NS, 'circle');
        dot.setAttribute('class', 'flytz-map-pin');
        dot.setAttribute('cx', x.toFixed(1));
        dot.setAttribute('cy', y.toFixed(1));
        const label = document.createElementNS(SVG_NS, 'text');
        label.setAttribute('class', 'flytz-map-pin-label');
        label.textContent = d.code || d.title;
        pin.append(hit, ring, dot, label);
        g.append(pin);
        this.pinEls.push({ d, pin, hit, ring, dot, label, x, y });
      });
      this.view = [0, 0, MAP.w, MAP.h];
      this.applyView();
    }

    /* ---------- map zoom ---------- */
    applyView() {
      const [x, y, w, h] = this.view;
      this.map?.setAttribute('viewBox', `${x.toFixed(1)} ${y.toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}`);
      // Pins and labels keep their on-screen size whatever the zoom.
      const k = w / MAP.w;
      this.map?.style.setProperty('--map-k', k.toFixed(4));
      for (const p of this.pinEls || []) {
        p.dot.setAttribute('r', (3.2 * k).toFixed(2));
        p.ring.setAttribute('r', (5 * k).toFixed(2));
        p.hit.setAttribute('r', (11 * k).toFixed(2));
        p.label.setAttribute('x', (p.x + 7 * k).toFixed(2));
        p.label.setAttribute('y', (p.y + 3.6 * k).toFixed(2));
        p.label.setAttribute('font-size', (11 * k).toFixed(2));
      }
    }

    zoomTo(regionId) {
      if (!this.map || !this.pinEls) return;
      const pins = regionId ? this.pinEls.filter((p) => p.d.region === regionId) : [];
      let target = [0, 0, MAP.w, MAP.h];
      if (pins.length) {
        const xs = pins.map((p) => p.x);
        const ys = pins.map((p) => p.y);
        const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
        const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
        let w = Math.max(Math.max(...xs) - Math.min(...xs), 150) * 1.7;
        let h = Math.max(Math.max(...ys) - Math.min(...ys), 90) * 1.7;
        const aspect = MAP.w / MAP.h;
        if (w / h > aspect) h = w / aspect;
        else w = h * aspect;
        w = Math.min(w, MAP.w);
        h = Math.min(h, MAP.h);
        target = [Math.min(Math.max(cx - w / 2, 0), MAP.w - w), Math.min(Math.max(cy - h / 2, 0), MAP.h - h), w, h];
      }
      const zoomed = target[2] < MAP.w - 1;
      this.map.classList.toggle('is-zoomed', zoomed);
      this.pinEls.forEach((p) => p.pin.classList.toggle('is-in-region', !!regionId && p.d.region === regionId));
      if (this.worldBtn) this.worldBtn.hidden = !zoomed;
      cancelAnimationFrame(this.zoomRaf);
      const from = this.view.slice();
      if (this.reduced) {
        this.view = target;
        this.applyView();
        return;
      }
      const start = performance.now();
      const step = (now) => {
        const t = easeInOut(Math.min(1, (now - start) / 900));
        this.view = from.map((v, i) => v + (target[i] - v) * t);
        this.applyView();
        if (t < 1) this.zoomRaf = requestAnimationFrame(step);
      };
      this.zoomRaf = requestAnimationFrame(step);
    }

    selectRegion(id, focusFirst = true, zoom = true) {
      const region = this.regions.find((r) => r.id === id);
      if (!region || !region.items.length) return;
      this.activeRegion = id;
      if (zoom) this.zoomTo(id);
      this.map?.querySelectorAll('.flytz-map-region[data-region]').forEach((p) => p.classList.toggle('is-active', p.dataset.region === id));
      this.regionsEl.querySelectorAll('.flytz-chip').forEach((c) => {
        const on = c.dataset.region === id;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      this.countriesEl.innerHTML = region.items
        .map(
          (d, i) =>
            `<button type="button" class="flytz-chip flytz-chip--country" style="--i:${i}" data-destination="${escapeHtml(d.handle)}" aria-haspopup="dialog">${escapeHtml(d.title)}${d.code ? `<b>${escapeHtml(d.code)}</b>` : ''}</button>`
        )
        .join('');
      if (focusFirst) this.countriesEl.querySelector('button')?.focus({ preventScroll: true });
    }

    /* ---------- events ---------- */
    bind() {
      this.regionsEl.addEventListener('click', (e) => {
        const chip = e.target.closest('[data-region]');
        if (chip && !chip.disabled) this.selectRegion(chip.dataset.region, false);
      });
      this.map?.addEventListener('click', (e) => {
        const pin = e.target.closest('.flytz-map-pin-g');
        if (pin) {
          this.open(pin.dataset.destination);
          return;
        }
        const path = e.target.closest('.flytz-map-region[data-region]');
        if (path && !path.classList.contains('is-empty')) this.selectRegion(path.dataset.region, false);
      });
      // "World view" zooms the map back out.
      const wrap = this.querySelector('.flytz-explorer__map-wrap');
      if (wrap && this.map) {
        this.worldBtn = document.createElement('button');
        this.worldBtn.type = 'button';
        this.worldBtn.className = 'flytz-explorer__world';
        this.worldBtn.hidden = true;
        this.worldBtn.textContent = this.strings.world_view || 'World view';
        this.worldBtn.addEventListener('click', () => this.zoomTo(null));
        wrap.append(this.worldBtn);
      }
      this.map?.addEventListener('keydown', (e) => {
        const path = e.target.closest('.flytz-map-region[data-region]');
        if (path && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          this.selectRegion(path.dataset.region, true);
        }
      });
      this.countriesEl.addEventListener('click', (e) => {
        const chip = e.target.closest('[data-destination]');
        if (chip) this.open(chip.dataset.destination, chip);
      });
      this.panel.querySelector('.flytz-panel__close').addEventListener('click', () => this.close());
      this.overlay.addEventListener('click', () => this.close());
      this.productsEl.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-flytz-add]');
        if (btn) this.addToCart(btn);
      });

      this.onDocClick = (e) => {
        const trigger = e.target.closest('[data-flytz-open]');
        if (!trigger || this.contains(trigger)) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button > 0) return;
        if (!this.find(trigger.dataset.flytzOpen)) return;
        e.preventDefault();
        this.open(trigger.dataset.flytzOpen, trigger);
      };
      document.addEventListener('click', this.onDocClick, true);

      // Globe pins and other sections ask for a capsule through Flytz.openDestination().
      this.onOpenRequest = (e) => {
        const handle = e.detail && e.detail.handle;
        if (!handle || !this.find(handle)) return;
        e.preventDefault();
        this.open(handle, e.detail.trigger);
      };
      document.addEventListener('flytz:open-destination', this.onOpenRequest);

      this.onKeydown = (e) => {
        if (!this.panel.classList.contains('is-open')) return;
        if (document.querySelector('cart-drawer.active, cart-notification .active')) return;
        if (e.key === 'Escape') {
          e.preventDefault();
          this.close();
        } else if (e.key === 'Tab') {
          const items = [...this.panel.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);
          if (!items.length) return;
          const first = items[0];
          const last = items[items.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          } else if (!this.panel.contains(document.activeElement)) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener('keydown', this.onKeydown);

      if (!this.reduced) {
        const area = this.panel.querySelector('.flytz-panel__destination');
        area.addEventListener('pointermove', (e) => {
          const r = area.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          this.tiltEl.style.setProperty('--tilt-y', `${(nx * 16).toFixed(2)}deg`);
          this.tiltEl.style.setProperty('--tilt-x', `${(-ny * 10).toFixed(2)}deg`);
        });
        area.addEventListener('pointerleave', () => {
          this.tiltEl.style.removeProperty('--tilt-y');
          this.tiltEl.style.removeProperty('--tilt-x');
        });
      }
    }

    /* ---------- panel ---------- */
    open(handle, trigger) {
      const d = this.find(handle);
      if (!d) return;
      if (d.region && d.region !== this.activeRegion) this.selectRegion(d.region, false, false);
      this.countriesEl.querySelectorAll('[data-destination]').forEach((c) => c.classList.toggle('is-active', c.dataset.destination === handle));
      this.lastFocus = trigger || document.activeElement;
      this.current = d;

      const palette = /^#[0-9a-f]{3,8}$/i.test(d.palette || '') ? d.palette : '#1a2236';
      this.panel.style.setProperty('--dest-tint', palette);
      this.panel.querySelector('[data-panel-title]').textContent = d.title;
      this.panel.querySelector('[data-panel-route]').textContent = d.code ? `${this.strings.origin || 'FLZ'} → ${d.code}` : this.strings.origin || 'FLZ';
      this.panel.querySelector('[data-panel-tagline]').textContent = d.tagline || '';
      const link = this.panel.querySelector('[data-panel-link]');
      if (link) link.href = d.url;

      const tpl = this.querySelector(`template[data-monument="${CSS.escape(d.monument || 'globe')}"]`) || this.querySelector('template[data-monument="globe"]');
      this.tiltEl.replaceChildren(tpl ? tpl.content.cloneNode(true) : '');
      this.stage.querySelector('flytz-landmark')?.setAttribute('monument', d.monument || 'globe');
      this.stage.classList.remove('is-drawing');
      void this.stage.offsetWidth;
      this.stage.classList.add('is-drawing');

      this.loadProducts(d);

      this.panel.removeAttribute('inert');
      this.panel.setAttribute('aria-hidden', 'false');
      this.panel.classList.add('is-open');
      this.overlay.classList.add('is-on');
      document.documentElement.classList.add('flytz-locked');
      this.panel.querySelector('.flytz-panel__close').focus({ preventScroll: true });
      setHash(`#destination-${handle}`);
      document.dispatchEvent(
        new CustomEvent('flytz:destination-viewed', {
          detail: { handle: d.handle, title: d.title, code: d.code, url: d.url, palette: d.palette, monument: d.monument },
        })
      );
    }

    close() {
      if (!this.panel.classList.contains('is-open')) return;
      this.panel.classList.remove('is-open');
      this.panel.setAttribute('aria-hidden', 'true');
      this.panel.setAttribute('inert', '');
      this.overlay.classList.remove('is-on');
      document.documentElement.classList.remove('flytz-locked');
      if (/^#destination-/.test(window.location.hash)) setHash(window.location.pathname + window.location.search);
      if (this.lastFocus && document.contains(this.lastFocus)) this.lastFocus.focus({ preventScroll: true });
    }

    async loadProducts(d) {
      const el = this.productsEl;
      el.scrollTop = 0;
      el.setAttribute('aria-busy', 'true');

      if (Array.isArray(d.products)) {
        el.innerHTML = this.demoProductsHtml(d);
        el.removeAttribute('aria-busy');
        return;
      }

      el.innerHTML = `<p class="visually-hidden">${escapeHtml(this.strings.loading || 'Loading')}</p>${'<div class="flytz-skeleton"></div>'.repeat(4)}`;
      try {
        let html = this.cache.get(d.handle);
        if (!html) {
          const url = new URL(d.url, window.location.origin);
          url.searchParams.set('section_id', 'flytz-capsule-products');
          if (this.dataset.pieceOrder && this.dataset.pieceOrder !== 'manual') url.searchParams.set('sort_by', this.dataset.pieceOrder);
          const res = await fetch(url.toString(), { credentials: 'same-origin' });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
          const capsule = doc.querySelector('.flytz-capsule');
          if (!capsule) throw new Error('Capsule section missing');
          html = capsule.outerHTML;
          this.cache.set(d.handle, html);
        }
        if (this.current !== d) return;
        el.innerHTML = html;
      } catch (err) {
        console.error('Flytz explorer:', err);
        if (this.current !== d) return;
        el.innerHTML = `<p class="flytz-capsule__empty">${escapeHtml(this.strings.error || 'Something went wrong.')}</p><div class="flytz-capsule__footer"><a class="button button--secondary" href="${escapeHtml(d.url)}">${escapeHtml(this.strings.view_collection || 'View collection')}</a></div>`;
      } finally {
        el.removeAttribute('aria-busy');
      }
    }

    demoProductsHtml(d) {
      const items = d.products
        .map(
          (p, i) => `
        <article class="flytz-capsule__item" style="--i:${i}">
          <div class="flytz-capsule__media">${garmentIcon(p.type)}</div>
          <div>
            <span class="flytz-capsule__title">${escapeHtml(p.title)}</span>
            <span class="flytz-capsule__type">${escapeHtml(p.type)} · ${escapeHtml(p.note)}</span>
          </div>
          <div class="flytz-capsule__buy">
            <span class="flytz-capsule__price">${escapeHtml(p.price)}</span>
            <button type="button" class="flytz-capsule__add" disabled title="${escapeHtml(this.strings.demo_hint || '')}">${escapeHtml(this.strings.demo_add || 'Sample')}</button>
          </div>
        </article>`
        )
        .join('');
      return `<p class="flytz-panel__count">${escapeHtml(this.strings.demo_hint || '')}</p>${items}`;
    }

    /* ---------- cart (Dawn drawer / notification aware) ---------- */
    async addToCart(button) {
      if (button.disabled || button.getAttribute('aria-busy') === 'true') return;
      const item = button.closest('.flytz-capsule__item');
      const input = item?.querySelector('[name="id"]');
      if (!input || !input.value) return;
      item.querySelector('.flytz-capsule__error')?.remove();

      const label = button.textContent;
      button.setAttribute('aria-busy', 'true');
      button.textContent = this.strings.adding || 'Adding…';

      const cart = document.querySelector('cart-drawer') || document.querySelector('cart-notification');
      const body = new FormData();
      body.append('id', input.value);
      body.append('quantity', '1');
      if (cart && typeof cart.getSectionsToRender === 'function') {
        body.append('sections', cart.getSectionsToRender().map((s) => s.id));
        body.append('sections_url', window.location.pathname);
        cart.setActiveElement?.(button);
      }

      try {
        const addUrl = (window.routes && window.routes.cart_add_url) || '/cart/add';
        const res = await fetch(addUrl, {
          method: 'POST',
          headers: { Accept: 'application/javascript', 'X-Requested-With': 'XMLHttpRequest' },
          body,
        });
        const data = await res.json();
        if (data.status) throw new Error(data.description || data.message || this.strings.error);

        if (!cart) {
          window.location = (window.routes && window.routes.cart_url) || '/cart';
          return;
        }
        if (typeof publish === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
          publish(PUB_SUB_EVENTS.cartUpdate, { source: 'flytz-explorer', productVariantId: input.value, cartData: data });
        }
        cart.classList.remove('is-empty');
        cart.renderContents(data);

        button.textContent = this.strings.added || 'Added';
        button.classList.add('is-added');
        setTimeout(() => {
          button.textContent = label;
          button.classList.remove('is-added');
        }, 1600);
      } catch (err) {
        button.textContent = label;
        const p = document.createElement('p');
        p.className = 'flytz-capsule__error';
        p.setAttribute('role', 'alert');
        p.textContent = err.message || this.strings.error || 'Something went wrong.';
        item.append(p);
      } finally {
        button.removeAttribute('aria-busy');
      }
    }
  }

  customElements.define('flytz-explorer', FlytzExplorer);
})();
