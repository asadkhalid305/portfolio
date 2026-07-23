import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "80rem", // 1280px - max-w-7xl equivalent
      },
    },
    extend: {
      colors: {
        "c-dark": "#000000",
        "c-semidark": "#F1F6F8",
        "c-light": "#FFFFFF",
        linkedin: "#0A66C2",
      },
      spacing: {
        "container-sm": "24rem", // 384px - w-96
      },
      height: {
        card: "24rem", // 384px - h-96
      },
      width: {
        card: "24rem", // 384px - w-96
      },
      zIndex: {
        chatbot: "40",
        header: "50",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, typography],
};
export default config;
