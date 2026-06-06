"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { navItems } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

// Pages where the header starts over a dark background — white text is readable at scrollY=0.
// All other pages have light ivory backgrounds, so we always use scrolled (brown) text.
function useIsHeroPage() {
  const pathname = usePathname();
  return (
    pathname === "/" ||                           // dark hero image
    /^\/collections\/[^/]+/.test(pathname) ||    // collection detail dark hero
    pathname === "/about"                         // About uses bg-brown PageHeader
  );
}

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const QUICK_LINKS = [
    { label: t("shop"), href: "/shop" },
    { label: t("collections"), href: "/collections" },
    { label: t("crystalGuide"), href: "/crystal-guide" },
  ];

  function switchLocale() {
    const next = locale === "en" ? "tr" : "en";
    router.replace(pathname, { locale: next });
  }

  const [scrollY, setScrollY]           = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const isHeroPage = useIsHeroPage();

  useEffect(() => {
    // Track raw scrollY for smooth glass interpolation
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown on any outside click
  useEffect(() => {
    const handler = () => setActiveDropdown(null);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // ── Glass progress (0 at top → 1 at 70 px) ─────────────────────────────────
  // Drives a smooth, continuous transition rather than a binary class swap.
  const prog    = Math.min(scrollY / 70, 1);           // 0 → 1
  const progSq  = prog * prog;                         // ease-in curve

  // Text/icon colour threshold.
  // On hero pages: white text at top, switch to brown once scrolled.
  // On all other pages (light ivory backgrounds): always use brown text.
  const isScrolled = isHeroPage ? scrollY > 24 : true;

  // Inline styles — applied to the <header> element
  const glassStyle: React.CSSProperties = {
    // Warm ivory at 82 % opacity max; invisible at top
    background: `rgba(253, 250, 245, ${(0.82 * progSq).toFixed(3)})`,
    // Blur increases from 0 → 18 px
    backdropFilter:       `blur(${Math.round(18 * prog)}px)`,
    WebkitBackdropFilter: `blur(${Math.round(18 * prog)}px)`,
    // Hairline border appears on scroll
    borderBottom: `1px solid rgba(61, 43, 31, ${(0.09 * prog).toFixed(3)})`,
    // Soft shadow fades in after halfway
    boxShadow: prog > 0.4
      ? `0 4px 24px rgba(61, 43, 31, ${(0.07 * prog).toFixed(3)})`
      : "none",
  };

  return (
    <>
      <header
        className="fixed top-9 left-0 right-0 z-40"
        style={glassStyle}
      >
        {/* ── Main nav row ─────────────────────────────────────────────────── */}
        <div className="container-luxury">
          <div className="flex items-center justify-between h-12 md:h-16">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Aura Stor — Home">
              <Image
                src="/images/logo/aura-stor-logo.png"
                alt="Aura Stor"
                width={110}
                height={44}
                className="h-8 md:h-10 w-auto object-contain transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "font-sans text-[13px] font-medium tracking-[0.06em] transition-colors duration-300",
                      isScrolled
                        ? "text-brown hover:text-sage"
                        : "text-ivory/90 hover:text-gold drop-shadow-sm"
                    )}
                  >
                    <span className="flex items-center gap-1">
                      {item.label}
                      {item.children && (
                        <svg
                          className="w-2.5 h-2.5 mt-px opacity-50"
                          fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[200px]">
                      <div
                        className="rounded-xl overflow-hidden py-1.5"
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "1px solid rgba(80,60,40,0.08)",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-[13px] font-sans transition-colors duration-150"
                            style={{ color: "#4A382C" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(112,140,116,0.08)";
                              e.currentTarget.style.color = "#2F4F3A";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "";
                              e.currentTarget.style.color = "#4A382C";
                            }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Locale switcher — desktop only */}
              <button
                onClick={switchLocale}
                className={cn(
                  "hidden lg:flex font-sans text-[12px] font-medium tracking-[0.08em] transition-colors duration-300 px-2.5 py-1 rounded border",
                  isScrolled
                    ? "text-brown/60 border-brown/20 hover:border-sage/50 hover:text-sage"
                    : "text-ivory/70 border-white/25 hover:border-white/60 hover:text-white"
                )}
                aria-label={`Switch to ${locale === "en" ? "Turkish" : "English"}`}
              >
                {t("switchLanguage")}
              </button>

              {/* WhatsApp pill — desktop only */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 bg-whatsapp text-white text-xs font-sans font-semibold tracking-wide px-4 py-2 rounded-full shadow-whatsapp hover:opacity-90 transition-opacity duration-200"
                aria-label={t("orderViaWhatsApp")}
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                {t("orderViaWhatsApp")}
              </a>

              {/* Hamburger — mobile */}
              <button
                className={cn(
                  "lg:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8 flex-shrink-0 rounded transition-colors duration-300",
                  isScrolled ? "text-brown" : "text-ivory drop-shadow-sm"
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <span className="w-[18px] h-px bg-current block transition-all duration-200" />
                <span className="w-[18px] h-px bg-current block transition-all duration-200" />
                <span className="w-[11px] h-px bg-current block self-start ml-[3.5px] transition-all duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile quick-links sub-row (Option A) ──────────────────────────
            Visible only on mobile (lg:hidden). Always present in the DOM so
            the h-9 height is included in the fixed header's layout height,
            keeping pt-[120px] correct on all pages.
        ─────────────────────────────────────────────────────────────────── */}
        <div
          className={cn(
            "lg:hidden border-t transition-colors duration-500",
            isScrolled ? "border-brown/[0.06]" : "border-white/[0.12]"
          )}
          aria-label="Quick navigation"
        >
          <div className="container-luxury">
            <div className="flex items-center gap-1.5 h-9 overflow-x-auto scrollbar-none">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex-shrink-0 px-3 py-1 text-[11px] font-sans font-medium tracking-[0.1em] rounded-full border transition-all duration-300",
                    isScrolled
                      ? "text-brown/65 border-brown/15 hover:border-sage/40 hover:text-sage"
                      : "text-ivory/75 border-white/20 hover:border-white/50 hover:text-white drop-shadow-sm"
                  )}
                >
                  {link.label}
                </Link>
              ))}

            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
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
