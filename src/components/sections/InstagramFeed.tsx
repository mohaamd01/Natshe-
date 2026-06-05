import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import { SOCIAL } from "@/lib/constants";

// Using product images as Instagram-style feed placeholders.
// In Sprint 8 / Phase 2, replace with Behold.so embed or Instagram Basic Display API.
const FEED_IMAGES = [
  {
    src: "/images/products/ring-jade-hand.jpg",
    alt: "Jade Gold Claw Ring worn on hand",
    caption: "The Jade Gold Claw Ring. Wisdom at your fingertip.",
  },
  {
    src: "/images/products/set-aventurine-heart-2.jpg",
    alt: "Aventurine Heart Set flat lay",
    caption: "Open heart energy. The Aventurine Heart Set.",
  },
  {
    src: "/images/products/ring-moonstone-hand.jpg",
    alt: "Moonstone Gold Claw Ring on hand",
    caption: "Moonstone. Glowing with inner light.",
  },
  {
    src: "/images/products/set-tigers-eye-star-2.jpg",
    alt: "Tiger's Eye Star Set",
    caption: "Reach for the stars, stay rooted. Tiger's Eye Star Set.",
  },
  {
    src: "/images/products/ring-moss-agate-hand.jpg",
    alt: "Moss Agate Gold Claw Ring",
    caption: "Every Moss Agate is a landscape. Uniquely yours.",
  },
  {
    src: "/images/products/set-howlite-teardrop-2.jpg",
    alt: "Howlite Teardrop Set",
    caption: "In stillness, you find what matters. Howlite.",
  },
];

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-ivory" aria-labelledby="instagram-heading">
      <div className="container-luxury">
        {/* Header */}
        <ScrollReveal className="text-center mb-10">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
            aria-label="Follow Aura Stor on Instagram"
          >
            <InstagramIcon className="w-5 h-5 text-brown/40 group-hover:text-sage transition-colors duration-200" />
            <span
              id="instagram-heading"
              className="font-sans text-xs tracking-[0.25em] uppercase text-brown/50 group-hover:text-sage transition-colors duration-200"
            >
              {SOCIAL.instagramHandle}
            </span>
          </a>

          <h2 className="font-serif font-light text-brown mt-3 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Follow Our World
          </h2>
          <p className="font-sans text-sm text-brown/50 mt-2 max-w-sm mx-auto">
            Behind the stones. Behind the brand. Every day on Instagram.
          </p>
        </ScrollReveal>

        {/* Feed grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        <StaggerReveal stagger={60}>
          {FEED_IMAGES.map((item, i) => (
            <a
              key={i}
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden bg-ivory-dark block"
              aria-label={`Instagram post: ${item.caption}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-500 ease-luxury group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                  <InstagramIcon className="w-5 h-5 text-white mx-auto mb-1.5" />
                  <p className="font-sans text-[9px] text-ivory/90 leading-snug line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </StaggerReveal>
        </div>

        {/* Follow CTA */}
        <ScrollReveal delay={200} className="text-center mt-8">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 border border-brown/20 text-brown text-sm font-sans font-medium rounded-full hover:bg-brown hover:text-ivory hover:border-brown transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow on Instagram
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
