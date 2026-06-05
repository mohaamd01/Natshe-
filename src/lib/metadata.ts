import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/** Generates consistent metadata for any page */
export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/images/og/og-image.jpg",
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | Aura Stor`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Aura Stor`,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/** Generates metadata for a product page */
export function generateProductMetadata({
  name,
  description,
  slug,
  image,
  price,
  stoneName,
}: {
  name: string;
  description: string;
  slug: string;
  image: string;
  price: number;
  stoneName: string;
}): Metadata {
  return generatePageMetadata({
    title: `${name} — ${stoneName} Crystal Jewelry`,
    description: `${description.slice(0, 155)}...`,
    path: `/product/${slug}`,
    image,
    keywords: [
      name.toLowerCase(),
      stoneName.toLowerCase(),
      `${stoneName.toLowerCase()} jewelry`,
      `crystal ${stoneName.toLowerCase()}`,
      "natural gemstone",
      "aura stor",
    ],
  });
}

/** Generates metadata for a collection page */
export function generateCollectionMetadata({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}): Metadata {
  return generatePageMetadata({
    title: `${name} Collection`,
    description,
    path: `/collections/${slug}`,
    keywords: [
      name.toLowerCase(),
      `${name.toLowerCase()} jewelry`,
      "crystal collection",
      "natural gemstone jewelry",
    ],
  });
}

/** Generates JSON-LD Organization schema */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo/aura-stor-logo.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      process.env.NEXT_PUBLIC_FACEBOOK_URL,
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
      contactType: "customer service",
      availableLanguage: ["English", "Arabic", "Turkish"],
    },
  };
}

/** Generates JSON-LD Product schema */
export function productSchema({
  name,
  description,
  image,
  price,
  slug,
  stoneName,
}: {
  name: string;
  description: string;
  image: string;
  price: number;
  slug: string;
  stoneName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${SITE_CONFIG.url}${image}`,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    material: `Natural ${stoneName}`,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_CONFIG.url}/product/${slug}`,
      seller: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
    },
  };
}
