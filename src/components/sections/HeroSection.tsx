import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default async function HeroSection() {
  const t = await getTranslations("hero");

  return (
    <section
      className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-model-howlite.jpg"
          alt="Model wearing Howlite crystal jewelry — Aura Stor luxury collection"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center top" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/75 via-brown/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown/40 via-brown/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury w-full">
        <div className="max-w-xl">
          {/* Eyebrow label */}
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/90 mb-5 animate-fade-in">
            {t("eyebrow")}
          </p>

          {/* Main headline */}
          <h1 className="font-serif font-light text-ivory leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
          >
            {t("tagline")}
          </h1>

          {/* Brand promise */}
          <p className="font-sans font-light text-ivory/70 text-base md:text-lg leading-relaxed mb-3 max-w-sm">
            {t("promise")}
          </p>

          {/* Shipping note */}
          <p className="font-sans text-xs text-ivory/50 tracking-wider mb-10">
            {t("shipping")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-brown text-sm font-sans font-semibold tracking-wide rounded-full hover:bg-gold/90 transition-all duration-300 shadow-gold hover:shadow-gold hover:-translate-y-0.5"
            >
              {t("ctaShop")}
            </Link>
            <a
              href={buildWhatsAppUrl(t("waMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-ivory/40 text-ivory text-sm font-sans font-medium tracking-wide rounded-full hover:bg-ivory/10 transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4 text-whatsapp" />
              {t("ctaWhatsApp")}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 md:right-10 flex flex-col items-center gap-2 opacity-60">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-ivory rotate-90 origin-center translate-x-4 mb-3">
            {t("scroll")}
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-ivory/60 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Floating product badges */}
      <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 z-10 hidden md:flex flex-col gap-3">
        <HeroBadge label={t("badge1Label")} sub={t("badge1Sub")} />
        <HeroBadge label={t("badge2Label")} sub={t("badge2Sub")} />
        <HeroBadge label={t("badge3Label")} sub={t("badge3Sub")} />
      </div>
    </section>
  );
}

function HeroBadge({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="glass-nav rounded-xl px-4 py-3 text-right min-w-[140px]">
      <p className="font-sans text-xs font-semibold text-ivory leading-tight">{label}</p>
      <p className="font-sans text-[10px] text-ivory/60 mt-0.5">{sub}</p>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
