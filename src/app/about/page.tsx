import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Aura Stor | Natural Crystal Jewelry",
  description:
    "Aura Stor was born from a belief that what you wear should mean something. Discover our story, our values, and our commitment to 100% natural gemstone jewelry.",
};

const VALUES = [
  {
    label: "Natural. Always.",
    body: "Every stone in our collection is 100% natural — never synthetic, never dyed, never lab-created. We source directly from trusted suppliers who share our commitment to authenticity. You will never find imitations here.",
  },
  {
    label: "Worn with Intention.",
    body: "We believe jewelry should carry meaning. Each piece is chosen not only for its beauty but for the energy it holds. We tell you what that energy is, where it comes from, and how to work with it — so your jewelry becomes a daily practice, not just an accessory.",
  },
  {
    label: "Personal, Always.",
    body: "We do not have a shopping cart. Every order is placed through WhatsApp — personally, conversationally, and with care. We want to know who you are buying for, what you are looking for, and how we can make the experience feel as special as the piece itself.",
  },
];

const PROMISE_ITEMS = [
  "100% natural gemstones, every time",
  "Honest descriptions of every stone's energy",
  "Packaging that feels like a gift, not a delivery",
  "A team that answers your messages personally",
  "No pressure. No algorithms. Just crystals.",
];

export default function AboutPage() {
  const waMessage =
    "Hello! I just read the Aura Stor story and I'd love to learn more about your collection.";

  function WhatsAppIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }

  return (
    <>
      <PageHeader
        label="Our Story"
        title="About Aura Stor"
        subtitle="Born from earth. Worn with intention."
        bg="brown"
      />

      {/* Opening statement */}
      <section className="bg-ivory section-padding">
        <div className="container-luxury max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="font-serif italic text-brown/60 leading-relaxed text-xl font-light text-center mb-8"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}>
              &ldquo;We started Aura Stor because we believed that the things you wear every day
              should mean something. Not just look beautiful — mean something.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold/30" />
              <span className="text-gold/60 text-xs">✦</span>
              <div className="h-px w-10 bg-gold/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-ivory-dark section-padding-sm border-t border-brown/8">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-card"
                style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/images/products/set-tigers-eye-diamond-2.jpg"
                  alt="Aura Stor natural crystal jewelry — Tiger's Eye Diamond Set"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Copy */}
            <ScrollReveal direction="right" className="flex flex-col gap-6">
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sage">
                The Story
              </p>
              <h2 className="font-serif font-light text-brown"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Where It Began
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-sm text-brown/60 leading-loose">
                  Aura Stor was founded in 2026 with a single conviction: that
                  natural crystals are not mystical objects to be worshipped from
                  a distance. They are companions — stones you carry, wear, and
                  return to. Each one a small, quiet anchor to what you believe in.
                </p>
                <p className="font-sans text-sm text-brown/60 leading-loose">
                  We saw a market full of beautiful jewelry and empty descriptions.
                  No story. No meaning. No acknowledgment that these stones have
                  traveled millions of years to reach your wrist. We wanted to
                  change that.
                </p>
                <p className="font-sans text-sm text-brown/60 leading-loose">
                  So we built Aura Stor differently. Every product page tells the
                  full story of the stone — its energy, its history, its chakra
                  alignment, how to care for it, and what it is best worn for.
                  We built a Crystal Guide so that you can learn before you choose.
                  And we made WhatsApp our primary sales channel, because we
                  believe every customer deserves a personal conversation,
                  not a shopping cart.
                </p>
                <p className="font-sans text-sm text-brown/60 leading-loose">
                  We ship to Saudi Arabia, the UAE, and Qatar. We are small, and
                  proud of it. Small means personal. Small means every order matters.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brown section-padding">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold/70 mb-4">
                What We Stand For
              </p>
              <h2 className="font-serif font-light text-ivory"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                Our Three Commitments
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <StaggerReveal stagger={100}>
              {VALUES.map((v, i) => (
                <div key={v.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                  <p className="font-serif text-3xl text-gold/25 font-light mb-4 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif font-light text-ivory mb-3"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)" }}>
                    {v.label}
                  </h3>
                  <p className="font-sans text-sm text-ivory/50 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury max-w-xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sage mb-4">
              Our Promise
            </p>
            <h2 className="font-serif font-light text-brown mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
              What You Can Always Expect
            </h2>
            <div className="space-y-3 text-left max-w-sm mx-auto">
              {PROMISE_ITEMS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-gold text-xs mt-1 flex-shrink-0">✦</span>
                  <p className="font-sans text-sm text-brown/65 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-ivory-dark border-t border-brown/10 section-padding-sm">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <h2 className="font-serif font-light text-brown mb-4"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
              Let&rsquo;s Talk
            </h2>
            <p className="font-sans text-sm text-brown/55 mb-7 max-w-sm mx-auto leading-relaxed">
              Have a question about our collection, a stone, or a special request?
              We are always on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={buildWhatsAppUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-3.5 px-7 rounded-xl shadow-whatsapp hover:opacity-90 transition-opacity duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                Message Us on WhatsApp
              </a>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 border border-brown/25 text-brown font-sans font-medium text-sm py-3.5 px-7 rounded-xl hover:border-sage hover:text-sage transition-colors duration-200"
              >
                Browse the Collection
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
