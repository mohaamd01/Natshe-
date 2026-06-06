import { getTranslations } from "next-intl/server";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

export default async function TrustSection() {
  const t = await getTranslations("trust");

  const TRUST_ITEMS = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" aria-hidden="true">
          <path
            d="M20 4L28 8V18C28 23.5 24.5 28.4 20 30C15.5 28.4 12 23.5 12 18V8L20 4Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
            fill="currentColor" fillOpacity="0.1"
          />
          <path d="M16 19L19 22L25 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      stat: t("item1.stat"),
      title: t("item1.title"),
      description: t("item1.description"),
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" aria-hidden="true">
          <rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <path d="M6 14H34" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 20H20M12 25H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      stat: t("item2.stat"),
      title: t("item2.title"),
      description: t("item2.description"),
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" aria-hidden="true">
          <path
            d="M6 16L20 8L34 16V30L20 38L6 30V16Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
            fill="currentColor" fillOpacity="0.1"
          />
          <path d="M20 8V38M6 16L34 16" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      ),
      stat: t("item3.stat"),
      title: t("item3.title"),
      description: t("item3.description"),
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" aria-hidden="true">
          <circle cx="20" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <path d="M8 34C8 28.477 13.373 24 20 24C26.627 24 32 28.477 32 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      stat: t("item4.stat"),
      title: t("item4.title"),
      description: t("item4.description"),
    },
  ];

  return (
    <section
      className="section-padding bg-ivory overflow-hidden"
      aria-labelledby="trust-heading"
    >
      <div className="container-luxury">
        <ScrollReveal>
          <SectionTitle
            id="trust-heading"
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            withDivider
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <StaggerReveal stagger={100} delay={80}>
            {TRUST_ITEMS.map((item) => (
              <article
                key={item.title}
                className="group flex gap-5 items-start rounded-2xl border border-brown/8 bg-ivory-dark hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-300 p-6 md:p-7"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 text-gold border border-gold/15 group-hover:border-gold/30 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <span className="font-label text-[10px] tracking-[0.22em] uppercase text-gold bg-gold/10 rounded-full px-2.5 py-0.5">
                      {item.stat}
                    </span>
                    <h3 className="font-serif font-light text-brown text-lg leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brown/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </StaggerReveal>
        </div>

        <ScrollReveal delay={200} className="mt-14 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-gold/60 text-sm">✦</span>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-brown/35">
              {t("ornament")}
            </p>
            <span className="text-gold/60 text-sm">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
