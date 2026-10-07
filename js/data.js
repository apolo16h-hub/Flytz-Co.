/* Flytz Co. — destination & product data
   On Shopify: regions → collections metaobjects, countries → collections,
   products → products with destination metafields. */

const FLYTZ = {
  regions: [
    { id: "europe",   name: "Europe",        cx: 520, cy: 150 },
    { id: "asia",     name: "Asia",          cx: 720, cy: 180 },
    { id: "africa",   name: "Africa",        cx: 540, cy: 290 },
    { id: "namerica", name: "North America", cx: 220, cy: 150 },
    { id: "samerica", name: "South America", cx: 300, cy: 350 },
    { id: "oceania",  name: "Oceania",       cx: 850, cy: 390 }
  ],

  countries: {
    europe: [
      {
        id: "france", name: "France", code: "CDG", monument: "eiffel",
        tagline: "Iron lattice, golden hour. The Paris capsule is cut for café terraces and midnight bridges.",
        palette: "#1d2435",
        products: [
          { name: "Lattice Overshirt", type: "Overshirt", price: 120, note: "Eiffel ironwork jacquard" },
          { name: "Rive Gauche Trench", type: "Trench", price: 240, note: "Stone-beige, storm flap" },
          { name: "Haussmann Knit", type: "Knit", price: 95, note: "Balcony-rail cable stitch" },
          { name: "Montmartre Tee", type: "Tee", price: 45, note: "48.8584° N embroidery" },
          { name: "Seine Silk Scarf", type: "Accessory", price: 65, note: "River-map print" }
        ]
      },
      {
        id: "uk", name: "United Kingdom", code: "LHR", monument: "bigben",
        tagline: "Fog, brass and clockwork. The London capsule keeps time in wool and rain-ready shells.",
        palette: "#232031",
        products: [
          { name: "Westminster Mac", type: "Coat", price: 210, note: "Bonded rain shell" },
          { name: "Clocktower Hoodie", type: "Hoodie", price: 85, note: "Gothic dial back-print" },
          { name: "Thames Cargo Pant", type: "Trouser", price: 110, note: "Bridge-rivet hardware" },
          { name: "Double-Decker Tee", type: "Tee", price: 45, note: "Route 11 graphic" }
        ]
      },
      {
        id: "italy", name: "Italy", code: "FCO", monument: "colosseum",
        tagline: "Arches and amphitheatres. The Rome capsule is tailored like ruins: timeless, sunlit, unshakeable.",
        palette: "#2e2418",
        products: [
          { name: "Colosseo Blazer", type: "Blazer", price: 260, note: "Arched seam detail" },
          { name: "Via Appia Loafer Sock", type: "Accessory", price: 25, note: "Mosaic rib" },
          { name: "Travertine Tee", type: "Tee", price: 48, note: "Stone-wash, SPQR tab" },
          { name: "Forum Pleat Trouser", type: "Trouser", price: 130, note: "Column pleating" }
        ]
      }
    ],
    asia: [
      {
        id: "japan", name: "Japan", code: "HND", monument: "fuji",
        tagline: "Neon grid below, snow cone above. The Tokyo capsule moves between shrine and skyline.",
        palette: "#20152a",
        products: [
          { name: "Fuji Horizon Parka", type: "Parka", price: 230, note: "Gradient snow-fade hem" },
          { name: "Shibuya Crossing Tee", type: "Tee", price: 48, note: "Crosswalk grid print" },
          { name: "Tokyo Tower Coach Jacket", type: "Jacket", price: 140, note: "Lattice-orange piping" },
          { name: "Hakone Haori Shirt", type: "Shirt", price: 115, note: "Kimono-cut drape" },
          { name: "Sakura Tech Tote", type: "Accessory", price: 70, note: "Blossom ripstop" }
        ]
      },
      {
        id: "india", name: "India", code: "DEL", monument: "tajmahal",
        tagline: "Marble symmetry and marigold dusk. The Agra capsule is embroidery-first, light as monsoon air.",
        palette: "#1c2a2a",
        products: [
          { name: "Taj Dome Kurta Shirt", type: "Shirt", price: 98, note: "Inlay embroidery collar" },
          { name: "Yamuna Linen Trouser", type: "Trouser", price: 105, note: "River-wash linen" },
          { name: "Marigold Overshirt", type: "Overshirt", price: 125, note: "Dusk-orange dye" }
        ]
      },
      {
        id: "uae", name: "UAE", code: "DXB", monument: "burj",
        tagline: "Vertical gold. The Dubai capsule is engineered like its skyline — sharp, reflective, impossible.",
        palette: "#241f14",
        products: [
          { name: "Khalifa Spire Shell", type: "Jacket", price: 190, note: "Mirror-foil zip tape" },
          { name: "Desert Mirage Tee", type: "Tee", price: 50, note: "Heat-reactive print" },
          { name: "Marina Track Pant", type: "Trouser", price: 95, note: "Skyline side-stripe" }
        ]
      }
    ],
    africa: [
      {
        id: "egypt", name: "Egypt", code: "CAI", monument: "pyramids",
        tagline: "Four and a half thousand years of geometry. The Giza capsule is sandstone, linen and gold thread.",
        palette: "#2b2213",
        products: [
          { name: "Giza Geometry Knit", type: "Knit", price: 110, note: "Pyramid intarsia" },
          { name: "Nile Linen Set", type: "Set", price: 160, note: "Two-piece, papyrus tone" },
          { name: "Sphinx Cap", type: "Accessory", price: 38, note: "Gold-thread brow" }
        ]
      },
      {
        id: "morocco", name: "Morocco", code: "RAK", monument: "koutoubia",
        tagline: "Terracotta walls, mint and zellige. The Marrakech capsule is pattern-drenched and sun-cut.",
        palette: "#2d1a15",
        products: [
          { name: "Medina Mosaic Shirt", type: "Shirt", price: 95, note: "Zellige tile print" },
          { name: "Atlas Djellaba Hoodie", type: "Hoodie", price: 120, note: "Pointed hood cut" },
          { name: "Souk Dye Tee", type: "Tee", price: 45, note: "Terracotta garment-dye" }
        ]
      }
    ],
    namerica: [
      {
        id: "usa", name: "United States", code: "JFK", monument: "liberty",
        tagline: "Torchlight over the harbour. The New York capsule is oxidised copper, denim and midnight transit.",
        palette: "#13251f",
        products: [
          { name: "Liberty Patina Jacket", type: "Jacket", price: 180, note: "Verdigris wash" },
          { name: "Subway Map Hoodie", type: "Hoodie", price: 90, note: "Transit-line embroidery" },
          { name: "Hudson Raw Denim", type: "Denim", price: 135, note: "Selvedge, copper rivets" },
          { name: "Five Boroughs Tee", type: "Tee", price: 45, note: "Borough coordinates" }
        ]
      },
      {
        id: "mexico", name: "Mexico", code: "MEX", monument: "chichen",
        tagline: "Step pyramids and obsidian nights. The Yucatán capsule is carved in bold geometry and colour.",
        palette: "#231526",
        products: [
          { name: "Chichén Step Knit", type: "Knit", price: 115, note: "Pyramid stair pattern" },
          { name: "Cenote Dye Tee", type: "Tee", price: 46, note: "Deep-water indigo" },
          { name: "Obsidian Work Jacket", type: "Jacket", price: 150, note: "Black-on-black carve stitch" }
        ]
      }
    ],
    samerica: [
      {
        id: "brazil", name: "Brazil", code: "GIG", monument: "redeemer",
        tagline: "Open arms above the bay. The Rio capsule is beach-to-mountain: airy cuts, soapstone neutrals, carnival trims.",
        palette: "#122a24",
        products: [
          { name: "Corcovado Overshirt", type: "Overshirt", price: 118, note: "Soapstone grey" },
          { name: "Ipanema Wave Shorts", type: "Shorts", price: 60, note: "Boardwalk mosaic print" },
          { name: "Carioca Tee", type: "Tee", price: 44, note: "Open-arms silhouette" }
        ]
      },
      {
        id: "peru", name: "Peru", code: "LIM", monument: "machu",
        tagline: "Cloud citadel. The Andes capsule is alpaca-soft with terrace-stitch textures and thin-air colour.",
        palette: "#2a1f17",
        products: [
          { name: "Machu Terrace Knit", type: "Knit", price: 130, note: "Alpaca blend, terrace stitch" },
          { name: "Inca Trail Fleece", type: "Fleece", price: 105, note: "Stone-step panels" },
          { name: "Cusco Beanie", type: "Accessory", price: 35, note: "Andean band" }
        ]
      }
    ],
    oceania: [
      {
        id: "australia", name: "Australia", code: "SYD", monument: "opera",
        tagline: "Sails on the harbour. The Sydney capsule is white-shell minimalism with saltwater performance fabric.",
        palette: "#102030",
        products: [
          { name: "Opera Sail Windbreaker", type: "Jacket", price: 145, note: "Shell-white ripstop" },
          { name: "Harbour Bridge Tee", type: "Tee", price: 45, note: "Arch blueprint print" },
          { name: "Bondi Swim Short", type: "Shorts", price: 58, note: "Quick-dry, tide print" }
        ]
      }
    ]
  },

  featured: ["japan", "france", "usa"]
};
