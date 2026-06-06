"use client";

import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface ComingSoonProps {
  categoryLabel: string;
  tagline?: string;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ComingSoon({ categoryLabel, tagline }: ComingSoonProps) {
  const t = useTranslations("comingSoon");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const waMessage = t("waMessage", { category: categoryLabel });

  const ASSURANCES = [
    t("assurance1"),
    t("assurance2"),
    t("assurance3"),
    t("assurance4"),
  ];

  return (
    <div className="bg-ivory min-h-screen pt-[120px] lg:pt-[100px]">

      {/* Hero section */}
      <div className="bg-ivory section-padding border-b border-brown/8">
        <div className="container-luxury max-w-2xl mx-auto text-center">

          {/* Gold ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-gold/60" />
            <span className="text-gold text-sm" aria-hidden="true">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-gold/40 to-gold/60" />
          </div>

          {/* Label */}
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sage mb-4">
            {t("label")}
          </p>

          {/* Title */}
          <h1
            className="font-serif font-light text-brown mb-5 leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            {categoryLabel}
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="font-serif italic text-brown/50 text-lg mb-5 font-light">
              {tagline}
            </p>
          )}

          {/* Body copy */}
          <p className="font-sans text-sm text-brown/60 leading-relaxed mb-4 max-w-lg mx-auto">
            {t("bodyCopy")}
          </p>
          <p className="font-sans text-sm text-brown/50 leading-relaxed mb-10 max-w-md mx-auto">
            {t("bodyCopy2")}
          </p>

          {/* WhatsApp CTA */}
          <a
            href={buildWhatsAppUrl(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-4 px-8 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
            {t("enquireWhatsApp")}
          </a>

          <p className="font-sans text-xs text-brown/35 mt-3">
            {t("replyTime")} &bull; {t("businessHours")}
          </p>
        </div>
      </div>

      {/* Notify Me section */}
      <div className="bg-ivory-dark section-padding-sm">
        <div className="container-luxury max-w-md mx-auto text-center">

          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-brown/35 mb-6">
            {t("stayInLoop")}
          </p>

          <h2 className="font-serif font-light text-brown mb-2"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
            {t("beFirstTitle")}
          </h2>
          <p className="font-sans text-xs text-brown/50 leading-relaxed mb-8">
            {t("beFirstBody")}
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 py-4 bg-sage/8 rounded-xl border border-sage/20">
              <span className="text-sage text-lg leading-none">✓</span>
              <p className="font-sans text-sm text-sage font-medium">
                {t("onTheList")}
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-2.5"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-ivory border border-brown/20 rounded-xl px-4 py-3 font-sans text-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-sage transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-brown text-ivory font-sans text-sm font-medium px-6 py-3 rounded-xl hover:bg-sage transition-colors duration-300 whitespace-nowrap"
              >
                {t("notifyMe")}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Assurance strip + back link */}
      <div className="bg-ivory border-t border-brown/10 py-10">
        <div className="container-luxury text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {ASSURANCES.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-gold text-xs">✦</span>
                <span className="font-sans text-xs text-brown/50 tracking-wide">{item}</span>
              </div>
            ))}
          </div>
          <Link
            href="/shop"
            className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200 tracking-wide"
          >
            &larr; {t("browseProducts")}
          </Link>
        </div>
      </div>

    </div>
  );
}
