import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CURRENCY } from "./constants";

/** Merges Tailwind class names safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a number as a price string */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(CURRENCY.locale, {
    style: "currency",
    currency: CURRENCY.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Converts a string to a URL-safe slug */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Truncates text to a max length with ellipsis */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + "…";
}

/** Returns the first N items from an array */
export function take<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n);
}

/** Filters products by category slug */
export function filterByCategory<T extends { category: string }>(
  items: T[],
  category: string
): T[] {
  return items.filter((item) => item.category === category);
}

/** Pads a number with a leading zero (for display) */
export function padNumber(n: number): string {
  return n.toString().padStart(2, "0");
}

/** Returns a plural or singular string based on count */
export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : (plural ?? `${singular}s`);
}
