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
| Flytz destination quiz | Home | "Where to next?": three tap-to-answer questions (weather, perfect day, what you pack) match the shopper to a destination, shown with its 3D landmark and a button that opens that capsule |
| Flytz departures board | Home | Split-flap airport board of your destination capsules (time, destination, flight, gate, remarks) that flips in and keeps updating; rows open the capsule |
| Flytz next departure | Home | Countdown to your next capsule drop on split-flap tiles, a notify-me sign-up and the capsule's 3D landmark. Shows "Now boarding" once the time has passed |
| Flytz highlights | Home | Brand promises (icon blocks) |
| Flytz brand story | Home | Story text, stats, optional image |
| Flytz call to action | Home | "Shop by destination" banner |
| Flytz destination banner | Collection pages | Each country's collection page becomes its capsule: route (FLZ → CDG), 3D landmark, region, coordinates |
| Flytz destination story | Product pages | "Inspired by Japan" block with 3D landmark, route, inspiration and coordinates, plus up to three more pieces from the same capsule, statement piece first |
| Flytz sticky add to cart | Product pages | Slim bar with the product, price and an add button that slides up once the real Add to cart button scrolls out of view. It presses the real button, so variants and the cart drawer behave as usual |
| Boarding sequence | Cart → checkout | 3.7 s real-time 3D departure between the checkout button and Shopify checkout: bags ride the belt loader into the hold, a gold scanner sweeps the jet, it taxis, takes off and climbs out over the city. Skip button included |

Also changed from Dawn: dark luxury colour schemes, Cormorant + Montserrat (both from Shopify's
font library), pill buttons, rounded cards, cart drawer by default, "Your cabin bag" /
"Proceed to boarding" cart wording. Section headings rise in word by word, cards tilt towards
the pointer with a moving glare, the hero buttons lean magnetically, and scroll progress shows
as a gold flight path along the top of the page.

## Customer hooks

Features that give shoppers a reason to come back, all switchable in *Theme settings → Flytz*:

- **Welcome boarding pass.** A boarding-pass card (passenger name, FLZ → destination, seat 1A,
  gate stub and barcode) that the shopper fills in themselves. It never appears on a first look
  around: only after the shopper has explored two destinations, scrolls deep on their second page,
  or (desktop) heads for the exit after a few seconds. An optional timer can be switched on. It
  never covers the page, waits while a panel or the cart is open, isn't shown on the cart or
  password pages, and stays away for 14 days once closed (for good once the shopper signs up). Sign-ups go through Shopify's own customer form and arrive in *Customers*
  tagged `newsletter, flytz-welcome`, subscribed to email marketing. An optional welcome code is
  revealed after signing up. Create the code under *Discounts* first; nothing is shown if the
  setting is empty.
- **Flytz passport.** Every destination capsule a shopper opens (from the map, globe, cards,
  departures board or quiz, or by visiting a collection or product page) stamps their passport: an ink-stamp toast, a passport button
  with the count, and a passport book with the stamps, progress across your destinations and a
  status (Economy explorer → Frequent flyer → Gold traveller → World citizen). Reaching the
  milestone (3 stamps by default) can reveal a reward text and code. Stamps live in the shopper's
  own browser, so there is no account or app.
- **Destination quiz** and **next departure** sections (table above). Notify-me sign-ups are
  tagged `newsletter, next-departure, drop-<collection handle>`, and quiz drop alerts
  `newsletter, flytz-quiz, dream-<collection handle>`, so you can email exactly the people waiting
  for a drop.
- **Sticky add to cart** on product pages (table above).
- **Free-shipping progress** in the cart drawer and on the cart page: "Add £20.00 more to skip
  the shipping fee" with a plane flying along the bar, and a matching line under the product
  page's buy button ("Free delivery on orders over £50.00", or "Your bag qualifies"). It is set to
  £50 for the United Kingdom, matching the store's UK rate (free Standard shipping from £50); EU
  and international rates have no free tier, so shoppers there never see it. Change both under
  *Theme settings → Flytz → Cart* if your rates change. Carts in another currency don't show it.
- **Capsule progress** in the cart: "Japan capsule: 2 of 5 pieces packed" with a link to the rest
  of that capsule, for up to two capsules in the bag.
- **Sale savings**: wherever a real compare-at price exists, prices show "Save £60.00".
- **Page transitions.** Browsers that support cross-page view transitions fade smoothly from page
  to page (not with reduced motion).

### The psychology behind them

The hooks follow the six principles in uxpeak's video *The UX Psychology Behind Apps People
Can't Stop Using*, used the way the video asks: no fake urgency, scarcity, progress or reviews.

| Principle | In the theme |
|---|---|
| Smart defaults | The size a shopper picks is pre-selected next time, in capsule panels and on product pages ("Your usual size, M, is selected"), only when in stock. Collection pages offer a one-tap "Show my size (M)" filter when your store has a Size filter (Search & Discovery app). The quiz marks a returning shopper's last answers. Logged-in customers find their email and name already filled in, and customers who already get your emails never see the welcome pass. The boarding pass's destination starts on the shopper's quiz match or the last capsule they opened |
| Never start at 0% | The cart drawer and cart page show the journey Bag packed → Check-in → Take-off with the first step done, the free-shipping bar fills towards £50, and each capsule shows how many of its pieces are packed. The passport only appears once the first stamp is earned, and the quiz's progress bar starts on question 1 |
| Value before signup | Nothing is gated. The quiz shows its answer first and only then offers the drop alert for that capsule. The welcome pass waits until the shopper has explored two destinations, scrolls deep on a second page, or heads for the exit |
| IKEA effect | Shoppers fill in their own boarding pass: their name and destination appear on the ticket, and the destination is saved with the sign-up (`dream-<collection handle>` tag) so you can email each person about the place they picked. Stamps and the quiz build on the same feeling |
| Loss aversion | Product pages use Dawn's stock block, which says "Low stock: 3 left" only when real inventory is at or below 5 (Theme editor → Product → Inventory status). The free-shipping bar is framed as avoiding the fee: "Add £20.00 more to skip the shipping fee". Quiz alerts read "Don't miss the next Peru drop" |
| Contrast | Capsule panels lead with the statement piece (highest price first), so the rest of the capsule reads in context. Change it under *Flytz map explorer → Order of pieces in a capsule*. Product pages show more from the same capsule, statement piece first. Sale prices show the real saving ("Save £60.00") next to the struck-through compare-at price |
| Obvious next action | Add to cabin bag is always the gold primary button (express checkout buttons sit below it). The buy area is trimmed to title, price, stock, size and the button; vendor and quantity were removed (add them back as blocks in the theme editor, and shoppers can still change quantity in the cart). The sticky bar keeps the button in reach |

### Copy that matches the store

The first version's copy promised things the store's settings don't support. These were changed in
version 4; edit them back in the theme editor if a claim is true for your products:

- Announcement bar: "Complimentary worldwide shipping on capsule orders" became "Free UK shipping on
  orders over £50" (shipping is £4.99 UK, £14.99 EU, £23.99 international; free only for UK
  orders from £50).
- Highlights: "Limited capsule runs" (numbered, never reprinted), "Shipped worldwide" (tracked, six
  continents), "Coordinates woven in" (stitched inside the hem) and "Responsibly made" (certified
  mills) became Capsule drops, Shipped internationally (UK, Europe, North America, Asia and
  Oceania), Inspired by real places and Secure checkout.
- Brand story stats: 24 destinations, 190+ pieces and 6 continents became 15 destination capsules,
  41 countries we ship to and free UK delivery from £50. The story text no longer says "limited
  runs" or "every stitch carries coordinates".

When one customer form on a page is sent, Shopify shows every customer form on that page as sent.
The theme keeps each confirmation on the form that was actually used (Shopify returns that form's
id in the address) and falls back to Shopify's behaviour when it can't tell.

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
   on/off, flight-path progress line, the welcome boarding pass (heading, text, optional code,
   optional timer), the passport (milestone, reward text and code) and free shipping (threshold
   and the countries it applies to; set to £50 and GB to match the store's rates).
8. **Next departure:** in the theme editor, pick the capsule collection and enter the drop date
   and time (`2026-12-01 18:00`, your store's time zone). The countdown stays hidden until a date
   is set. The quiz uses the sample destinations until you pick collections in it.

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
- The customer hooks have their own headless suite (57 checks, desktop and 390 px phone): the
  welcome pass opening at 60% scroll, closing and remembering, signing up and not asking again;
  the quiz flow, its matches and "Open the capsule" opening that destination; passport stamps
  from the quiz, collection pages and revisits (no double stamps), the milestone toast, the book's
  progress and status, focus trap, Escape and focus return; the countdown ticking; notify-me;
  the sticky bar appearing after the real button scrolls away (including jumps straight past it),
  showing the price, lifting the passport button and adding to the cart; no horizontal overflow
  and no JS errors. It also covers the psychology features: the remembered size in the next capsule
  and on product pages (with its note), statement piece first, the quiz drop alert and its tag,
  the boarding pass destination following the quiz and riding along with the sign-up, and the cart
  journey, the pass waiting for engagement, the delivery note, more from the capsule, the free-shipping
  bar both below and above £50, capsule progress and the quiz's remembered answers. The cart's
  capsule progress was also rendered from the theme's Liquid against mock carts, and the size
  filter chip against Dawn's filter markup. Form-result scoping was tested for each form being sent,
  an unknown sender and a malformed address. With WebGL off, the quiz result shows the drawn landmark instead.

The first version of the theme is live on the store. Dawn's real header and cart drawer were
exercised through stand-ins that mimic Dawn's cart-drawer API, and customer-form posts can't be
sent from the preview, so a click-through of each new version on an unpublished copy (including
one real sign-up) is the remaining check before publishing.

## Credits and licences

- Dawn © Shopify Inc. Its licence (`shopify-theme/LICENSE.md`) permits building themes for
  Shopify stores only. Keep that file with the theme.
- Map and globe geography: Natural Earth 110m country outlines (public domain).
- three.js (MIT licence) is bundled inside `assets/flytz-3d.js`; its licence notice is kept in the
  file header.
