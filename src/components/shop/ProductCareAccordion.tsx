"use client";

import { useState } from "react";

interface ProductCareAccordionProps {
  careInstructions: string[];
}

const SECTIONS = [
  {
    id: "care",
    title: "Care Instructions",
    icon: "◇",
  },
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: "◎",
    content: [
      "Ships to Saudi Arabia, UAE & Qatar",
      "Estimated delivery: 7–14 business days",
      "Free shipping on orders above $50",
      "Tracked & insured shipping on all orders",
      "Order via WhatsApp — we'll confirm details within a few hours",
    ],
  },
  {
    id: "returns",
    title: "Returns & Exchanges",
    icon: "♡",
    content: [
      "We want you to love your piece",
      "Contact us via WhatsApp within 7 days of delivery",
      "Items must be unworn and in original packaging",
      "Exchange or store credit offered — no questions asked",
    ],
  },
] as const;

export default function ProductCareAccordion({ careInstructions }: ProductCareAccordionProps) {
  const [openId, setOpenId] = useState<string | null>("care");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="divide-y divide-brown/10 border-t border-brown/10">
      {SECTIONS.map((section) => {
        const items = section.id === "care" ? careInstructions : section.content;
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
