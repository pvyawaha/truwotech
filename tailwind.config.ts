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
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8eccff",
          400: "#59aeff",
          500: "#3b8cff",
          600: "#1a6af5",
          700: "#1455e1",
          800: "#1745b6",
          900: "#193d8f",
          950: "#142757",
        },
        accent: {
          50: "#edfcf2",
          100: "#d3f8df",
          200: "#aaf0c4",
          300: "#73e2a3",
          400: "#3bcd7e",
          500: "#17b363",
          600: "#0b9150",
          700: "#097441",
          800: "#0b5c36",
          900: "#0a4b2e",
          950: "#042a1a",
        },
        dark: {
          50: "#f6f6f9",
          100: "#ececf2",
          200: "#d5d6e2",
          300: "#b1b2c9",
          400: "#8789ab",
          500: "#686a91",
          600: "#535478",
          700: "#444562",
          800: "#3b3c53",
          900: "#1a1b2e",
          950: "#0d0e1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(59, 140, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(59, 140, 255, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
