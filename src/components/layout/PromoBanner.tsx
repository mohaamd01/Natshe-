"use client";

import { PROMO_BANNER } from "@/lib/constants";

const SEPARATOR = "✦"; // ✦

export default function PromoBanner() {
  const items = Array(6).fill(null);

  return (
    <div
      className="relative overflow-hidden bg-sage text-white"
      style={{ height: "36px" }}
      aria-label="Promotional announcement"
    >
      <div className="marquee-track flex items-center h-full">
        {items.map((_, i) => (
          <span key={i} className="marquee-item flex items-center gap-3 whitespace-nowrap px-8">
            <span className="text-xs tracking-[0.2em] uppercase font-sans font-medium">
              {PROMO_BANNER.text}
            </span>
            <span className="text-gold text-xs" aria-hidden="true">{SEPARATOR}</span>
            <span className="text-xs tracking-[0.2em] uppercase font-sans font-medium">
              {PROMO_BANNER.highlight}
            </span>
            <span className="text-gold text-xs" aria-hidden="true">{SEPARATOR}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
