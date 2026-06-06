import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { products } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import PageHeader from "@/components/layout/PageHeader";
import ProductGrid from "@/components/shop/ProductGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("shopTitle") };
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "shop" });

  return (
    <>
      <PageHeader
        label={t("pageLabel")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />

      <div className="bg-ivory section-padding">
        <div className="container-luxury">
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-4 py-1.5 rounded-full bg-brown text-ivory font-sans text-xs font-medium tracking-wide">
              {t("all")}
            </span>
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className="px-4 py-1.5 rounded-full border border-brown/20 text-brown/60 font-sans text-xs font-medium tracking-wide hover:border-sage hover:text-sage transition-colors duration-200"
              >
                {t(`categoryLabels.${cat.slug}` as Parameters<typeof t>[0])}
              </Link>
            ))}
          </div>

          <p className="font-sans text-xs text-brown/40 mb-6">
            {products.length} {t("productsCount", { count: products.length })}
          </p>

          <ProductGrid products={products} cols={3} />
        </div>
      </div>

      <div className="bg-ivory-dark border-t border-brown/10 py-6">
        <div className="container-luxury">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              t("assurance1"),
              t("assurance2"),
              t("assurance3"),
              t("assurance4"),
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-gold text-xs">✦</span>
                <span className="font-sans text-xs text-brown/55 tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
