import Link from "next/link";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import ProductCard from "@/components/shop/ProductCard";
import type { Product } from "@/types/product";

interface RelatedProductsProps {
  products: Product[];
  title?: string;
}

export default function RelatedProducts({
  products,
  title = "You May Also Love",
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="section-padding bg-ivory-dark border-t border-brown/10">
      <div className="container-luxury">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sage mb-1">
                Related
              </p>
              <h2 className="font-serif font-light text-brown"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
              >
                {title}
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-1.5 font-sans text-sm text-brown/50 hover:text-sage transition-colors duration-200"
            >
              View all <span>&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <StaggerReveal stagger={70}>
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
