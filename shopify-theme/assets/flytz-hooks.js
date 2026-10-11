/* Flytz customer hooks: the welcome boarding pass, passport stamps, destination quiz, next-departure
   countdown and sticky add-to-cart. Sign-ups use Shopify's own customer forms; everything the
   shopper collects stays in their own browser (localStorage), and the page works without it. */
(() => {
  if (window.FlytzHooks) return;
  window.FlytzHooks = true;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(key, fallback) {
      try {
        const v = window.localStorage.getItem(key);
        return v ? JSON.parse(v) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        /* private mode or storage blocked: features still work for this visit */
      }
    },
  };
  const fill = (template, values) => String(template || '').replace(/\[(\w+)\]/g, (_, k) => (values[k] ?? ''));
  const busyOverlay = () => document.querySelector('.flytz-panel.is-open, cart-drawer.active, #FlytzBoarding.is-active, .flytz-passport__overlay:not([hidden])');
  const copyText = async (text, button) => {
    try {
      await navigator.clipboard.writeText(text);
      const label = button.textContent;
      button.textContent = button.dataset.copied || 'Copied';
      setTimeout(() => (button.textContent = label), 1800);
    } catch (e) {
      const range = document.createRange();
      const target = button.parentElement.querySelector('strong') || button;
      range.selectNodeContents(target);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  /* ---------- customer forms ---------- */
  // After one customer form is sent, Shopify renders every customer form on the page as sent.
  // The form that really was sent comes back as the URL hash (its action is /contact#form-id).
  const sentForm = () => {
    let el = null;
    try {
      el = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    } catch (e) {
      /* malformed hash */
    }
    return el && el.tagName === 'FORM' ? el : null;
  };
  function scopeFormResults() {
    const sent = sentForm();
    if (!sent) return;
    document.querySelectorAll('form[id]').forEach((form) => {
      if (form === sent || !form.querySelector('[data-form-result]')) return;
      form.querySelectorAll('[data-form-result]').forEach((el) => el.remove());
      form.querySelectorAll('[data-form-fields]').forEach((el) => (el.hidden = false));
      form.querySelectorAll('[aria-invalid]').forEach((el) => {
        el.removeAttribute('aria-invalid');
        el.removeAttribute('aria-describedby');
      });
    });
  }

  /* ---------- welcome boarding pass ---------- */
  function welcome() {
    const card = document.querySelector('[data-flytz-welcome]');
    if (!card) return;
    const KEY = 'flytz.welcome';
    const DAY = 864e5;
    const state = store.get(KEY, {});
    let timer = 0;

    const cleanup = () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseout', onLeave);
    };
    const open = () => {
      if (card.classList.contains('is-open')) return;
      if (busyOverlay()) {
        clearTimeout(timer);
        timer = setTimeout(open, 6000);
        return;
      }
      cleanup();
      card.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('is-open')));
    };
    const close = () => {
      card.classList.remove('is-open');
      store.set(KEY, { ...store.get(KEY, {}), dismissedAt: Date.now() });
      setTimeout(() => (card.hidden = true), reduced ? 0 : 450);
    };
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.6) open();
    }
    function onLeave(e) {
      if (e.clientY <= 0 && !e.relatedTarget) open();
    }

    card.querySelector('[data-welcome-close]')?.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && card.classList.contains('is-open')) close();
    });
    const copy = card.querySelector('[data-welcome-copy]');
    copy?.addEventListener('click', () => copyText(card.querySelector('[data-welcome-code]').textContent.trim(), copy));

    // Signed up with any form on this page: no need to ask again.
    if (card.querySelector('[data-welcome-success]')) {
      state.subscribedAt = Date.now();
      store.set(KEY, state);
    }
    // Signed up (or the email needs fixing) with this card, or with a form we can't tell apart:
    // show the result straight away.
    const sent = sentForm();
    if ((!sent || sent === card.querySelector('form')) && card.querySelector('[data-welcome-success], [data-welcome-error]')) {
      open();
      return;
    }
    if (state.subscribedAt || (state.dismissedAt && Date.now() - state.dismissedAt < 14 * DAY)) return;
    if (/\/(cart|account|checkouts?)(\/|$)/.test(window.location.pathname)) return;
    timer = setTimeout(open, (parseInt(card.dataset.delay, 10) || 20) * 1000);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (window.matchMedia('(hover: hover)').matches) document.addEventListener('mouseout', onLeave);
  }

  /* ---------- passport stamps ---------- */
  if (!customElements.get('flytz-passport')) {
    class FlytzPassport extends HTMLElement {
      connectedCallback() {
        if (this.ready) return;
        this.ready = true;
        this.KEY = 'flytz.passport';
        this.data = store.get(this.KEY, { stamps: {}, total: 0 });
        if (!this.data.stamps) this.data.stamps = {};
        try {
          this.t = JSON.parse(this.dataset.strings || '{}');
        } catch (e) {
          this.t = {};
        }
        this.threshold = Math.max(1, parseInt(this.dataset.threshold, 10) || 3);
        this.toggle = this.querySelector('.flytz-passport__toggle');
        this.overlay = this.querySelector('[data-passport-overlay]');
        this.toast = this.querySelector('[data-passport-toast]');
        this.total = this.countDestinations();

        this.toggle.addEventListener('click', () => this.open());
        this.querySelector('[data-passport-close]').addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', (e) => e.target === this.overlay && this.close());
        document.addEventListener('keydown', (e) => {
          if (this.overlay.hidden) return;
          if (e.key === 'Escape') this.close();
          if (e.key === 'Tab') this.trap(e);
        });
        document.addEventListener('flytz:destination-viewed', (e) => this.stamp(e.detail));
        this.render();
        document.querySelectorAll('[data-flytz-destination]').forEach((el) => {
          try {
            this.stamp(JSON.parse(el.dataset.flytzDestination));
          } catch (e) {
            /* ignore malformed data */
          }
        });
      }

      countDestinations() {
        let total = 0;
        document.querySelectorAll('script[data-flytz-destinations]').forEach((el) => {
          try {
            total = Math.max(total, (JSON.parse(el.textContent).destinations || []).length);
          } catch (e) {
            /* ignore */
          }
        });
        if (total) {
          this.data.total = total;
          store.set(this.KEY, this.data);
        }
        return Math.max(this.data.total || 0, Object.keys(this.data.stamps).length, total) || 15;
      }

      stamp(d) {
        if (!d || !d.handle || this.data.stamps[d.handle]) return;
        this.data.stamps[d.handle] = { title: d.title || d.handle, code: d.code || '', url: d.url || '', palette: d.palette || '', at: Date.now() };
        store.set(this.KEY, this.data);
        this.render();
        this.announce(this.data.stamps[d.handle]);
      }

      announce(s) {
        const count = Object.keys(this.data.stamps).length;
        const milestone = count === this.threshold;
        this.toast.innerHTML = '';
        const mark = document.createElement('span');
        mark.className = 'flytz-passport__toast-stamp';
        mark.textContent = s.code || s.title.slice(0, 3).toUpperCase();
        if (/^#[0-9a-f]{3,8}$/i.test(s.palette)) mark.style.setProperty('--tint', s.palette);
        const text = document.createElement('span');
        const strong = document.createElement('strong');
        strong.textContent = this.t.stamped || 'Passport stamped';
        const sub = document.createElement('span');
        sub.textContent = milestone ? fill(this.t.milestone, { n: count }) : `${s.title}${s.code ? ' · ' + s.code : ''}`;
        text.append(strong, sub);
        this.toast.append(mark, text);
        this.toast.hidden = false;
        this.toast.classList.remove('is-in');
        void this.toast.offsetWidth;
        this.toast.classList.add('is-in');
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => {
          this.toast.classList.remove('is-in');
          setTimeout(() => (this.toast.hidden = true), 400);
        }, milestone ? 6000 : 3800);
        this.toggle.classList.remove('is-bump');
        void this.toggle.offsetWidth;
        this.toggle.classList.add('is-bump');
      }

      status(count) {
        const list = this.t.statuses || [];
        const ratio = count / this.total;
        if (ratio >= 1) return list[3] || '';
        if (count >= this.threshold * 2) return list[2] || '';
        if (count >= this.threshold) return list[1] || '';
        return list[0] || '';
      }

      render() {
        const stamps = Object.entries(this.data.stamps).sort((a, b) => b[1].at - a[1].at);
        const count = stamps.length;
        this.total = Math.max(this.total, count);
        this.toggle.hidden = count === 0;
        this.querySelector('[data-passport-count]').textContent = String(count);
        this.toggle.setAttribute('aria-label', `${this.querySelector('.flytz-passport__toggle-label').textContent}: ${fill(this.t.progress, { n: count, total: this.total })}`);
        this.querySelector('[data-passport-status]').textContent = this.status(count);
        this.querySelector('[data-passport-progress]').textContent = fill(this.t.progress, { n: count, total: this.total });
        this.querySelector('[data-passport-bar]').style.width = `${Math.min(100, (count / this.total) * 100)}%`;
        this.querySelector('[data-passport-empty]').hidden = count > 0;

        const perk = this.querySelector('[data-passport-perk]');
        const code = this.dataset.code;
        const reward = this.dataset.reward;
        perk.innerHTML = '';
        if (code || reward) {
          perk.hidden = false;
          if (count >= this.threshold) {
            const p = document.createElement('p');
            p.textContent = reward || this.t.unlocked || '';
            perk.append(p);
            if (code) {
              const box = document.createElement('p');
              box.className = 'flytz-passport__code';
              const strong = document.createElement('strong');
              strong.textContent = code;
              const btn = document.createElement('button');
              btn.type = 'button';
              btn.textContent = this.t.copy || 'Copy';
              btn.dataset.copied = this.t.copied || 'Copied';
              btn.addEventListener('click', () => copyText(code, btn));
              box.append(strong, btn);
              perk.append(box);
            }
            perk.classList.add('is-unlocked');
          } else {
            const p = document.createElement('p');
            p.textContent = fill(this.t.next, { n: this.threshold - count });
            perk.append(p);
            perk.classList.remove('is-unlocked');
          }
        } else {
          perk.hidden = true;
        }

        const list = this.querySelector('[data-passport-stamps]');
        list.innerHTML = '';
        const fmt = new Intl.DateTimeFormat(document.documentElement.lang || undefined, { day: '2-digit', month: 'short' });
        stamps.forEach(([handle, s], i) => {
          const li = document.createElement('li');
          const el = document.createElement(s.url ? 'a' : 'span');
          el.className = 'flytz-stamp';
          if (s.url) el.href = s.url;
          if (/^#[0-9a-f]{3,8}$/i.test(s.palette)) el.style.setProperty('--tint', s.palette);
          el.style.setProperty('--r', `${((handle.length * 7 + i * 13) % 15) - 7}deg`);
          const codeEl = document.createElement('span');
          codeEl.className = 'flytz-stamp__code';
          codeEl.textContent = s.code || s.title.slice(0, 3).toUpperCase();
          const name = document.createElement('span');
          name.className = 'flytz-stamp__name';
          name.textContent = s.title;
          const date = document.createElement('time');
          date.className = 'flytz-stamp__date';
          date.dateTime = new Date(s.at).toISOString();
          date.textContent = fmt.format(new Date(s.at));
          el.append(codeEl, name, date);
          li.append(el);
          list.append(li);
        });
      }

      open() {
        this.lastFocus = document.activeElement;
        this.overlay.hidden = false;
        document.documentElement.classList.add('flytz-locked');
        requestAnimationFrame(() => this.overlay.classList.add('is-open'));
        this.querySelector('[data-passport-close]').focus({ preventScroll: true });
      }

      close() {
        this.overlay.classList.remove('is-open');
        document.documentElement.classList.remove('flytz-locked');
        setTimeout(() => (this.overlay.hidden = true), reduced ? 0 : 300);
        if (this.lastFocus && document.contains(this.lastFocus)) this.lastFocus.focus({ preventScroll: true });
      }

      trap(e) {
        const items = [...this.overlay.querySelectorAll('a[href], button:not([disabled])')].filter((el) => el.offsetParent !== null);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    customElements.define('flytz-passport', FlytzPassport);
  }

  /* ---------- "where to next?" quiz ---------- */
  // What each landmark's destination is like: climate, kinds of days, what you'd pack.
  const PROFILE = {
    eiffel: ['mild', 'culture city', 'tailored'],
    bigben: ['cool', 'city culture', 'tailored technical'],
    colosseum: ['warm', 'culture', 'tailored relaxed'],
    parthenon: ['warm', 'culture coast', 'relaxed'],
    fuji: ['cool', 'nature city', 'technical'],
    greatwall: ['mild', 'culture nature', 'technical'],
    tajmahal: ['warm', 'culture', 'relaxed'],
    burj: ['warm', 'city', 'tailored'],
    pyramids: ['warm', 'culture', 'relaxed'],
    koutoubia: ['warm', 'culture city', 'relaxed'],
    liberty: ['mild', 'city', 'technical tailored'],
    chichen: ['warm', 'culture coast', 'relaxed'],
    redeemer: ['warm', 'coast nature', 'relaxed'],
    machu: ['cool', 'nature', 'technical'],
    opera: ['warm', 'coast city', 'relaxed technical'],
    globe: ['mild', 'city', 'relaxed'],
  };
  if (!customElements.get('flytz-quiz')) {
    class FlytzQuiz extends HTMLElement {
      connectedCallback() {
        if (this.ready) return;
        this.ready = true;
        try {
          this.destinations = JSON.parse(this.querySelector('[data-quiz-destinations]').textContent).filter((d) => d && d.handle);
        } catch (e) {
          this.destinations = [];
        }
        this.steps = [...this.querySelectorAll('.flytz-quiz__step')];
        this.result = this.querySelector('.flytz-quiz__result');
        this.count = this.querySelector('[data-quiz-count]');
        this.countTemplate = this.count.dataset.template || this.count.textContent;
        this.answers = {};
        this.addEventListener('click', (e) => {
          const option = e.target.closest('.flytz-quiz__option');
          if (option) this.choose(option);
          if (e.target.closest('[data-quiz-restart]')) this.restart();
          const go = e.target.closest('[data-result-open]');
          if (go && this.pick && window.Flytz?.openDestination && !(e.metaKey || e.ctrlKey || e.shiftKey)) {
            e.preventDefault();
            window.Flytz.openDestination(this.pick.handle, this.pick.url, go);
          }
        });
      }

      show(index) {
        this.steps.forEach((s, i) => {
          s.hidden = i !== index;
          s.classList.toggle('is-active', i === index);
        });
        this.result.hidden = index !== 'result';
        this.dataset.progress = index === 'result' ? 3 : index;
        if (index !== 'result') this.count.textContent = this.countTemplate.replace('[n]', index + 1);
        this.count.hidden = index === 'result';
      }

      choose(option) {
        const step = this.steps.indexOf(option.closest('.flytz-quiz__step'));
        option.closest('.flytz-quiz__options').querySelectorAll('.flytz-quiz__option').forEach((o) => o.classList.toggle('is-picked', o === option));
        this.answers[option.dataset.key] = option.dataset.value;
        setTimeout(() => {
          if (step < this.steps.length - 1) {
            this.show(step + 1);
            this.steps[step + 1].querySelector('.flytz-quiz__option')?.focus({ preventScroll: true });
          } else {
            this.finish();
          }
        }, reduced ? 0 : 260);
      }

      score(d) {
        const p = PROFILE[d.monument] || PROFILE.globe;
        let s = 0;
        if (p[0] === this.answers.weather) s += 3;
        else if (p[0] === 'mild' || this.answers.weather === 'mild') s += 1;
        if (p[1].split(' ').includes(this.answers.day)) s += p[1].startsWith(this.answers.day) ? 3 : 2;
        if (p[2].split(' ').includes(this.answers.pack)) s += 2;
        return s + Math.random() * 0.5;
      }

      finish() {
        const pool = this.destinations.length ? this.destinations : [];
        if (!pool.length) return;
        this.pick = pool.map((d) => [d, this.score(d)]).sort((a, b) => b[1] - a[1])[0][0];
        const d = this.pick;
        this.querySelector('[data-result-title]').textContent = d.title;
        this.querySelector('[data-result-route]').textContent = `${this.dataset.origin || 'FLZ'} → ${d.code || '···'}`;
        this.querySelector('[data-result-tagline]').textContent = d.tagline || '';
        this.querySelector('[data-result-code]').textContent = d.code || d.title.slice(0, 3).toUpperCase();
        const open = this.querySelector('[data-result-open]');
        if (d.url) open.href = d.url;
        const stage = this.querySelector('.flytz-quiz__stage');
        if (/^#[0-9a-f]{3,8}$/i.test(d.palette || '')) this.result.style.setProperty('--dest-tint', d.palette);
        const tpl = this.querySelector(`template[data-monument="${CSS.escape(d.monument || 'globe')}"]`) || this.querySelector('template[data-monument="globe"]');
        stage.querySelector('.flytz-stage__tilt')?.replaceChildren(tpl ? tpl.content.cloneNode(true) : '');
        this.show('result');
        stage.classList.remove('is-drawing');
        void stage.offsetWidth;
        stage.classList.add('is-drawing');
        stage.querySelector('flytz-landmark')?.setAttribute('monument', d.monument || 'globe');
        this.querySelector('[data-result-title]').focus({ preventScroll: true });
        document.dispatchEvent(new CustomEvent('flytz:quiz-result', { detail: { ...d } }));
      }

      restart() {
        this.answers = {};
        this.querySelectorAll('.flytz-quiz__option.is-picked').forEach((o) => o.classList.remove('is-picked'));
        this.show(0);
        this.steps[0].querySelector('.flytz-quiz__option')?.focus({ preventScroll: true });
      }
    }
    customElements.define('flytz-quiz', FlytzQuiz);
  }

  /* ---------- next-departure countdown ---------- */
  if (!customElements.get('flytz-countdown')) {
    class FlytzCountdown extends HTMLElement {
      connectedCallback() {
        this.target = Date.parse(this.dataset.departs || '');
        if (Number.isNaN(this.target)) {
          this.hidden = true;
          return;
        }
        this.values = Object.fromEntries([...this.querySelectorAll('[data-unit]')].map((el) => [el.dataset.unit, el]));
        this.text = this.querySelector('[data-countdown-text]');
        this.tick();
        this.timer = setInterval(() => this.tick(), 1000);
      }

      disconnectedCallback() {
        clearInterval(this.timer);
      }

      set(unit, value) {
        const el = this.values[unit];
        const v = String(value).padStart(2, '0');
        if (!el || el.textContent === v) return;
        el.textContent = v;
        if (!reduced) {
          el.classList.remove('is-flip');
          void el.offsetWidth;
          el.classList.add('is-flip');
        }
      }

      tick() {
        let s = Math.max(0, Math.floor((this.target - Date.now()) / 1000));
        if (s === 0) {
          clearInterval(this.timer);
          this.classList.add('is-boarding');
          this.querySelector('.flytz-countdown__label').textContent = this.dataset.nowBoarding || 'Now boarding';
          return;
        }
        const d = Math.floor(s / 86400);
        s -= d * 86400;
        const h = Math.floor(s / 3600);
        s -= h * 3600;
        const m = Math.floor(s / 60);
        s -= m * 60;
        this.set('days', d);
        this.set('hours', h);
        this.set('minutes', m);
        this.set('seconds', s);
        if (this.text && s % 30 === 0) this.text.textContent = `${d}d ${h}h ${m}m`;
      }
    }
    customElements.define('flytz-countdown', FlytzCountdown);
  }

  /* ---------- sticky add to cart ---------- */
  if (!customElements.get('flytz-sticky-buy')) {
    class FlytzStickyBuy extends HTMLElement {
      connectedCallback() {
        this.target = document.querySelector(this.dataset.target || 'product-form [name="add"]');
        if (!this.target) return;
        this.button = this.querySelector('[data-sticky-add]');
        this.price = this.querySelector('[data-sticky-price]');
        this.button.addEventListener('click', () => {
          this.target.click();
          this.target.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' });
        });
        const scope = this.target.closest('product-info, .product__info-wrapper, .pv-product__info') || document;
        // The price shoppers see: the sale price when on sale, otherwise the regular price.
        const currentPrice = () => {
          const box = scope.querySelector('.price');
          if (box) {
            const el = box.querySelector(box.classList.contains('price--on-sale') ? '.price__sale .price-item--sale' : '.price__regular .price-item--regular');
            return el ? el.textContent.trim() : '';
          }
          const pv = scope.querySelector('.pv-product__price');
          return pv ? (pv.lastChild?.textContent || pv.textContent).trim() : '';
        };
        const source = scope.querySelector('[id^="price-"]') || scope.querySelector('.price, .pv-product__price');
        const sync = () => {
          const text = currentPrice();
          if (text) this.price.textContent = text;
          this.button.disabled = !!this.target.disabled;
          const label = this.target.querySelector('span')?.textContent.trim() || this.target.textContent.trim();
          if (this.target.disabled && label) this.button.textContent = label;
        };
        if (source) new MutationObserver(sync).observe(source, { childList: true, subtree: true, characterData: true });
        new MutationObserver(sync).observe(this.target, { attributes: true, attributeFilter: ['disabled'], childList: true, subtree: true });
        sync();
        this.hidden = false;
        // Checked on scroll rather than with an IntersectionObserver, which misses jumps straight
        // past the button (anchor links, the End key) when it starts below the fold.
        const update = () => {
          this.frame = 0;
          const past = this.target.getBoundingClientRect().bottom < 0;
          if (past === this.past) return;
          this.past = past;
          this.classList.toggle('is-visible', past);
          this.setAttribute('aria-hidden', String(!past));
          this.button.tabIndex = past ? 0 : -1;
        };
        this.onScroll = () => {
          if (!this.frame) this.frame = requestAnimationFrame(update);
        };
        window.addEventListener('scroll', this.onScroll, { passive: true });
        window.addEventListener('resize', this.onScroll, { passive: true });
        update();
      }

      disconnectedCallback() {
        if (!this.onScroll) return;
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.onScroll);
        cancelAnimationFrame(this.frame);
      }
    }
    customElements.define('flytz-sticky-buy', FlytzStickyBuy);
  }

  const start = () => {
    welcome();
    scopeFormResults();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
