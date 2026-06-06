import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getRelatedProducts } from "@/data/products";
import { getCrystalByType } from "@/data/crystals";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import ProductGrid from "@/components/shop/ProductGrid";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["en", "tr"]) {
    for (const c of collections) {
      params.push({ locale, slug: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Not Found" };

  return {
    title: `${collection.name} Collection | Natural Crystal Jewelry`,
    description: `${collection.description} Shop the ${collection.name} collection at Aura Stor.`,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const collectionProducts = getRelatedProducts(collection.productIds);
  const crystal = getCrystalByType(collection.stone);
  const otherCollections = collections.filter((c) => c.slug !== slug).slice(0, 3);

  const waMessage = `Hello! I'm interested in the ${collection.name} collection at Aura Stor. Can you tell me more about the pieces?`;

  function WhatsAppIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }

  return (
    <>
      <div className="relative w-full pt-[120px] lg:pt-[100px]" style={{ minHeight: "55vh" }}>
        <div className="absolute inset-0">
          <Image src={collection.heroImage} alt={`${collection.name} crystal jewelry collection`} fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/70 via-brown/50 to-brown/80" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 md:py-20 min-h-[55vh]">
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-gold/80 mb-4">{collection.stoneName} Collection</p>
          <h1 className="font-serif font-light text-ivory leading-tight mb-4" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}>{collection.name}</h1>
          <p className="font-serif italic text-ivory/60 text-xl font-light mb-8 max-w-lg">&ldquo;{collection.tagline}&rdquo;</p>
          <a
            href={buildWhatsAppUrl(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-sans font-semibold text-sm py-3.5 px-7 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
            Enquire via WhatsApp
          </a>
        </div>
      </div>

      <div className="bg-ivory-dark border-b border-brown/10">
        <div className="container-luxury py-3">
          <nav className="flex items-center gap-1.5 font-sans text-xs text-brown/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sage transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-sage transition-colors duration-200">Collections</Link>
            <span>/</span>
            <span className="text-brown/70">{collection.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-ivory section-padding-sm">
        <div className="container-luxury max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sage mb-4">About This Collection</p>
            <p className="font-sans text-sm text-brown/65 leading-loose">{collection.description}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-ivory section-padding border-t border-brown/8">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-brown/35 mb-2">The Pieces</p>
                <h2 className="font-serif font-light text-brown" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>Shop the Collection</h2>
              </div>
              <Link href="/shop" className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200 hidden sm:block">
                View all products &rarr;
              </Link>
            </div>
          </ScrollReveal>
          <ProductGrid products={collectionProducts} cols={collectionProducts.length > 2 ? 3 : 2} emptyMessage="No products in this collection yet. Check back soon." />
        </div>
      </section>

      {crystal && (
        <section className="bg-brown section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-float" style={{ aspectRatio: "4/3" }}>
                  <Image src={crystal.thumbnail} alt={`${crystal.name} crystal`} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="flex flex-col gap-5">
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold/70">The Stone</p>
                <h2 className="font-serif font-light text-ivory leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>{crystal.name}</h2>
                <p className="font-sans text-sm text-ivory/50 leading-relaxed">{crystal.summary}</p>
                <Link href={`/crystal-guide/${crystal.slug}`} className="inline-flex items-center gap-2 self-start font-sans text-sm text-gold hover:text-gold-light transition-colors duration-200 font-medium">
                  Read the Full {crystal.name} Guide <span>&rarr;</span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {otherCollections.length > 0 && (
        <section className="bg-ivory section-padding-sm border-t border-brown/10">
          <div className="container-luxury">
            <ScrollReveal>
              <h2 className="font-serif font-light text-brown text-center mb-10" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>Other Collections</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StaggerReveal stagger={80}>
                {otherCollections.map((other) => (
                  <Link key={other.slug} href={`/collections/${other.slug}`} className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-shadow duration-400 block" style={{ aspectRatio: "3/2" }}>
                    <Image src={other.heroImage} alt={`${other.name} collection`} fill className="object-cover object-center transition-transform duration-600 ease-luxury group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/70 mb-1">{other.stoneName}</p>
                      <p className="font-serif font-light text-ivory text-base">{other.name}</p>
                    </div>
                  </Link>
                ))}
              </StaggerReveal>
            </div>
            <div className="text-center mt-8">
              <Link href="/collections" className="font-sans text-xs text-brown/35 hover:text-sage transition-colors duration-200 tracking-wide">
                View all collections &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
