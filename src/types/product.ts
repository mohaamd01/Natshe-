import type { LocalizedText } from "@/lib/localize";

export type ProductCategory =
  | "crystal-bracelets"
  | "crystal-necklaces"
  | "crystal-rings"
  | "crystal-sets"
  | "gift-sets";

export type StoneType =
  | "tigers-eye"
  | "howlite"
  | "green-aventurine"
  | "jade"
  | "moonstone"
  | "obsidian"
  | "dalmatian-jasper"
  | "moss-agate"
  | "clear-quartz"
  | "mixed";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  /** URL slug — never localised */
  slug: string;
  name: string | LocalizedText;
  shortDescription: string | LocalizedText;
  description: string | LocalizedText;
  price: number;
  category: ProductCategory;
  stone: StoneType;
  stoneName: string | LocalizedText;
  images: ProductImage[];
  /** What's included in the product */
  includes: (string | LocalizedText)[];
  /** Crystal energy properties */
  properties: {
    energy: string | LocalizedText;
    chakra: string | LocalizedText;
    idealFor: string | LocalizedText;
    material: string | LocalizedText;
  };
  careInstructions: (string | LocalizedText)[];
  tags: string[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  relatedProductIds?: string[];
  collectionSlug?: string;
}

export interface Category {
  slug: ProductCategory;
  label: string;
  description: string;
  icon: string;
  heroImage?: string;
}

export interface Collection {
  slug: string;
  name: string | LocalizedText;
  tagline: string | LocalizedText;
  description: string | LocalizedText;
  stone: StoneType;
  stoneName: string | LocalizedText;
  heroImage: string;
  productIds: string[];
}
