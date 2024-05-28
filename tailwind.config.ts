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
        "c-dark": "#000000",
        "c-semidark": "#F1F6F8",
        "c-light": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
