import { NAV_LINKS, FOOTER_LINKS } from "@/lib/constants";
import type { NavItem } from "@/types/site";

export const navItems: NavItem[] = [
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop" },
      { label: "Crystal Bracelets", href: "/shop/crystal-bracelets" },
      { label: "Crystal Necklaces", href: "/shop/crystal-necklaces" },
      { label: "Crystal Rings", href: "/shop/crystal-rings" },
      { label: "Crystal Sets", href: "/shop/crystal-sets" },
      { label: "Gift Sets", href: "/gift-sets" },
    ],
  },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Tiger's Eye", href: "/collections/tigers-eye-collection" },
      { label: "Howlite", href: "/collections/howlite-collection" },
      { label: "Green Aventurine", href: "/collections/aventurine-collection" },
      { label: "Jade", href: "/collections/jade-collection" },
      { label: "Moonstone", href: "/collections/moonstone-collection" },
    ],
  },
  { label: "Crystal Guide", href: "/crystal-guide" },
  { label: "Gift Sets", href: "/gift-sets" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export { NAV_LINKS, FOOTER_LINKS };
