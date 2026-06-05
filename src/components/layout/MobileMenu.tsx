"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { navItems } from "@/data/navigation";
import { SOCIAL, SITE_CONFIG } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpandedItem(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-brown/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-ivory flex flex-col shadow-2xl transition-transform duration-500 ease-luxury",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-sage/10">
          <Link href="/" onClick={onClose}>
            <Image
              src="/images/logo/aura-stor-logo.png"
              alt="Aura Stor"
              width={100}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-sage/10 transition-colors duration-200 text-brown"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-sage/8">
              {item.children ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left font-sans font-medium text-base text-brown hover:text-sage transition-colors duration-200"
                    onClick={() =>
                      setExpandedItem(expandedItem === item.label ? null : item.label)
                    }
                    aria-expanded={expandedItem === item.label}
                  >
                    {item.label}
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-300 text-sage",
                        expandedItem === item.label ? "rotate-180" : ""
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded children */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      expandedItem === item.label ? "max-h-96" : "max-h-0"
                    )}
                  >
                    <div className="bg-sage/5 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-8 py-3 text-sm font-sans text-brown/80 hover:text-sage transition-colors duration-150"
                          onClick={onClose}
                        >
                          <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center px-6 py-4 font-sans font-medium text-base text-brown hover:text-sage transition-colors duration-200"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Footer actions */}
        <div className="px-6 py-6 border-t border-sage/10 space-y-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white font-sans font-semibold text-sm tracking-wide py-3.5 rounded-full shadow-whatsapp hover:opacity-90 transition-opacity duration-200"
            onClick={onClose}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Order via WhatsApp
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-sans text-brown/60 hover:text-sage transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
              {SOCIAL.instagramHandle}
            </a>
          </div>

          <p className="text-center text-xs text-brown/40 font-sans pt-1">
            {SITE_CONFIG.tagline}
          </p>
        </div>
      </div>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

