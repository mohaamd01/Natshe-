import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Shipping & Delivery | Aura Stor",
  description:
    "Aura Stor ships to Saudi Arabia, UAE, Qatar, and Turkey. Free shipping on orders above $50. Standard delivery 5–10 business days. All pieces packaged in velvet gift pouches.",
};

const SHIPPING_REGIONS = [
  { country: "Saudi Arabia", flag: "🇸🇦", time: "5–10 business days", fee: "Free on orders above $50" },
  { country: "United Arab Emirates", flag: "🇦🇪", time: "5–10 business days", fee: "Free on orders above $50" },
  { country: "Qatar", flag: "🇶🇦", time: "5–10 business days", fee: "Free on orders above $50" },
  { country: "Turkey", flag: "🇹🇷", time: "7–14 business days", fee: "Contact us for rates" },
];

const HIGHLIGHTS = [
  {
    label: "Free Shipping",
    value: "On all orders above $50",
    note: "Flat fee applies for smaller orders",
  },
  {
    label: "Delivery Time",
    value: "5–10 Business Days",
    note: "To Saudi Arabia, UAE & Qatar",
  },
  {
    label: "Packaging",
    value: "Velvet Gift Pouch",
    note: "Every order, every time",
  },
  {
    label: "Tracking",
    value: "Via WhatsApp",
    note: "We keep you updated personally",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ShippingPage() {
  const waMessage =
    "Hello! I have a question about shipping and delivery for an Aura Stor order.";

  return (
    <>
      <PageHeader
        label="Delivery"
        title="Shipping & Delivery"
        subtitle="Every order is packaged with care and shipped directly to you."
        bg="ivory"
      />

      {/* Highlight cards */}
      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <StaggerReveal stagger={60}>
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="bg-ivory-dark rounded-2xl p-4 md:p-5 text-center">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-brown/35 mb-2">
                    {h.label}
                  </p>
                  <p className="font-sans text-sm font-semibold text-brown mb-1 leading-snug">
                    {h.value}
                  </p>
                  <p className="font-sans text-[10px] text-brown/40 leading-snug">
                    {h.note}
                  </p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Regions table */}
      <section className="bg-ivory section-padding-sm border-t border-brown/8">
        <div className="container-luxury max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif font-light text-brown mb-6"
              style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>
              Where We Ship
            </h2>
          </ScrollReveal>
          <div className="divide-y divide-brown/8">
            <StaggerReveal stagger={60}>
              {SHIPPING_REGIONS.map((r) => (
                <div key={r.country}
                  className="flex items-center justify-between gap-4 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{r.flag}</span>
                    <span className="font-sans text-sm font-medium text-brown">{r.country}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-sans text-xs text-brown/70 font-medium">{r.time}</p>
                    <p className="font-sans text-[10px] text-brown/40 mt-0.5">{r.fee}</p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
          <ScrollReveal>
            <p className="font-sans text-xs text-brown/40 mt-5 italic">
              Not in one of these countries? Contact us via WhatsApp and we will
              do our best to arrange shipping for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Packaging */}
      <section className="bg-brown section-padding-sm">
        <div className="container-luxury max-w-xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold/70 mb-4">
              Our Packaging
            </p>
            <h2 className="font-serif font-light text-ivory mb-5"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
              Every Order Arrives as a Gift
            </h2>
            <p className="font-sans text-sm text-ivory/55 leading-loose mb-6">
              Whether you are ordering for yourself or for someone else, every Aura Stor
              piece arrives in our signature velvet gift pouch. We use protective outer
              packaging to ensure your jewelry travels safely. If you would like a
              handwritten note included, simply mention it in your WhatsApp message.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Velvet gift pouch", "Protective outer packaging", "Crystal care card", "Handwritten note (on request)"].map((f) => (
                <span key={f}
                  className="font-sans text-xs text-ivory/60 border border-white/15 rounded-full px-4 py-1.5">
                  {f}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Notes */}
      <section className="bg-ivory section-padding-sm border-t border-brown/8">
        <div className="container-luxury max-w-xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif font-light text-brown mb-5"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
              Important Notes
            </h2>
            <div className="space-y-4">
              {[
                "Delivery times are estimates and may vary due to customs processing, public holidays, or carrier delays.",
                "All orders are confirmed and coordinated personally via WhatsApp before dispatch.",
                "We will notify you with tracking information as soon as your order is shipped.",
                "Customs duties and import taxes (if applicable) are the responsibility of the recipient.",
              ].map((note, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-serif text-brown/30 text-sm flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-sm text-brown/60 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-ivory-dark border-t border-brown/10 py-10">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <p className="font-sans text-sm text-brown/55 mb-5">
              Questions about your order or delivery?
            </p>
            <a
              href={buildWhatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-3.5 px-7 rounded-xl shadow-whatsapp hover:opacity-90 transition-opacity duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              Ask on WhatsApp
            </a>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Link href="/returns" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200">
                Returns Policy &rarr;
              </Link>
              <span className="text-brown/20">|</span>
              <Link href="/faq" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200">
                FAQ &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
