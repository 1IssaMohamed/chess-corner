import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chess: {
          base: "#0a0a0f",
          surface: "#12121a",
          elevated: "#1c1c2e",
          border: "#2d2d44",
          dark: "#4a7c59",
          light: "#d4c5a9",
          amber: "#d4a017",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-in",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-amber": "pulseAmber 1.2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseAmber: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,160,23,0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(212,160,23,0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
