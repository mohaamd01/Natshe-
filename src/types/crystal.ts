import type { StoneType } from "./product";
import type { LocalizedText } from "@/lib/localize";

export interface CrystalProperty {
  icon: string;
  label: string;
  value: string;
}

export interface Crystal {
  slug: string;
  stoneType: StoneType;
  /** Localised display name (e.g. "Tiger's Eye" / "Kaplan Gözü") */
  name: string | LocalizedText;
  /** Localised one-line subtitle */
  subtitle: string | LocalizedText;
  /** One-paragraph hook for card previews */
  summary: string | LocalizedText;
  /** Full editorial description for the guide page */
  description: string | LocalizedText;
  /** Pull quote for hero / storytelling */
  pullQuote: string | LocalizedText;
  image: string;
  /** Thumbnail for stone cards */
  thumbnail: string;
  color: string;
  properties: {
    energy: string | LocalizedText;
    chakra: string | LocalizedText;
    zodiac: string | LocalizedText;
    element: string | LocalizedText;
    idealFor: string | LocalizedText;
    /** Geographic origin — factual, stays in English */
    origin: string;
  };
  benefits: (string | LocalizedText)[];
  careInstructions: (string | LocalizedText)[];
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
