import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d74f2",
        "background-light": "#f5f7f8",
        "background-dark": "#09090b",
        "card-dark": "#18181b",
        "border-dark": "#27272a",
        "text-secondary": "#a1a1aa",
        "accent-blue": "#60a5fa",
        "surface-dark": "rgba(24, 24, 27, 0.5)",
        background: "#09090b",
        surface: "#18181b",
        border: "rgba(255,255,255,0.1)",
        "border-subtle": "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;

