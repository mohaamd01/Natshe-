import type { Product } from "@/types/product";

export const products: Product[] = [
  // ─── CRYSTAL SETS ───────────────────────────────────────────────
  {
    id: "set-tigers-eye-diamond",
    slug: "tigers-eye-diamond-bracelet-necklace-set",
    name: "Tiger's Eye Diamond Set",
    shortDescription:
      "Matching Tiger's Eye bracelet and geometric diamond pendant necklace.",
    description:
      "This striking set pairs a natural Tiger's Eye beaded bracelet with a faceted diamond-cut Tiger's Eye pendant on an adjustable black cord. Each bead displays the stone's signature golden-brown chatoyancy — the living light that has made Tiger's Eye one of the most revered stones in the world. Wear it as a daily reminder of your strength.",
    price: 42,
    category: "crystal-sets",
    stone: "tigers-eye",
    stoneName: "Tiger's Eye",
    images: [
      { src: "/images/products/set-tigers-eye-diamond-2.jpg", alt: "Tiger's Eye Diamond Set — styled flat lay" },
      { src: "/images/products/set-tigers-eye-diamond-1.jpg", alt: "Tiger's Eye Diamond Set — detail view" },
    ],
    includes: [
      "Natural Tiger's Eye beaded bracelet (8mm beads)",
      "Tiger's Eye faceted diamond pendant",
      "Adjustable black waxed cord necklace",
      "Silver-tone accent bead",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Strength, Courage, Clarity",
      chakra: "Solar Plexus",
      idealFor: "Confidence & Focus",
      material: "100% Natural Tiger's Eye",
    },
    careInstructions: [
      "Avoid contact with water, perfume, and oils",
      "Cleanse monthly under moonlight",
      "Store in the included velvet pouch",
    ],
    tags: ["tigers-eye", "bracelet", "necklace", "set", "strength", "courage"],
    isBestSeller: true,
    isFeatured: true,
    collectionSlug: "tigers-eye-collection",
    relatedProductIds: ["set-tigers-eye-star", "ring-tigers-eye", "necklace-tigers-eye-wirewrapped"],
  },
  {
    id: "set-tigers-eye-star",
    slug: "tigers-eye-star-bracelet-necklace-set",
    name: "Tiger's Eye Star Set",
    shortDescription:
      "Natural Tiger's Eye bracelet paired with a five-pointed star pendant.",
    description:
      "A celestial pairing for the bold and the dreaming. The five-pointed Tiger's Eye star pendant swings from an adjustable black cord, while the beaded bracelet anchors you in grounded earth energy. This set bridges ambition and action — a reminder that you can reach for the stars and remain rooted at the same time.",
    price: 42,
    category: "crystal-sets",
    stone: "tigers-eye",
    stoneName: "Tiger's Eye",
    images: [
      { src: "/images/products/set-tigers-eye-star-2.jpg", alt: "Tiger's Eye Star Set — styled flat lay" },
      { src: "/images/products/set-tigers-eye-star-1.jpg", alt: "Tiger's Eye Star Set — product view" },
    ],
    includes: [
      "Natural Tiger's Eye beaded bracelet (8mm beads)",
      "Tiger's Eye five-pointed star pendant",
      "Adjustable black waxed cord necklace",
      "Silver-tone accent bead",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Ambition, Protection, Groundedness",
      chakra: "Solar Plexus & Root",
      idealFor: "Goal-Setting & Manifestation",
      material: "100% Natural Tiger's Eye",
    },
    careInstructions: [
      "Avoid contact with water, perfume, and oils",
      "Cleanse monthly under moonlight",
      "Store in the included velvet pouch",
    ],
    tags: ["tigers-eye", "bracelet", "necklace", "set", "star", "ambition"],
    isBestSeller: true,
    collectionSlug: "tigers-eye-collection",
    relatedProductIds: ["set-tigers-eye-diamond", "ring-tigers-eye"],
  },
  {
    id: "set-howlite-teardrop",
    slug: "howlite-teardrop-bracelet-necklace-set",
    name: "Howlite Teardrop Set",
    shortDescription:
      "White Howlite bracelet with a smooth teardrop pendant — calm in motion.",
    description:
      "White as still water, veined with the quiet complexity of a settled mind. This Howlite set pairs a polished beaded bracelet with a smooth teardrop pendant — each piece a study in elegant simplicity. Howlite is worn for calm, for patience, for the moments when the world moves too fast and you need to remember how to breathe.",
    price: 38,
    category: "crystal-sets",
    stone: "howlite",
    stoneName: "Howlite",
    images: [
      { src: "/images/products/set-howlite-teardrop-2.jpg", alt: "Howlite Teardrop Set — styled flat lay" },
      { src: "/images/products/set-howlite-teardrop-1.jpg", alt: "Howlite Teardrop Set — product view" },
    ],
    includes: [
      "Natural Howlite beaded bracelet (8mm beads)",
      "Howlite smooth teardrop pendant",
      "Black waxed cord necklace with clasp",
      "Silver-tone clasp hardware",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Calm, Patience, Clarity",
      chakra: "Crown",
      idealFor: "Stress Relief & Sleep",
      material: "100% Natural Howlite",
    },
    careInstructions: [
      "Do not submerge in water — Howlite is porous",
      "Wipe gently with a dry soft cloth",
      "Recharge under the full moon",
      "Store in the included velvet pouch",
    ],
    tags: ["howlite", "bracelet", "necklace", "set", "calm", "stress", "white"],
    isBestSeller: true,
    collectionSlug: "howlite-collection",
    relatedProductIds: ["set-howlite-spike", "set-moonstone-spike"],
  },
  {
    id: "set-howlite-spike",
    slug: "howlite-spike-bracelet-necklace-set",
    name: "Howlite Crystal Point Set",
    shortDescription:
      "Howlite bracelet with a faceted crystal point pendant — clarity and peace.",
    description:
      "The crystal point is one of the most ancient and intentional forms in gemstone work — its facets draw and focus energy, making it a powerful companion for meditation, clarity, and intentional living. This Howlite Crystal Point Set combines that power with the stone's innate calming energy. Wear it when you need to find your centre.",
    price: 38,
    category: "crystal-sets",
    stone: "howlite",
    stoneName: "Howlite",
    images: [
      { src: "/images/products/set-howlite-spike-2.jpg", alt: "Howlite Crystal Point Set — styled flat lay" },
      { src: "/images/products/set-howlite-spike-1.jpg", alt: "Howlite Crystal Point Set — product view" },
    ],
    includes: [
      "Natural Howlite beaded bracelet (8mm beads)",
      "Howlite faceted crystal point pendant",
      "Black waxed cord necklace",
      "Silver-tone accent bead and hardware",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Focus, Clarity, Calm",
      chakra: "Crown",
      idealFor: "Meditation & Mental Clarity",
      material: "100% Natural Howlite",
    },
    careInstructions: [
      "Do not submerge in water — Howlite is porous",
      "Wipe gently with a dry soft cloth",
      "Recharge under the full moon",
      "Store in the included velvet pouch",
    ],
    tags: ["howlite", "bracelet", "necklace", "set", "crystal point", "meditation"],
    collectionSlug: "howlite-collection",
    relatedProductIds: ["set-howlite-teardrop", "set-moonstone-spike"],
  },
  {
    id: "set-aventurine-heart",
    slug: "aventurine-heart-bracelet-necklace-set",
    name: "Aventurine Heart Set",
    shortDescription:
      "Deep green Aventurine bracelet with a heart-shaped pendant — love and luck.",
    description:
      "The heart is the most universal symbol of love, and Green Aventurine is the stone most associated with it. Together, they create a set that speaks directly to the heart — to its capacity for love, its resilience, its constant renewal. This set is a beautiful gift for yourself or for someone you love, on any occasion or none at all.",
    price: 40,
    category: "crystal-sets",
    stone: "green-aventurine",
    stoneName: "Green Aventurine",
    images: [
      { src: "/images/products/set-aventurine-heart-2.jpg", alt: "Aventurine Heart Set — styled flat lay" },
      { src: "/images/products/set-aventurine-heart-1.jpg", alt: "Aventurine Heart Set — product view" },
    ],
    includes: [
      "Natural Green Aventurine beaded bracelet (8mm beads)",
      "Green Aventurine polished heart pendant",
      "Black waxed cord necklace",
      "Silver-tone accent bead",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Love, Luck, Growth",
      chakra: "Heart",
      idealFor: "Love, New Beginnings & Gifting",
      material: "100% Natural Green Aventurine",
    },
    careInstructions: [
      "Cleanse under lukewarm running water monthly",
      "Recharge in natural morning light",
      "Avoid prolonged direct sunlight",
      "Store in the included velvet pouch",
    ],
    tags: ["aventurine", "bracelet", "necklace", "set", "heart", "love", "green", "gift"],
    isBestSeller: true,
    isFeatured: true,
    collectionSlug: "aventurine-collection",
    relatedProductIds: ["set-jade-spike", "ring-jade"],
  },
  {
    id: "set-jade-spike",
    slug: "jade-crystal-point-bracelet-necklace-set",
    name: "Jade Crystal Point Set",
    shortDescription:
      "Soft mint Jade bracelet with a luminous crystal point pendant.",
    description:
      "New Jade — also called Serpentine — carries a softer, quieter energy than its darker cousin, but no less powerful. This pale mint-green stone is one of the most gentle healers in the crystal world, inviting a deep sense of peace, clarity, and connection to the natural world. The crystal point pendant amplifies that energy beautifully.",
    price: 40,
    category: "crystal-sets",
    stone: "jade",
    stoneName: "New Jade",
    images: [
      { src: "/images/products/set-jade-spike-1.jpg", alt: "Jade Crystal Point Set — product view" },
      { src: "/images/products/set-moonstone-jade-spike.jpg", alt: "Jade and Moonstone Set — styled" },
    ],
    includes: [
      "Natural New Jade beaded bracelet (8mm beads)",
      "New Jade faceted crystal point pendant",
      "Black waxed cord necklace",
      "Silver-tone hardware",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Peace, Healing, Clarity",
      chakra: "Heart & Crown",
      idealFor: "Healing & Inner Balance",
      material: "100% Natural New Jade (Serpentine)",
    },
    careInstructions: [
      "Cleanse under lukewarm running water monthly",
      "Recharge by placing on natural earth or stone",
      "Avoid harsh chemicals and perfumes",
      "Store in the included velvet pouch",
    ],
    tags: ["jade", "new jade", "bracelet", "necklace", "set", "crystal point", "healing"],
    collectionSlug: "jade-collection",
    relatedProductIds: ["set-aventurine-heart", "ring-jade"],
  },
  {
    id: "set-moonstone-spike",
    slug: "moonstone-crystal-point-bracelet-necklace-set",
    name: "Moonstone Crystal Point Set",
    shortDescription:
      "Translucent white Moonstone bracelet with a glowing crystal point pendant.",
    description:
      "Translucent, luminous, and otherworldly — this Moonstone set glows with a quiet inner light. The clear beads of the bracelet catch and scatter light like water, while the crystal point pendant holds it, focused and still. For those who live by intuition, by feeling, by the quiet wisdom of the in-between: this is your stone.",
    price: 44,
    category: "crystal-sets",
    stone: "moonstone",
    stoneName: "Moonstone",
    images: [
      { src: "/images/products/set-moonstone-jade-spike.jpg", alt: "Moonstone Crystal Point Set — styled" },
      { src: "/images/products/ring-moonstone-nature.jpg", alt: "Moonstone in natural setting" },
    ],
    includes: [
      "Natural Moonstone beaded bracelet (8mm beads)",
      "Moonstone faceted crystal point pendant",
      "Black waxed cord necklace",
      "Silver-tone clasp and hardware",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Intuition, Femininity, New Beginnings",
      chakra: "Crown & Third Eye",
      idealFor: "Intuition & Emotional Balance",
      material: "100% Natural Moonstone",
    },
    careInstructions: [
      "Wipe with a soft dry cloth — avoid water immersion",
      "Recharge under the full moon overnight",
      "Avoid prolonged sunlight exposure",
      "Store in the included velvet pouch",
    ],
    tags: ["moonstone", "bracelet", "necklace", "set", "crystal point", "intuition", "white"],
    isFeatured: true,
    relatedProductIds: ["set-howlite-teardrop", "ring-moonstone"],
  },

  // ─── CRYSTAL RINGS ───────────────────────────────────────────────
  {
    id: "ring-tigers-eye",
    slug: "tigers-eye-gold-claw-ring",
    name: "Tiger's Eye Gold Claw Ring",
    shortDescription:
      "Natural Tiger's Eye bead set in a sculpted gold claw band.",
    description:
      "The signature Aura Stor gold claw ring — a sculpted gold-tone band with talon tips that hold a polished natural Tiger's Eye bead. Each bead is unique, displaying the stone's characteristic golden-brown silk that shifts with light. Bold, distinctive, and unmistakably Aura Stor.",
    price: 35,
    category: "crystal-rings",
    stone: "tigers-eye",
    stoneName: "Tiger's Eye",
    images: [
      { src: "/images/products/ring-tigers-eye-nature.jpg", alt: "Tiger's Eye Gold Claw Ring on river stone" },
    ],
    includes: [
      "Natural Tiger's Eye bead",
      "Gold-tone sculpted claw band",
      "Adjustable sizing (fits most)",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Strength, Courage, Clarity",
      chakra: "Solar Plexus",
      idealFor: "Daily Wear & Confidence",
      material: "Natural Tiger's Eye, Gold-Tone Band",
    },
    careInstructions: [
      "Remove before washing hands or swimming",
      "Wipe with a soft dry cloth after wear",
      "Avoid contact with perfume and chemicals",
      "Store in the included velvet pouch",
    ],
    tags: ["tigers-eye", "ring", "gold", "claw", "statement"],
    isBestSeller: true,
    collectionSlug: "tigers-eye-collection",
    relatedProductIds: ["ring-jade", "ring-moonstone", "set-tigers-eye-diamond"],
  },
  {
    id: "ring-jade",
    slug: "jade-gold-claw-ring",
    name: "Jade Gold Claw Ring",
    shortDescription:
      "Deep forest green Jade bead in the sculptural Aura Stor gold claw setting.",
    description:
      "Rich, deep forest green — the colour of ancient forests, of growth, of the living world at its most abundant. This Jade Gold Claw Ring brings the stone's five-thousand-year legacy of wisdom and prosperity into a beautifully wearable form. Set in the Aura Stor signature gold claw band, the natural Jade bead sits with quiet authority.",
    price: 35,
    category: "crystal-rings",
    stone: "jade",
    stoneName: "Jade",
    images: [
      { src: "/images/products/ring-jade-nature.jpg", alt: "Jade Gold Claw Ring on river stone" },
      { src: "/images/products/ring-jade-hand.jpg", alt: "Jade Gold Claw Ring worn on hand" },
    ],
    includes: [
      "Natural Jade bead",
      "Gold-tone sculpted claw band",
      "Adjustable sizing (fits most)",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Harmony, Wisdom, Protection",
      chakra: "Heart",
      idealFor: "Balance & Prosperity",
      material: "Natural Jade, Gold-Tone Band",
    },
    careInstructions: [
      "Cleanse with a soft damp cloth and dry immediately",
      "Avoid harsh chemicals and perfumes",
      "Store in the included velvet pouch",
    ],
    tags: ["jade", "ring", "gold", "claw", "green", "harmony"],
    isBestSeller: true,
    isFeatured: true,
    collectionSlug: "jade-collection",
    relatedProductIds: ["ring-moonstone", "ring-tigers-eye", "set-aventurine-heart"],
  },
  {
    id: "ring-moonstone",
    slug: "moonstone-gold-claw-ring",
    name: "Moonstone Gold Claw Ring",
    shortDescription:
      "Ethereal translucent Moonstone bead in the Aura Stor gold claw setting.",
    description:
      "Translucent, glowing, and impossibly delicate — the Moonstone Gold Claw Ring is perhaps the most ethereal piece in the Aura Stor collection. The pale, luminous bead seems to hold light rather than reflect it. In the gold claw setting, it looks both ancient and entirely modern. A ring for the intuitive, the creative, the quietly powerful.",
    price: 38,
    category: "crystal-rings",
    stone: "moonstone",
    stoneName: "Moonstone",
    images: [
      { src: "/images/products/ring-moonstone-nature.jpg", alt: "Moonstone Gold Claw Ring on river stone" },
      { src: "/images/products/ring-moonstone-hand.jpg", alt: "Moonstone Gold Claw Ring worn on hand" },
    ],
    includes: [
      "Natural Moonstone bead",
      "Gold-tone sculpted claw band",
      "Adjustable sizing (fits most)",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Intuition, Grace, New Beginnings",
      chakra: "Crown & Third Eye",
      idealFor: "Intuition & Emotional Balance",
      material: "Natural Moonstone, Gold-Tone Band",
    },
    careInstructions: [
      "Handle with care — Moonstone is delicate",
      "Wipe with a soft dry cloth",
      "Avoid water, perfume, and chemicals",
      "Store in the included velvet pouch",
    ],
    tags: ["moonstone", "ring", "gold", "claw", "ethereal", "intuition"],
    isFeatured: true,
    relatedProductIds: ["ring-jade", "ring-moss-agate", "set-moonstone-spike"],
  },
  {
    id: "ring-moss-agate",
    slug: "moss-agate-gold-claw-ring",
    name: "Moss Agate Gold Claw Ring",
    shortDescription:
      "Rare dendritic Moss Agate bead — cream with botanical green inclusions.",
    description:
      "No two Moss Agate stones are alike. Each bead is a tiny landscape — cream and white with dendritic inclusions of deep green that look like ferns, trees, or forest paths frozen in stone. The Moss Agate Gold Claw Ring is one of our most uniquely individual pieces. Your ring will never be identical to anyone else's. That is its gift.",
    price: 38,
    category: "crystal-rings",
    stone: "moss-agate",
    stoneName: "Moss Agate",
    images: [
      { src: "/images/products/ring-moss-agate-nature.jpg", alt: "Moss Agate Gold Claw Ring on river stone" },
      { src: "/images/products/ring-moss-agate-hand.jpg", alt: "Moss Agate Gold Claw Ring worn on hand" },
    ],
    includes: [
      "Natural Moss Agate / Dendritic Agate bead (unique pattern)",
      "Gold-tone sculpted claw band",
      "Adjustable sizing (fits most)",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Nature, Growth, Uniqueness",
      chakra: "Heart",
      idealFor: "Creativity & Personal Growth",
      material: "Natural Moss Agate, Gold-Tone Band",
    },
    careInstructions: [
      "Wipe with a soft damp cloth and dry thoroughly",
      "Avoid harsh chemicals and ultrasonic cleaners",
      "Store in the included velvet pouch",
    ],
    tags: ["moss agate", "dendritic", "ring", "gold", "claw", "unique", "nature"],
    isNewArrival: true,
    relatedProductIds: ["ring-jade", "ring-moonstone"],
  },
  {
    id: "ring-dalmatian-jasper",
    slug: "dalmatian-jasper-gold-claw-ring",
    name: "Dalmatian Jasper Gold Claw Ring",
    shortDescription:
      "Playful cream and black Dalmatian Jasper in the gold claw setting.",
    description:
      "Named for the beloved spotted dog breed it resembles, Dalmatian Jasper is one of the most joyful and distinctive stones in the natural world. Cream-white dotted with black tourmaline and iron oxide inclusions, each bead is entirely unique. Its energy is grounding yet lighthearted — a stone that reminds you not to take life too seriously, while keeping you rooted in what matters.",
    price: 35,
    category: "crystal-rings",
    stone: "dalmatian-jasper",
    stoneName: "Dalmatian Jasper",
    images: [
      { src: "/images/products/ring-dalmatian-nature.jpg", alt: "Dalmatian Jasper Gold Claw Ring on river stone" },
      { src: "/images/products/ring-dalmatian-jasper-hand.jpg", alt: "Dalmatian Jasper Ring worn on hand" },
    ],
    includes: [
      "Natural Dalmatian Jasper bead (unique spot pattern)",
      "Gold-tone sculpted claw band",
      "Adjustable sizing (fits most)",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Joy, Playfulness, Grounding",
      chakra: "Root & Sacral",
      idealFor: "Lightheartedness & Inner Child",
      material: "Natural Dalmatian Jasper, Gold-Tone Band",
    },
    careInstructions: [
      "Wipe with a soft damp cloth and dry thoroughly",
      "Avoid prolonged water exposure",
      "Store in the included velvet pouch",
    ],
    tags: ["dalmatian jasper", "ring", "gold", "claw", "spotted", "grounding", "joy"],
    isNewArrival: true,
    relatedProductIds: ["ring-moss-agate", "ring-jade"],
  },
  {
    id: "ring-black-pearl",
    slug: "black-pearl-gold-claw-ring",
    name: "Black Pearl Gold Claw Ring",
    shortDescription:
      "Deep black obsidian-like bead in the signature Aura Stor gold claw.",
    description:
      "Bold and unapologetic, the Black Pearl Gold Claw Ring is the most striking piece in the ring collection. The deep black bead — rich, lustrous, and grounding — sits in sharp, beautiful contrast against the warm gold of the claw setting. This is a ring for those who are not afraid to be seen. Protection, power, and elegance in a single gesture.",
    price: 35,
    category: "crystal-rings",
    stone: "obsidian",
    stoneName: "Black Pearl",
    images: [
      { src: "/images/products/ring-black-pearl-hand.jpg", alt: "Black Pearl Gold Claw Ring worn on hand" },
    ],
    includes: [
      "Natural black stone bead",
      "Gold-tone sculpted claw band",
      "Adjustable sizing (fits most)",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Protection, Power, Grounding",
      chakra: "Root",
      idealFor: "Strength & Protection",
      material: "Natural Black Stone, Gold-Tone Band",
    },
    careInstructions: [
      "Remove before washing hands or swimming",
      "Wipe with a soft dry cloth",
      "Avoid harsh chemicals",
      "Store in the included velvet pouch",
    ],
    tags: ["black", "ring", "gold", "claw", "bold", "protection", "statement"],
    isBestSeller: true,
    relatedProductIds: ["ring-tigers-eye", "ring-jade"],
  },

  // ─── STANDALONE NECKLACES ────────────────────────────────────────
  {
    id: "necklace-tigers-eye-wirewrapped",
    slug: "tigers-eye-wire-wrapped-pendant-necklace",
    name: "Tiger's Eye Wire-Wrapped Necklace",
    shortDescription:
      "Hand wire-wrapped raw Tiger's Eye on a silver snake chain.",
    description:
      "A raw, unpolished Tiger's Eye stone — held in a delicate spiral of hand-worked silver wire. This pendant does not hide its nature. It shows you exactly what it is: a piece of the earth, caught mid-transformation. Worn on a fine silver snake chain, it sits at the collarbone with quiet authority. Each piece is uniquely wrapped and one-of-a-kind.",
    price: 48,
    category: "crystal-necklaces",
    stone: "tigers-eye",
    stoneName: "Tiger's Eye",
    images: [
      { src: "/images/products/necklace-tigers-eye-wirewrapped.jpg", alt: "Tiger's Eye Wire-Wrapped Necklace" },
    ],
    includes: [
      "Raw natural Tiger's Eye stone (unique shape)",
      "Hand wire-wrapped silver-tone setting",
      "Fine silver-tone snake chain necklace",
      "Aura Stor velvet gift pouch",
    ],
    properties: {
      energy: "Raw Strength, Authenticity, Courage",
      chakra: "Solar Plexus",
      idealFor: "Statement Wear & Authenticity",
      material: "Natural Raw Tiger's Eye, Silver-Tone Wire & Chain",
    },
    careInstructions: [
      "Handle with care — wire wrapping is delicate",
      "Avoid water and chemicals",
      "Wipe with a soft dry cloth",
      "Store in the included velvet pouch",
    ],
    tags: ["tigers-eye", "necklace", "wire-wrapped", "raw", "pendant", "artisan"],
    isFeatured: true,
    isNewArrival: true,
    collectionSlug: "tigers-eye-collection",
    relatedProductIds: ["set-tigers-eye-diamond", "set-tigers-eye-star"],
  },
];

/** Returns a product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Returns products by category */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

/** Returns featured products */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

/** Returns best sellers */
export function getBestSellers(limit = 8): Product[] {
  return products.filter((p) => p.isBestSeller).slice(0, limit);
}

/** Returns related products by IDs */
export function getRelatedProducts(ids: string[]): Product[] {
  return products.filter((p) => ids.includes(p.id));
}

/** Returns products in a collection */
export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collectionSlug === collectionSlug);
}

/** Returns products by stone type */
export function getProductsByStone(stone: string): Product[] {
  return products.filter((p) => p.stone === stone);
}
