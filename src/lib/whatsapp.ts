import { CONTACT } from "./constants";

const BASE_URL = "https://wa.me";

/** Builds a WhatsApp URL with a pre-filled message */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `${BASE_URL}/${CONTACT.whatsappNumber}?text=${encoded}`;
}

/** WhatsApp message templates for different contexts */
export const whatsappMessages = {
  /** Generic homepage / browse enquiry */
  general: () =>
    buildWhatsAppUrl(
      "Hello! I'd love to explore Aura Stor's jewelry. Can you help me find the right piece?"
    ),

  /** Product-specific enquiry */
  product: (productName: string) =>
    buildWhatsAppUrl(
      `Hello! I'm interested in the ${productName} from Aura Stor. Is it available and how can I order?`
    ),

  /** Gift buying enquiry */
  gift: () =>
    buildWhatsAppUrl(
      "Hello! I'm looking for a gift from Aura Stor. Can you help me choose the right crystal set?"
    ),

  /** Custom order enquiry */
  custom: () =>
    buildWhatsAppUrl(
      "Hello! I'd like to create a custom crystal piece from Aura Stor. How does the custom order process work?"
    ),

  /** Collection browsing */
  collection: (collectionName: string) =>
    buildWhatsAppUrl(
      `Hello! I'm interested in the ${collectionName} collection at Aura Stor. Can you tell me more?`
    ),

  /** Crystal guide enquiry — visitor learned about a stone */
  stoneEnquiry: (stoneName: string) =>
    buildWhatsAppUrl(
      `Hello! I just read about ${stoneName} on your website and I'm interested in ${stoneName} jewelry. Can you help me?`
    ),

  /** Shipping enquiry */
  shipping: () =>
    buildWhatsAppUrl(
      "Hello! Can you tell me more about shipping options and delivery times for Aura Stor orders to my country?"
    ),

  /** Returns enquiry */
  returns: () =>
    buildWhatsAppUrl(
      "Hello! I have a question about returns or exchanges for an Aura Stor order. Can you help?"
    ),
} as const;

/** Returns the plain WhatsApp URL without a pre-filled message */
export function getWhatsAppUrl(): string {
  return `${BASE_URL}/${CONTACT.whatsappNumber}`;
}
