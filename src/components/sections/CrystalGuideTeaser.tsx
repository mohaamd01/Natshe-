import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const FEATURED_CRYSTALS = [
  {
    slug: "tigers-eye",
    name: "Tiger's Eye",
    subtitle: "Strength & Courage",
    summary:
      "For those who choose courage over comfort. The stone of focused will and grounded confidence.",
    image: "/images/products/ring-tigers-eye-nature.jpg",
    color: "#8B5E3C",
    accentColor: "#C9A050",
  },
  {
    slug: "howlite",
    name: "Howlite",
    subtitle: "Calm & Patience",
    summary:
      "White as still water. Howlite is the stone of stillness — it quiets the mind and creates space for clarity.",
    image: "/images/products/set-howlite-teardrop-1.jpg",
    color: "#9E9189",
    accentColor: "#B8AFA8",
  },
  {
    slug: "green-aventurine",
    name: "Green Aventurine",
    subtitle: "Love & New Beginnings",
    summary:
      "Deep forest green shimmer. The stone of the heart and the stone of beginners — open to every possibility.",
    image: "/images/products/set-aventurine-heart-1.jpg",
    color: "#4A6B52",
    accentColor: "#7A9E7E",
  },
  {
    slug: "jade",
    name: "Jade",
    subtitle: "Wisdom & Harmony",
    summary:
      "Five thousand years of reverence. The stone of balance, prosperity, and the slow, sure power of harmony.",
    image: "/images/products/ring-jade-nature.jpg",
    color: "#2D6B3C",
    accentColor: "#5A9E6E",
  },
  {
    slug: "moonstone",
    name: "Moonstone",
    subtitle: "Intuition & Grace",
    summary:
      "Translucent and luminous. For the intuitive and the dreaming — a stone of inner knowing and gentle power.",
    image: "/images/products/ring-moonstone-nature.jpg",
    color: "#7A8A9A",
    accentColor: "#B8C8D8",
  },
];

export default function CrystalGuideTeaser() {
  return (
    <section className="section-padding bg-ivory-dark" aria-labelledby="crystal-guide-heading">
      <div className="container-luxury">
        <ScrollReveal>
          <SectionTitle
            id="crystal-guide-heading"
            label="The Crystal Guide"
            title="Find Your Stone"
            subtitle="Not sure which crystal is right for you? Every stone carries a different energy. Explore ours."
            align="center"
            withDivider
          />
        </ScrollReveal>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-12 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-4 md:grid md:grid-cols-5 md:gap-4 scroll-x-luxury md:overflow-visible overflow-x-auto pb-2 md:pb-0">
            <StaggerReveal stagger={60}>
              {FEATURED_CRYSTALS.map((crystal) => (
                <CrystalCard key={crystal.slug} crystal={crystal} />
              ))}
            </StaggerReveal>
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={200} className="mt-10 text-center">
          <Link
            href="/crystal-guide"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brown text-ivory text-sm font-sans font-medium tracking-wide rounded-full hover:bg-brown/80 transition-colors duration-300"
          >
            Explore the Full Crystal Guide
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CrystalCard({ crystal }: { crystal: (typeof FEATURED_CRYSTALS)[0] }) {
  return (
    <Link
      href={`/crystal-guide/${crystal.slug}`}
      className="group flex-shrink-0 w-48 md:w-auto flex flex-col"
    >
      {/* Image */}
      <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-ivory">
        <Image
          src={crystal.image}
          alt={`${crystal.name} crystal`}
          fill
          className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
          sizes="(max-width: 768px) 192px, 20vw"
        />
        {/* Subtle color overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ backgroundColor: crystal.accentColor }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />

        {/* Bottom info in image */}
        <div className="absolute bottom-0 inset-x-0 p-3">
          <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/80 mb-0.5">
            {crystal.subtitle}
          </p>
        </div>
      </div>

      {/* Text below image */}
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-base md:text-lg text-brown font-light group-hover:text-sage transition-colors duration-200">
          {crystal.name}
        </h3>
        <p className="font-sans text-xs text-brown/50 leading-relaxed line-clamp-2">
          {crystal.summary}
        </p>
        <span className="inline-flex items-center gap-1 font-sans text-xs text-sage group-hover:gap-2 transition-all duration-200 mt-1">
          Learn more <span>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
