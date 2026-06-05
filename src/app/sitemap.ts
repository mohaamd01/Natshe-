import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { products } from "@/data/products";
import { crystals } from "@/data/crystals";
import { collections } from "@/data/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/shop`,               lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/collections`,        lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/crystal-guide`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gift-sets`,          lastModified: now, changeFrequency: "weekly",  priority: 0.75 },
    { url: `${base}/about`,              lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/custom-orders`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/shipping`,           lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/returns`,            lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/faq`,                lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/contact`,            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`,            lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,              lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = [
    "crystal-bracelets",
    "crystal-necklaces",
    "crystal-rings",
    "crystal-sets",
    "gift-sets",
  ].map((cat) => ({
    url: `${base}/shop/${cat}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/shop/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const crystalPages: MetadataRoute.Sitemap = crystals.map((c) => ({
    url: `${base}/crystal-guide/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const collectionPages: MetadataRoute.Sitemap = collections.map((c) => ({
    url: `${base}/collections/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...crystalPages, ...collectionPages];
}
