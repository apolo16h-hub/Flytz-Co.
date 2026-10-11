/* Flytz boarding sequence — plays a short departure animation when a cart form is submitted
   with the "checkout" button, then hands off to Shopify checkout exactly as the button would have.
   Accelerated checkout buttons (Shop Pay, Apple Pay…) are not intercepted.
   On WebGL-capable devices the animation is the real-time 3D scene from flytz-3d.js, prepared
   ahead of time (cart opened, checkout button hovered or focused) so it starts instantly. */
(() => {
  const overlay = document.getElementById('FlytzBoarding');
  if (!overlay || overlay.dataset.bound) return;
  overlay.dataset.bound = 'true';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const status = overlay.querySelector('[data-boarding-status]');
  const bar = overlay.querySelector('[data-boarding-bar]');
  const steps = [...overlay.querySelectorAll('[data-boarding-step]')];
  const messages = steps.map((li) => li.dataset.message || li.textContent.trim());
  const STEP_MS = reduced ? 160 : 700;
  const TOTAL_MS = STEP_MS * steps.length + (reduced ? 0 : 900);
  let timers = [];
  let pending = null;

  /* ---------- real-time 3D scene ---------- */
  const stage3d = overlay.querySelector('[data-boarding-3d]');
  let scene3d = null;
  let warming = null;
  const drop3d = () => {
    scene3d?.dispose();
    scene3d = null;
    overlay.classList.remove('has-3d');
  };
  const prewarm = () => {
    if (reduced || scene3d || warming || !stage3d || !window.Flytz?.load3D) return;
    warming = window.Flytz.load3D()
      .then((lib) => {
        if (!lib.createBoarding) return;
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--flytz-gold').trim();
        const scene = lib.createBoarding(stage3d, { accent: accent || undefined, duration: TOTAL_MS / 1000, onContextLost: drop3d });
        return scene.ready.then(() => {
          scene3d = scene;
        });
      })
      .catch(drop3d);
  };
  const isCheckout = (el) => el instanceof Element && el.closest('[name="checkout"]');
  document.addEventListener('pointerover', (e) => isCheckout(e.target) && prewarm(), { passive: true });
  document.addEventListener('focusin', (e) => isCheckout(e.target) && prewarm());
  document.addEventListener('touchstart', (e) => isCheckout(e.target) && prewarm(), { passive: true });
  // Opening the cart drawer is the earliest sign a shopper is heading for checkout.
  const drawer = document.querySelector('cart-drawer');
  if (drawer) {
    new MutationObserver(() => drawer.classList.contains('active') && prewarm()).observe(drawer, { attributes: true, attributeFilter: ['class'] });
  }
  // On the cart page itself, get ready once the page is idle.
  const pageCheckout = document.querySelector('[name="checkout"]');
  if (pageCheckout && !pageCheckout.closest('cart-drawer, cart-notification')) {
    (window.requestIdleCallback || ((fn) => setTimeout(fn, 1500)))(prewarm);
  }

  const setStage = (n) => {
    overlay.dataset.stage = String(n);
    steps.forEach((li, i) => {
      li.classList.toggle('is-done', i < n);
      li.classList.toggle('is-current', i === n);
    });
    if (messages[n]) status.textContent = messages[n];
    bar.style.width = `${Math.round(((n + 1) / steps.length) * 100)}%`;
  };

  const proceed = () => {
    if (!pending) return;
    const { form, submitter } = pending;
    pending = null;
    timers.forEach(clearTimeout);
    timers = [];
    const flag = document.createElement('input');
    flag.type = 'hidden';
    flag.name = submitter.name || 'checkout';
    flag.value = submitter.value || '';
    form.appendChild(flag);
    HTMLFormElement.prototype.submit.call(form);
  };

  const reset = () => {
    timers.forEach(clearTimeout);
    timers = [];
    pending = null;
    overlay.classList.remove('is-active', 'has-3d');
    scene3d?.reset();
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('inert', '');
    delete overlay.dataset.stage;
    bar.style.width = '0';
  };

  const play = (form, submitter) => {
    pending = { form, submitter };
    overlay.removeAttribute('inert');
    overlay.setAttribute('aria-hidden', 'false');
    if (scene3d) {
      overlay.classList.add('has-3d');
      scene3d.play();
    }
    overlay.classList.add('is-active');
    overlay.querySelector('[data-boarding-skip]')?.focus({ preventScroll: true });
    setStage(0);
    for (let i = 1; i < steps.length; i++) timers.push(setTimeout(() => setStage(i), STEP_MS * i));
    timers.push(setTimeout(proceed, TOTAL_MS));
    // Never strand a shopper on the animation.
    timers.push(setTimeout(proceed, 8000));
  };

  document.addEventListener(
    'submit',
    (event) => {
      const submitter = event.submitter;
      if (!submitter || submitter.name !== 'checkout' || event.defaultPrevented || pending) return;
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();
      event.stopPropagation();
      play(form, submitter);
    },
    true
  );

  overlay.querySelector('[data-boarding-skip]')?.addEventListener('click', proceed);
  // Back/forward cache: never show a finished boarding sequence when returning from checkout.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) reset();
  });
})();
