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

  /** Asks the destination explorer to open a capsule; falls back to the collection page. */
  Flytz.openDestination = (handle, url, trigger) => {
    const request = new CustomEvent('flytz:open-destination', { cancelable: true, detail: { handle, trigger } });
    document.dispatchEvent(request);
    if (!request.defaultPrevented && url) window.location.href = url;
  };
})();
