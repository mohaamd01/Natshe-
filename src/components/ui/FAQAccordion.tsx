"use client";

import { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-brown/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-sm font-medium text-brown group-hover:text-sage transition-colors duration-200 leading-snug">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-full border border-brown/20 flex items-center justify-center transition-all duration-300 mt-0.5 ${
                  isOpen ? "border-sage bg-sage/10 rotate-45" : "group-hover:border-sage/50"
                }`}
                aria-hidden="true"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={`transition-colors duration-200 ${isOpen ? "text-sage" : "text-brown/40"}`}
                >
                  <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-400 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)" }}
            >
              <p className="font-sans text-sm text-brown/60 leading-loose pr-9">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
