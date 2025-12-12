import type { Config } from "tailwindcss";

const config: Config = {
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
    },
  },
  plugins: [],
};
export default config;
