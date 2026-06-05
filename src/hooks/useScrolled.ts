"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the page has scrolled past `threshold` pixels.
 * Used for the sticky navigation glass effect.
 */
export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
