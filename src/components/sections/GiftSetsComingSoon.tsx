"use client";

import { useState } from "react";
import Image from "next/image";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const GIFT_PREVIEWS = [
  { src: "/images/products/set-tigers-eye-diamond-2.jpg" },
  { src: "/images/products/set-howlite-teardrop-2.jpg" },
  { src: "/images/products/set-aventurine-heart-2.jpg" },
];

export default function GiftSetsComingSoon() {
  const t = useTranslations("giftSets");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const customGiftWa = buildWhatsAppUrl(t("waMessage"));

  const GIFT_FEATURES = [
    t("feature1"),
    t("feature2"),
    t("feature3"),
    t("feature4"),
  ];

  return (
    <div className="bg-ivory pt-[120px] lg:pt-[100px]">
      <section className="bg-brown section-padding">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-4">{t("pageLabel")}</p>
            <h1 className="font-serif font-light text-ivory mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              {t("pageTitle")}
            </h1>
            <p className="font-serif italic text-ivory/55 text-xl font-light mb-8 max-w-md mx-auto">
              {t("tagline")}
            </p>
            <div className="inline-block bg-white/5 border border-white/15 rounded-2xl px-7 py-6 text-center">
              <p className="font-sans text-xs text-gold/70 tracking-[0.2em] uppercase mb-3">{t("availableNow")}</p>
              <p className="font-serif font-light text-ivory mb-2" style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}>
                {t("customGiftTitle")}
              </p>
              <a
                href={customGiftWa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-3.5 px-7 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-95 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                {t("requestCustomGift")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GIFT_PREVIEWS.map((p) => (
              <ScrollReveal key={p.src}>
                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <Image src={p.src} alt="" fill className="object-cover object-center opacity-85" sizes="(max-width: 640px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-dark section-padding-sm border-t border-brown/8">
        <div className="container-luxury max-w-md mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif font-light text-brown mb-6" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
              {t("everyGiftIncludes")}
            </h2>
            <div className="space-y-3 text-left">
              {GIFT_FEATURES.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="text-gold text-xs mt-1 flex-shrink-0">✦</span>
                  <p className="font-sans text-sm text-brown/65 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-ivory border-t border-brown/8 section-padding-sm">
        <div className="container-luxury max-w-md mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif font-light text-brown mb-2" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
              {t("beFirstToKnow")}
            </h2>
            {submitted ? (
              <div className="flex items-center justify-center gap-2 py-3 bg-sage/8 rounded-xl border border-sage/20">
                <span className="text-sage">✓</span>
                <p className="font-sans text-sm text-sage font-medium">{t("onTheList")}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubmitted(true); }} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-ivory border border-brown/20 rounded-xl px-4 py-3 font-sans text-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-sage transition-colors duration-200"
                />
                <button type="submit" className="bg-brown text-ivory font-sans text-sm font-medium px-6 py-3 rounded-xl hover:bg-sage transition-colors duration-300 whitespace-nowrap">
                  {t("notifyMe")}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      <div className="bg-ivory-dark border-t border-brown/10 py-8">
        <div className="container-luxury flex flex-wrap items-center justify-center gap-4">
          <Link href="/shop" className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200">&larr; {t("allProducts")}</Link>
          <span className="text-brown/20">|</span>
          <Link href="/collections" className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200">{t("browseCollections")}</Link>
          <span className="text-brown/20">|</span>
          <Link href="/crystal-guide" className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200">{t("crystalGuide")}</Link>
        </div>
      </div>
    </div>
  );
}
