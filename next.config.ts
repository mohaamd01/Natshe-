import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Backward-compatible redirects: old non-locale URLs → /en/* equivalents.
  // These run before the middleware, guaranteeing old public links still work.
  async redirects() {
    const staticRoutes = [
      "/about", "/contact", "/gift-sets", "/custom-orders",
      "/shipping", "/returns", "/faq", "/privacy", "/terms",
    ];
    return [
      // Static routes
      ...staticRoutes.map((source) => ({
        source,
        destination: `/en${source}`,
        permanent: false,
      })),
      // Dynamic routes with slugs
      { source: "/shop",                    destination: "/en/shop",                     permanent: false },
      { source: "/shop/:slug",              destination: "/en/shop/:slug",               permanent: false },
      { source: "/collections",             destination: "/en/collections",              permanent: false },
      { source: "/collections/:slug",       destination: "/en/collections/:slug",        permanent: false },
      { source: "/crystal-guide",           destination: "/en/crystal-guide",            permanent: false },
      { source: "/crystal-guide/:slug",     destination: "/en/crystal-guide/:slug",      permanent: false },
    ];
  },
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 64, 128, 256, 384],
    remotePatterns: [{ protocol: "https", hostname: "cdn.behold.so" }],
  },
};

export default withNextIntl(nextConfig);
