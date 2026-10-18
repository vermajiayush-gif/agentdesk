import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "media",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)", paper: "var(--paper)", panel: "var(--panel)",
        line: "var(--line)", muted: "var(--muted)", accent: "var(--accent)", brand: "var(--brand)",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
