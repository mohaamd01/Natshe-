import type { StoneType } from "./product";

export interface CrystalProperty {
  icon: string;
  label: string;
  value: string;
}

export interface Crystal {
  slug: string;
  stoneType: StoneType;
  name: string;
  subtitle: string;
  /** One-paragraph hook for card previews */
  summary: string;
  /** Full editorial description for the guide page */
  description: string;
  /** Pull quote for hero / storytelling */
  pullQuote: string;
  image: string;
  /** Thumbnail for stone cards */
  thumbnail: string;
  color: string;
  properties: {
    energy: string;
    chakra: string;
    zodiac: string;
    element: string;
    idealFor: string;
    origin: string;
  };
  benefits: string[];
  careInstructions: string[];
  pairsWith: StoneType[];
  accentColor: string;
}

export interface StoneOfMonth {
  stoneType: StoneType;
  month: string;
  headline: string;
  subline: string;
  image: string;
  ctaText: string;
  collectionSlug: string;
}
