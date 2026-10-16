import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0D2B2E",
          soft: "#3F5A5C",
          deep: "#07191B",
        },
        fog: {
          DEFAULT: "#EEF3F1",
          card: "#F9FBFA",
        },
        amber: {
          DEFAULT: "#F2A21B",
          deep: "#B86F00",
        },
        signal: {
          DEFAULT: "#1F9D6B",
          deep: "#136B48",
        },
        line: "#CBD8D4",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
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