import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

// Crystal names, subtitles, summaries are product data — kept in English.
const FEATURED_CRYSTALS = [
  {
    slug: "tigers-eye",
    name: "Tiger's Eye",
    subtitle: "Strength & Courage",
    summary:
      "For those who choose courage over comfort. The stone of focused will and grounded confidence.",
    image: "/images/products/ring-tigers-eye-nature.jpg",
    accentColor: "#C9A050",
  },
  {
    slug: "howlite",
    name: "Howlite",
    subtitle: "Calm & Patience",
    summary:
      "White as still water. Howlite is the stone of stillness — it quiets the mind and creates space for clarity.",
    image: "/images/products/set-howlite-teardrop-1.jpg",
    accentColor: "#B8AFA8",
  },
  {
    slug: "green-aventurine",
    name: "Green Aventurine",
    subtitle: "Love & New Beginnings",
    summary:
      "Deep forest green shimmer. The stone of the heart and the stone of beginners — open to every possibility.",
    image: "/images/products/set-aventurine-heart-1.jpg",
    accentColor: "#7A9E7E",
  },
  {
    slug: "jade",
    name: "Jade",
    subtitle: "Wisdom & Harmony",
    summary:
      "Five thousand years of reverence. The stone of balance, prosperity, and the slow, sure power of harmony.",
    image: "/images/products/ring-jade-nature.jpg",
    accentColor: "#5A9E6E",
  },
  {
    slug: "moonstone",
    name: "Moonstone",
    subtitle: "Intuition & Grace",
    summary:
      "Translucent and luminous. For the intuitive and the dreaming — a stone of inner knowing and gentle power.",
    image: "/images/products/ring-moonstone-nature.jpg",
    accentColor: "#B8C8D8",
  },
];

export default async function CrystalGuideTeaser() {
  const t = await getTranslations("crystalGuideTeaser");

  return (
    <section className="section-padding bg-ivory-dark" aria-labelledby="crystal-guide-heading">
      <div className="container-luxury">
        <ScrollReveal>
          <SectionTitle
            id="crystal-guide-heading"
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            withDivider
          />
        </ScrollReveal>

        <div className="mt-12 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-4 md:grid md:grid-cols-5 md:gap-4 scroll-x-luxury md:overflow-visible overflow-x-auto pb-2 md:pb-0">
            <StaggerReveal stagger={60}>
              {FEATURED_CRYSTALS.map((crystal) => (
                <CrystalCard
                  key={crystal.slug}
                  crystal={crystal}
                  learnMore={t("learnMore")}
                />
              ))}
            </StaggerReveal>
          </div>
        </div>

        <ScrollReveal delay={200} className="mt-10 text-center">
          <Link
            href="/crystal-guide"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brown text-ivory text-sm font-sans font-medium tracking-wide rounded-full hover:bg-brown/80 transition-colors duration-300"
          >
            {t("exploreAll")}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CrystalCard({
  crystal,
  learnMore,
}: {
  crystal: (typeof FEATURED_CRYSTALS)[0];
  learnMore: string;
}) {
  return (
    <Link
      href={`/crystal-guide/${crystal.slug}`}
      className="group flex-shrink-0 w-48 md:w-auto flex flex-col"
    >
      <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-ivory">
        <Image
          src={crystal.image}
          alt={`${crystal.name} crystal`}
          fill
          className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
          sizes="(max-width: 768px) 192px, 20vw"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ backgroundColor: crystal.accentColor }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-3">
          <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/80 mb-0.5">
            {crystal.subtitle}
          </p>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-base md:text-lg text-brown font-light group-hover:text-sage transition-colors duration-200">
          {crystal.name}
        </h3>
        <p className="font-sans text-xs text-brown/50 leading-relaxed line-clamp-2">
          {crystal.summary}
        </p>
        <span className="inline-flex items-center gap-1 font-sans text-xs text-sage group-hover:gap-2 transition-all duration-200 mt-1">
          {learnMore} <span>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
