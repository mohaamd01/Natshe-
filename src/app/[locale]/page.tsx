import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import WhyAuraStor from "@/components/sections/WhyAuraStor";
import CategoryGrid from "@/components/sections/CategoryGrid";
import BestSellers from "@/components/sections/BestSellers";
import HowItWorks from "@/components/sections/HowItWorks";
import BrandStory from "@/components/sections/BrandStory";
import StoneOfMonth from "@/components/sections/StoneOfMonth";
import TrustSection from "@/components/sections/TrustSection";
import CrystalGuideTeaser from "@/components/sections/CrystalGuideTeaser";
import ReviewSection from "@/components/sections/ReviewSection";
import InstagramFeed from "@/components/sections/InstagramFeed";
import WhatsAppCTA from "@/components/sections/WhatsAppCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyAuraStor />
      <CategoryGrid />
      <BestSellers />
      <HowItWorks />
      <BrandStory />
      <StoneOfMonth />
      <TrustSection />
      <CrystalGuideTeaser />
      <ReviewSection />
      <InstagramFeed />
      <WhatsAppCTA />
    </>
  );
}
