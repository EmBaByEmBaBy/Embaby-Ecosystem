import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "embabi-deep-black": "#050505",
        "embabi-ivory": "#f5f1e8",
        "embabi-gold": "#d4af37",
        "embabi-silver": "#c7c7cf",
        "embabi-surface": "#101010",
      },
      fontFamily: {
        sans: ["var(--font-naskh)", "Segoe UI", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-inter)", "monospace"],
      },
      boxShadow: {
        embabi: "0 0 50px rgba(212, 175, 55, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
