import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { products, getProductBySlug, getProductsByCategory, getRelatedProducts } from "@/data/products";
import { getCrystalByType } from "@/data/crystals";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import PageHeader from "@/components/layout/PageHeader";
import ProductGrid from "@/components/shop/ProductGrid";
import ProductGallery from "@/components/shop/ProductGallery";
import ProductProperties from "@/components/shop/ProductProperties";
import ProductCareAccordion from "@/components/shop/ProductCareAccordion";
import RelatedProducts from "@/components/shop/RelatedProducts";
import StickyMobileWhatsAppBar from "@/components/shop/StickyMobileWhatsAppBar";
import ComingSoon from "@/components/shop/ComingSoon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getTranslations, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  const categorySlugs = PRODUCT_CATEGORIES.map((c) => ({ locale: "en", slug: c.slug }));
  const productSlugsEn = products.map((p) => ({ locale: "en", slug: p.slug }));
  const categorySlugsTr = PRODUCT_CATEGORIES.map((c) => ({ locale: "tr", slug: c.slug }));
  const productSlugsTr = products.map((p) => ({ locale: "tr", slug: p.slug }));
  return [...categorySlugs, ...productSlugsEn, ...categorySlugsTr, ...productSlugsTr];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  if (category) {
    return {
      title: category.label,
      description: `${category.description}. Shop natural crystal ${category.label.toLowerCase()} at Aura Stor.`,
    };
  }

  const product = getProductBySlug(slug);
  if (product) {
    return {
      title: product.name,
      description: product.shortDescription,
    };
  }

  return { title: "Not Found" };
}

export default async function ShopSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "shop" });
  const tProduct = await getTranslations({ locale, namespace: "product" });

  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  if (category) {
    const translatedLabel = t(`categoryLabels.${category.slug}` as Parameters<typeof t>[0]);
    return (
      <CategoryPage
        categorySlug={slug}
        categoryLabel={translatedLabel}
        categoryDescription={category.description}
        t={t}
      />
    );
  }

  const product = getProductBySlug(slug);
  if (product) {
    const waMessage = tProduct("waMessage", { product: product.name, price: formatPrice(product.price) });
    return <ProductDetailPage slug={slug} t={t} waMessage={waMessage} />;
  }

  notFound();
}

const COMING_SOON_CATEGORIES = new Set(["gift-sets", "crystal-bracelets"]);

const COMING_SOON_TAGLINES: Record<string, string> = {
  "gift-sets": "Beautifully curated sets, wrapped in love.",
  "crystal-bracelets": "Natural stone beaded bracelets for daily wear.",
};

type TFunction = Awaited<ReturnType<typeof getTranslations<"shop">>>;

function CategoryPage({
  categorySlug,
  categoryLabel,
  categoryDescription,
  t,
}: {
  categorySlug: string;
  categoryLabel: string;
  categoryDescription: string;
  t: TFunction;
}) {
  if (COMING_SOON_CATEGORIES.has(categorySlug)) {
    return (
      <ComingSoon
        categoryLabel={categoryLabel}
        tagline={COMING_SOON_TAGLINES[categorySlug]}
      />
    );
  }

  const categoryProducts = getProductsByCategory(categorySlug);

  return (
    <>
      <PageHeader label={t("breadcrumbShop")} title={categoryLabel} subtitle={categoryDescription} />

      <div className="bg-ivory section-padding">
        <div className="container-luxury">
          <div className="flex flex-wrap gap-2 mb-10">
            <Link href="/shop" className="px-4 py-1.5 rounded-full border border-brown/20 text-brown/60 font-sans text-xs font-medium tracking-wide hover:border-sage hover:text-sage transition-colors duration-200">
              {t("all")}
            </Link>
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className={`px-4 py-1.5 rounded-full font-sans text-xs font-medium tracking-wide transition-colors duration-200 ${
                  cat.slug === categorySlug
                    ? "bg-brown text-ivory border border-brown"
                    : "border border-brown/20 text-brown/60 hover:border-sage hover:text-sage"
                }`}
              >
                {t(`categoryLabels.${cat.slug}` as Parameters<typeof t>[0])}
              </Link>
            ))}
          </div>

          <p className="font-sans text-xs text-brown/40 mb-6">
            {categoryProducts.length} {t("productsCount", { count: categoryProducts.length })}
          </p>

          <ProductGrid products={categoryProducts} cols={3} emptyMessage={t("empty")} />
        </div>
      </div>
    </>
  );
}

function ProductDetailPage({ slug, t, waMessage }: { slug: string; t: TFunction; waMessage: string }) {
  const product = getProductBySlug(slug)!;
  const related = getRelatedProducts(product.relatedProductIds ?? []);
  const categoryLabel = PRODUCT_CATEGORIES.find((c) => c.slug === product.category)?.label ?? "Shop";
  const crystal = getCrystalByType(product.stone);

  function WhatsAppIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `https://aurastor.com${img.src}`),
    brand: { "@type": "Brand", name: "Aura Stor" },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://aurastor.com/shop/${product.slug}`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StickyMobileWhatsAppBar productName={product.name} price={product.price} />
      <div className="pt-[120px] lg:pt-[100px] bg-ivory" />

      <div className="bg-ivory border-b border-brown/10">
        <div className="container-luxury py-3">
          <nav className="flex items-center gap-1.5 font-sans text-xs text-brown/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sage transition-colors duration-200">{t("breadcrumbHome")}</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-sage transition-colors duration-200">{t("breadcrumbShop")}</Link>
            <span>/</span>
            <Link href={`/shop/${product.category}`} className="hover:text-sage transition-colors duration-200">{categoryLabel}</Link>
            <span>/</span>
            <span className="text-brown/70 truncate max-w-[160px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-ivory pb-12 md:pb-20">
        <div className="container-luxury pt-8 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <ScrollReveal direction="left" threshold={0}>
              <ProductGallery images={product.images} productName={product.name} />
            </ScrollReveal>

            <ScrollReveal direction="right" threshold={0} className="flex flex-col gap-6">
              <div className="flex gap-2">
                {product.isBestSeller && (
                  <span className="bg-gold/20 text-brown text-[10px] font-sans font-semibold tracking-wide px-3 py-1 rounded-full border border-gold/30">
                    {t("bestSeller")}
                  </span>
                )}
                {product.isNewArrival && (
                  <span className="bg-sage/15 text-sage text-[10px] font-sans font-semibold tracking-wide px-3 py-1 rounded-full border border-sage/30">
                    {t("newArrival")}
                  </span>
                )}
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sage mb-2">{product.stoneName}</p>
                <h1 className="font-serif font-light text-brown leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                  {product.name}
                </h1>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl text-sage font-medium">{formatPrice(product.price)}</span>
                <span className="font-sans text-xs text-brown/40 tracking-wide">{t("freeShipping")}</span>
              </div>

              <p className="font-sans text-sm text-brown/65 leading-relaxed border-t border-brown/10 pt-5">{product.shortDescription}</p>
              <p className="font-sans text-sm text-brown/55 leading-relaxed">{product.description}</p>

              <div className="hidden md:flex flex-col gap-3 pt-2">
                <a
                  href={buildWhatsAppUrl(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-whatsapp text-white font-sans font-semibold text-base py-4 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-[0.99] transition-all duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {t("orderWhatsApp")}
                </a>
                <p className="text-center font-sans text-xs text-brown/40">
                  {t("replyTime")} &bull; {t("businessHours")}
                </p>
              </div>

              <div className="border-t border-brown/10 pt-6">
                <ProductProperties properties={product.properties} includes={product.includes} stoneName={product.stoneName} />
              </div>

              <ProductCareAccordion careInstructions={product.careInstructions} />

              {crystal && (
                <Link
                  href={`/crystal-guide/${crystal.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-gold/25 bg-gold/5 px-5 py-3.5 hover:border-gold/50 hover:bg-gold/10 transition-all duration-200 group"
                >
                  <span className="text-gold text-base leading-none">✦</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/40 mb-0.5">{t("crystalGuideLabel")}</p>
                    <p className="font-sans text-sm text-brown font-medium truncate">{t("crystalGuideLink", { crystal: crystal.name })}</p>
                  </div>
                  <span className="text-brown/30 group-hover:text-sage text-sm transition-colors duration-200">&rarr;</span>
                </Link>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <RelatedProducts products={related} />
      <div className="h-20 md:h-0 bg-ivory-dark" />
    </>
  );
}
