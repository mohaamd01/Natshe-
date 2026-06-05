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
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  category: ProductCategory;
  stone: StoneType;
  stoneName: string;
  images: ProductImage[];
  /** What's included in the product */
  includes: string[];
  /** Crystal energy properties */
  properties: {
    energy: string;
    chakra: string;
    idealFor: string;
    material: string;
  };
  careInstructions: string[];
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
  name: string;
  tagline: string;
  description: string;
  stone: StoneType;
  stoneName: string;
  heroImage: string;
  productIds: string[];
}
