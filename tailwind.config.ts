import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fbfcfa",
        surface: "#ffffff",
        fog: "#f1f5f7",
        ink: "#252a34",
        muted: "#687280",
        line: "#dce5eb",
        blue: "#4f9bcc",
        "blue-deep": "#2f7cae",
        teal: "#88cfc1",
        purple: "#9b94d9",
        orange: "#e9894a",
      },
      boxShadow: {
        soft: "var(--ai-works-soft-shadow)",
        float: "var(--ai-works-float-shadow)",
      },
      borderRadius: {
        card: "var(--ai-works-card-radius)",
      },
      fontFamily: {
        sans: [
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "YuGothic",
          "Noto Sans JP",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
