/* Flytz boarding sequence — plays a short departure animation when a cart form is submitted
   with the "checkout" button, then hands off to Shopify checkout exactly as the button would have.
   Accelerated checkout buttons (Shop Pay, Apple Pay…) are not intercepted. */
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
  let timers = [];
  let pending = null;

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
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('inert', '');
    delete overlay.dataset.stage;
    bar.style.width = '0';
  };

  const play = (form, submitter) => {
    pending = { form, submitter };
    overlay.removeAttribute('inert');
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-active');
    overlay.querySelector('[data-boarding-skip]')?.focus({ preventScroll: true });
    setStage(0);
    for (let i = 1; i < steps.length; i++) timers.push(setTimeout(() => setStage(i), STEP_MS * i));
    timers.push(setTimeout(proceed, STEP_MS * steps.length + (reduced ? 0 : 900)));
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
