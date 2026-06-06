import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/layout/PageHeader";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("shippingTitle") };
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default async function ShippingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "shipping" });

  const HIGHLIGHTS = [
    { label: t("highlightFreeShipping"), value: t("highlightFreeShippingValue"), note: t("highlightFreeShippingNote") },
    { label: t("highlightDelivery"), value: t("highlightDeliveryValue"), note: t("highlightDeliveryNote") },
    { label: t("highlightPackaging"), value: t("highlightPackagingValue"), note: t("highlightPackagingNote") },
    { label: t("highlightTracking"), value: t("highlightTrackingValue"), note: t("highlightTrackingNote") },
  ];

  const SHIPPING_REGIONS = [
    { country: t("countryKSA"), flag: "🇸🇦", time: t("timeKSA"), fee: t("feeKSA") },
    { country: t("countryUAE"), flag: "🇦🇪", time: t("timeUAE"), fee: t("feeUAE") },
    { country: t("countryQatar"), flag: "🇶🇦", time: t("timeQatar"), fee: t("feeQatar") },
    { country: t("countryTurkey"), flag: "🇹🇷", time: t("timeTurkey"), fee: t("feeTurkey") },
  ];

  return (
    <>
      <PageHeader
        label={t("pageLabel")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        bg="ivory"
      />

      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <StaggerReveal stagger={60}>
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="bg-ivory-dark rounded-2xl p-4 md:p-5 text-center">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-brown/35 mb-2">{h.label}</p>
                  <p className="font-sans text-sm font-semibold text-brown mb-1 leading-snug">{h.value}</p>
                  <p className="font-sans text-[10px] text-brown/40 leading-snug">{h.note}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory section-padding-sm border-t border-brown/8">
        <div className="container-luxury max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif font-light text-brown mb-6" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>
              {t("whereWeShip")}
            </h2>
          </ScrollReveal>
          <div className="divide-y divide-brown/8">
            <StaggerReveal stagger={60}>
              {SHIPPING_REGIONS.map((r) => (
                <div key={r.country} className="flex items-center justify-between gap-4 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{r.flag}</span>
                    <span className="font-sans text-sm font-medium text-brown">{r.country}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-sans text-xs text-brown/70 font-medium">{r.time}</p>
                    <p className="font-sans text-[10px] text-brown/40 mt-0.5">{r.fee}</p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory-dark border-t border-brown/10 py-10">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <a
              href={buildWhatsAppUrl(t("waMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-3.5 px-7 rounded-xl shadow-whatsapp hover:opacity-90 transition-opacity duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              {t("askWhatsApp")}
            </a>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Link href="/returns" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200">{t("returnsPolicy")} &rarr;</Link>
              <span className="text-brown/20">|</span>
              <Link href="/faq" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200">{t("faq")} &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
