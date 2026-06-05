import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";
import { CONTACT, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aura Stor via WhatsApp. We are available daily from 9 AM to 10 PM (GMT+3) and typically respond within a few hours.",
};

const TOPICS = [
  { label: "Place an Order", message: "Hello! I'd like to place an order for an Aura Stor product. Can you help me?" },
  { label: "Custom Request", message: "Hello! I'd like to create a custom crystal piece from Aura Stor. How does that work?" },
  { label: "Gift Consultation", message: "Hello! I'm looking for a gift from Aura Stor. Can you help me choose the right crystal piece?" },
  { label: "Shipping Question", message: "Hello! I have a question about shipping and delivery for my Aura Stor order." },
  { label: "Return or Exchange", message: "Hello! I have a question about returning or exchanging an Aura Stor order." },
  { label: "General Enquiry", message: "Hello! I have a question about Aura Stor." },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Reach Out"
        title="Contact Us"
        subtitle="We are a WhatsApp-first brand. Every message is answered by a real person."
        bg="ivory"
      />

      {/* Primary WhatsApp CTA */}
      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury max-w-lg mx-auto text-center">
          <ScrollReveal>
            <div className="bg-whatsapp/8 border border-whatsapp/20 rounded-2xl p-8 md:p-10">
              <div className="w-14 h-14 bg-whatsapp rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-whatsapp">
                <WhatsAppIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-serif font-light text-brown mb-2"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}>
                WhatsApp — Our Primary Channel
              </h2>
              <p className="font-sans text-sm text-brown/55 leading-relaxed mb-6">
                All orders, enquiries, and custom requests are handled personally
                via WhatsApp. Tap below to open a chat with our team.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-4 px-8 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-95 transition-all duration-200 w-full justify-center"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                Open WhatsApp Chat
              </a>
              <p className="font-sans text-xs text-brown/40 mt-3">
                {CONTACT.businessDays} &bull; {CONTACT.businessHours}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick topics */}
      <section className="bg-ivory-dark section-padding-sm border-t border-brown/8">
        <div className="container-luxury max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-brown/35 mb-3 text-center">
              Quick Links
            </p>
            <h2 className="font-serif font-light text-brown text-center mb-8"
              style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)" }}>
              What Can We Help With?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TOPICS.map((topic) => (
              <a
                key={topic.label}
                href={buildWhatsAppUrl(topic.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-brown/15 rounded-xl px-4 py-3.5 hover:border-whatsapp/40 hover:bg-whatsapp/5 transition-all duration-200 group"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-whatsapp flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="font-sans text-xs text-brown/70 font-medium leading-snug group-hover:text-brown transition-colors duration-200">
                  {topic.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Business details */}
      <section className="bg-ivory section-padding-sm border-t border-brown/8">
        <div className="container-luxury max-w-lg mx-auto">
          <ScrollReveal>
            <div className="space-y-4">
              {[
                { label: "Availability", value: `${CONTACT.businessDays}, ${CONTACT.businessHours}` },
                { label: "Response Time", value: CONTACT.responseTime },
                { label: "Shipping Regions", value: "Saudi Arabia, UAE, Qatar, Turkey" },
                { label: "Languages", value: "Arabic & English" },
                { label: "Instagram", value: SOCIAL.instagramHandle, href: SOCIAL.instagram },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex items-start justify-between gap-4 py-3 border-b border-brown/8 last:border-0">
                  <span className="font-sans text-xs tracking-wide uppercase text-brown/35 flex-shrink-0 mt-0.5">
                    {label}
                  </span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="font-sans text-sm text-sage font-medium text-right hover:text-sage-dark transition-colors duration-200">
                      {value}
                    </a>
                  ) : (
                    <span className="font-sans text-sm text-brown font-medium text-right">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ link */}
      <section className="bg-ivory-dark border-t border-brown/10 py-8">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <p className="font-sans text-sm text-brown/50 mb-3">
              Looking for quick answers?
            </p>
            <Link
              href="/faq"
              className="font-sans text-sm text-sage font-medium hover:text-sage-dark transition-colors duration-200"
            >
              Read our FAQ &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
