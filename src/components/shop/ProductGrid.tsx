import { StaggerReveal } from "@/components/ui/ScrollReveal";
import ProductCard from "@/components/shop/ProductCard";
import type { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  /** Number of columns on desktop. Default 3 */
  cols?: 2 | 3 | 4;
  emptyMessage?: string;
}

const colClass: Record<NonNullable<ProductGridProps["cols"]>, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};

export default function ProductGrid({
  products,
  cols = 3,
  emptyMessage = "No products found.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-serif text-xl text-brown/40 font-light">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`grid ${colClass[cols]} gap-4 md:gap-6`}>
      <StaggerReveal stagger={70}>
        {products.map((product, i) => (
          // First two images are above the fold — mark as priority for LCP
          <ProductCard key={product.id} product={product} priority={i < 2} />
        ))}
      </StaggerReveal>
    </div>
  );
}
