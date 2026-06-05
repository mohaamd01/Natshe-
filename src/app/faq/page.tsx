import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faq";
import PageHeader from "@/components/layout/PageHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions",
  description:
    "Answers to the most common questions about Aura Stor — ordering via WhatsApp, shipping to Saudi Arabia and UAE, crystal care, returns, and natural gemstone authenticity.",
};

const CATEGORIES: { key: string; label: string; id: string }[] = [
  { key: "ordering",  label: "Ordering",       id: "ordering"  },
  { key: "shipping",  label: "Shipping",        id: "shipping"  },
  { key: "returns",   label: "Returns",         id: "returns"   },
  { key: "products",  label: "Our Products",    id: "products"  },
  { key: "crystals",  label: "Crystals",        id: "crystals"  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FAQPage() {
  const waMessage = "Hello! I have a question about Aura Stor that I couldn't find in the FAQ. Can you help?";

  return (
    <>
      <PageHeader
        label="Support"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know, answered honestly."
        bg="ivory"
      />

      {/* Category anchor nav */}
      <div className="bg-ivory sticky top-[120px] lg:top-[100px] z-30 border-b border-brown/10">
        <div className="container-luxury py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.key}
                href={`#${cat.id}`}
                className="font-sans text-xs text-brown/55 font-medium tracking-wide px-4 py-1.5 rounded-full border border-brown/15 hover:border-sage hover:text-sage transition-colors duration-200 whitespace-nowrap"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ sections */}
      <div className="bg-ivory section-padding">
        <div className="container-luxury max-w-2xl mx-auto">
          <div className="space-y-14">
            {CATEGORIES.map((cat) => {
              const items = faqs.filter((f) => f.category === cat.key);
              if (items.length === 0) return null;
              return (
                <section key={cat.key} id={cat.id} className="scroll-mt-[168px] lg:scroll-mt-[148px]">
                  <ScrollReveal>
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="font-serif font-light text-brown"
                        style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)" }}>
                        {cat.label}
                      </h2>
                      <div className="flex-1 h-px bg-brown/10" />
                    </div>
                    <FAQAccordion items={items} />
                  </ScrollReveal>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      {/* Still have questions — WhatsApp CTA */}
      <section className="bg-brown section-padding-sm">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold/70 mb-4">
              Still have questions?
            </p>
            <h2 className="font-serif font-light text-ivory mb-4"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
              Ask Us Directly on WhatsApp
            </h2>
            <p className="font-sans text-sm text-ivory/50 leading-relaxed mb-7 max-w-sm mx-auto">
              We respond personally to every message, usually within a few hours.
            </p>
            <a
              href={buildWhatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-3.5 px-7 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              Send Us a Message
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-8 border-t border-white/10">
              <Link href="/contact"
                className="font-sans text-xs text-ivory/40 hover:text-gold transition-colors duration-200">
                Contact page &rarr;
              </Link>
              <span className="text-white/20 hidden sm:block">|</span>
              <Link href="/shipping"
                className="font-sans text-xs text-ivory/40 hover:text-gold transition-colors duration-200">
                Shipping info &rarr;
              </Link>
              <span className="text-white/20 hidden sm:block">|</span>
              <Link href="/returns"
                className="font-sans text-xs text-ivory/40 hover:text-gold transition-colors duration-200">
                Returns policy &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
