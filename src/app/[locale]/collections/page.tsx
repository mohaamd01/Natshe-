import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/collections";
import PageHeader from "@/components/layout/PageHeader";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("collectionsTitle") };
}

export default async function CollectionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "collections" });

  return (
    <>
      <PageHeader
        label="Curated"
        title="Collections"
        subtitle="Each collection is built around a single stone, a single energy, and a single intention."
        bg="ivory"
      />

      <section className="bg-ivory pt-2 pb-4">
        <div className="container-luxury max-w-xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans text-sm text-brown/55 leading-relaxed">
              We do not just sell jewelry. We tell stories. Every Aura Stor collection begins with a stone — its history, its energy, its meaning across cultures.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <StaggerReveal stagger={100}>
              {collections.map((collection) => (
                <Link
                  key={collection.slug}
                  href={`/collections/${collection.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-shadow duration-500 block"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={collection.heroImage}
                    alt={`${collection.name} crystal jewelry collection`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/80 mb-2">{collection.stoneName}</p>
                    <h2 className="font-serif font-light text-ivory leading-tight mb-2" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                      {collection.name} {t("label")}
                    </h2>
                    <p className="font-serif italic text-ivory/60 text-sm font-light mb-4 line-clamp-2">&ldquo;{collection.tagline}&rdquo;</p>
                    <div className="inline-flex items-center gap-2 self-start bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300">
                      <span className="font-sans text-xs text-ivory font-medium">Explore Collection</span>
                      <span className="text-ivory/60 text-xs group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory-dark border-t border-brown/10 py-12">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/crystal-guide" className="inline-flex items-center gap-2 bg-brown text-ivory font-sans font-medium text-sm py-3 px-7 rounded-xl hover:bg-sage transition-colors duration-300">
                Read the Crystal Guide
              </Link>
              <Link href="/shop" className="inline-flex items-center gap-2 border border-brown/25 text-brown font-sans font-medium text-sm py-3 px-7 rounded-xl hover:border-sage hover:text-sage transition-colors duration-200">
                Browse All Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
