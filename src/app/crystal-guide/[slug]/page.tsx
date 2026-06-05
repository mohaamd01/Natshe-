import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { crystals, getCrystalBySlug, getCrystalByType } from "@/data/crystals";
import { getProductsByStone } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import ProductGrid from "@/components/shop/ProductGrid";

// ─── Static params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return crystals.map((c) => ({ slug: c.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const crystal = getCrystalBySlug(slug);
  if (!crystal) return { title: "Not Found" };

  return {
    title: `${crystal.name} — ${crystal.subtitle}`,
    description: `${crystal.summary} Discover the chakra alignment, zodiac connections, benefits, and care instructions for ${crystal.name} crystal jewelry at Aura Stor.`,
    openGraph: {
      title: `${crystal.name} Crystal Guide | Aura Stor`,
      description: crystal.summary,
      images: [{ url: crystal.image, alt: `${crystal.name} crystal` }],
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function CrystalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const crystal = getCrystalBySlug(slug);
  if (!crystal) notFound();

  const stoneProducts = getProductsByStone(crystal.stoneType);
  const pairedCrystals = crystal.pairsWith
    .map((s) => getCrystalByType(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const waMessage = `Hello! I just read about ${crystal.name} on your website and I'm interested in ${crystal.name} jewelry. Can you help me choose the right piece?`;

  const propertyRows = [
    { label: "Energy", value: crystal.properties.energy },
    { label: "Chakra", value: crystal.properties.chakra },
    { label: "Zodiac", value: crystal.properties.zodiac },
    { label: "Element", value: crystal.properties.element },
    { label: "Ideal For", value: crystal.properties.idealFor },
    { label: "Origin", value: crystal.properties.origin },
  ];

  const paragraphs = crystal.description
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  function WhatsAppIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }

  // ── Article JSON-LD ─────────────────────────────────────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${crystal.name} — ${crystal.subtitle}`,
    description: crystal.summary,
    image: `https://aurastor.com${crystal.image}`,
    author: {
      "@type": "Organization",
      name: "Aura Stor",
      url: "https://aurastor.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Aura Stor",
      url: "https://aurastor.com",
      logo: {
        "@type": "ImageObject",
        url: "https://aurastor.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aurastor.com/crystal-guide/${crystal.slug}`,
    },
    about: {
      "@type": "Thing",
      name: crystal.name,
      description: crystal.summary,
    },
    keywords: [
      crystal.name,
      crystal.properties.chakra,
      crystal.properties.energy,
      crystal.properties.idealFor,
      "crystal guide",
      "natural gemstone",
      "crystal meaning",
    ].join(", "),
  };

  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top spacing */}
      <div className="pt-[120px] lg:pt-[100px] bg-brown" />

      {/* Breadcrumb */}
      <div className="bg-brown border-b border-white/10">
        <div className="container-luxury py-3">
          <nav className="flex items-center gap-1.5 font-sans text-xs text-ivory/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/crystal-guide" className="hover:text-gold transition-colors duration-200">Crystal Guide</Link>
            <span>/</span>
            <span className="text-ivory/70">{crystal.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero — dark editorial */}
      <section className="bg-brown overflow-hidden">
        <div className="container-luxury py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left: Image */}
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-float"
                style={{ aspectRatio: "3/4" }}>
                <Image
                  src={crystal.image}
                  alt={`${crystal.name} crystal jewelry by Aura Stor`}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Stone color glow */}
                <div
                  className="absolute inset-0 opacity-15 mix-blend-overlay"
                  style={{ background: `radial-gradient(circle at 50% 70%, ${crystal.color}, transparent 70%)` }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Text */}
            <ScrollReveal direction="right" className="flex flex-col gap-6">

              {/* Stone color accent */}
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-white/20"
                  style={{ backgroundColor: crystal.color }}
                  aria-hidden="true"
                />
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold/70">
                  Crystal Guide
                </p>
              </div>

              {/* Name */}
              <div>
                <h1
                  className="font-serif font-light text-ivory leading-tight mb-2"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
                >
                  {crystal.name}
                </h1>
                <p className="font-sans text-sm tracking-wide text-gold/80 uppercase font-medium">
                  {crystal.subtitle}
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="gold-bar-left">
                <p className="font-serif italic text-ivory/70 text-xl font-light leading-relaxed">
                  &ldquo;{crystal.pullQuote}&rdquo;
                </p>
              </blockquote>

              {/* Summary */}
              <p className="font-sans text-sm text-ivory/55 leading-relaxed">
                {crystal.summary}
              </p>

              {/* WhatsApp CTA */}
              <a
                href={buildWhatsAppUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-3.5 px-6 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-95 transition-all duration-200 self-start"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                Shop {crystal.name} Jewelry
              </a>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Properties grid */}
      <section className="bg-ivory-dark border-b border-brown/10">
        <div className="container-luxury py-10 md:py-14">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-brown/35 mb-6 text-center">
              Stone Properties
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StaggerReveal stagger={60}>
              {propertyRows.map(({ label, value }) => (
                <div key={label} className="bg-ivory rounded-xl p-4 text-center">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-brown/35 mb-2">
                    {label}
                  </p>
                  <p className="font-sans text-xs text-brown font-medium leading-snug">
                    {value}
                  </p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Editorial description */}
      <section className="bg-ivory section-padding">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sage mb-6">
                About {crystal.name}
              </p>
            </ScrollReveal>
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <p className="font-sans text-sm text-brown/60 leading-loose">
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-ivory-dark section-padding-sm border-t border-brown/8">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2
                className="font-serif font-light text-brown mb-8"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
              >
                What {crystal.name} Is Known For
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <StaggerReveal stagger={60}>
                {crystal.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                    <p className="font-sans text-sm text-brown/65 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Care instructions */}
      <section className="bg-ivory section-padding-sm border-t border-brown/8">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2
                className="font-serif font-light text-brown mb-6"
                style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
              >
                How to Care for Your {crystal.name}
              </h2>
              <p className="font-sans text-sm text-brown/50 leading-relaxed mb-6">
                Natural crystals deserve gentle care. Follow these guidelines to keep
                your {crystal.name.toLowerCase()} beautiful and energetically vibrant.
              </p>
            </ScrollReveal>
            <div className="space-y-3">
              <StaggerReveal stagger={60}>
                {crystal.careInstructions.map((instruction, i) => (
                  <div key={i} className="flex items-start gap-3 bg-ivory-dark rounded-xl px-5 py-3.5">
                    <span className="font-serif text-gold/50 text-sm font-light flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-sans text-sm text-brown/65 leading-relaxed">
                      {instruction}
                    </p>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pairs beautifully with */}
      {pairedCrystals.length > 0 && (
        <section className="bg-brown section-padding-sm">
          <div className="container-luxury">
            <ScrollReveal>
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold/60 mb-3 text-center">
                Crystal Combinations
              </p>
              <h2
                className="font-serif font-light text-ivory text-center mb-10"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}
              >
                Pairs Beautifully With
              </h2>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              <StaggerReveal stagger={80} direction="none">
                {pairedCrystals.map((paired) => (
                  <Link
                    key={paired.slug}
                    href={`/crystal-guide/${paired.slug}`}
                    className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-xl px-5 py-3.5 transition-all duration-300"
                  >
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={paired.thumbnail}
                        alt={paired.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-medium text-ivory leading-tight">
                        {paired.name}
                      </p>
                      <p className="font-sans text-[10px] text-ivory/40 mt-0.5">
                        {paired.properties.chakra} Chakra
                      </p>
                    </div>
                    <span className="text-ivory/20 group-hover:text-gold/60 text-xs transition-colors duration-200 ml-1">&rarr;</span>
                  </Link>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>
      )}

      {/* Products using this stone */}
      {stoneProducts.length > 0 && (
        <section className="bg-ivory section-padding">
          <div className="container-luxury">
            <ScrollReveal>
              <div className="text-center mb-10 md:mb-12">
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sage mb-3">
                  Shop
                </p>
                <h2
                  className="font-serif font-light text-brown"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  {crystal.name} Jewelry
                </h2>
                <p className="font-sans text-sm text-brown/50 mt-3 max-w-sm mx-auto">
                  Handcrafted from 100% natural {crystal.name.toLowerCase()} stones.
                  Each piece is one-of-a-kind.
                </p>
              </div>
            </ScrollReveal>
            <ProductGrid products={stoneProducts} cols={stoneProducts.length > 2 ? 3 : 2} />
            <ScrollReveal>
              <div className="text-center mt-10">
                <Link
                  href="/shop"
                  className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200 tracking-wide"
                >
                  View all products &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Back to guide */}
      <section className="bg-ivory-dark border-t border-brown/10 py-8">
        <div className="container-luxury text-center">
          <Link
            href="/crystal-guide"
            className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200 tracking-wide"
          >
            &larr; Back to Crystal Guide
          </Link>
        </div>
      </section>
    </>
  );
}
