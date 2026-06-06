import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default async function HowItWorks() {
  const t = await getTranslations("howItWorks");

  const STEPS = [
    {
      number: t("step1.number"),
      title: t("step1.title"),
      description: t("step1.description"),
      cta: { label: t("step1.cta"), href: "/collections" },
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" aria-hidden="true">
          <circle cx="18" cy="18" r="9" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <path d="M25 25L33 33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: t("step2.number"),
      title: t("step2.title"),
      description: t("step2.description"),
      cta: { label: t("step2.cta"), href: getWhatsAppUrl() },
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" aria-hidden="true">
          <path
            d="M6 10C6 8.9 6.9 8 8 8H32C33.1 8 34 8.9 34 10V26C34 27.1 33.1 28 32 28H22L14 36V28H8C6.9 28 6 27.1 6 26V10Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
            fill="currentColor" fillOpacity="0.1"
          />
        </svg>
      ),
    },
    {
      number: t("step3.number"),
      title: t("step3.title"),
      description: t("step3.description"),
      cta: { label: t("step3.cta"), href: "/shop" },
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" aria-hidden="true">
          <rect x="6" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <path d="M13 14V10C13 7.8 14.8 6 17 6H23C25.2 6 27 7.8 27 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 23L19 27L27 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="section-padding bg-brown overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-luxury">
        <ScrollReveal>
          <SectionTitle
            id="how-it-works-heading"
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            withDivider
            titleClassName="text-ivory"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-0">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} direction="up" delay={i * 120}>
              <div className="relative flex flex-col items-center text-center px-4 md:px-8 pb-12 md:pb-0">

                {/* Connector line between steps (desktop) */}
                {i < STEPS.length - 1 && (
                  <span
                    className="hidden md:block absolute top-10 left-[calc(50%+48px)] right-0 h-px bg-gradient-to-r from-gold/40 to-transparent"
                    aria-hidden="true"
                  />
                )}

                {/* Connector line between steps (mobile) */}
                {i < STEPS.length - 1 && (
                  <span
                    className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
                    aria-hidden="true"
                  />
                )}

                {/* Step number circle */}
                <div className="relative mb-5 flex items-center justify-center w-20 h-20 rounded-full border border-gold/25 bg-brown-dark/50">
                  <span className="font-label text-[11px] tracking-[0.25em] text-gold/70 absolute -top-3 bg-brown px-1.5">
                    {step.number}
                  </span>
                  <span className="text-gold/80">{step.icon}</span>
                </div>

                <h3 className="font-serif font-light text-ivory text-xl md:text-2xl mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-ivory/50 leading-loose max-w-xs mb-5">
                  {step.description}
                </p>

                <Link
                  href={step.cta.href}
                  target={step.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={step.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-medium tracking-wide text-gold/70 hover:text-gold transition-colors duration-200 group"
                >
                  {step.cta.label}
                  <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
