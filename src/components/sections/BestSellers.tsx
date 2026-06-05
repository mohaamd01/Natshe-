import Link from "next/link";
import Image from "next/image";
import { getBestSellers } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import type { Product } from "@/types/product";

export default function BestSellers() {
  const products = getBestSellers(6);

  return (
    <section className="section-padding bg-ivory-dark" aria-labelledby="bestsellers-heading">
      <div className="container-luxury">
        <ScrollReveal>
          <SectionTitle
            id="bestsellers-heading"
            label="Most Loved"
            title="Best Sellers"
            subtitle="The pieces our customers reach for again and again."
            align="center"
            withDivider
          />
        </ScrollReveal>

        {/* Product grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <StaggerReveal stagger={80}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </StaggerReveal>
        </div>

        {/* CTA row */}
        <ScrollReveal delay={200} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 bg-sage text-ivory text-sm font-sans font-medium tracking-wide rounded-full hover:bg-sage-dark transition-colors duration-300"
          >
            View All Products
          </Link>
          <a
            href={buildWhatsAppUrl("Hello! I'd like to order from Aura Stor. Can you help me choose the right piece?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans text-brown/70 hover:text-sage transition-colors duration-200"
          >
            <WhatsAppIcon className="w-4 h-4 text-whatsapp" />
            Get help choosing via WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const heroImage = product.images[0];
  const waMessage = `Hello! I'm interested in the "${product.name}" from Aura Stor. Is it available?`;

  return (
    <article className="group flex flex-col">
      {/*
       * Image container — plain div, NOT a Link.
       * The product-page link is a stretched absolute <Link> inside (z-10).
       * The WhatsApp <a> is a sibling of that Link (z-20), never nested inside it.
       * This avoids the <a>-inside-<a> hydration error.
       */}
      <div
        className="relative overflow-hidden rounded-xl bg-ivory"
        style={{ aspectRatio: "4/5" }}
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Stretched link — covers the image, below the WhatsApp overlay */}
        <Link
          href={`/shop/${product.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${product.name}`}
        />

        {/* Badges — pointer-events-none so they don't block the link */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none z-20">
          {product.isBestSeller && (
            <span className="bg-gold text-brown text-[10px] font-sans font-semibold tracking-wide px-2.5 py-1 rounded-full">
              Best Seller
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-sage text-ivory text-[10px] font-sans font-semibold tracking-wide px-2.5 py-1 rounded-full">
              New
            </span>
          )}
        </div>

        {/* Quick order overlay — z-20, sibling of the Link, never nested inside it */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-luxury p-3 z-20">
          <a
            href={buildWhatsAppUrl(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white text-xs font-sans font-semibold py-2.5 rounded-lg shadow-whatsapp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Order via WhatsApp
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1 flex-1">
        <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-stone">
          {product.stoneName}
        </p>
        <Link href={`/shop/${product.slug}`} className="hover:text-sage transition-colors duration-200">
          <h3 className="font-serif text-base md:text-lg text-brown font-light leading-snug">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-xs text-brown/50 leading-snug line-clamp-2 mt-0.5">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-serif text-lg text-sage font-medium">
            {formatPrice(product.price)}
          </span>
          <Link
            href={`/shop/${product.slug}`}
            className="font-sans text-xs text-brown/50 hover:text-sage transition-colors duration-200"
          >
            View &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
