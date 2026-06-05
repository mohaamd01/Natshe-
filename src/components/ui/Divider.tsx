import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  variant?: "gold" | "stone" | "full";
  label?: string;
}

export function Divider({ className, variant = "gold", label }: DividerProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-4 my-6", className)}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
        <span className="font-label text-[10px] tracking-luxury text-gold-dark whitespace-nowrap">
          {label}
        </span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
      </div>
    );
  }

  if (variant === "gold") {
    return (
      <div className={cn("flex items-center justify-center gap-3 my-8", className)}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
        <span className="text-gold text-sm">✦</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
    );
  }

  if (variant === "full") {
    return (
      <hr
        className={cn(
          "border-none h-px bg-gradient-to-r from-transparent via-stone to-transparent my-8",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "h-px bg-gradient-to-r from-transparent via-stone/60 to-transparent my-6",
        className
      )}
    />
  );
}
