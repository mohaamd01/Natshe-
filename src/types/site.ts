export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  productName?: string;
  avatar?: string;
  date?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "ordering" | "shipping" | "returns" | "products" | "crystals";
}

export interface BannerConfig {
  text: string;
  highlight: string;
  separator: string;
  link?: string;
  dismissible?: boolean;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
}
