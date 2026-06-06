import { getTranslations } from "next-intl/server";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

export default async function WhyAuraStor() {
  const t = await getTranslations("whyAuraStor");

  const PILLARS = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <path
            d="M24 4L28.5 14.5L40 16L31.5 24L34 35.5L24 30L14 35.5L16.5 24L8 16L19.5 14.5L24 4Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
            fill="currentColor" fillOpacity="0.08"
          />
        </svg>
      ),
      title: t("natural.title"),
      description: t("natural.description"),
      accent: "from-gold/20 to-gold/5",
      iconColor: "text-gold",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <path
            d="M8 20L24 8L40 20V40H30V30H18V40H8V20Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
            fill="currentColor" fillOpacity="0.08"
          />
          <path d="M36 12V8H40V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: t("shipping.title"),
      description: t("shipping.description"),
      accent: "from-sage/20 to-sage/5",
      iconColor: "text-sage",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <path
            d="M12 36C12 28 18 22 24 18C30 22 36 28 36 36"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          />
          <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
          <path d="M16 40H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: t("handcrafted.title"),
      description: t("handcrafted.description"),
      accent: "from-brown/10 to-brown/5",
      iconColor: "text-brown/70",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <path
            d="M8 12C8 10.9 8.9 10 10 10H38C39.1 10 40 10.9 40 12V30C40 31.1 39.1 32 38 32H26L18 40V32H10C8.9 32 8 31.1 8 30V12Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
            fill="currentColor" fillOpacity="0.08"
          />
          <path d="M16 20H32M16 25H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: t("support.title"),
      description: t("support.description"),
      accent: "from-[#25D366]/15 to-[#25D366]/5",
      iconColor: "text-[#25D366]",
    },
  ];

  return (
    <section
      className="section-padding bg-ivory-dark"
      aria-labelledby="why-aura-stor-heading"
    >
      <div className="container-luxury">
        <ScrollReveal>
          <SectionTitle
            id="why-aura-stor-heading"
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            withDivider
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <StaggerReveal stagger={90} delay={60}>
            {PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className={`relative flex flex-col gap-5 rounded-2xl border border-brown/8 bg-gradient-to-br ${pillar.accent} p-6 md:p-7 overflow-hidden`}
              >
                <span
                  className="pointer-events-none absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-30 blur-2xl bg-current"
                  aria-hidden="true"
                />
                <div className={`${pillar.iconColor} relative z-10`}>
                  {pillar.icon}
                </div>
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="font-serif font-light text-brown text-xl leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-brown/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
