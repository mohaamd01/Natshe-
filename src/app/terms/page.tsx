import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aura Stor",
  description:
    "Aura Stor Terms & Conditions — the terms that govern use of our website and purchase of our products.",
};

const LAST_UPDATED = "May 2026";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By using the Aura Stor website (aurastor.com) or placing an order with us via WhatsApp, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: "Our Products",
    body: `All products sold by Aura Stor are made with 100% natural gemstones. Because each stone is unique, slight variations in colour, pattern, and size compared to product photographs are natural and expected. These variations do not constitute a defect. Product descriptions, care instructions, and crystal energy information are provided for informational purposes.`,
  },
  {
    title: "Ordering",
    body: `All orders are placed and confirmed via WhatsApp. An order is confirmed only once you receive written confirmation from an Aura Stor team member. We reserve the right to decline any order at our discretion. Prices are shown in USD and are subject to change without notice.`,
  },
  {
    title: "Payment",
    body: `Payment terms will be communicated by our team when your order is confirmed. We currently accept bank transfer and selected mobile payment methods. Full payment is required before dispatch.`,
  },
  {
    title: "Shipping & Delivery",
    body: `We ship to Saudi Arabia, the United Arab Emirates, Qatar, and Turkey. Estimated delivery times are provided in good faith but are not guaranteed. Aura Stor is not liable for delays caused by customs authorities, shipping carriers, or circumstances beyond our control. Please refer to our Shipping & Delivery page for full details.`,
  },
  {
    title: "Returns & Refunds",
    body: `Returns are accepted within 14 days of delivery for items in their original, unworn condition with original packaging. Custom orders are final sale. Damaged items must be reported within 48 hours of delivery. Please refer to our Returns & Exchanges page for full details and the process for initiating a return.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on the Aura Stor website — including text, photographs, brand name, logo, and design — is the property of Aura Stor and protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without express written permission.`,
  },
  {
    title: "Crystal Information Disclaimer",
    body: `The crystal energy descriptions, chakra information, and wellbeing claims on our website and in our Crystal Guide are based on traditional practices and are provided for informational and educational purposes only. They are not intended as medical advice and should not replace professional medical or mental health guidance.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by law, Aura Stor is not liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our total liability for any claim arising from a purchase is limited to the value of the product purchased.`,
  },
  {
    title: "Governing Law",
    body: `These Terms & Conditions are governed by applicable law. Any disputes arising from or related to your use of Aura Stor's services will be handled in good faith and, where possible, resolved through direct communication.`,
  },
  {
    title: "Changes to These Terms",
    body: `We reserve the right to update these Terms & Conditions at any time. Changes will be reflected on this page with an updated revision date. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.`,
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Terms & Conditions"
        subtitle={`Last updated: ${LAST_UPDATED}`}
        bg="ivory"
      />

      <section className="bg-ivory section-padding">
        <div className="container-luxury max-w-2xl mx-auto">

          <p className="font-sans text-sm text-brown/55 leading-loose mb-10 pb-8 border-b border-brown/10">
            These Terms & Conditions govern your use of the {SITE_CONFIG.name} website
            and the purchase of products from us. Please read them carefully.
            By placing an order or using our services, you confirm that you accept
            these terms.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((section, i) => (
              <div key={section.title} className="pb-8 border-b border-brown/8 last:border-0">
                <div className="flex items-start gap-3 mb-3">
                  <span className="font-serif text-gold/40 text-sm font-light flex-shrink-0 mt-0.5 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-sans text-sm font-semibold text-brown tracking-wide">
                    {section.title}
                  </h2>
                </div>
                <p className="font-sans text-sm text-brown/60 leading-loose pl-9">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-brown/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-xs text-brown/35">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <a
              href={buildWhatsAppUrl("Hello! I have a question about Aura Stor's terms and conditions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs text-whatsapp hover:opacity-80 transition-opacity duration-200"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
              Questions? Ask us on WhatsApp
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/privacy" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200">
              Privacy Policy &rarr;
            </Link>
            <Link href="/contact" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200">
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
