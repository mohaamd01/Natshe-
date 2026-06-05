import type { FAQ } from "@/types/site";

export const faqs: FAQ[] = [
  // ORDERING
  {
    id: "faq-ordering-1",
    question: "How do I place an order?",
    answer:
      "All orders are placed directly through WhatsApp. Simply tap any 'Order via WhatsApp' button on our website and you will be connected to our team with a pre-written message. We will confirm availability, discuss any customization, and arrange payment — all personally.",
    category: "ordering",
  },
  {
    id: "faq-ordering-2",
    question: "What are your response hours?",
    answer:
      "Our WhatsApp team is available daily from 09:00 AM to 10:00 PM (GMT+3). We typically respond within a few hours during business hours.",
    category: "ordering",
  },
  {
    id: "faq-ordering-3",
    question: "Do you accept custom orders?",
    answer:
      "Yes! We love creating custom pieces. Whether you want a specific stone, a combination we don't currently list, or a gift set tailored to someone special — reach out via WhatsApp and our team will work with you to create it.",
    category: "ordering",
  },
  {
    id: "faq-ordering-4",
    question: "What payment methods do you accept?",
    answer:
      "We currently accept bank transfers and mobile payment methods. Our team will provide full payment details when you place your order via WhatsApp.",
    category: "ordering",
  },

  // SHIPPING
  {
    id: "faq-shipping-1",
    question: "Which countries do you ship to?",
    answer:
      "We ship to Saudi Arabia, the United Arab Emirates, Qatar, and Turkey. We are working on expanding to additional countries — contact us via WhatsApp if your country is not listed.",
    category: "shipping",
  },
  {
    id: "faq-shipping-2",
    question: "How long does delivery take?",
    answer:
      "Standard delivery to Saudi Arabia, UAE, and Qatar typically takes 5–10 business days. Delivery times may vary depending on your location and customs processing.",
    category: "shipping",
  },
  {
    id: "faq-shipping-3",
    question: "Is shipping free?",
    answer:
      "Yes — we offer free shipping on all orders above $50. For orders below $50, a flat shipping fee applies. Your Aura Stor team member will confirm shipping costs when you order.",
    category: "shipping",
  },
  {
    id: "faq-shipping-4",
    question: "How will my order be packaged?",
    answer:
      "All Aura Stor pieces are packaged in a branded velvet gift pouch. Orders are shipped in protective packaging to ensure your pieces arrive in perfect condition.",
    category: "shipping",
  },

  // RETURNS
  {
    id: "faq-returns-1",
    question: "What is your return policy?",
    answer:
      "We accept returns within 14 days of delivery for items in their original, unworn condition with the original packaging. Custom orders are final sale. Please contact us via WhatsApp to initiate a return.",
    category: "returns",
  },
  {
    id: "faq-returns-2",
    question: "What if my order arrives damaged?",
    answer:
      "If your order arrives damaged, please photograph the item and packaging and contact us via WhatsApp within 48 hours of receiving your order. We will arrange a replacement or refund immediately.",
    category: "returns",
  },

  // PRODUCTS
  {
    id: "faq-products-1",
    question: "Are your stones genuine natural crystals?",
    answer:
      "Yes — always. Every stone in the Aura Stor collection is 100% natural. We do not use synthetic, dyed, or lab-created stones. Each piece carries the genuine energy and character of the earth.",
    category: "products",
  },
  {
    id: "faq-products-2",
    question: "Will my piece look exactly like the photo?",
    answer:
      "Because every natural stone is unique, your piece may have slight variations in color, veining, or pattern compared to the product photograph. This is the beauty of natural crystals — no two are identical. The differences make your piece truly one-of-a-kind.",
    category: "products",
  },
  {
    id: "faq-products-3",
    question: "How should I care for my crystal jewelry?",
    answer:
      "Each product page includes specific care instructions for that stone. Generally: avoid contact with water, perfume, and chemicals. Store in the included velvet pouch when not wearing. Cleanse energetically under moonlight or with sage smoke monthly.",
    category: "products",
  },

  // CRYSTALS
  {
    id: "faq-crystals-1",
    question: "How do I choose the right crystal for me?",
    answer:
      "Trust your instinct — the stone you are most drawn to is often the one you need. You can also use our Crystal Guide to explore the meanings and energies of each stone. Or contact us via WhatsApp and our team will help you choose based on what you are looking for.",
    category: "crystals",
  },
  {
    id: "faq-crystals-2",
    question: "Do crystals really have healing properties?",
    answer:
      "Crystal healing is a practice rooted in ancient traditions across many cultures. While it is not a substitute for medical advice, many people find that wearing specific stones supports their intention-setting, mindfulness, and emotional well-being. We believe in the power of intention — and in wearing something that reminds you of what matters.",
    category: "crystals",
  },
];

export function getFAQsByCategory(category: FAQ["category"]): FAQ[] {
  return faqs.filter((f) => f.category === category);
}
