"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { localized } from "@/lib/localize";
import type { LocalizedText } from "@/lib/localize";

interface ProductCareAccordionProps {
  careInstructions: (string | LocalizedText)[];
}

export default function ProductCareAccordion({ careInstructions }: ProductCareAccordionProps) {
  const locale = useLocale();
  const t = useTranslations("product");
  const [openId, setOpenId] = useState<string | null>("care");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  const SECTIONS = [
    {
      id: "care",
      title: t("careTitle"),
      icon: "◇",
    },
    {
      id: "shipping",
      title: t("shippingTitle"),
      icon: "◎",
      content: [
        t("shippingItem1"),
        t("shippingItem2"),
        t("shippingItem3"),
        t("shippingItem4"),
        t("shippingItem5"),
      ],
    },
    {
      id: "returns",
      title: t("returnsTitle"),
      icon: "♡",
      content: [
        t("returnsItem1"),
        t("returnsItem2"),
        t("returnsItem3"),
        t("returnsItem4"),
      ],
    },
  ] as const;

  return (
    <div className="divide-y divide-brown/10 border-t border-brown/10">
      {SECTIONS.map((section) => {
        const items: readonly string[] =
          section.id === "care"
            ? careInstructions.map((item) => localized(item, locale))
            : section.content;
        const isOpen = openId === section.id;

        return (
          <div key={section.id}>
            <button
              onClick={() => toggle(section.id)}
              className="w-full flex items-center justify-between py-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-2.5">
                <span className="text-gold text-sm">{section.icon}</span>
                <span className="font-sans text-sm font-medium text-brown group-hover:text-sage transition-colors duration-200">
                  {section.title}
                </span>
              </span>
              <span
                className={`text-brown/40 text-lg leading-none transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <ul className="pb-4 space-y-2 pl-6">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold/60 text-[10px] mt-1 flex-shrink-0">&#8212;</span>
                    <span className="font-sans text-sm text-brown/60 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
