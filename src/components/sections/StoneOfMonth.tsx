import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Tiger's Eye is the Stone of the Month for launch.
// Stone content (name, tagline, quotes, properties) is product data — kept in English.
const STONE = {
  name: "Tiger's Eye",
  subtitle: "Stone of the Month — June 2026",
  tagline: "The Stone of Strength & Clarity",
  pullQuote: "Wear it when the world asks you to be smaller than you are.",
  summary:
    "Tiger's Eye carries the energy of the earth and the warmth of the sun. Its golden-brown bands shift with a living light called chatoyancy — a visual reminder that strength and clarity are always within you. This month, we're celebrating the stone that moves people forward.",
  properties: [
    { label: "Energy", value: "Strength, Courage, Clarity" },
    { label: "Chakra", value: "Solar Plexus & Root" },
    { label: "Ideal For", value: "Confidence & Focus" },
    { label: "Element", value: "Earth & Fire" },
  ],
  image: "/images/products/set-tigers-eye-diamond-2.jpg",
  guideHref: "/crystal-guide/tigers-eye",
};

export default async function StoneOfMonth() {
  const t = await getTranslations("stoneOfMonth");

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#2D1F14" }}
      aria-labelledby="stone-of-month-heading"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A050 0, #C9A050 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-gold/30 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
              {t("label")}
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — image */}
          <ScrollReveal direction="left">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={STONE.image}
                  alt={`${STONE.name} — Stone of the Month at Aura Stor`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 80vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F14]/60 via-transparent to-transparent" />
              </div>
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center text-center border border-gold/40"
                style={{ background: "radial-gradient(circle, #3D2B1F 60%, #2D1F14 100%)" }}
              >
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/70">June</span>
                <span className="font-serif text-3xl text-gold leading-none">6</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — content */}
          <ScrollReveal direction="right" delay={100}>
            <div className="space-y-6">
              <div>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold/70 mb-3">
                  {STONE.tagline}
                </p>
                <h2
                  id="stone-of-month-heading"
                  className="font-serif font-light text-ivory leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {STONE.name}
                </h2>
              </div>

              <blockquote className="border-l-2 border-gold pl-5">
                <p className="font-serif italic text-lg md:text-xl text-ivory/80 leading-snug">
                  &ldquo;{STONE.pullQuote}&rdquo;
                </p>
              </blockquote>

              <p className="font-sans text-sm leading-loose text-ivory/60">
                {STONE.summary}
              </p>

              {/* Properties grid */}
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-ivory/10">
                <p className="col-span-2 font-sans text-[10px] tracking-[0.2em] uppercase text-gold/50 -mb-2">
                  {t("propertiesLabel")}
                </p>
                {STONE.properties.map((prop) => (
                  <div key={prop.label}>
                    <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-gold/60 mb-1">
                      {prop.label}
                    </p>
                    <p className="font-sans text-xs text-ivory/70">{prop.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={buildWhatsAppUrl(
                    t("waMessage", { stone: STONE.name })
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp text-white text-sm font-sans font-semibold rounded-full shadow-whatsapp hover:opacity-90 transition-opacity duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  {t("shopStone", { stone: STONE.name })}
                </a>
                <Link
                  href={STONE.guideHref}
                  className="inline-flex items-center justify-center px-6 py-3 border border-ivory/20 text-ivory text-sm font-sans font-medium rounded-full hover:bg-ivory/10 transition-colors duration-200"
                >
                  {t("viewGuide")}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
