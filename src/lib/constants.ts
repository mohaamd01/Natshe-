export const SITE_CONFIG = {
  name: "Aura Stor",
  tagline: "Wear Your Energy.",
  promise: "Born from Earth. Worn with Intention.",
  description:
    "Luxury crystal jewelry and gemstone accessories. Handcrafted from natural stones.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurastor.com",
  foundedYear: 2026,
} as const;

export const CONTACT = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "905317127399",
  businessHours: "09:00 AM – 10:00 PM (GMT+3)",
  businessDays: "Monday – Sunday",
  responseTime: "Within a few hours",
} as const;

export const SOCIAL = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/aura._sto/",
  instagramHandle: "@aura._sto",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/profile.php?id=61589589215276",
} as const;

export const PROMO_BANNER = {
  text: "Shipping to Saudi Arabia, UAE & Qatar",
  highlight: "Free on Orders Above $50",
  separator: "•",
} as const;

export const CURRENCY = {
  code: "USD",
  symbol: "$",
  locale: "en-US",
} as const;

export const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Crystal Guide", href: "/crystal-guide" },
  { label: "Gift Sets", href: "/gift-sets" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Crystal Bracelets", href: "/shop/crystal-bracelets" },
    { label: "Crystal Necklaces", href: "/shop/crystal-necklaces" },
    { label: "Crystal Rings", href: "/shop/crystal-rings" },
    { label: "Crystal Sets", href: "/shop/crystal-sets" },
    { label: "Gift Sets", href: "/gift-sets" },
  ],
  discover: [
    { label: "Crystal Guide", href: "/crystal-guide" },
    { label: "About Aura Stor", href: "/about" },
    { label: "Custom Orders", href: "/custom-orders" },
    { label: "Featured Collections", href: "/collections" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
    { label: "Shipping & Delivery", href: "/shipping" },
    { label: "Returns & Exchanges", href: "/returns" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

export const PRODUCT_CATEGORIES = [
  {
    slug: "crystal-bracelets",
    label: "Crystal Bracelets",
    description: "Natural stone beaded bracelets for daily wear",
    icon: "bracelet",
  },
  {
    slug: "crystal-necklaces",
    label: "Crystal Necklaces",
    description: "Pendant necklaces with natural crystal stones",
    icon: "necklace",
  },
  {
    slug: "crystal-rings",
    label: "Crystal Rings",
    description: "Gold claw rings set with genuine gemstones",
    icon: "ring",
  },
  {
    slug: "crystal-sets",
    label: "Crystal Sets",
    description: "Matching bracelet and necklace sets",
    icon: "set",
  },
  {
    slug: "gift-sets",
    label: "Gift Sets",
    description: "Beautifully packaged sets for gifting",
    icon: "gift",
  },
] as const;
