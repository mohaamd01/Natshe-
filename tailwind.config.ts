import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand
        sage: {
          DEFAULT: "#4A6B52",
          dark: "#2D4A35",
          light: "#7A9E7E",
          50: "#F0F5F1",
          100: "#D6E8DA",
        },
        // Luxury Accent
        gold: {
          DEFAULT: "#C9A050",
          light: "#E8C97A",
          dark: "#A07830",
        },
        // Text Colors
        brown: {
          DEFAULT: "#3D2B1F",
          mid: "#6B5F58",
          light: "#9E9189",
        },
        // Backgrounds
        ivory: {
          DEFAULT: "#F5F0E8",
          dark: "#EDE8DC",
          warm: "#FDFAF5",
        },
        // Borders
        stone: "#DDD8D0",
        // WhatsApp
        whatsapp: "#25D366",
        // Semantic
        error: "#8B3A3A",
      },

      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },

      fontSize: {
        "display": ["clamp(44px,7vw,80px)", { lineHeight: "1.05", letterSpacing: "0.06em", fontWeight: "300" }],
        "h1": ["clamp(32px,5vw,56px)", { lineHeight: "1.1", letterSpacing: "0.04em" }],
        "h2": ["clamp(26px,3.5vw,40px)", { lineHeight: "1.15", letterSpacing: "0.04em" }],
        "h3": ["clamp(20px,2.5vw,28px)", { lineHeight: "1.2", letterSpacing: "0.02em" }],
      },

      letterSpacing: {
        luxury: "0.12em",
        wide: "0.08em",
        wider: "0.14em",
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "section": "clamp(4rem,8vw,7rem)",
      },

      borderRadius: {
        sm: "3px",
        DEFAULT: "6px",
        md: "6px",
        lg: "12px",
      },

      boxShadow: {
        card: "0 2px 16px rgba(61,43,31,0.07)",
        hover: "0 8px 32px rgba(61,43,31,0.12)",
        float: "0 4px 24px rgba(0,0,0,0.15)",
        gold: "0 4px 20px rgba(201,160,80,0.25)",
        whatsapp: "0 4px 20px rgba(37,211,102,0.4)",
      },

      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },

      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },

      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "70%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },

      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "ken-burns": "ken-burns 8s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
      },

      backgroundImage: {
        "shimmer-gradient": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
