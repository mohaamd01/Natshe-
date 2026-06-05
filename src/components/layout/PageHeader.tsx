/**
 * PageHeader — reusable top-of-page block for internal pages.
 *
 * Handles the top spacing required to clear the fixed PromoBanner + Header:
 *   • PromoBanner  36 px  (h-9)
 *   • Header       48 px  mobile (h-12) + 36 px quick-links (h-9) = 84 px
 *   • Header       64 px  desktop (h-16), no quick-links row
 *   Mobile total  → pt-[120px]   Desktop total → pt-[100px]
 *
 * Usage:
 *   <PageHeader
 *     label="Category"
 *     title="Crystal Rings"
 *     subtitle="Gold claw rings set with genuine gemstones"
 *     bg="ivory"           // "ivory" | "cream" | "sage" | "brown" (optional)
 *   />
 */

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  bg?: "ivory" | "cream" | "sage" | "brown";
  children?: React.ReactNode;
}

const bgClasses: Record<NonNullable<PageHeaderProps["bg"]>, string> = {
  ivory: "bg-ivory",
  cream: "bg-ivory-dark",
  sage:  "bg-sage",
  brown: "bg-brown",
};

const textClasses: Record<NonNullable<PageHeaderProps["bg"]>, { label: string; title: string; subtitle: string }> = {
  ivory: { label: "text-sage",    title: "text-brown",      subtitle: "text-brown/55" },
  cream: { label: "text-sage",    title: "text-brown",      subtitle: "text-brown/55" },
  sage:  { label: "text-gold/80", title: "text-ivory",      subtitle: "text-ivory/70" },
  brown: { label: "text-gold/80", title: "text-ivory",      subtitle: "text-ivory/60" },
};

export default function PageHeader({
  label,
  title,
  subtitle,
  bg = "ivory",
  children,
}: PageHeaderProps) {
  const colors = textClasses[bg];

  return (
    <div className={`${bgClasses[bg]} pt-[120px] lg:pt-[100px] pb-10 md:pb-14`}>
      <div className="container-luxury text-center">
        {label && (
          <p className={`font-sans text-[11px] tracking-[0.25em] uppercase mb-3 ${colors.label}`}>
            {label}
          </p>
        )}
        <h1
          className={`font-serif font-light leading-tight ${colors.title}`}
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className={`font-sans text-sm mt-3 max-w-md mx-auto leading-relaxed ${colors.subtitle}`}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}

        {/* Decorative rule */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className={`h-px w-12 ${bg === "ivory" || bg === "cream" ? "bg-gold/30" : "bg-gold/40"}`} />
          <div className={`w-1 h-1 rounded-full ${bg === "ivory" || bg === "cream" ? "bg-gold/50" : "bg-gold/60"}`} />
          <div className={`h-px w-12 ${bg === "ivory" || bg === "cream" ? "bg-gold/30" : "bg-gold/40"}`} />
        </div>
      </div>
    </div>
  );
}
