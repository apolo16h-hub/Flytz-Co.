# Flytz — Shopify theme

The Flytz Co. storefront as an installable Shopify theme (`shopify-theme/`). It is built on
Shopify's **Dawn 16**, so product pages, cart, search, filters, customer accounts and
localization are Dawn's proven code. The Flytz design and signature sections sit on top.

The original static concept (`index.html`, `css/`, `js/`, described in `STOREFRONT.md`) is kept as the design reference.

## What's in the theme

| Section (theme editor name) | Where | What it does |
|---|---|---|
| Flytz globe hero | Home | Dotted 3D Earth (real continents), drag to spin, flight arcs between your destinations, pins with airport codes, orbiting aircraft, departures ticker |
| Flytz destination cards | Home | Featured destinations with landmark line art (or collection image). Opens the capsule panel when the explorer is on the page |
| Flytz map explorer | Home | Real world map → continent → country → slide-in capsule panel: self-drawing landmark on the left, the collection's products on the right with size picker and add-to-cart |
| Flytz highlights | Home | Brand promises (icon blocks) |
| Flytz brand story | Home | Story text, stats, optional image |
| Flytz call to action | Home | "Shop by destination" banner |
| Flytz destination banner | Collection pages | Each country's collection page becomes its capsule: route (FLZ → CDG), landmark, region, coordinates |
| Flytz destination story | Product pages | "Inspired by Japan" block with landmark, route, inspiration and coordinates |
| Boarding sequence | Cart → checkout | ~3 s departure animation (bags loaded, taxi, take-off) between the checkout button and Shopify checkout, with a skip button |

Also changed from Dawn: dark luxury colour schemes, Cormorant + Montserrat (both from Shopify's
font library), pill buttons, rounded cards, cart drawer by default, "Your cabin bag" /
"Proceed to boarding" cart wording.

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
   - *First class picks* (Dawn's featured collection): pick a bestsellers collection.
4. **Menus:** Dawn uses `main-menu` for the header and `footer` for the footer link list.
5. **Order confirmation email:** Settings → Notifications → Order confirmation → Edit code, and
   paste `shopify-extras/notifications/order-confirmation-boarding-pass.liquid`. The receipt arrives
   as a boarding pass (FLZ → the customer's city, passenger, flight = order number, cabin bag =
   items, barcode stub). Send yourself a test from that screen.
6. **Checkout branding:** Settings → Checkout → Customize: background `#0B0F17`, accent/buttons
   `#C9A24B`, and the same fonts, so checkout continues the look.
7. **Theme settings → Flytz:** accent colours, boarding animation on/off, gate code.

## What Shopify allows around checkout

- The **address and payment steps run on Shopify's own checkout pages**. Themes can't add
  animation there, so the boarding sequence plays *between* the cart and checkout and narrates
  those stages. It lasts about 3 seconds, has a skip button and can be switched off. Express
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

- **Theme Check** (Shopify's linter, v3.30): zero new issues compared with stock Dawn 16.
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

Not yet done: it hasn't been uploaded to a live store. Dawn's real header and cart drawer were
exercised through stand-ins that mimic Dawn's cart-drawer API, so a quick click-through on an
unpublished copy is the remaining check.

## Credits and licences

- Dawn © Shopify Inc. Its licence (`shopify-theme/LICENSE.md`) permits building themes for
  Shopify stores only. Keep that file with the theme.
- Map and globe geography: Natural Earth 110m country outlines (public domain).
