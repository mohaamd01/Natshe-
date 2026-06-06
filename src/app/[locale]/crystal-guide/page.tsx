import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { crystals } from "@/data/crystals";
import PageHeader from "@/components/layout/PageHeader";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("crystalGuideTitle") };
}

export default async function CrystalGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "crystalGuide" });

  const HOW_TO_CHOOSE = [
    { number: t("howToChoose1Number"), title: t("howToChoose1Title"), body: t("howToChoose1Body") },
    { number: t("howToChoose2Number"), title: t("howToChoose2Title"), body: t("howToChoose2Body") },
    { number: t("howToChoose3Number"), title: t("howToChoose3Title"), body: t("howToChoose3Body") },
  ];

  return (
    <>
      <PageHeader label={t("label")} title={t("title").split("—")[0].trim()} subtitle={t("subtitle")} bg="ivory" />

      <section className="bg-ivory pb-0 pt-12 md:pt-16">
        <div className="container-luxury max-w-2xl text-center mx-auto">
          <ScrollReveal>
            <p className="font-serif italic text-brown/60 text-lg font-light leading-relaxed">
              &ldquo;{t("pageQuote")}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-10 bg-gold/30" />
              <span className="text-gold/60 text-xs">✦</span>
              <div className="h-px w-10 bg-gold/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <StaggerReveal stagger={80}>
              {crystals.map((crystal) => (
                <Link
                  key={crystal.slug}
                  href={`/crystal-guide/${crystal.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-500"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image src={crystal.thumbnail} alt={`${crystal.name} crystal jewelry`} fill className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: `linear-gradient(to top, ${crystal.color}88, transparent)` }} />
                  </div>
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 ring-2 ring-white shadow-sm" style={{ backgroundColor: crystal.color }} aria-hidden="true" />
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/40">{crystal.properties.chakra} {t("chakraLabel")}</p>
                    </div>
                    <h2 className="font-serif font-light text-brown mb-1 leading-tight" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}>{crystal.name}</h2>
                    <p className="font-sans text-[11px] tracking-[0.1em] text-sage uppercase font-medium mb-3">{crystal.subtitle}</p>
                    <p className="font-sans text-sm text-brown/55 leading-relaxed line-clamp-3 flex-1">{crystal.summary}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-brown/8">
                      <span className="font-sans text-xs text-brown/35">{crystal.properties.idealFor.split(",")[0].trim()}</span>
                      <span className="font-sans text-xs text-sage font-medium group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                        {t("label")} <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="bg-brown section-padding">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif font-light text-ivory leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                {t("howToChooseTitle")}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <StaggerReveal stagger={100}>
              {HOW_TO_CHOOSE.map((tip) => (
                <div key={tip.number} className="text-center md:text-left">
                  <p className="font-serif text-4xl text-gold/30 font-light mb-4 leading-none">{tip.number}</p>
                  <h3 className="font-serif font-light text-ivory mb-3" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>{tip.title}</h3>
                  <p className="font-sans text-sm text-ivory/50 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <Link href="/shop" className="inline-flex items-center gap-2 bg-brown text-ivory font-sans font-medium text-sm py-3.5 px-8 rounded-xl hover:bg-sage transition-colors duration-300">
              {t("exploreAllProducts")}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
