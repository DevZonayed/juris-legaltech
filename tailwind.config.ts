import type { Config } from "tailwindcss";

/**
 * Tailwind is wired to the SAME design tokens defined as CSS variables in
 * `globals.css` (ported verbatim from design/index.html). Utilities therefore
 * stay theme-aware (light/dark) automatically.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "surface-3": "var(--surface-3)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        "line-2": "var(--line-2)",
        primary: "var(--primary)",
        "primary-deep": "var(--primary-deep)",
        "primary-press": "var(--primary-press)",
        "primary-soft": "var(--primary-soft)",
        "on-primary": "var(--on-primary)",
        gold: "var(--gold)",
        "gold-2": "var(--gold-2)",
        "gold-soft": "var(--gold-soft)",
        danger: "var(--danger)",
        "danger-soft": "var(--danger-soft)",
        info: "var(--info)",
        "info-soft": "var(--info-soft)",
        warn: "var(--warn)",
      },
      fontFamily: {
        display: "var(--f-disp)",
        ui: "var(--f-ui)",
        bn: "var(--f-bn)",
        mono: "var(--f-mono)",
      },
      borderRadius: {
        xs: "var(--r-xs)",
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        pill: "var(--r-pill)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      maxWidth: {
        wrap: "var(--maxw)",
      },
    },
  },
  plugins: [],
};

export default config;
