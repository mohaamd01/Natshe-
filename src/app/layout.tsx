import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import PromoBanner from "@/components/layout/PromoBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/whatsapp/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4A6B52",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Aura Stor — Luxury Crystal Jewelry | Natural Gemstone Accessories",
    template: "%s | Aura Stor",
  },
  description:
    "Discover handcrafted natural crystal jewelry at Aura Stor. Tiger's Eye, Howlite, Jade & Aventurine bracelets, rings and sets. Order via WhatsApp. Shipping to Saudi Arabia, UAE & Qatar.",
  keywords: [
    "crystal jewelry",
    "natural stone bracelet",
    "gemstone accessories",
    "tiger eye bracelet",
    "howlite jewelry",
    "jade ring",
    "crystal set",
    "luxury crystal jewelry",
    "crystal jewelry Saudi Arabia",
    "natural stone UAE",
    "gemstone bracelet Dubai",
    "crystal gifts Qatar",
  ],
  authors: [{ name: "Aura Stor" }],
  creator: "Aura Stor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Aura Stor — Luxury Crystal Jewelry",
    description:
      "Handcrafted natural crystal jewelry. Tiger's Eye, Howlite, Jade & Aventurine. Order via WhatsApp.",
    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aura Stor — Luxury Crystal Jewelry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Stor — Luxury Crystal Jewelry",
    description: "Handcrafted natural crystal jewelry. Order via WhatsApp.",
    images: ["/images/og/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cormorant.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-ivory font-sans antialiased" suppressHydrationWarning>
        <PromoBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
