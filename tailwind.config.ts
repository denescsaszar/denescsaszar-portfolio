import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Verge-inspired minimal color palette
        background: "#FFFFFF",
        foreground: "#111111",
        accent: "#FF6B35",
        muted: "#666666",
        border: "#E5E5E5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial-style typography scale
        "display-large": [
          "4rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        display: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-1": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "heading-2": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.005em" }],
        "heading-3": ["1.5rem", { lineHeight: "1.4" }],
        "body-large": ["1.25rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-small": ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        // Generous whitespace like The Verge
        section: "6rem",
        container: "8rem",
      },
      maxWidth: {
        content: "65ch",
        wide: "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
