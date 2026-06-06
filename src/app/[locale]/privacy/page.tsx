import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/layout/PageHeader";
import { SITE_CONFIG } from "@/lib/constants";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("privacyTitle") };
}

const LAST_UPDATED = "May 2026";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });

  const SECTIONS = [
    { title: t("section1Title"), body: t("section1Body") },
    { title: t("section2Title"), body: t("section2Body") },
    { title: t("section3Title"), body: t("section3Body") },
    { title: t("section4Title"), body: t("section4Body") },
    { title: t("section5Title"), body: t("section5Body") },
    { title: t("section6Title"), body: t("section6Body") },
    { title: t("section7Title"), body: t("section7Body") },
  ];

  return (
    <>
      <PageHeader
        label={t("pageLabel")}
        title={t("pageTitle")}
        subtitle={`${t("lastUpdated", { date: LAST_UPDATED })}`}
        bg="ivory"
      />

      <section className="bg-ivory section-padding">
        <div className="container-luxury max-w-2xl mx-auto">
          <p className="font-sans text-sm text-brown/55 leading-loose mb-10 pb-8 border-b border-brown/10">
            {t("intro", { siteName: SITE_CONFIG.name })}
          </p>
          <div className="space-y-8">
            {SECTIONS.map((section, i) => (
              <div key={section.title} className="pb-8 border-b border-brown/8 last:border-0">
                <div className="flex items-start gap-3 mb-3">
                  <span className="font-serif text-gold/40 text-sm font-light flex-shrink-0 mt-0.5 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-sans text-sm font-semibold text-brown tracking-wide">{section.title}</h2>
                </div>
                <p className="font-sans text-sm text-brown/60 leading-loose pl-9">{section.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-brown/10 flex flex-wrap gap-4">
            <Link href="/terms" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200">
              {t("termsLink")} &rarr;
            </Link>
            <Link href="/contact" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200">
              {t("contactLink")} &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
