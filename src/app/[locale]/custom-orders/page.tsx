import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("customOrdersTitle") };
}

const STEPS = [
  {
    number: "01",
    title: "Tell Us Your Vision",
    body: "Send us a WhatsApp message describing what you have in mind — which stone or energy you are drawn to, the type of piece (bracelet, ring, necklace, set), and who it is for.",
  },
  {
    number: "02",
    title: "We Design Together",
    body: "Our team will share options, answer questions, and help you refine your vision. We can suggest stone combinations, discuss energies, and ensure the final piece aligns with your intention.",
  },
  {
    number: "03",
    title: "Crafted & Delivered",
    body: "Once confirmed, your custom piece is handcrafted and packaged in our signature velvet gift pouch with a crystal meaning card. Delivery to Saudi Arabia, UAE, and Qatar.",
  },
];

const CUSTOM_IDEAS = [
  "A specific stone combination not in our current collection",
  "A matching set for you and a loved one",
  "A gift set curated for a specific intention (calm, courage, love)",
  "A ring in a stone we have not yet listed",
  "A larger beaded bracelet for a different wrist size",
  "An anniversary, birthday, or Eid gift, thoughtfully chosen",
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CustomOrdersPage() {
  const waMessage = "Hello! I'm interested in a custom crystal piece from Aura Stor. I'd love to discuss what's possible.";

  return (
    <>
      <PageHeader label="Bespoke" title="Custom Orders" subtitle="Every piece we make is personal. A custom order is just even more so." bg="ivory" />

      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury max-w-xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans text-sm text-brown/60 leading-loose">
              Our standard collection is thoughtfully curated, but we know that the perfect piece is sometimes one that does not exist yet.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brown section-padding">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif font-light text-ivory" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                How Custom Orders Work
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <StaggerReveal stagger={100}>
              {STEPS.map((step) => (
                <div key={step.number} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                  <p className="font-serif text-4xl text-gold/25 font-light mb-4 leading-none">{step.number}</p>
                  <h3 className="font-serif font-light text-ivory mb-3" style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-ivory/50 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury max-w-xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif font-light text-brown mb-6" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
              What We Can Create For You
            </h2>
            <div className="space-y-3">
              {CUSTOM_IDEAS.map((idea) => (
                <div key={idea} className="flex items-start gap-3">
                  <span className="text-gold text-xs mt-1 flex-shrink-0">✦</span>
                  <p className="font-sans text-sm text-brown/65 leading-relaxed">{idea}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-ivory-dark border-t border-brown/10 section-padding-sm">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <a
              href={buildWhatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-4 px-8 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              Message Us on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>

      <div className="bg-ivory border-t border-brown/8 py-8">
        <div className="container-luxury flex flex-wrap items-center justify-center gap-4">
          <Link href="/crystal-guide" className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200">Crystal Guide</Link>
          <span className="text-brown/20">|</span>
          <Link href="/shop" className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200">Browse All Products</Link>
          <span className="text-brown/20">|</span>
          <Link href="/gift-sets" className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200">Gift Sets</Link>
        </div>
      </div>
    </>
  );
}
