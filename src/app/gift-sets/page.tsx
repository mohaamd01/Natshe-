import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import GiftSetsComingSoon from "./GiftSetsComingSoon";

export const metadata: Metadata = {
  title: "Gift Sets | Aura Stor",
  description:
    "Premium natural crystal gift sets from Aura Stor — thoughtfully curated for those you love. Launching soon. WhatsApp for custom gift requests.",
};

export default function GiftSetsPage() {
  return <GiftSetsComingSoon />;
}
