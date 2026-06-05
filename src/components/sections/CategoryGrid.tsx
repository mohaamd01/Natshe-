import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  {
    slug: "crystal-sets",
    label: "Crystal Sets",
    description: "Matching bracelet & necklace",
    href: "/shop/crystal-sets",
    image: "/images/products/set-aventurine-heart-2.jpg",
    imageAlt: "Aventurine Heart Crystal Set",
    featured: true,
  },
  {
    slug: "crystal-rings",
    label: "Crystal Rings",
    description: "Gold claw gemstone rings",
    href: "/shop/crystal-rings",
    image: "/images/products/ring-jade-hand.jpg",
    imageAlt: "Jade Gold Claw Ring",
    featured: true,
  },
  {
    slug: "crystal-bracelets",
    label: "Crystal Bracelets",
    description: "Natural stone beaded",
    href: "/shop/crystal-bracelets",
    image: "/images/products/set-tigers-eye-diamond-1.jpg",
    imageAlt: "Tiger's Eye Crystal Bracelet",
    featured: false,
  },
  {
    slug: "crystal-necklaces",
    label: "Crystal Necklaces",
    description: "Pendant & wire-wrapped",
    href: "/shop/crystal-necklaces",
    image: "/images/products/necklace-tigers-eye-wirewrapped.jpg",
    imageAlt: "Tiger's Eye Wire-Wrapped Necklace",
    featured: false,
  },
  {
    slug: "gift-sets",
    label: "Gift Sets",
    description: "Beautifully packaged",
    href: "/gift-sets",
    image: "/images/products/set-howlite-teardrop-2.jpg",
    imageAlt: "Howlite Teardrop Gift Set",
    featured: false,
  },
];

export default function CategoryGrid() {
  return (
    <section className="section-padding bg-ivory" aria-labelledby="categories-heading">
      <div className="container-luxury">
        <ScrollReveal>
          <SectionTitle
            label="Explore"
            title="Shop by Category"
            subtitle="Handcrafted from natural gemstones. Each piece is one-of-a-kind."
            align="center"
            withDivider
          />
        </ScrollReveal>

        {/* Bento-style grid — 2 large + 3 small */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {categories.slice(0, 2).map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={i * 80}>
              <CategoryCard cat={cat} tall />
            </ScrollReveal>
          ))}
          {/* Three smaller cards stacked in a column */}
          <div className="col-span-2 md:col-span-1 grid grid-cols-1 gap-3 md:gap-4">
            {categories.slice(2).map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={160 + i * 60}>
                <CategoryCard cat={cat} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* View all link */}
        <ScrollReveal delay={200} className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-sage hover:text-sage-dark tracking-wide group transition-colors duration-200"
          >
            View All Products
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              &rarr;
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CategoryCard({
  cat,
  tall = false,
}: {
  cat: (typeof categories)[0];
  tall?: boolean;
}) {
  return (
    <Link
      href={cat.href}
      className={`group relative overflow-hidden rounded-2xl block bg-ivory-dark ${
        tall ? "aspect-[3/4] md:aspect-[2/3]" : "aspect-[3/2] md:aspect-auto md:h-full"
      }`}
    >
      <Image
        src={cat.image}
        alt={cat.imageAlt}
        fill
        className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent transition-opacity duration-300 group-hover:from-brown/70" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/80 mb-1">
          {cat.description}
        </p>
        <h3 className="font-serif text-xl md:text-2xl text-ivory font-light leading-tight">
          {cat.label}
        </h3>
        <span className="inline-flex items-center gap-1 mt-2 font-sans text-xs text-ivory/60 group-hover:text-gold transition-colors duration-200">
          Shop now <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
