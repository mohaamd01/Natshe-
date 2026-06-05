import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/constants";

const CTA_MESSAGE =
  "Hello! I'd like to place an order with Aura Stor. Can you help me find the right piece?";

const STEPS = [
  {
    number: "01",
    title: "Browse & Choose",
    description: "Explore our collection and find the stone that speaks to you.",
  },
  {
    number: "02",
    title: "Message Us",
    description: "Tap any WhatsApp button and tell us which piece you love.",
  },
  {
    number: "03",
    title: "We Confirm & Ship",
    description: "We confirm availability and ship your order in beautiful packaging.",
  },
];

export default function WhatsAppCTA() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#3A5240" }}
      aria-labelledby="whatsapp-cta-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C9A050 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C9A050 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">
            How to Order
          </p>
          <h2
            id="whatsapp-cta-heading"
            className="font-serif font-light text-ivory leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Order Directly via WhatsApp.
            <br />
            <em className="text-gold/80">Personally. Instantly.</em>
          </h2>
          <p className="font-sans text-sm text-ivory/60 mt-4 max-w-md mx-auto leading-relaxed">
            No checkout forms. No accounts. Just a conversation with our team —
            and your piece, beautifully packed and on its way.
          </p>
        </ScrollReveal>

        {/* 3-step process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                {/* Number */}
                <span className="font-serif text-5xl font-light text-gold/30 leading-none mb-4">
                  {step.number}
                </span>
                {/* Connector line on desktop */}
                <div className="hidden md:block absolute right-0 top-8 w-full h-px bg-gold/20" />
                <h3 className="font-sans text-sm font-semibold tracking-wide text-ivory mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-ivory/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Main CTA */}
        <ScrollReveal className="flex flex-col items-center gap-4">
          <a
            href={buildWhatsAppUrl(CTA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-white font-sans font-semibold text-base px-10 py-4 rounded-full shadow-whatsapp hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Order via WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Start Your Order on WhatsApp
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-ivory/40 text-xs font-sans">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-whatsapp animate-pulse" aria-hidden="true" />
              Available {CONTACT.businessDays}
            </span>
            <span className="hidden sm:block opacity-50">&middot;</span>
            <span>{CONTACT.businessHours}</span>
            <span className="hidden sm:block opacity-50">&middot;</span>
            <span>Response: {CONTACT.responseTime}</span>
          </div>
        </ScrollReveal>

        {/* Shipping assurance */}
        <ScrollReveal delay={150} className="mt-12 pt-12 border-t border-ivory/10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              "Free shipping on orders above $50",
              "Ships to Saudi Arabia, UAE & Qatar",
              "Velvet gift packaging included",
              "14-day return policy",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-ivory/50">
                <CheckIcon className="w-3.5 h-3.5 text-gold/70 flex-shrink-0" />
                <span className="font-sans text-xs">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
