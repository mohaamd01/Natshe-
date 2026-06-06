import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import GiftSetsComingSoon from "@/components/sections/GiftSetsComingSoon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("giftSetsTitle") };
}

export default function GiftSetsPage() {
  return <GiftSetsComingSoon />;
}
