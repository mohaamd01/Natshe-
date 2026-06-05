import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Divider } from "@/components/ui/Divider";

const BRAND_PILLARS = [
  {
    label: "Natural Only",
    description:
      "Every stone is 100% genuine — never synthetic, never treated, never imitation.",
  },
  {
    label: "Intentional Design",
    description:
      "Each piece is designed to be worn as a daily reminder of your energy and intention.",
  },
  {
    label: "Personal Service",
    description:
      "Order directly via WhatsApp. Real people, real conversation, real care.",
  },
];

export default function BrandStory() {
  return (
    <section className="section-padding bg-ivory overflow-hidden" aria-labelledby="brand-story-heading">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — images stacked / collage */}
          <ScrollReveal direction="left" className="relative">
            {/* Primary image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/products/set-tigers-eye-star-2.jpg"
                alt="Tiger's Eye Star Set — handcrafted natural crystal jewelry by Aura Stor"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 80vw, 45vw"
              />
            </div>
            {/* Secondary image — overlapping corner */}
            <div className="absolute -bottom-6 -right-4 md:right-0 lg:-right-8 w-2/5 aspect-square rounded-xl overflow-hidden shadow-hover border-2 border-ivory">
              <Image
                src="/images/products/ring-jade-hand.jpg"
                alt="Jade Gold Claw Ring — worn with intention"
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
            </div>
            {/* Decorative gold bar */}
            <div className="absolute top-8 -left-4 w-1 h-24 bg-gradient-to-b from-gold/60 to-transparent rounded-full" />
          </ScrollReveal>

          {/* Right — story copy */}
          <ScrollReveal direction="right" delay={100}>
            <div className="space-y-6">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold">
                Our Story
              </p>

              <h2
                id="brand-story-heading"
                className="font-serif font-light text-brown leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Born from Earth.
                <br />
                <em>Worn with Intention.</em>
              </h2>

              <Divider variant="gold" className="my-2" />

              <p className="font-sans text-sm leading-loose text-brown/70">
                Aura Stor began with a simple belief: the stones we wear carry
                more than beauty. Every crystal formed over millions of years
                underground carries an energy — a frequency — that quietly
                interacts with our own.
              </p>

              <p className="font-sans text-sm leading-loose text-brown/70">
                We curate and craft each piece from 100% natural gemstones,
                chosen for their quality and their energy. No synthetics. No
                shortcuts. Just the earth, shaped with intention.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-gold pl-5 my-6">
                <p className="font-serif italic text-xl md:text-2xl text-brown/80 leading-snug">
                  "The right stone finds the right person."
                </p>
              </blockquote>

              {/* Three pillars */}
              <div className="space-y-4 pt-2">
                {BRAND_PILLARS.map((pillar) => (
                  <div key={pillar.label} className="flex gap-4 items-start">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-sage mb-1">
                        {pillar.label}
                      </p>
                      <p className="font-sans text-sm text-brown/60 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-2 font-sans text-sm font-medium text-sage hover:text-sage-dark tracking-wide group transition-colors duration-200"
              >
                Read our story
                <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
