"use client";

import { useLocale, useTranslations } from "next-intl";
import { localized } from "@/lib/localize";
import type { Product } from "@/types/product";

interface ProductPropertiesProps {
  properties: Product["properties"];
  includes: Product["includes"];
  stoneName: string | import("@/lib/localize").LocalizedText;
}

export default function ProductProperties({
  properties,
  includes,
  stoneName,
}: ProductPropertiesProps) {
  const locale = useLocale();
  const t = useTranslations("product");

  const propertyLabels = {
    energy:   t("energyLabel"),
    chakra:   t("chakraLabel"),
    idealFor: t("idealForLabel"),
    material: t("materialLabel"),
  } as const;

  const propertyIcons: Record<string, string> = {
    energy:   "✦",
    chakra:   "◎",
    idealFor: "♡",
    material: "◇",
  };

  const resolvedStoneName = localized(stoneName, locale);

  return (
    <div className="space-y-6">
      {/* Crystal Properties */}
      <div>
        <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-brown/40 mb-3">
          {t("crystalProperties")}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {(Object.keys(propertyLabels) as (keyof typeof propertyLabels)[]).map((key) => (
            <div
              key={key}
              className="bg-ivory-dark rounded-xl p-3.5 flex flex-col gap-1"
            >
              <span className="text-gold text-sm" aria-hidden="true">
                {propertyIcons[key]}
              </span>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-brown/40">
                {propertyLabels[key]}
              </p>
              <p className="font-serif text-sm text-brown font-light leading-snug">
                {localized(properties[key], locale)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <div>
        <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-brown/40 mb-3">
          {t("whatsIncluded")}
        </h3>
        <ul className="space-y-2">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
              <span className="font-sans text-sm text-brown/70 leading-snug">
                {localized(item, locale)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Natural stone disclaimer */}
      <p className="font-sans text-[11px] text-brown/35 leading-relaxed border-t border-brown/10 pt-4">
        {t("naturalStoneDisclaimer", { stoneName: resolvedStoneName })}
      </p>
    </div>
  );
}
