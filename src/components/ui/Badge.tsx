import { cn } from "@/lib/utils";

type BadgeVariant = "stone" | "new" | "bestseller" | "featured" | "sale";

const variantStyles: Record<BadgeVariant, string> = {
  stone: "bg-gold/10 text-gold-dark border border-gold/30 font-label",
  new: "bg-sage/10 text-sage-dark border border-sage/30 font-label",
  bestseller: "bg-brown/8 text-brown border border-brown/20 font-label",
  featured: "bg-ivory-dark text-brown-mid border border-stone font-label",
  sale: "bg-error/10 text-error border border-error/30 font-label",
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "stone", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[10px] tracking-luxury uppercase rounded-sm",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

/** Stone name badge — gold pill above product names */
export function StoneBadge({
  stoneName,
  className,
}: {
  stoneName: string;
  className?: string;
}) {
  return (
    <Badge variant="stone" className={className}>
      {stoneName}
    </Badge>
  );
}

/** "Best Seller" badge */
export function BestSellerBadge({ className }: { className?: string }) {
  return (
    <Badge variant="bestseller" className={className}>
      Best Seller
    </Badge>
  );
}

/** "New" badge */
export function NewBadge({ className }: { className?: string }) {
  return (
    <Badge variant="new" className={className}>
      New Arrival
    </Badge>
  );
}
