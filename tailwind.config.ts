import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
      },
      fontSize: {
        "display-heading": ["80px", { lineHeight: "1.1" }],
        h1: ["72px", { lineHeight: "1.1" }],
        h2: ["60px", { lineHeight: "1.2" }],
        "h2-40": ["40px", { lineHeight: "1.2" }],
        h3: ["32px", { lineHeight: "1.4" }],
        h4: ["24px", { lineHeight: "1.4" }],
        h5: ["16px", { lineHeight: "1.4" }],
        h6: ["16px", { lineHeight: "1.4" }],
        body: ["20px", { lineHeight: "1.7" }],
        "body-18": ["18px", { lineHeight: "1.7" }],
        "body-16": ["16px", { lineHeight: "1.7" }],
        "body-14": ["14px", { lineHeight: "1.7" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3A6EF2",
        secondary: "#47CC88",
        neutral: {
          1: "#FFFFFF",
          2: "#9EA3BF",
          3: "#0A0E28",
          4: "#05071A",
        },
      },
      screens: {
        sm: { max: "767px" },
        md: { min: "768px", max: "1199px" },
        lg: { min: "1200px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
