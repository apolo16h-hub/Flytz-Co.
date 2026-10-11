# Flytz — Shopify theme

The Flytz Co. storefront as an installable Shopify theme (`shopify-theme/`). It is built on
Shopify's **Dawn 16**, so product pages, cart, search, filters, customer accounts and
localization are Dawn's proven code. The Flytz design and signature sections sit on top.

The original static concept (`index.html`, `css/`, `js/`, described in `STOREFRONT.md`) is kept as the design reference.

## What's in the theme

| Section (theme editor name) | Where | What it does |
|---|---|---|
| Flytz globe hero | Home | Real-time 3D Earth (WebGL): dotted continents, atmosphere, city beacons, animated flight routes, a modelled airliner with a contrail. Drag to spin; airport-code pins open that destination's capsule. Departures ticker |
| Flytz destination cards | Home | Featured destinations, each with a 3D landmark model that builds up from its plinth, turns, and leans towards the pointer (or the collection image). Opens the capsule panel when the explorer is on the page |
| Flytz map explorer | Home | Real world map → continent (the map zooms in, with clickable airport-code pins) → country → slide-in capsule panel: a draggable 3D landmark on the left, the collection's products on the right with size picker and add-to-cart |
| Flytz departures board | Home | Split-flap airport board of your destination capsules (time, destination, flight, gate, remarks) that flips in and keeps updating; rows open the capsule |
| Flytz highlights | Home | Brand promises (icon blocks) |
| Flytz brand story | Home | Story text, stats, optional image |
| Flytz call to action | Home | "Shop by destination" banner |
| Flytz destination banner | Collection pages | Each country's collection page becomes its capsule: route (FLZ → CDG), 3D landmark, region, coordinates |
| Flytz destination story | Product pages | "Inspired by Japan" block with 3D landmark, route, inspiration and coordinates |
| Boarding sequence | Cart → checkout | 3.7 s real-time 3D departure between the checkout button and Shopify checkout: bags ride the belt loader into the hold, a gold scanner sweeps the jet, it taxis, takes off and climbs out over the city. Skip button included |

Also changed from Dawn: dark luxury colour schemes, Cormorant + Montserrat (both from Shopify's
font library), pill buttons, rounded cards, cart drawer by default, "Your cabin bag" /
"Proceed to boarding" cart wording. Section headings rise in word by word, cards tilt towards
the pointer with a moving glare, the hero buttons lean magnetically, and scroll progress shows
as a gold flight path along the top of the page.

## 3D and motion

The 16 landmarks (Eiffel Tower, Big Ben, Colosseum, Parthenon, Mount Fuji, Great Wall, Taj Mahal,
Burj Khalifa, Pyramids of Giza, Koutoubia, Statue of Liberty, Chichen Itza, Christ the Redeemer,
Machu Picchu, Sydney Opera House and a desk globe for anywhere else), the airliner and the airport
are modelled in code, so there are no model files to host or license.

- **One file, loaded only when useful.** All 3D lives in `assets/flytz-3d.js` (about 180 KB
  gzipped, three.js included). `assets/flytz-motion.js` downloads it after the page has rendered,
  and only on devices with WebGL 2. Shoppers with data saver on, or on low-memory devices, never
  download it.
- **The 2D versions stay as the fallback.** The canvas globe, the landmark line art and the CSS
  boarding animation show first and stay in place wherever 3D doesn't run, and if a device drops
  its WebGL context the page falls back to them.
- **Light on the GPU.** Every landmark on a page shares a single WebGL renderer, scenes pause when
  they are off screen or the tab is hidden, and the boarding scene is prepared only once the cart
  drawer opens or the checkout button is hovered or touched.
- **Reduced motion.** With *reduce motion* set on the device, nothing moves on its own: models are
  shown still (drag still works), the board shows its final text, and checkout uses the short
  CSS sequence.
- **Theme settings → Flytz → 3D and motion:** turn the real-time 3D scenes off, or hide the
  flight-path progress line.

The 3D source is in `tools/flytz-3d` (`src/globe.js`, `src/landmarks.js`, `src/stage.js`,
`src/boarding.js`, `src/plane.js`). After editing, rebuild the theme asset:

```bash
cd tools/flytz-3d && npm install && npm run build   # writes shopify-theme/assets/flytz-3d.js
```

## Browsable preview

`tools/theme-preview` renders the Flytz sections with sample products into a static site you can
scroll and click through (3D scenes, cart, boarding sequence and boarding-pass receipt included):
`cd tools/theme-preview && npm install && npm run build` writes it to `dist/`. Header, footer, cart
drawer, product grid and product page in that preview are stand-ins for Dawn's own.

## Install

**Upload:** zip the *contents* of `shopify-theme/` (so `layout/`, `sections/`… are at the zip root):

```bash
cd shopify-theme && zip -r ../flytz-theme.zip . -x '.*'
```

Then Shopify admin → **Online Store → Themes → Add theme → Upload zip file**.

**Or with Shopify CLI:** `shopify theme push --path shopify-theme --unpublished`

## Set up (about 15 minutes)

1. **Create one collection per destination**: France, Japan, New York… Handles such as
   `france`, `paris`, `uk`, `london`, `italy`, `rome`, `greece`, `japan`, `tokyo`, `china`, `india`,
   `dubai`, `egypt`, `morocco`, `brazil`, `rio`, `peru`, `mexico`, `usa`, `new-york`, `australia`, `sydney`
   (or handles containing them, like `paris-capsule`) are recognised automatically: region,
   airport code, landmark, tint and coordinates fill themselves in.
2. **Optional, for full control:** create the `flytz` metafields by running
   `shopify-extras/metafield-definitions.graphql` (Admin GraphQL API, e.g. the GraphiQL app), or by
   hand under *Settings → Custom data*. Then set per collection: `region`, `airport_code`,
   `monument` (landmark), `palette` (tint), `tagline`; per product: `inspiration`, `coordinates`.
   Metafields always override the automatic values.
3. **Theme editor → Home page**
   - *Flytz map explorer → Destination collections*: pick your destination collections (up to 50).
     Until you do, it shows 13 sample destinations so the page never looks empty.
   - *Flytz destination cards*: pick up to 6 featured destinations.
   - *Flytz departures board*: pick up to 10 destinations for the board.
   - *First class picks* (Dawn's featured collection): pick a bestsellers collection.
4. **Menus:** Dawn uses `main-menu` for the header and `footer` for the footer link list.
5. **Order confirmation email:** Settings → Notifications → Order confirmation → Edit code, and
   paste `shopify-extras/notifications/order-confirmation-boarding-pass.liquid`. The receipt arrives
   as a boarding pass (FLZ → the customer's city, passenger, flight = order number, cabin bag =
   items, barcode stub). Send yourself a test from that screen.
6. **Checkout branding:** Settings → Checkout → Customize: background `#0B0F17`, accent/buttons
   `#C9A24B`, and the same fonts, so checkout continues the look.
7. **Theme settings → Flytz:** accent colours, boarding animation on/off, gate code, 3D scenes
   on/off, flight-path progress line.

## What Shopify allows around checkout

- The **address and payment steps run on Shopify's own checkout pages**. Themes can't add
  animation there, so the boarding sequence plays *between* the cart and checkout and narrates
  those stages. It lasts about 3.7 seconds, has a skip button and can be switched off. Express
  buttons (Shop Pay, Apple Pay…) go straight to checkout.
- **Checkout itself** can be branded (colours, fonts, logo) in the checkout editor on every plan.
  Shopify Plus can add more through checkout extensions.
- The **thank-you / order status page** can't be themed. A custom page there needs an app with a
  Checkout UI extension, and those are limited to Shopify's own UI components, so a faithful
  ticket graphic isn't possible there. The boarding-pass receipt therefore lives in the **order
  confirmation email** (step 5), which every customer receives.

## Languages

All Flytz strings are in `locales/en.default.json`. The other 30 Dawn languages received the same
English strings, so nothing ever shows "translation missing". Translate them with Shopify's
*Translate & Adapt* app or by editing the locale files.

## How it was checked

- **Theme Check** (Shopify's linter, v3.30): zero new issues compared with stock Dawn 16, including
  after the 3D and motion work.
- Every template, section group and default setting validated against its schema
  (unknown keys, select options, slider ranges and steps).
- A local preview rendered the Flytz sections with a Liquid engine against Dawn's real CSS and
  mock store data, and a headless-browser suite (22 checks) passed: globe rendering and drag,
  map → region → country → panel, Escape/overlay close and focus return, deep links
  (`/#destination-france`), products loading through the Section Rendering API, size selection
  and add-to-cart into a drawer using Dawn's cart API, sold-out sizes disabled, the boarding
  sequence and skip both handing off to checkout with the checkout flag, collection and product
  sections, mobile (390 px) layout with no horizontal overflow, reduced-motion, and zero JS errors.
- The metafield mutation was validated against the Admin GraphQL schema.
- The 3D scenes were rendered in headless Chromium (software WebGL 2) and checked on screen: the
  globe and its pins (clicking a pin opens that capsule, focus returns to the pin on close), all 16
  landmarks and their build-up reveal, the boarding scene at each stage at desktop and phone sizes,
  the departures board, map zoom and pin clicks. The suite also ran with WebGL disabled (the 3D file
  is never downloaded and the 2D versions work) and with reduced motion, with no JS errors.

Not yet done: it hasn't been uploaded to a live store. Dawn's real header and cart drawer were
exercised through stand-ins that mimic Dawn's cart-drawer API, so a quick click-through on an
unpublished copy is the remaining check.

## Credits and licences

- Dawn © Shopify Inc. Its licence (`shopify-theme/LICENSE.md`) permits building themes for
  Shopify stores only. Keep that file with the theme.
- Map and globe geography: Natural Earth 110m country outlines (public domain).
- three.js (MIT licence) is bundled inside `assets/flytz-3d.js`; its licence notice is kept in the
  file header.
