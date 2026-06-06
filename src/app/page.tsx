import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WhyAuraStor from "@/components/sections/WhyAuraStor";
import CategoryGrid from "@/components/sections/CategoryGrid";
import BestSellers from "@/components/sections/BestSellers";
import HowItWorks from "@/components/sections/HowItWorks";
import BrandStory from "@/components/sections/BrandStory";
import StoneOfMonth from "@/components/sections/StoneOfMonth";
import TrustSection from "@/components/sections/TrustSection";
import CrystalGuideTeaser from "@/components/sections/CrystalGuideTeaser";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramFeed from "@/components/sections/InstagramFeed";
import WhatsAppCTA from "@/components/sections/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Aura Stor — Luxury Crystal Jewelry | Natural Gemstone Accessories",
  description:
    "Discover handcrafted natural crystal jewelry at Aura Stor. Tiger's Eye, Howlite, Jade & Aventurine bracelets, rings and sets. Order via WhatsApp. Shipping to Saudi Arabia, UAE & Qatar.",
};

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
      <TestimonialsSection />
      <InstagramFeed />
      <WhatsAppCTA />
    </>
  );
}
