import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";
import { crystals, getCrystalBySlug, getCrystalByType } from "@/data/crystals";
import { getProductsByStone } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { localized } from "@/lib/localize";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import ProductGrid from "@/components/shop/ProductGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["en", "tr"]) {
    for (const c of crystals) {
      params.push({ locale, slug: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const crystal = getCrystalBySlug(slug);
  if (!crystal) return { title: "Not Found" };

  const name = localized(crystal.name, locale);
  const subtitle = localized(crystal.subtitle, locale);
  const summary = localized(crystal.summary, locale);

  return {
    title: `${name} — ${subtitle}`,
    description: summary,
  };
}

export default async function CrystalDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "crystalGuide" });

  const crystal = getCrystalBySlug(slug);
  if (!crystal) notFound();

  // Resolve all localised fields
  const name = localized(crystal.name, locale);
  const subtitle = localized(crystal.subtitle, locale);
  const summary = localized(crystal.summary, locale);
  const description = localized(crystal.description, locale);
  const pullQuote = localized(crystal.pullQuote, locale);

  const stoneProducts = getProductsByStone(crystal.stoneType);
  const pairedCrystals = crystal.pairsWith
    .map((s) => getCrystalByType(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const waMessage = t("waMessageSlug", { crystal: name });

  const propertyRows = [
    { label: t("energy"), value: localized(crystal.properties.energy, locale) },
    { label: t("chakra"), value: localized(crystal.properties.chakra, locale) },
    { label: t("zodiac"), value: localized(crystal.properties.zodiac, locale) },
    { label: t("element"), value: localized(crystal.properties.element, locale) },
    { label: t("idealFor"), value: localized(crystal.properties.idealFor, locale) },
    { label: t("origin"), value: crystal.properties.origin },
  ];

  const paragraphs = description.split("\n\n").map((p) => p.trim()).filter(Boolean);

  function WhatsAppIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${name} — ${subtitle}`,
    description: summary,
    image: `https://aurastor.com${crystal.image}`,
    author: { "@type": "Organization", name: "Aura Stor", url: "https://aurastor.com" },
    publisher: { "@type": "Organization", name: "Aura Stor", url: "https://aurastor.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://aurastor.com/crystal-guide/${crystal.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-[120px] lg:pt-[100px] bg-brown" />

      <div className="bg-brown border-b border-white/10">
        <div className="container-luxury py-3">
          <nav className="flex items-center gap-1.5 font-sans text-xs text-ivory/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors duration-200">{t("breadcrumbHome")}</Link>
            <span>/</span>
            <Link href="/crystal-guide" className="hover:text-gold transition-colors duration-200">{t("breadcrumbGuide")}</Link>
            <span>/</span>
            <span className="text-ivory/70">{name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-brown overflow-hidden">
        <div className="container-luxury py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-float" style={{ aspectRatio: "3/4" }}>
                <Image src={crystal.image} alt={`${name} crystal jewelry by Aura Stor`} fill priority className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 opacity-15 mix-blend-overlay" style={{ background: `radial-gradient(circle at 50% 70%, ${crystal.color}, transparent 70%)` }} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-white/20" style={{ backgroundColor: crystal.color }} aria-hidden="true" />
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold/70">{t("breadcrumbGuide")}</p>
              </div>
              <div>
                <h1 className="font-serif font-light text-ivory leading-tight mb-2" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>{name}</h1>
                <p className="font-sans text-sm tracking-wide text-gold/80 uppercase font-medium">{subtitle}</p>
              </div>
              <blockquote className="gold-bar-left">
                <p className="font-serif italic text-ivory/70 text-xl font-light leading-relaxed">&ldquo;{pullQuote}&rdquo;</p>
              </blockquote>
              <p className="font-sans text-sm text-ivory/55 leading-relaxed">{summary}</p>
              <a
                href={buildWhatsAppUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-3.5 px-6 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-95 transition-all duration-200 self-start"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                {t("shopJewelryWa", { crystal: name })}
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory-dark border-b border-brown/10">
        <div className="container-luxury py-10 md:py-14">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-brown/35 mb-6 text-center">{t("stoneProperties")}</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StaggerReveal stagger={60}>
              {propertyRows.map(({ label, value }) => (
                <div key={label} className="bg-ivory rounded-xl p-4 text-center">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-brown/35 mb-2">{label}</p>
                  <p className="font-sans text-xs text-brown font-medium leading-snug">{value}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sage mb-6">{t("aboutStone", { crystal: name })}</p>
            </ScrollReveal>
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <p className="font-sans text-sm text-brown/60 leading-loose">{para}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-dark section-padding-sm border-t border-brown/8">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-serif font-light text-brown mb-8" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                {t("knownFor", { crystal: name })}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <StaggerReveal stagger={60}>
                {crystal.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                    <p className="font-sans text-sm text-brown/65 leading-relaxed">{localized(benefit, locale)}</p>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </div>
      </section>

      {pairedCrystals.length > 0 && (
        <section className="bg-brown section-padding-sm">
          <div className="container-luxury">
            <ScrollReveal>
              <h2 className="font-serif font-light text-ivory text-center mb-10" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
                {t("pairsWith")}
              </h2>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              <StaggerReveal stagger={80} direction="none">
                {pairedCrystals.map((paired) => (
                  <Link key={paired.slug} href={`/crystal-guide/${paired.slug}`} className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-xl px-5 py-3.5 transition-all duration-300">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={paired.thumbnail} alt={localized(paired.name, locale)} fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-medium text-ivory leading-tight">{localized(paired.name, locale)}</p>
                      <p className="font-sans text-[10px] text-ivory/40 mt-0.5">{localized(paired.properties.chakra, locale)} {t("chakraLabel")}</p>
                    </div>
                    <span className="text-ivory/20 group-hover:text-gold/60 text-xs transition-colors duration-200 ml-1">&rarr;</span>
                  </Link>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>
      )}

      {stoneProducts.length > 0 && (
        <section className="bg-ivory section-padding">
          <div className="container-luxury">
            <ScrollReveal>
              <div className="text-center mb-10 md:mb-12">
                <h2 className="font-serif font-light text-brown" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                  {t("shopJewelry", { crystal: name })}
                </h2>
              </div>
            </ScrollReveal>
            <ProductGrid products={stoneProducts} cols={stoneProducts.length > 2 ? 3 : 2} />
            <ScrollReveal>
              <div className="text-center mt-10">
                <Link href="/shop" className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200 tracking-wide">
                  {t("viewAllProducts")} &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="bg-ivory-dark border-t border-brown/10 py-8">
        <div className="container-luxury text-center">
          <Link href="/crystal-guide" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200 tracking-wide">
            &larr; {t("backToGuide")}
          </Link>
        </div>
      </section>
    </>
  );
}
