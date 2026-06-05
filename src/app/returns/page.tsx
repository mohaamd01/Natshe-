import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Returns & Exchanges | Aura Stor",
  description:
    "Aura Stor accepts returns within 14 days of delivery for unworn items in original condition. Contact us via WhatsApp to initiate a return or exchange.",
};

const RETURN_STEPS = [
  {
    step: "01",
    title: "Contact us within 14 days",
    body: "Send us a WhatsApp message within 14 days of receiving your order. Include your order details and the reason for your return.",
  },
  {
    step: "02",
    title: "We confirm eligibility",
    body: "Our team will review your request and confirm whether the item qualifies for a return based on our policy (unworn, original packaging, non-custom).",
  },
  {
    step: "03",
    title: "Return the item",
    body: "We will provide instructions for returning the item. Please ensure it is safely packaged to arrive in its original condition.",
  },
  {
    step: "04",
    title: "Refund or exchange",
    body: "Once we receive and inspect the item, we will process your refund or exchange within 5–7 business days.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ReturnsPage() {
  const waMessage =
    "Hello! I have a question about returning or exchanging an Aura Stor order. Can you help?";

  return (
    <>
      <PageHeader
        label="Our Policy"
        title="Returns & Exchanges"
        subtitle="We want you to love your piece. If something is not right, we will make it right."
        bg="ivory"
      />

      {/* Policy summary */}
      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Return Window", value: "14 Days", note: "from date of delivery" },
                { label: "Condition", value: "Unworn", note: "in original packaging" },
                { label: "Custom Orders", value: "Final Sale", note: "non-returnable" },
              ].map((item) => (
                <div key={item.label}
                  className="bg-ivory-dark rounded-xl p-4 text-center border border-brown/8">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-brown/35 mb-1.5">
                    {item.label}
                  </p>
                  <p className="font-sans text-base font-semibold text-brown mb-0.5">{item.value}</p>
                  <p className="font-sans text-[10px] text-brown/40">{item.note}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif font-light text-brown mb-4"
              style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)" }}>
              What We Accept
            </h2>
            <div className="space-y-3 mb-8">
              {[
                "Items returned within 14 days of delivery",
                "Items in their original, unworn condition",
                "Items with original packaging (velvet pouch) intact",
                "Items that arrived damaged (see below)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-sage text-base mt-0.5 flex-shrink-0 leading-none">✓</span>
                  <p className="font-sans text-sm text-brown/65 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif font-light text-brown mb-4"
              style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)" }}>
              What We Cannot Accept
            </h2>
            <div className="space-y-3">
              {[
                "Items returned after 14 days from delivery",
                "Items that have been worn or show signs of use",
                "Custom or bespoke orders — these are final sale",
                "Items without original packaging",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-brown/30 text-base mt-0.5 flex-shrink-0 leading-none">&times;</span>
                  <p className="font-sans text-sm text-brown/55 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Damaged items */}
      <section className="bg-ivory-dark border-t border-brown/8 section-padding-sm">
        <div className="container-luxury max-w-xl mx-auto">
          <ScrollReveal>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-gold text-xs mt-1 flex-shrink-0">✦</span>
              <h2 className="font-serif font-light text-brown"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                Received a Damaged Order?
              </h2>
            </div>
            <p className="font-sans text-sm text-brown/60 leading-loose">
              If your item arrived damaged, we sincerely apologize. Please photograph
              the item and its packaging, then contact us via WhatsApp within
              48 hours of receiving your order. We will arrange a replacement or
              full refund immediately — no questions asked.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-ivory section-padding-sm border-t border-brown/8">
        <div className="container-luxury max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif font-light text-brown mb-8"
              style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>
              How to Return an Item
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {RETURN_STEPS.map((s) => (
              <ScrollReveal key={s.step}>
                <div className="flex items-start gap-4 bg-ivory-dark rounded-xl px-5 py-4 border border-brown/8">
                  <span className="font-serif text-gold/50 text-lg font-light flex-shrink-0 mt-0.5 w-7">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-brown mb-1">{s.title}</p>
                    <p className="font-sans text-sm text-brown/55 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-brown section-padding-sm">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <h2 className="font-serif font-light text-ivory mb-4"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
              Need to Start a Return?
            </h2>
            <p className="font-sans text-sm text-ivory/50 mb-7 max-w-sm mx-auto leading-relaxed">
              Message us directly and we will guide you through the process personally.
            </p>
            <a
              href={buildWhatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-3.5 px-7 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              Contact Us on WhatsApp
            </a>
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/10">
              <Link href="/shipping" className="font-sans text-xs text-ivory/35 hover:text-gold transition-colors duration-200">
                Shipping Policy &rarr;
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/faq" className="font-sans text-xs text-ivory/35 hover:text-gold transition-colors duration-200">
                FAQ &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
