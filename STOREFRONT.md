# Flytz Co. — Travel-Inspired Fashion Storefront Concept

A premium, animated ecommerce concept for **Flytz Co.**, a clothing brand whose capsule
collections are inspired by countries, cities, landmarks and monuments around the world.
Dark luxury-travel aesthetic, gold accents, Cormorant + Montserrat typography.

**Zero dependencies** — plain HTML/CSS/JS (`index.html`, `css/`, `js/`). Run locally:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Experience

| Section | What it does |
|---|---|
| Hero | Canvas-rendered 3D point globe with graticule, glowing flight routes and an orbiting aircraft with trail; departures-board ticker |
| Featured capsules | Destination cards (Japan, France, USA) with line-art monuments and hover lift |
| Destination explorer | Stylised interactive world map — click a continent, pick a country, a panel slides in: a line-art monument (Eiffel Tower, Big Ben, Mount Fuji, Taj Mahal, Pyramids, Statue of Liberty, Christ the Redeemer, Chichén Itzá, Machu Picchu, Sydney Opera House…) draws itself on the left while scrollable capsule products load on the right; closes with a smooth slide-away |
| Cart | "Cabin bag" slide-out drawer |
| Checkout | Boarding flow: Check-in (address) → Security (payment) → Boarding (the plane taxis, rotates and takes off across the screen) → receipt rendered as a **boarding pass** with barcode stub |
| Plus | Brand story, product highlights, CTA, footer; responsive to 375px; `prefers-reduced-motion` respected |

## Adapting to Shopify (Online Store 2.0)

- **Sections** → each top-level `<section>` becomes a Liquid section (`sections/hero-globe.liquid`, `sections/destination-explorer.liquid`, …) with schema settings; design tokens live in `:root` of `css/style.css` and map to theme settings.
- **Destinations** → one Shopify **collection per country**, grouped by a `region` metafield; `js/data.js` shows the data shape to store (tagline, airport code, palette, monument key as collection metafields).
- **Products** → products with destination metafields; the panel's product list becomes a collection fetch via Section Rendering / Storefront API.
- **Cart & checkout** → the cabin-bag drawer maps to the AJAX Cart API; boarding animations become the pre-checkout experience; the boarding-pass receipt maps to a branded order-status page (Checkout Extensibility).
- **Monuments** → inline SVG snippets (`snippets/monument-eiffel.liquid`, …), selected by metafield.
