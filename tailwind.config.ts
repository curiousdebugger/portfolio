import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a2342", // Navy blue
          dark: "#06172b",
          light: "#1d3557",
        },
        background: {
          light: "#ffffff",
          dark: "#0a0a0a",
        },
        foreground: {
          light: "#171717",
          dark: "#ededed",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
