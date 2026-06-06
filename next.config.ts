import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 64, 128, 256, 384],
    remotePatterns: [{ protocol: "https", hostname: "cdn.behold.so" }],
  },
};

export default withNextIntl(nextConfig);
