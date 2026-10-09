/* Hosted-preview stand-ins for what Shopify serves on a live store: the Section Rendering API
   (capsule products), /cart/add, Dawn's cart drawer and the hand-off to checkout. */
(() => {
  const CATALOG = window.FLYTZ_CATALOG || { variants: {} };
  const CAPSULES = window.FLYTZ_CAPSULES || {};
  const KEY = 'flytz-preview-cart';
  let memory = [];

  const read = () => {
    try {
      const raw = window.sessionStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : memory;
    } catch (e) {
      return memory;
    }
  };
  const write = (lines) => {
    memory = lines;
    try {
      window.sessionStorage.setItem(KEY, JSON.stringify(lines));
    } catch (e) {
      /* storage can be unavailable; the in-memory cart still works on this page */
    }
  };
  const money = (cents) => '£' + (cents / 100).toFixed(2);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  const lines = () => read().filter((l) => CATALOG.variants[l.id]);
  const subtotal = () => lines().reduce((s, l) => s + CATALOG.variants[l.id].price * l.qty, 0);
  const count = () => lines().reduce((s, l) => s + l.qty, 0);

  const add = (id) => {
    const v = CATALOG.variants[id];
    if (!v) return { status: 404, description: 'This piece is no longer available.' };
    if (!v.available) return { status: 422, description: 'This size is sold out.' };
    const all = read();
    const line = all.find((l) => l.id === id);
    if (line) line.qty += 1;
    else all.push({ id, qty: 1 });
    write(all);
    return null;
  };

  const lineHtml = (l) => {
    const v = CATALOG.variants[l.id];
    return `<div class="pv-line">
      <img src="${v.img}" alt="" width="64" height="80">
      <div class="pv-line__info"><a href="${v.url}">${esc(v.title)}</a><span>${v.variant ? esc(v.variant) + ' · ' : ''}${esc(v.capsule)} capsule</span><span>Qty ${l.qty}</span></div>
      <div class="pv-line__end"><strong>${money(v.price * l.qty)}</strong><button type="button" data-remove="${l.id}" aria-label="Remove ${esc(v.title)}">Remove</button></div>
    </div>`;
  };
  const itemsHtml = () =>
    lines().length ? lines().map(lineHtml).join('') : '<p class="pv-drawer__empty">Your cabin bag is empty.<br>Pick a destination to start packing.</p>';

  const refresh = () => {
    document.querySelectorAll('[data-cart-count]').forEach((el) => (el.textContent = count()));
    document.querySelectorAll('[data-cart-items]').forEach((el) => (el.innerHTML = itemsHtml()));
    document.querySelectorAll('[data-cart-subtotal]').forEach((el) => (el.textContent = money(subtotal())));
    document.querySelectorAll('[data-cart-checkout]').forEach((el) => (el.disabled = !lines().length));
  };

  window.FlytzPreview = { read, write, lines, subtotal, money, esc, refresh, catalog: CATALOG };

  const realFetch = window.fetch.bind(window);
  window.fetch = async (input, init = {}) => {
    const url = new URL(typeof input === 'string' ? input : input.url, window.location.href);
    if (url.searchParams.get('section_id') === 'flytz-capsule-products') {
      const handle = (/collection-([\w-]+)\.html$/.exec(url.pathname) || [])[1];
      await delay(380);
      const html = CAPSULES[handle];
      return new Response(html ? `<div id="shopify-section-flytz-capsule-products" class="shopify-section">${html}</div>` : 'Not found', {
        status: html ? 200 : 404,
        headers: { 'Content-Type': 'text/html' },
      });
    }
    if (/\/cart\/add(\.js)?$/.test(url.pathname)) {
      const id = String(init.body && typeof init.body.get === 'function' ? init.body.get('id') : '');
      await delay(260);
      const error = add(id);
      const body = error || { id: Number(id), quantity: 1, sections: { 'cart-drawer': itemsHtml(), 'cart-icon-bubble': String(count()) } };
      return new Response(JSON.stringify(body), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    return realFetch(input, init);
  };

  // The hosted preview can't post a form; go to the checkout stand-in instead.
  const nativeSubmit = HTMLFormElement.prototype.submit;
  HTMLFormElement.prototype.submit = function () {
    if (this.id === 'CartDrawer-Form') {
      window.location.href = 'confirmation.html';
      return;
    }
    return nativeSubmit.call(this);
  };

  customElements.define(
    'cart-drawer',
    class extends HTMLElement {
      connectedCallback() {
        this.overlay = document.querySelector('.pv-drawer-overlay');
        this.overlay?.addEventListener('click', () => this.close());
        this.querySelector('.pv-drawer__close')?.addEventListener('click', () => this.close());
        this.addEventListener('click', (e) => {
          const rm = e.target.closest('[data-remove]');
          if (!rm) return;
          write(read().filter((l) => l.id !== rm.dataset.remove));
          refresh();
        });
        this.querySelector('form')?.addEventListener('submit', (e) => {
          if (!e.defaultPrevented) {
            e.preventDefault();
            window.location.href = 'confirmation.html';
          }
        });
        refresh();
      }
      getSectionsToRender() {
        return [{ id: 'cart-drawer' }, { id: 'cart-icon-bubble' }];
      }
      setActiveElement(el) {
        this.activeElement = el;
      }
      renderContents() {
        refresh();
        this.open();
      }
      open(trigger) {
        if (trigger) this.activeElement = trigger;
        refresh();
        this.classList.add('active');
        this.setAttribute('aria-hidden', 'false');
        this.removeAttribute('inert');
        this.overlay?.classList.add('is-on');
        setTimeout(() => this.querySelector('.pv-drawer__close')?.focus({ preventScroll: true }), 50);
      }
      close() {
        if (!this.classList.contains('active')) return;
        this.classList.remove('active');
        this.setAttribute('aria-hidden', 'true');
        this.setAttribute('inert', '');
        this.overlay?.classList.remove('is-on');
        if (this.activeElement && document.contains(this.activeElement)) this.activeElement.focus({ preventScroll: true });
      }
    }
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelector('cart-drawer.active')?.close();
  });

  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-open-cart]');
    if (opener) {
      e.preventDefault();
      document.querySelector('cart-drawer')?.open(opener);
      return;
    }
    const buy = e.target.closest('[data-preview-add]');
    if (buy) {
      const form = buy.closest('form');
      const picked = form.querySelector('input[name="id"]:checked') || form.querySelector('input[type="hidden"][name="id"]');
      const msg = form.querySelector('.pv-error');
      const error = picked ? add(picked.value) : { description: 'Choose a size first.' };
      if (msg) msg.textContent = error ? error.description : '';
      if (!error) {
        const label = buy.textContent;
        buy.textContent = 'Packed ✓';
        setTimeout(() => (buy.textContent = label), 1400);
        document.querySelector('cart-drawer')?.open(buy);
      }
    }
  });

  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.matches('[data-preview-newsletter]')) {
      e.preventDefault();
      form.innerHTML = '<p>You’re on the flight list. First departures land in your inbox.</p>';
    }
    if (form.matches('[data-preview-product]')) e.preventDefault();
  });

  document.addEventListener('DOMContentLoaded', refresh);
})();
