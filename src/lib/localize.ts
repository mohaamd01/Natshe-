/**
 * Multilingual text support.
 *
 * Supported locales:
 *   en — English (default / fallback)
 *   tr — Turkish (active target market)
 *   ar — Arabic (future expansion — RTL)
 *
 * Usage:
 *   import { localized } from "@/lib/localize";
 *   localized(product.name, locale)  // → string
 */

export type Locale = "en" | "tr" | "ar";

/**
 * A field that has been translated into multiple languages.
 * `ar` is optional — falls back to `en` when not yet provided.
 */
export type LocalizedText = {
  en: string;
  tr: string;
  ar?: string;
};

/**
 * Resolves a localised value to a plain string.
 *
 * - Plain strings pass through unchanged (safe for partially-migrated fields).
 * - LocalizedText objects return the locale-specific string.
 * - Falls back to `en` if the requested locale isn't available.
 */
export function localized(
  value: string | LocalizedText,
  locale: string
): string {
  if (typeof value === "string") return value;
  const l = locale as Locale;
  return value[l] ?? value.en;
}
