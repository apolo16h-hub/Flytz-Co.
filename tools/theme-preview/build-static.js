// Builds a static, hostable preview of the Flytz theme: the real Flytz sections rendered with
// liquidjs against Dawn's CSS and a sample catalogue, plus preview-only chrome (header, footer,
// cart drawer, product grid/page, checkout stand-in).
// Usage: npm install && node build-static.js ../../shopify-theme dist
const fs = require('fs');
const path = require('path');
const { Liquid } = require('liquidjs');

const THEME = path.resolve(process.argv[2]);
const OUT = path.resolve(process.argv[3]);
const HERE = __dirname;
const pkgDir = (name) => path.dirname(require.resolve(`${name}/package.json`));
const EMAIL = path.resolve(THEME, '..', 'shopify-extras', 'notifications', 'order-confirmation-boarding-pass.liquid');

const locale = JSON.parse(fs.readFileSync(path.join(THEME, 'locales/en.default.json'), 'utf8'));
const settingsData = JSON.parse(fs.readFileSync(path.join(THEME, 'config/settings_data.json'), 'utf8'));
const preset = settingsData.presets[settingsData.current];

// ---------- Shopify-like Liquid environment ----------
class Color {
  constructor(hex) {
    const n = parseInt(String(hex).replace('#', ''), 16);
    this.red = (n >> 16) & 255;
    this.green = (n >> 8) & 255;
    this.blue = n & 255;
    this.rgb = `${this.red} ${this.green} ${this.blue}`;
  }
  toString() {
    return '#' + [this.red, this.green, this.blue].map((v) => v.toString(16).padStart(2, '0')).join('');
  }
}
const shade = (c, amt) => {
  const o = new Color(c.toString());
  for (const k of ['red', 'green', 'blue']) o[k] = Math.max(0, Math.min(255, Math.round(o[k] + amt * 2.55)));
  o.rgb = `${o.red} ${o.green} ${o.blue}`;
  return o;
};
const settings = { ...preset };
settings.flytz_accent = new Color(preset.flytz_accent);
settings.flytz_accent_soft = new Color(preset.flytz_accent_soft);
settings.color_schemes = Object.entries(preset.color_schemes).map(([id, s]) => {
  const out = {};
  for (const [k, v] of Object.entries(s.settings)) out[k] = typeof v === 'string' && v.startsWith('#') ? new Color(v) : v;
  return { id, settings: out };
});
settings.type_body_font = { family: 'Montserrat', fallback_families: 'sans-serif', style: 'normal', weight: 400 };
settings.type_header_font = { family: 'Cormorant', fallback_families: 'serif', style: 'normal', weight: 500 };
const routes = { all_products_collection_url: '/collections/all', root: '/' };

const engine = new Liquid({
  root: [path.join(THEME, 'sections'), path.join(THEME, 'snippets')],
  extname: '.liquid',
  strictFilters: true,
  globals: { settings, routes, request: { design_mode: false } },
});
engine.registerTag('schema', {
  parse(tok, remain) {
    let t;
    while ((t = remain.shift())) if (t.name === 'endschema') return;
    throw new Error('unclosed schema');
  },
  render() {
    return '';
  },
});
engine.registerTag('style', {
  parse(tok, remain) {
    this.tpls = [];
    const stream = this.liquid.parser
      .parseStream(remain)
      .on('tag:endstyle', () => stream.stop())
      .on('template', (tpl) => this.tpls.push(tpl))
      .on('end', () => {
        throw new Error('unclosed style');
      });
    stream.start();
  },
  *render(ctx, emitter) {
    emitter.write('<style>');
    yield this.liquid.renderer.renderTemplates(this.tpls, ctx, emitter);
    emitter.write('</style>');
  },
});
const kw = (args) => Object.fromEntries(args.filter(Array.isArray));
const lookup = (key) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), locale);
engine.registerFilter('t', (key, ...args) => {
  const vars = kw(args);
  let v = lookup(key);
  if (v == null) throw new Error(`missing translation ${key}`);
  if (typeof v === 'object') v = vars.count === 1 ? v.one : v.other;
  return String(v).replace(/{{\s*(\w+)\s*}}/g, (_, k) => vars[k] ?? '');
});
engine.registerFilter('asset_url', (n) => `/assets/${n}`);
engine.registerFilter('stylesheet_tag', (u) => `<link rel="stylesheet" href="${u}">`);
engine.registerFilter('inline_asset_content', (n) => fs.readFileSync(path.join(THEME, 'assets', n), 'utf8'));
engine.registerFilter('image_url', (img) => (img && (img.src || img)) || '');
engine.registerFilter('image_tag', (url, ...args) => {
  const o = kw(args);
  return `<img src="${url}" alt="${String(o.alt || '').replace(/"/g, '&quot;')}" loading="${o.loading || 'lazy'}" width="400" height="500">`;
});
engine.registerFilter('money', (c) => '£' + (Number(c) / 100).toFixed(2));
engine.registerFilter('placeholder_svg_tag', (n, cls) => `<svg class="${cls || ''}" viewBox="0 0 525 525"><rect width="525" height="525"/></svg>`);
engine.registerFilter('font_face', () => '');
engine.registerFilter('font_modify', (f) => f);
engine.registerFilter('color_brightness', (c) => (c.red * 299 + c.green * 587 + c.blue * 114) / 1000 / 2.55);
engine.registerFilter('color_lighten', (c, a) => shade(c, a));
engine.registerFilter('color_darken', (c, a) => shade(c, -a));

const schemaOf = (type) => {
  const src = fs.readFileSync(path.join(THEME, 'sections', `${type}.liquid`), 'utf8');
  const m = /{%-?\s*schema\s*-?%}([\s\S]*?){%-?\s*endschema\s*-?%}/.exec(src);
  return m ? JSON.parse(m[1]) : {};
};
const defaults = (defs) => Object.fromEntries((defs || []).filter((d) => d.id).map((d) => [d.id, d.default ?? (d.type === 'checkbox' ? false : '')]));
async function renderSection(type, id, conf = {}, ctx = {}) {
  const schema = schemaOf(type);
  const blockDefs = Object.fromEntries((schema.blocks || []).map((b) => [b.type, b]));
  const blocks = (conf.block_order || []).map((bid) => {
    const b = conf.blocks[bid];
    return { id: bid, type: b.type, shopify_attributes: '', settings: { ...defaults(blockDefs[b.type]?.settings), ...b.settings } };
  });
  const section = { id, settings: { ...defaults(schema.settings), ...(conf.settings || {}) }, blocks };
  const html = await engine.renderFile(type, { section, ...ctx });
  return `<div id="shopify-section-${id}" class="shopify-section ${schema.class || ''}">${html}</div>`;
}

// ---------- sample catalogue (from the theme's own demo data) ----------
const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const money = (c) => '£' + (c / 100).toFixed(2);

async function buildCatalog() {
  const demo = JSON.parse(await engine.renderFile('flytz-demo-destinations', {}));
  const collections = {};
  const products = {};
  const variants = {};
  let vid = 41000000;
  const all = { handle: 'all', title: 'All', url: '/collections/all', metafields: {} };
  for (const d of demo) {
    const items = d.products.map((p, i) => {
      const apparel = p.type !== 'Accessory';
      const sizes = apparel ? ['XS', 'S', 'M', 'L', 'XL'] : ['Default Title'];
      const vs = sizes.map((s, j) => ({ id: ++vid, title: s, available: !(apparel && j === 4 && i % 2 === 0) }));
      const handle = slug(p.title);
      const price = Math.round(parseFloat(p.price.replace(/[^0-9.]/g, '')) * 100);
      const product = {
        title: p.title,
        handle,
        type: p.type,
        note: p.note,
        url: `/products/${handle}`,
        price,
        price_min: price,
        price_varies: false,
        compare_at_price: i === 1 ? Math.round((price * 1.25) / 500) * 500 : null,
        available: vs.some((v) => v.available),
        variants: vs,
        has_only_default_variant: !apparel,
        selected_or_first_available_variant: vs.find((v) => v.available),
        featured_media: { src: `/img/${handle}.svg`, alt: p.title },
        collections: [all],
        metafields: { flytz: { inspiration: { value: p.note } } },
        dest: d,
        palette: d.palette,
        code: d.code,
      };
      products[handle] = product;
      for (const v of vs) {
        variants[v.id] = {
          title: p.title,
          variant: apparel ? v.title : '',
          price,
          available: v.available,
          img: `img/${handle}.svg`,
          url: `product-${handle}.html`,
          capsule: d.title,
          type: p.type,
        };
      }
      return product;
    });
    const c = {
      handle: d.handle,
      title: d.title,
      description: `<p>${esc(d.tagline)}</p>`,
      url: `/collections/${d.handle}`,
      products: items,
      products_count: items.length,
      metafields: {},
      palette: d.palette,
      code: d.code,
      tagline: d.tagline,
    };
    collections[d.handle] = c;
    items.forEach((p) => {
      p.collections.push(c);
      p.dest = c;
    });
  }
  return { collections, products, variants, demo };
}

// ---------- product imagery ----------
const SIL = {
  tee: 'M128 98 L172 76 Q200 104 228 76 L272 98 L318 154 L284 176 L284 418 H116 V176 L82 154 Z',
  jacket: 'M120 92 L168 70 Q200 98 232 70 L280 92 L326 196 L292 206 L292 430 H108 V206 L74 196 Z',
  knit: 'M122 100 L170 76 Q200 92 230 76 L278 100 L320 172 L290 186 L290 420 H110 V186 L80 172 Z',
  trouser: 'M138 70 H262 L278 434 H222 L200 196 L178 434 H122 Z',
  shorts: 'M126 120 H274 L300 318 H222 L200 214 L178 318 H100 Z',
  tote: 'M110 170 H290 L276 420 H124 Z M152 170 Q152 96 200 96 Q248 96 248 170',
};
const DETAIL = {
  tee: 'M178 80 Q200 100 222 80',
  jacket: 'M200 96 V430 M150 250 h26 M224 250 h26',
  knit: 'M110 380 H290 M110 392 H290 M174 80 Q200 96 226 80',
  trouser: 'M138 96 H262 M200 70 V196',
  shorts: 'M126 146 H274 M200 120 V214',
  tote: 'M140 220 H260',
};
const silFor = (type) =>
  ({ Tee: 'tee', Shirt: 'tee', Overshirt: 'jacket', Jacket: 'jacket', Parka: 'jacket', Coat: 'jacket', Trench: 'jacket', Blazer: 'jacket', Set: 'jacket', Hoodie: 'knit', Knit: 'knit', Fleece: 'knit', Trouser: 'trouser', Denim: 'trouser', Shorts: 'shorts', Accessory: 'tote' })[type] || 'tee';
const FABRICS = ['#e9e2d0', '#cbb894', '#8f9caa', '#3d4556', '#b58b5c', '#d9d1c1', '#6f8169', '#a5543f', '#2d3a4f', '#c7a46a'];
function productSvg(p, i) {
  const k = silFor(p.type);
  const fabric = FABRICS[(i * 7 + p.title.length) % FABRICS.length];
  const tint = p.palette;
  const light = shade(new Color(tint), 12).toString();
  const dark = fabric === '#3d4556' || fabric === '#2d3a4f' || fabric === '#6f8169' || fabric === '#a5543f';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">
<defs><radialGradient id="g" cx="50%" cy="30%" r="80%"><stop offset="0" stop-color="${light}"/><stop offset="1" stop-color="#090c14"/></radialGradient>
<linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${fabric}"/><stop offset="1" stop-color="${shade(new Color(fabric), -14)}"/></linearGradient></defs>
<rect width="400" height="500" fill="url(#g)"/>
<ellipse cx="200" cy="452" rx="120" ry="12" fill="#000" opacity=".35"/>
<path d="${SIL[k]}" fill="url(#f)" stroke="${dark ? '#c9a24b' : '#5a4a2a'}" stroke-opacity=".35" stroke-width="2" fill-rule="evenodd"/>
<path d="${DETAIL[k]}" fill="none" stroke="#c9a24b" stroke-width="2.4" stroke-linecap="round" opacity=".75"/>
<text x="372" y="40" text-anchor="end" font-family="Montserrat, Helvetica, sans-serif" font-size="15" font-weight="600" letter-spacing="5" fill="#e7cf96">${p.code}</text>
<text x="28" y="476" font-family="Montserrat, Helvetica, sans-serif" font-size="11" font-weight="600" letter-spacing="4" fill="#e7cf96" opacity=".7">FLYTZ CO.</text>
</svg>`;
}

// ---------- page chrome ----------
let styleBlock = '';
async function buildStyleBlock() {
  const layout = fs.readFileSync(path.join(THEME, 'layout/theme.liquid'), 'utf8');
  styleBlock = await engine.parseAndRender(/{% style %}[\s\S]*?{% endstyle %}/.exec(layout)[0], {});
}
const FONT_FILES = [
  ['Cormorant', 'cormorant', 500, 'normal'],
  ['Cormorant', 'cormorant', 500, 'italic'],
  ['Montserrat', 'montserrat', 400, 'normal'],
  ['Montserrat', 'montserrat', 500, 'normal'],
  ['Montserrat', 'montserrat', 600, 'normal'],
];
const fontFaces = () =>
  FONT_FILES.map(([fam, f, w, st]) => `@font-face{font-family:'${fam}';font-style:${st};font-weight:${w};src:url(/fonts/${f}-latin-${w}-${st}.woff2) format('woff2');font-display:swap}`).join('');

function headTags({ capsules = false } = {}) {
  return `<style>${fontFaces()}</style>
${styleBlock}
<link rel="stylesheet" href="/assets/base.css">
<link rel="stylesheet" href="/assets/flytz.css">
<link rel="stylesheet" href="/assets/preview.css">
<script>document.documentElement.classList.add('js');window.Shopify=window.Shopify||{};window.routes={cart_add_url:'/cart/add',cart_change_url:'/cart/change',cart_update_url:'/cart/update',cart_url:'/cart'};</script>
<script src="/assets/catalog.js"></script>
${capsules ? '<script src="/assets/capsules.js"></script>' : ''}
<script src="/assets/preview-shim.js"></script>
<script src="/assets/animations.js" defer></script>`;
}
const header = () => `
<div class="pv-announce"><span class="announcement-bar__message">Now boarding: the Tokyo capsule · Complimentary worldwide shipping</span></div>
<header class="pv-header">
  <div class="page-width pv-header__inner">
    <a class="header__heading-link pv-header__logo" href="index.html"><span class="h2">Flytz Co.</span></a>
    <nav class="pv-header__nav" aria-label="Main">
      <a class="header__menu-item" href="index.html#flytz-explorer"><span>Destinations</span></a>
      <a class="header__menu-item" href="index.html#flytz-featured"><span>Capsules</span></a>
      <a class="header__menu-item" href="index.html#flytz-story"><span>Our story</span></a>
    </nav>
    <button type="button" class="pv-bag" data-open-cart aria-haspopup="dialog">Cabin bag <span class="pv-bag__count" data-cart-count>0</span></button>
  </div>
</header>`;
const drawer = () => `
<div class="pv-drawer-overlay" aria-hidden="true"></div>
<cart-drawer class="pv-drawer" role="dialog" aria-modal="true" aria-label="Your cabin bag" aria-hidden="true" inert>
  <div class="pv-drawer__head"><h2>Your cabin bag</h2><button type="button" class="pv-drawer__close" aria-label="Close">✕</button></div>
  <div class="pv-drawer__items" data-cart-items></div>
  <div class="pv-drawer__foot">
    <div class="pv-drawer__total"><span>Subtotal</span><strong data-cart-subtotal>£0.00</strong></div>
    <p class="pv-drawer__note">Shipping and taxes are calculated at checkout.</p>
    <form action="/cart" method="post" id="CartDrawer-Form"></form>
    <button type="submit" id="CartDrawer-Checkout" class="button button--full-width" name="checkout" form="CartDrawer-Form" data-cart-checkout disabled>Proceed to boarding</button>
  </div>
</cart-drawer>`;
const footer = () => `
<footer class="pv-footer">
  <div class="page-width">
    <div class="pv-footer__grid">
      <div><h3>Flytz Co.</h3><p>Travel-inspired clothing. Capsule collections inspired by the world's cities, landmarks and monuments.</p></div>
      <div><h3>Explore</h3><ul><li><a href="index.html#flytz-explorer">Shop by destination</a></li><li><a href="collection-japan.html">Tokyo capsule</a></li><li><a href="collection-france.html">Paris capsule</a></li><li><a href="collection-usa.html">New York capsule</a></li></ul></div>
      <div><h3>Join the flight list</h3>
        <form class="pv-newsletter" data-preview-newsletter><label class="visually-hidden" for="pvNewsletter">Email</label><input id="pvNewsletter" type="email" required placeholder="you@example.com"><button class="button" type="submit">Join</button></form>
        <p>Early boarding for new capsules. No spam, just departures.</p></div>
    </div>
    <p class="pv-footer__fine">Preview of the Flytz Shopify theme with sample products. On a live store, the header, footer, cart drawer and product pages come from Dawn.</p>
  </div>
</footer>`;
async function tail() {
  const overlay = await engine.renderFile('flytz-boarding-overlay', {});
  return `${drawer()}${overlay}<script src="/assets/flytz-boarding.js" defer></script>`;
}
const docOpen = (title, opts) => `<!doctype html><html class="js" lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><title>${esc(title)}</title>${headTags(opts)}</head><body class="gradient">`;
const docClose = '</body></html>';

const card = (p) => `<li><a class="pv-card" href="${p.url}">
  <span class="pv-card__media"><img src="/img/${p.handle}.svg" alt="${esc(p.title)}" width="400" height="500" loading="lazy">${p.compare_at_price ? '<span class="pv-card__badge">Sale</span>' : ''}</span>
  <span class="pv-card__meta">${esc(p.code)} · ${esc(p.dest.title)}</span>
  <span class="pv-card__title">${esc(p.title)}</span>
  <span class="pv-card__price">${p.compare_at_price ? `<s>${money(p.compare_at_price)}</s>` : ''}${money(p.price)}</span>
</a></li>`;
const grid = (eyebrow, title, list, id = '') => `<section class="pv-grid-section color-scheme-1 gradient"${id ? ` id="${id}"` : ''}><div class="page-width">
  <div class="flytz-head scroll-trigger animate--slide-in"><p class="flytz-eyebrow">${esc(eyebrow)}</p><h2 class="flytz-title">${esc(title)}</h2></div>
  <ul class="pv-grid">${list.map(card).join('')}</ul></div></section>`;

// ---------- URL rewriting for static hosting ----------
const rewrite = (html) =>
  html
    .replace(/(["'(])\/assets\//g, '$1assets/')
    .replace(/(["'(])\/fonts\//g, '$1fonts/')
    .replace(/(["'(])\/img\//g, '$1img/')
    .replace(/(["'])\/collections\/all(["'#])/g, '$1index.html#flytz-explorer$2')
    .replace(/(["'])\/collections\/([\w-]+)(["'#])/g, '$1collection-$2.html$3')
    .replace(/(["'])\/products\/([\w-]+)(["'#])/g, '$1product-$2.html$3');

async function main() {
  fs.rmSync(OUT, { recursive: true, force: true });
  for (const d of ['assets', 'fonts', 'img']) fs.mkdirSync(path.join(OUT, d), { recursive: true });
  await buildStyleBlock();
  const { collections, products, variants, demo } = await buildCatalog();
  const files = [];
  const write = (rel, content) => {
    fs.writeFileSync(path.join(OUT, rel), content);
    files.push(rel);
  };
  const tpl = JSON.parse(fs.readFileSync(path.join(THEME, 'templates/index.json'), 'utf8'));
  const destList = demo.map((d) => collections[d.handle]);

  // Home
  let body = '';
  for (const id of tpl.order) {
    const conf = JSON.parse(JSON.stringify(tpl.sections[id]));
    conf.settings = conf.settings || {};
    if (conf.type === 'featured-collection') {
      const picks = ['japan', 'france', 'usa', 'italy', 'morocco', 'uk', 'brazil', 'australia']
        .map((h) => (collections[h] || collections['united-kingdom']).products[0]);
      body += grid('First class picks', 'Bestsellers from every departure', picks, 'first-class');
      continue;
    }
    if (conf.type === 'flytz-destination-explorer') conf.settings.destinations = destList;
    if (conf.type === 'flytz-featured-destinations') conf.settings.destinations = [collections.japan, collections.france, collections.usa];
    body += await renderSection(conf.type, id, conf);
  }
  write(
    'index.html',
    rewrite(`<title>Flytz Co. Storefront</title>${headTags({ capsules: true })}${header()}<main id="MainContent">${body}</main>${footer()}${await tail()}`)
  );

  // Capsule fragments for the explorer
  const caps = {};
  for (const c of destList) {
    const html = await engine.renderFile('flytz-capsule-products', { section: { id: 'flytz-capsule-products', settings: {}, blocks: [] }, collection: c });
    caps[c.handle] = rewrite(html);
  }
  write('assets/capsules.js', `window.FLYTZ_CAPSULES = ${JSON.stringify(caps)};\n`);
  write('assets/catalog.js', `window.FLYTZ_CATALOG = ${JSON.stringify({ variants })};\n`);

  // Collection pages
  for (const c of destList) {
    const banner = await renderSection('flytz-destination-banner', 'banner', {}, { collection: c });
    const page = `${docOpen(`${c.title} capsule · Flytz Co.`)}${header()}<main id="MainContent">${banner}${grid(`${c.code} · ${c.products_count} pieces`, `The ${c.title} capsule`, c.products)}</main>${footer()}${await tail()}${docClose}`;
    write(`collection-${c.handle}.html`, rewrite(page));
  }

  // Product pages
  for (const p of Object.values(products)) {
    const sizes = p.has_only_default_variant
      ? `<input type="hidden" name="id" value="${p.variants[0].id}">`
      : `<fieldset class="pv-sizes"><legend>Size</legend>${p.variants
          .map(
            (v) =>
              `<label class="pv-size"><input type="radio" name="id" value="${v.id}"${v === p.selected_or_first_available_variant ? ' checked' : ''}${v.available ? '' : ' disabled'}><span>${v.title}</span></label>`
          )
          .join('')}</fieldset>`;
    const top = `<section class="color-scheme-1 gradient"><div class="page-width pv-product">
      <div class="pv-product__media"><img src="/img/${p.handle}.svg" alt="${esc(p.title)}" width="400" height="500"></div>
      <form class="pv-product__info" data-preview-product>
        <a class="pv-crumb" href="${p.dest.url}">FLZ → ${esc(p.code)} · ${esc(p.dest.title)} capsule</a>
        <h1 class="pv-product__title">${esc(p.title)}</h1>
        <p class="pv-product__price">${p.compare_at_price ? `<s>${money(p.compare_at_price)}</s>` : ''}${money(p.price)}</p>
        ${sizes}
        <button type="button" class="button button--full-width" data-preview-add>Add to cabin bag</button>
        <p class="pv-error" role="alert"></p>
        <p class="pv-product__desc">${esc(p.type)} · ${esc(p.note)}. ${esc(p.dest.tagline)}</p>
      </form></div></section>`;
    const story = await renderSection('flytz-product-destination', 'destination', {}, { product: p });
    const more = p.dest.products.filter((o) => o !== p);
    const page = `${docOpen(`${p.title} · Flytz Co.`)}${header()}<main id="MainContent">${top}${story}${more.length ? grid('More from this capsule', `The ${p.dest.title} capsule`, more) : ''}</main>${footer()}${await tail()}${docClose}`;
    write(`product-${p.handle}.html`, rewrite(page));
  }

  // Checkout stand-in + boarding pass receipt (rendered in the browser from the real email template)
  const emailTpl = fs.readFileSync(EMAIL, 'utf8');
  const confirmation = `${docOpen('Boarding pass · Flytz Co.')}${header()}
<main id="MainContent" class="color-scheme-1 gradient">
  <div class="page-width pv-checkout" id="pvCheckoutStep">
    <div>
      <p class="flytz-eyebrow">Checkout · preview stand-in</p>
      <h1 class="flytz-title">Passenger details</h1>
      <p class="flytz-sub">On the live store, address and payment run on Shopify's secure checkout, styled in Flytz colours. In this preview, enter a name and city to see the boarding-pass receipt customers receive by email.</p>
      <form id="pvCheckout" class="pv-checkout__form" style="margin-top:3rem">
        <div class="pv-field"><label for="pvName">Passenger name</label><input id="pvName" required autocomplete="name" value="Alex Traveller"></div>
        <div class="pv-field"><label for="pvAddress">Address</label><input id="pvAddress" required autocomplete="address-line1" value="1 Runway Lane"></div>
        <div class="pv-row">
          <div class="pv-field"><label for="pvCity">City</label><input id="pvCity" required autocomplete="address-level2" value="London"></div>
          <div class="pv-field"><label for="pvZip">Postcode</label><input id="pvZip" autocomplete="postal-code" value="FL1 2TZ"></div>
        </div>
        <div class="pv-field"><label for="pvCountry">Country</label><input id="pvCountry" required autocomplete="country-name" value="United Kingdom"></div>
        <p class="pv-drawer__note">Payment is skipped in this preview.</p>
        <button class="button button--full-width" type="submit">Complete order</button>
      </form>
    </div>
    <aside class="pv-summary" aria-label="Order summary">
      <h2>Your cabin bag</h2>
      <div data-cart-items></div>
      <div class="pv-drawer__total"><span>Subtotal</span><strong data-cart-subtotal>£0.00</strong></div>
    </aside>
  </div>
  <div class="page-width pv-pass-wrap" id="pvPassStep" hidden>
    <div id="pvPass"></div>
    <div class="pv-pass-actions"><a class="button" href="index.html#flytz-explorer">Continue exploring</a></div>
  </div>
</main>
${footer()}${drawer()}
<script src="assets/liquid.browser.min.js"></script>
<script>
(() => {
  const TEMPLATE = ${JSON.stringify(emailTpl).replace(/</g, '\\u003c')};
  const SAMPLE = ${JSON.stringify(Object.keys(variants).slice(0, 1).concat([String(products['montmartre-tee'].variants[1].id)]))};
  const P = window.FlytzPreview;
  const form = document.getElementById('pvCheckout');
  const val = (id) => document.getElementById(id).value.trim();
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let lines = P.lines();
    if (!lines.length) lines = SAMPLE.map((id) => ({ id, qty: 1 }));
    const cat = P.catalog.variants;
    const items = lines.map((l) => ({
      quantity: l.qty,
      title: cat[l.id].title,
      product: { title: cat[l.id].title },
      variant: { title: cat[l.id].variant || 'Default Title' },
      final_line_price: cat[l.id].price * l.qty,
    }));
    const subtotal = items.reduce((s, i) => s + i.final_line_price, 0);
    const n = 1000 + Math.floor(Math.random() * 9000);
    const name = val('pvName');
    const engine = new liquidjs.Liquid();
    engine.registerFilter('money', P.money);
    engine.registerFilter('money_with_currency', (c) => P.money(c) + ' GBP');
    const html = await engine.parseAndRender(TEMPLATE, {
      shop: { name: 'Flytz Co.', email: 'hello@flytz.co' },
      order_name: '#' + n,
      order_number: n,
      created_at: new Date().toISOString(),
      customer: { first_name: name.split(' ')[0], name },
      shipping_address: { name, address1: val('pvAddress'), address2: '', city: val('pvCity'), zip: val('pvZip'), country: val('pvCountry'), country_code: '' },
      subtotal_line_items: items,
      subtotal_price: subtotal,
      shipping_price: 0,
      requires_shipping: true,
      shipping_method: { title: 'Worldwide Express' },
      tax_price: 0,
      total_price: subtotal,
      order_status_url: 'index.html',
    });
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const host = document.getElementById('pvPass');
    const root = host.shadowRoot || host.attachShadow({ mode: 'open' });
    root.innerHTML = [...doc.querySelectorAll('style')].map((s) => s.outerHTML).join('') + doc.body.innerHTML;
    document.getElementById('pvCheckoutStep').hidden = true;
    document.getElementById('pvPassStep').hidden = false;
    P.write([]);
    P.refresh();
    window.scrollTo({ top: 0 });
  });
})();
</script>
<script src="assets/flytz-boarding.js" defer></script>
${docClose}`;
  write('confirmation.html', rewrite(confirmation));

  // Static assets
  for (const a of ['base.css', 'flytz.css', 'flytz-hero.css', 'flytz-explorer.css', 'flytz-globe.js', 'flytz-explorer.js', 'flytz-boarding.js', 'animations.js']) {
    fs.copyFileSync(path.join(THEME, 'assets', a), path.join(OUT, 'assets', a));
    files.push(`assets/${a}`);
  }
  for (const f of ['preview.css', 'preview-shim.js']) {
    fs.copyFileSync(path.join(HERE, 'static', f), path.join(OUT, 'assets', f));
    files.push(`assets/${f}`);
  }
  fs.copyFileSync(path.join(pkgDir('liquidjs'), 'dist/liquid.browser.min.js'), path.join(OUT, 'assets/liquid.browser.min.js'));
  files.push('assets/liquid.browser.min.js');
  for (const [, f, w, st] of FONT_FILES) {
    const name = `${f}-latin-${w}-${st}.woff2`;
    fs.copyFileSync(path.join(pkgDir(`@fontsource/${f}`), 'files', name), path.join(OUT, 'fonts', name));
    files.push(`fonts/${name}`);
  }
  Object.values(products).forEach((p, i) => write(`img/${p.handle}.svg`, productSvg(p, i)));

  // Sanity: every relative link points at a file we wrote
  const written = new Set(files);
  const missing = new Set();
  for (const f of files.filter((f) => f.endsWith('.html') || f === 'assets/capsules.js')) {
    const s = fs.readFileSync(path.join(OUT, f), 'utf8');
    for (const m of s.matchAll(/(?:href|src)=\\?"([^"#:\\]+?\.(?:html|css|js|svg))[#"\\]/g)) if (!written.has(m[1])) missing.add(`${f} → ${m[1]}`);
    if (/["'(]\/(assets|fonts|img|collections|products)\//.test(s)) missing.add(`${f} has an unrewritten root URL`);
  }
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(files.filter((f) => f !== 'index.html'), null, 0));
  console.log(`wrote ${files.length} files`);
  console.log(missing.size ? 'BROKEN LINKS:\n' + [...missing].join('\n') : 'all relative links resolve');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
