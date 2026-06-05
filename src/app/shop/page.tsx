import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import PageHeader from "@/components/layout/PageHeader";
import ProductGrid from "@/components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Shop Crystal Jewelry",
  description:
    "Browse our full collection of natural crystal jewelry — Tiger's Eye, Howlite, Jade, Aventurine, and Moonstone. Bracelets, rings, necklaces and matching sets. Order via WhatsApp.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        label="The Collection"
        title="All Products"
        subtitle="Handcrafted from 100% natural gemstones. Every piece is one-of-a-kind."
      />

      <div className="bg-ivory section-padding">
        <div className="container-luxury">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-4 py-1.5 rounded-full bg-brown text-ivory font-sans text-xs font-medium tracking-wide">
              All
            </span>
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className="px-4 py-1.5 rounded-full border border-brown/20 text-brown/60 font-sans text-xs font-medium tracking-wide hover:border-sage hover:text-sage transition-colors duration-200"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Product count */}
          <p className="font-sans text-xs text-brown/40 mb-6">
            {products.length} products
          </p>

          <ProductGrid products={products} cols={3} />
        </div>
      </div>

      {/* Bottom assurance strip */}
      <div className="bg-ivory-dark border-t border-brown/10 py-6">
        <div className="container-luxury">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              "100% Natural Gemstones",
              "Velvet Gift Packaging",
              "WhatsApp Support",
              "Free Shipping Over $50",
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
