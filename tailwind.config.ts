import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        turf: "#0F231B",
        "turf-light": "#173428",
        "turf-line": "#2A4A3A",
        chalk: "#F4F1E6",
        "chalk-dim": "#DCD8C8",
        ink: "#0B120D",
        flare: "#FF5A29",
        "flare-dark": "#D6431A",
        gold: "#D9A441",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "pitch-lines":
          "repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(244,241,230,0.04) 79px, rgba(244,241,230,0.04) 80px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
