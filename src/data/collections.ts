import type { Collection } from "@/types/product";

export const collections: Collection[] = [
  {
    slug: "tigers-eye-collection",
    name: "Tiger's Eye",
    tagline: "For those who move forward with purpose.",
    description:
      "The Tiger's Eye collection is built for those who choose courage over comfort. Rich amber-brown stones with living silk that shifts in the light — a visual reminder of the strength you carry.",
    stone: "tigers-eye",
    stoneName: "Tiger's Eye",
    heroImage: "/images/products/set-tigers-eye-diamond-2.jpg",
    productIds: ["set-tigers-eye-diamond", "set-tigers-eye-star", "ring-tigers-eye", "necklace-tigers-eye-wirewrapped"],
  },
  {
    slug: "howlite-collection",
    name: "Howlite",
    tagline: "In stillness, you will find what you have been looking for.",
    description:
      "White as marble, quiet as a held breath. The Howlite collection is for moments of rest, recovery, and the profound power of simply slowing down.",
    stone: "howlite",
    stoneName: "Howlite",
    heroImage: "/images/products/set-howlite-teardrop-2.jpg",
    productIds: ["set-howlite-teardrop", "set-howlite-spike"],
  },
  {
    slug: "aventurine-collection",
    name: "Green Aventurine",
    tagline: "Open to every possibility.",
    description:
      "Deep forest green with a shimmer that catches the light like morning light on leaves. The Aventurine collection is for those beginning something new and choosing to begin it with an open heart.",
    stone: "green-aventurine",
    stoneName: "Green Aventurine",
    heroImage: "/images/products/set-aventurine-heart-2.jpg",
    productIds: ["set-aventurine-heart"],
  },
  {
    slug: "jade-collection",
    name: "Jade",
    tagline: "Five thousand years of wisdom, at your wrist.",
    description:
      "From ancient temples to modern jewelry — Jade has always been worn by those who value wisdom, balance, and the slow, sure power of harmony.",
    stone: "jade",
    stoneName: "Jade",
    heroImage: "/images/products/ring-jade-nature.jpg",
    productIds: ["ring-jade", "set-jade-spike"],
  },
  {
    slug: "moonstone-collection",
    name: "Moonstone",
    tagline: "Surrender to the rhythm of your own becoming.",
    description:
      "Moonstone holds the quiet magic of the night sky — adularescent light shifting beneath a pale surface, like moonlight on still water. The Moonstone collection is for those who trust their intuition and move with the natural ebb and flow of life.",
    stone: "moonstone",
    stoneName: "Moonstone",
    heroImage: "/images/products/ring-moonstone-nature.jpg",
    productIds: ["ring-moonstone", "set-moonstone-spike"],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
