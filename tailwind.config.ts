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
        background: "#070711",
        surface: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.10)",
        primary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
        },
        accent: "#10B981",
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #8B5CF6, #3B82F6)",
        "gradient-hero": "linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6)",
        "gradient-card": "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.15))",
      },
      animation: {
        "blob": "blob 8s ease-in-out infinite",
        "blob-delay": "blob 10s ease-in-out infinite 2s",
        "blob-delay2": "blob 12s ease-in-out infinite 4s",
        "scroll-left": "scrollLeft 25s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
