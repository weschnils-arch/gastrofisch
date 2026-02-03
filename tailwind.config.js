/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive) / <alpha-value>)", foreground: "hsl(var(--destructive-foreground) / <alpha-value>)" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        adria: { DEFAULT: "#1D4589", dark: "#152f5c", light: "#2a5cb3" },
        graphite: { DEFAULT: "#424342", light: "#5a5a5a", dark: "#2a2a2a" },
        silver: { DEFAULT: "#A6A8AB", light: "#c5c7c9", dark: "#87898c" },
        deepblue: { DEFAULT: "#1A244F" },
      },
      fontFamily: { playfair: ['Playfair Display', 'serif'], lato: ['Lato', 'sans-serif'] },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "bounce-slow": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: { "accordion-down": "accordion-down 0.2s ease-out", "accordion-up": "accordion-up 0.2s ease-out", "bounce-slow": "bounce-slow 2s ease-in-out infinite" },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
