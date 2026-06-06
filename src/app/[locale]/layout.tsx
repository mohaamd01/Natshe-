import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_CONFIG } from "@/lib/constants";
import PromoBanner from "@/components/layout/PromoBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/whatsapp/WhatsAppFloat";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4A6B52",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const isEn = locale === "en";

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: t("homeTitle"),
      template: `%s | Aura Stor`,
    },
    description: t("homeDescription"),
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}`,
      languages: {
        en: `${SITE_CONFIG.url}/en`,
        tr: `${SITE_CONFIG.url}/tr`,
      },
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "tr_TR",
      url: `${SITE_CONFIG.url}/${locale}`,
      siteName: SITE_CONFIG.name,
      title: "Aura Stor — Luxury Crystal Jewelry",
      description: t("homeDescription"),
      images: [{ url: "/images/og/og-image.jpg", width: 1200, height: 630, alt: "Aura Stor" }],
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <PromoBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </NextIntlClientProvider>
  );
}
