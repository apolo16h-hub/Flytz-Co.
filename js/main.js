/* ═══════════════════════════════════════════
   FLYTZ CO. — interactions
   globe hero · map explorer · cart · boarding checkout
   ═══════════════════════════════════════════ */
(() => {
"use strict";
const $ = (s, r = document) => r.querySelector(s);
const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const gbp = n => "£" + n.toFixed(2);

/* ───────────────── 1. HERO GLOBE ─────────────────
   Dependency-free 3D point globe with graticule, arc routes
   and an orbiting aircraft, drawn on 2D canvas. */
(function globe() {
  const cv = $("#globe"), ctx = cv.getContext("2d");
  let W, H, R, CX, CY, dpr;

  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    R = Math.min(W, H) * 0.42;
    CX = W / 2; CY = H * 0.56;
  }
  size(); addEventListener("resize", size);

  // land dots: seeded pseudo-random clusters approximating continents (lat, lng, spread, count)
  const clusters = [
    [48, 15, 16, 110], [60, 40, 12, 50],              // Europe
    [30, 100, 26, 150], [55, 95, 20, 80], [20, 78, 12, 70], [35, 138, 7, 40], // Asia
    [8, 20, 22, 120], [-18, 25, 14, 70],              // Africa
    [45, -100, 22, 130], [62, -110, 16, 60], [18, -95, 8, 40], // N America
    [-12, -58, 16, 90], [-32, -65, 9, 40],            // S America
    [-25, 135, 13, 60], [-40, 172, 4, 14]             // Oceania
  ];
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const pts = [];
  for (const [la, lo, sp, n] of clusters)
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * sp;
      pts.push([ (la + Math.sin(a) * d) * Math.PI / 180, (lo + Math.cos(a) * d * 1.6) * Math.PI / 180 ]);
    }

  const TILT = -0.35;
  function project(lat, lng, rot) {
    let x = Math.cos(lat) * Math.sin(lng + rot),
        y = Math.sin(lat),
        z = Math.cos(lat) * Math.cos(lng + rot);
    const y2 = y * Math.cos(TILT) - z * Math.sin(TILT);
    const z2 = y * Math.sin(TILT) + z * Math.cos(TILT);
    return [CX + x * R, CY - y2 * R, z2];
  }

  const routes = [ [48.8, 2.3, 35.6, 139.7], [51.5, -0.1, 40.7, -74], [30, 31.2, -22.9, -43.2], [40.7, -74, 48.8, 2.3] ]
    .map(r => r.map(v => v * Math.PI / 180));

  let rot = 0, last = 0;
  function frame(t) {
    const dt = Math.min(t - last, 50); last = t;
    if (!prefersReduced) rot += dt * 0.000045;
    ctx.clearRect(0, 0, W, H);

    // atmosphere
    const glow = ctx.createRadialGradient(CX, CY, R * 0.6, CX, CY, R * 1.5);
    glow.addColorStop(0, "rgba(40,60,110,.28)");
    glow.addColorStop(0.55, "rgba(30,45,90,.12)");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    // sphere body
    const body = ctx.createRadialGradient(CX - R * 0.35, CY - R * 0.4, R * 0.1, CX, CY, R);
    body.addColorStop(0, "#182238");
    body.addColorStop(1, "#0a0e18");
    ctx.beginPath(); ctx.arc(CX, CY, R, 0, 7); ctx.fillStyle = body; ctx.fill();
    ctx.strokeStyle = "rgba(201,162,75,.25)"; ctx.lineWidth = 1; ctx.stroke();

    // graticule
    ctx.lineWidth = 0.6;
    for (let i = -60; i <= 60; i += 30) {
      ctx.beginPath();
      for (let j = 0; j <= 72; j++) {
        const [x, y, z] = project(i * Math.PI / 180, j / 72 * Math.PI * 2, rot);
        if (z < 0) { ctx.moveTo(x, y); continue; }
        j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(160,180,220,.10)"; ctx.stroke();
    }
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      for (let j = 0; j <= 72; j++) {
        const [x, y, z] = project((j / 72 * 2 - 1) * Math.PI / 2, i / 12 * Math.PI * 2, rot);
        if (z < 0) { ctx.moveTo(x, y); continue; }
        j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(160,180,220,.07)"; ctx.stroke();
    }

    // land dots
    for (const [la, lo] of pts) {
      const [x, y, z] = project(la, lo, rot);
      if (z < 0.02) continue;
      const a = 0.18 + z * 0.65;
      ctx.beginPath(); ctx.arc(x, y, 1.1 + z * 1.2, 0, 7);
      ctx.fillStyle = `rgba(214,186,120,${a})`; ctx.fill();
    }

    // flight routes (great-circle-ish arcs)
    const dash = (t * 0.02) % 24;
    for (const [la1, lo1, la2, lo2] of routes) {
      ctx.beginPath();
      let drawing = false;
      for (let j = 0; j <= 40; j++) {
        const f = j / 40;
        const la = la1 + (la2 - la1) * f, lo = lo1 + (lo2 - lo1) * f;
        const lift = Math.sin(f * Math.PI) * 0.12;
        let [x, y, z] = project(la, lo, rot);
        y -= lift * R;
        if (z < 0) { drawing = false; continue; }
        drawing ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        drawing = true;
      }
      ctx.setLineDash([3, 5]); ctx.lineDashOffset = -dash;
      ctx.strokeStyle = "rgba(201,162,75,.5)"; ctx.lineWidth = 1; ctx.stroke();
      ctx.setLineDash([]);
    }

    // orbiting plane + trail
    const oa = prefersReduced ? 1.2 : t * 0.00028;
    const ox = Math.cos(oa), oz = Math.sin(oa);
    const oy2 = -oz * Math.sin(TILT + 0.5);
    const px = CX + ox * R * 1.22, py = CY - oy2 * R * 1.22 - oz * R * 0.3;
    const behind = oz < -0.2 && oy2 < 0;
    if (!behind) {
      // trail
      ctx.beginPath();
      for (let k = 1; k <= 26; k++) {
        const a2 = oa - k * 0.035;
        const x2 = CX + Math.cos(a2) * R * 1.22;
        const z2 = Math.sin(a2);
        const y2 = CY + z2 * Math.sin(TILT + 0.5) * R * 1.22 - z2 * R * 0.3;
        k === 1 ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
      }
      ctx.strokeStyle = "rgba(231,207,150,.3)"; ctx.lineWidth = 1.2; ctx.stroke();
      // plane glyph oriented to motion
      const a3 = oa + 0.04;
      const nx = CX + Math.cos(a3) * R * 1.22 - px;
      const nz = Math.sin(a3);
      const ny = (CY + nz * Math.sin(TILT + 0.5) * R * 1.22 - nz * R * 0.3) - py;
      const ang = Math.atan2(ny, nx);
      ctx.save(); ctx.translate(px, py); ctx.rotate(ang + Math.PI / 2);
      ctx.fillStyle = "#e7cf96";
      ctx.beginPath();
      ctx.moveTo(0, -9); ctx.lineTo(2.4, -2); ctx.lineTo(9, 2.5); ctx.lineTo(9, 5); ctx.lineTo(2.2, 3);
      ctx.lineTo(1.6, 8); ctx.lineTo(4, 10.5); ctx.lineTo(4, 12.4); ctx.lineTo(0, 11);
      ctx.lineTo(-4, 12.4); ctx.lineTo(-4, 10.5); ctx.lineTo(-1.6, 8); ctx.lineTo(-2.2, 3);
      ctx.lineTo(-9, 5); ctx.lineTo(-9, 2.5); ctx.lineTo(-2.4, -2); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* ───────────────── 2. SCROLL REVEALS / NAV ───────────────── */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 30), { passive: true });

// duplicate ticker for seamless loop
const tk = $("#tickerTrack");
tk.innerHTML += tk.innerHTML;

/* ───────────────── 3. MONUMENT LINE ART ─────────────────
   Inline SVG line-art builders keyed by monument id. */
const M = (inner, vb = "0 0 200 240") => `<svg class="monument" viewBox="${vb}" aria-hidden="true">${inner}</svg>`;
const MONUMENTS = {
  eiffel: M(`
    <path d="M100 18 L104 60 L96 60 Z" class="fillsoft"/>
    <path d="M100 18 L112 110 M100 18 L88 110"/>
    <path d="M88 110 Q100 100 112 110 M84 128 Q100 114 116 128"/>
    <path d="M112 110 L138 206 M88 110 L62 206"/>
    <path d="M62 206 Q100 148 138 206"/>
    <path d="M70 180 Q100 136 130 180 M78 152 Q100 126 122 152"/>
    <line x1="94" y1="70" x2="106" y2="70"/><line x1="91" y1="90" x2="109" y2="90"/>
    <line x1="48" y1="206" x2="152" y2="206"/>
    <line x1="30" y1="222" x2="170" y2="222" opacity=".4"/>`),
  bigben: M(`
    <rect x="80" y="70" width="40" height="140" class="fillsoft"/>
    <path d="M80 70 L100 34 L120 70 M100 34 L100 16 M96 22 L104 22"/>
    <circle cx="100" cy="96" r="15"/>
    <line x1="100" y1="96" x2="100" y2="86"/><line x1="100" y1="96" x2="108" y2="96"/>
    <path d="M80 126 H120 M80 146 H120 M80 166 H120 M80 186 H120"/>
    <line x1="86" y1="126" x2="86" y2="210"/><line x1="114" y1="126" x2="114" y2="210"/>
    <line x1="60" y1="210" x2="140" y2="210"/>
    <line x1="34" y1="224" x2="166" y2="224" opacity=".4"/>`),
  colosseum: M(`
    <ellipse cx="100" cy="190" rx="86" ry="20"/>
    <path d="M14 190 L22 110 Q100 86 178 110 L186 190" class="fillsoft"/>
    <path d="M22 140 Q100 116 178 140 M24 166 Q100 144 176 166"/>
    <path d="M34 118 v18 M54 112 v22 M76 108 v24 M100 106 v26 M124 108 v24 M146 112 v22 M166 118 v18"
          stroke-dasharray="0" />
    <path d="M30 148 v16 M52 142 v18 M76 139 v20 M100 138 v20 M124 139 v20 M148 142 v18 M170 148 v16" opacity=".8"/>
    <line x1="8" y1="214" x2="192" y2="214" opacity=".4"/>`, "0 0 200 230"),
  fuji: M(`
    <path d="M100 52 L164 196 H36 Z" class="fillsoft"/>
    <path d="M78 96 Q88 106 100 96 Q112 106 124 96 L112 70 Q100 78 88 70 Z"/>
    <path d="M36 196 Q70 186 100 196 Q130 186 164 196" opacity=".6"/>
    <circle cx="156" cy="52" r="12" opacity=".7"/>
    <path d="M20 212 H180" opacity=".4"/>
    <path d="M46 150 q10 -8 20 0 M134 150 q10 -8 20 0" opacity=".5"/>`, "0 0 200 230"),
  tajmahal: M(`
    <path d="M100 30 Q128 58 128 86 Q100 74 72 86 Q72 58 100 30 Z" class="fillsoft"/>
    <line x1="100" y1="30" x2="100" y2="16"/>
    <rect x="56" y="86" width="88" height="80"/>
    <path d="M100 166 v-44 q-14 -16 -28 0 v44 M100 122 q14 -16 28 0" opacity=".9"/>
    <path d="M30 60 v106 M170 60 v106 M30 60 q4 -10 8 0 M162 60 q4 -10 8 0 M38 60 v106 M162 60 v106" opacity=".8"/>
    <line x1="14" y1="166" x2="186" y2="166"/>
    <line x1="14" y1="184" x2="186" y2="184" opacity=".4"/>`, "0 0 200 210"),
  burj: M(`
    <path d="M100 8 L104 58 L110 110 L116 170 L122 212 H78 L84 170 L90 110 L96 58 Z" class="fillsoft"/>
    <line x1="100" y1="8" x2="100" y2="212"/>
    <path d="M90 110 h20 M84 170 h32 M96 58 h8"/>
    <path d="M122 212 L142 212 L134 150 L122 180 M78 212 L58 212 L66 150 L78 180"/>
    <line x1="40" y1="224" x2="160" y2="224" opacity=".4"/>`),
  pyramids: M(`
    <path d="M118 70 L196 196 H40 Z" class="fillsoft"/>
    <path d="M118 70 L138 196 M118 70 L92 196" opacity=".5"/>
    <path d="M58 120 L108 196 H8 Z" opacity=".85"/>
    <circle cx="30" cy="56" r="13" opacity=".7"/>
    <line x1="0" y1="206" x2="200" y2="206" opacity=".4"/>`, "0 0 200 220"),
  koutoubia: M(`
    <rect x="76" y="60" width="48" height="140" class="fillsoft"/>
    <path d="M76 60 H124 M84 60 L84 44 H116 L116 60 M100 44 V26 M96 32 h8"/>
    <circle cx="100" cy="20" r="4"/>
    <path d="M84 92 q16 -14 32 0 M84 130 q16 -14 32 0 M84 168 q16 -14 32 0"/>
    <line x1="52" y1="200" x2="148" y2="200"/>
    <line x1="30" y1="214" x2="170" y2="214" opacity=".4"/>`, "0 0 200 226"),
  liberty: M(`
    <path d="M100 70 L96 150 H112 L106 70" class="fillsoft"/>
    <circle cx="102" cy="56" r="11"/>
    <path d="M90 50 L114 50 M93 44 l-3 -8 M100 44 l0 -9 M108 44 l3 -8"/>
    <path d="M118 36 L124 14 M118 36 L112 44" />
    <path d="M86 86 L80 110 M106 84 q14 6 10 22"/>
    <path d="M84 150 H124 L120 170 H88 Z"/>
    <path d="M70 170 H138 L132 196 H76 Z" opacity=".8"/>
    <line x1="52" y1="196" x2="156" y2="196"/>
    <line x1="34" y1="212" x2="174" y2="212" opacity=".4"/>`, "0 0 200 224"),
  chichen: M(`
    <path d="M100 48 H124 V70 H140 V96 H156 V122 H172 V148 H28 V122 H44 V96 H60 V70 H76 V48 Z" class="fillsoft"/>
    <path d="M92 148 V96 H108 V148" />
    <path d="M60 70 H140 M44 96 H156 M28 122 H172" opacity=".6"/>
    <path d="M86 48 H114 V32 H86 Z"/>
    <line x1="10" y1="162" x2="190" y2="162" opacity=".4"/>`, "0 0 200 190"),
  redeemer: M(`
    <path d="M100 34 v70 M40 70 h120" />
    <path d="M100 34 q-7 10 0 18 q7 -8 0 -18 Z" class="fillsoft"/>
    <path d="M40 70 q-8 2 -10 8 M160 70 q8 2 10 8 M46 64 q24 -8 54 -8 q30 0 54 8" opacity=".7"/>
    <path d="M92 104 L88 150 H112 L108 104"/>
    <path d="M80 150 H120 L116 168 H84 Z"/>
    <path d="M30 196 Q66 150 100 186 Q140 140 176 196" opacity=".6"/>
    <line x1="14" y1="206" x2="186" y2="206" opacity=".4"/>`, "0 0 200 220"),
  machu: M(`
    <path d="M58 196 Q76 60 108 36 Q122 92 140 196" class="fillsoft"/>
    <path d="M24 196 Q48 120 58 104 M140 128 Q162 150 178 196" opacity=".7"/>
    <path d="M60 170 h36 M56 182 h48 M70 150 h28 M78 136 h18" opacity=".8"/>
    <path d="M44 196 h120" />
    <path d="M60 80 q8 -8 16 0 M96 60 q8 -8 16 0" opacity=".45"/>
    <line x1="10" y1="210" x2="190" y2="210" opacity=".4"/>`, "0 0 200 222"),
  opera: M(`
    <path d="M30 170 Q60 96 118 96 Q96 130 96 170 Z" class="fillsoft"/>
    <path d="M70 170 Q104 110 158 108 Q134 136 132 170 Z" class="fillsoft"/>
    <path d="M118 96 Q140 100 150 92 M158 108 Q176 110 184 102" opacity=".6"/>
    <path d="M14 170 H192"/>
    <path d="M10 186 q30 8 60 0 q30 -8 60 0 q30 8 60 0" opacity=".45"/>
    <line x1="10" y1="200" x2="190" y2="200" opacity=".3"/>`, "0 0 200 214")
};
const garmentIcon = type => {
  const tee = `<path d="M18 10 L26 6 Q32 12 38 6 L46 10 L52 22 L44 26 L44 56 H20 V26 L12 22 Z"/>`;
  const jacket = `<path d="M16 10 L26 5 Q32 11 38 5 L48 10 L54 30 L46 32 L46 58 H18 V32 L10 30 Z"/><path d="M32 11 V58 M24 34 h4 M24 42 h4"/>`;
  const trouser = `<path d="M20 6 H44 L46 58 H36 L32 26 L28 58 H18 Z"/><path d="M20 14 H44"/>`;
  const knit = `<path d="M18 12 L28 6 Q32 10 36 6 L46 12 L50 24 L44 27 V56 H20 V27 L14 24 Z"/><path d="M20 34 h24 M20 42 h24 M20 50 h24" opacity=".5"/>`;
  const acc = `<circle cx="32" cy="34" r="18"/><path d="M24 20 Q32 4 40 20"/>`;
  const shorts = `<path d="M18 10 H46 L50 42 H36 L32 26 L28 42 H14 Z"/>`;
  const map = { Tee: tee, Shirt: tee, Overshirt: jacket, Jacket: jacket, Parka: jacket, Coat: jacket, Trench: jacket, Blazer: jacket, Hoodie: knit, Knit: knit, Fleece: knit, Trouser: trouser, Denim: trouser, Shorts: shorts, Accessory: acc, Set: jacket };
  return `<svg viewBox="0 0 64 64" aria-hidden="true">${map[type] || tee}</svg>`;
};

/* ───────────────── 4. WORLD MAP ───────────────── */
const svgNS = "http://www.w3.org/2000/svg";
const mapSvg = $("#worldMap");
// simplified stylised continent silhouettes
const SHAPES = {
  namerica: "M95 70 L190 48 L295 62 L330 96 L300 128 L312 160 L270 196 L236 232 L212 206 L186 212 L150 170 L118 160 L88 118 Z",
  samerica: "M255 268 L300 258 L336 292 L330 342 L300 404 L276 442 L258 430 L250 376 L232 330 L240 292 Z",
  europe:   "M460 56 L540 42 L596 58 L588 92 L612 110 L582 136 L536 150 L500 142 L470 150 L452 118 L466 92 Z",
  africa:   "M470 170 L540 158 L596 176 L606 226 L580 292 L552 348 L524 352 L498 300 L472 252 L458 206 Z",
  asia:     "M612 48 L730 36 L850 58 L900 96 L876 150 L830 160 L842 196 L800 232 L756 252 L722 212 L676 206 L640 170 L616 140 L636 110 L606 92 Z",
  oceania:  "M790 320 L862 306 L912 336 L902 386 L848 408 L798 388 L778 352 Z"
};
// graticule backdrop
for (let x = 50; x < 1000; x += 90) {
  const l = document.createElementNS(svgNS, "line");
  l.setAttribute("x1", x); l.setAttribute("x2", x); l.setAttribute("y1", 10); l.setAttribute("y2", 510);
  l.setAttribute("class", "map-grid"); mapSvg.appendChild(l);
}
for (let y = 40; y < 520; y += 80) {
  const l = document.createElementNS(svgNS, "line");
  l.setAttribute("x1", 10); l.setAttribute("x2", 990); l.setAttribute("y1", y); l.setAttribute("y2", y);
  l.setAttribute("class", "map-grid"); mapSvg.appendChild(l);
}
// animated route arc decoration
const route = document.createElementNS(svgNS, "path");
route.setAttribute("d", "M180 120 Q400 20 620 90 Q800 140 860 340");
route.setAttribute("class", "map-route");
mapSvg.appendChild(route);

for (const r of FLYTZ.regions) {
  const p = document.createElementNS(svgNS, "path");
  p.setAttribute("d", SHAPES[r.id]);
  p.setAttribute("class", "map-region");
  p.setAttribute("data-region", r.id);
  p.setAttribute("tabindex", "0");
  p.setAttribute("role", "button");
  p.setAttribute("aria-label", r.name);
  mapSvg.appendChild(p);
  const t = document.createElementNS(svgNS, "text");
  t.setAttribute("x", r.cx); t.setAttribute("y", r.cy);
  t.setAttribute("class", "map-label"); t.setAttribute("text-anchor", "middle");
  t.textContent = r.name.toUpperCase();
  mapSvg.appendChild(t);
}

const regionChips = $("#regionChips"), countryChips = $("#countryChips");
regionChips.innerHTML = FLYTZ.regions.map(r =>
  `<button class="chip" role="tab" data-region="${r.id}">${r.name}</button>`).join("");

function selectRegion(id) {
  document.querySelectorAll(".map-region").forEach(p => p.classList.toggle("is-active", p.dataset.region === id));
  regionChips.querySelectorAll(".chip").forEach(c => c.classList.toggle("is-active", c.dataset.region === id));
  const list = FLYTZ.countries[id] || [];
  countryChips.innerHTML = list.map((c, i) =>
    `<button class="chip chip--country" data-country="${c.id}" style="animation:stepIn .5s ${i * 0.08}s var(--ease) both">${c.name}<b>${c.code}</b></button>`).join("");
}
mapSvg.addEventListener("click", e => {
  const p = e.target.closest(".map-region"); if (p) selectRegion(p.dataset.region);
});
mapSvg.addEventListener("keydown", e => {
  const p = e.target.closest(".map-region");
  if (p && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); selectRegion(p.dataset.region); }
});
regionChips.addEventListener("click", e => {
  const c = e.target.closest(".chip"); if (c) selectRegion(c.dataset.region);
});
selectRegion("europe");

/* ───────────────── 5. COUNTRY PANEL ───────────────── */
const panel = $("#countryPanel"), overlay = $("#overlay");
const allCountries = Object.values(FLYTZ.countries).flat();
const findCountry = id => allCountries.find(c => c.id === id);
let lastFocus = null;

function openPanel(id) {
  const c = findCountry(id); if (!c) return;
  lastFocus = document.activeElement;
  $("#panelTitle").textContent = c.name;
  $("#panelRoute").textContent = "FLZ → " + c.code;
  $("#panelTagline").textContent = c.tagline;
  panel.querySelector(".panel__monument").style.setProperty("--panel-tint", c.palette);
  $("#monumentStage").innerHTML = MONUMENTS[c.monument] || "";
  $("#panelProducts").innerHTML = c.products.map((p, i) => `
    <article class="product" style="animation-delay:${0.25 + i * 0.1}s">
      <div class="product__thumb" style="--panel-tint:${c.palette}">${garmentIcon(p.type)}</div>
      <div><h4>${p.name}</h4><small>${p.type} · ${p.note}</small></div>
      <div class="product__buy">
        <span class="product__price">${gbp(p.price)}</span>
        <button class="product__add" data-add="${c.id}|${p.name}|${p.price}">Add</button>
      </div>
    </article>`).join("");
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
  overlay.hidden = false; requestAnimationFrame(() => overlay.classList.add("is-on"));
  document.body.style.overflow = "hidden";
  $("#panelClose").focus();
}
function closePanel() {
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  overlay.classList.remove("is-on");
  setTimeout(() => { overlay.hidden = true; }, 400);
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
countryChips.addEventListener("click", e => {
  const c = e.target.closest(".chip--country"); if (c) openPanel(c.dataset.country);
});
$("#panelClose").addEventListener("click", closePanel);
overlay.addEventListener("click", () => { closePanel(); closeCart(); });
addEventListener("keydown", e => { if (e.key === "Escape") { closePanel(); closeCart(); closeCheckout(); } });

/* featured cards */
$("#featuredCards").innerHTML = FLYTZ.featured.map(id => {
  const c = findCountry(id);
  return `<article class="card reveal" data-country="${c.id}" tabindex="0" role="button" aria-label="Open ${c.name} collection">
    <div class="card__bg" style="background:radial-gradient(110% 100% at 50% 0%, ${c.palette}, #0a0d15)">${MONUMENTS[c.monument]}</div>
    <span class="card__code">${c.code}</span>
    <h3>${c.name}</h3><p>${c.tagline}</p>
    <span class="card__link">View capsule</span>
  </article>`;
}).join("");
document.querySelectorAll("#featuredCards .reveal").forEach(el => io.observe(el));
$("#featuredCards").addEventListener("click", e => {
  const card = e.target.closest(".card"); if (card) openPanel(card.dataset.country);
});
$("#featuredCards").addEventListener("keydown", e => {
  const card = e.target.closest(".card");
  if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openPanel(card.dataset.country); }
});

/* highlights */
const HL = [
  ["M32 6 L38 24 L58 24 L42 36 L48 56 L32 44 L16 56 L22 36 L6 24 L26 24 Z", "Limited capsule runs", "Each destination drop is numbered and never reprinted. When a flight is full, it's full."],
  ["M12 30 a20 20 0 1 1 40 0 M32 10 v40 M14 24 h36 M14 38 h36", "Global shipping", "Six continents, tracked door-to-door. Your order travels like you do."],
  ["M16 8 h32 v48 l-16 -10 -16 10 Z", "Coordinates woven in", "Every piece carries the latitude and longitude of its inspiration, stitched inside the hem."],
  ["M10 50 Q32 10 54 50 M22 50 Q32 32 42 50", "Responsibly made", "Natural fibres and certified mills, chosen per destination's craft tradition."]
];
$("#highlightRow").innerHTML = HL.map(([d, t, s]) =>
  `<div class="hl reveal"><div class="hl__icon"><svg viewBox="0 0 64 64"><path d="${d}"/></svg></div><h3>${t}</h3><p>${s}</p></div>`).join("");
document.querySelectorAll("#highlightRow .reveal").forEach(el => io.observe(el));

/* ───────────────── 6. CART ───────────────── */
const cart = [];
const cartDrawer = $("#cartDrawer");
function renderCart() {
  $("#cartCount").textContent = cart.length;
  $("#cartItems").innerHTML = cart.length
    ? cart.map((it, i) => `<div class="cart-item">
        <div><strong>${it.name}</strong><small>${findCountry(it.country)?.name ?? ""} capsule</small></div>
        <div style="display:flex;align-items:center;gap:6px"><span class="product__price">${gbp(it.price)}</span>
        <button class="cart-item__rm" data-rm="${i}" aria-label="Remove ${it.name}">✕</button></div>
      </div>`).join("")
    : `<p class="cart__empty">Your cabin bag is empty.<br>Pick a destination to start packing.</p>`;
  $("#cartTotal").textContent = gbp(cart.reduce((s, i) => s + i.price, 0));
}
document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const [country, name, price] = add.dataset.add.split("|");
    cart.push({ country, name, price: +price });
    renderCart();
    add.textContent = "Packed ✓";
    setTimeout(() => { add.textContent = "Add"; }, 1200);
  }
  const rm = e.target.closest("[data-rm]");
  if (rm) { cart.splice(+rm.dataset.rm, 1); renderCart(); }
});
function openCart() {
  cartDrawer.classList.add("is-open"); cartDrawer.setAttribute("aria-hidden", "false");
  overlay.hidden = false; requestAnimationFrame(() => overlay.classList.add("is-on"));
}
function closeCart() {
  cartDrawer.classList.remove("is-open"); cartDrawer.setAttribute("aria-hidden", "true");
  if (!panel.classList.contains("is-open")) {
    overlay.classList.remove("is-on"); setTimeout(() => { overlay.hidden = true; }, 400);
  }
}
$("#cartBtn").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
renderCart();

/* ───────────────── 7. CHECKOUT · BOARDING ───────────────── */
const checkout = $("#checkout");
const stepsEl = Array.from(document.querySelectorAll("#steps li"));
const stepPanes = [0, 1, 2, 3].map(i => $("#step" + i));
function setStage(n) {
  checkout.dataset.stage = Math.min(n, 3);
  stepsEl.forEach((li, i) => {
    li.classList.toggle("is-active", i === n);
    li.classList.toggle("is-done", i < n);
  });
  stepPanes.forEach((p, i) => p.classList.toggle("is-active", i === n));
}
function openCheckout() {
  if (!cart.length) { openCart(); return; }
  closeCart(); closePanel();
  checkout.classList.add("is-open"); checkout.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setStage(0);
  $("#fName").focus();
}
function closeCheckout() {
  checkout.classList.remove("is-open"); checkout.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$("#checkoutBtn").addEventListener("click", openCheckout);
$("#checkoutClose").addEventListener("click", closeCheckout);

$("#step0").addEventListener("submit", e => { e.preventDefault(); setStage(1); $("#fCard").focus(); });
$("#step1").addEventListener("submit", e => {
  e.preventDefault();
  setStage(2);
  const msgs = ["Loading your capsule onto the aircraft", "Cabin crew preparing your order", "Cleared for departure", "Wheels up — order confirmed"];
  const bar = $("#boardBar"), status = $("#boardStatus");
  let i = 0;
  const tick = () => {
    status.textContent = msgs[i];
    bar.style.width = ((i + 1) / msgs.length * 100) + "%";
    i++;
    if (i < msgs.length) setTimeout(tick, prefersReduced ? 150 : 1100);
    else setTimeout(showPass, prefersReduced ? 150 : 1000);
  };
  tick();
});

function showPass() {
  const name = ($("#fName").value || "A. Traveller").toUpperCase();
  const city = $("#fCity").value || "Your city";
  $("#passName").textContent = name;
  $("#passCity").textContent = city;
  $("#passTo").textContent = (city.replace(/[^a-z]/gi, "").slice(0, 3) || "YOU").toUpperCase();
  $("#passDate").textContent = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();
  $("#passTotal").textContent = gbp(cart.reduce((s, i) => s + i.price, 0));
  $("#passFlight").textContent = "FZ " + String(100 + Math.floor(Math.random() * 900));
  $("#passOrder").textContent = "FZ-" + String(Math.floor(100000 + Math.random() * 900000));
  $("#passItems").innerHTML = cart.map(i => `<div><span>${i.name}</span><span>${gbp(i.price)}</span></div>`).join("");
  setStage(3);
}
$("#passDone").addEventListener("click", () => {
  cart.length = 0; renderCart(); closeCheckout();
  document.querySelector("#explorer").scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
});
})();
