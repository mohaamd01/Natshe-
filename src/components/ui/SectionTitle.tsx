import { cn } from "@/lib/utils";

interface SectionTitleProps {
  id?: string;
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  /** Render a gold ornamental divider below the label */
  withDivider?: boolean;
  /** Use display-size heading for hero-style sections */
  large?: boolean;
}

export default function SectionTitle({
  id,
  label,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  withDivider = false,
  large = false,
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      {label && (
        <span className="font-label text-[10px] tracking-wider text-gold-dark uppercase">
          {label}
        </span>
      )}

      {withDivider && (
        <div
          className={cn(
            "flex items-center gap-3 w-full",
            align === "center" && "justify-center"
          )}
        >
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-gold text-xs">✦</span>
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-gold/50" />
        </div>
      )}

      <h2
        id={id}
        className={cn(
          "font-serif text-brown text-balance",
          large ? "font-display" : "font-h2",
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "font-sans font-light text-brown-mid leading-relaxed max-w-xl",
            align === "center" && "mx-auto",
            "text-base md:text-lg"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
