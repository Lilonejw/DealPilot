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
        background: "#000000",
        surface: {
          DEFAULT: "#1a1a1a",
          100: "#2a2a2a",
          200: "#3a3a3a",
        },
        primary: {
          DEFAULT: "#dc2626",
          dark: "#991b1b",
          light: "#ef4444",
        },
        border: {
          DEFAULT: "#2a2a2a",
          hover: "#3a3a3a",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(220, 38, 38, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(220, 38, 38, 0.8)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0f0f0f 100%)",
      },
    },
  },
  plugins: [],
};
export default config;