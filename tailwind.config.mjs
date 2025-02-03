/* eslint-disable indent */
/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-bg) / <alpha-value>)",
        text: "hsl(var(--color-text) / <alpha-value>)",
        "primary-color": "hsl(var(--color-primary) / <alpha-value>)",
        "primary-200": "hsl(var(--color-primary-200) / <alpha-value>)",
        "primary-400": "hsl(var(--color-primary-400) / <alpha-value>)",
        "secondary-color": "hsl(var(--color-secondary) / <alpha-value>)",
        "accent-one": "hsl(var(--color-accent-1) / <alpha-value>)",
        "accent-two": "hsl(var(--color-accent-2) / <alpha-value>)",
      },
      maxWidth: {
        128: "60rem",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-bullets": "hsl(var(--color-text))",
          },
        },
      },
    },
    fontFamily: {
      header: ["Karla Variable"],
      sans: ["Inconsolata Variable", "Poppins", "Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    //https://aaronfrancis.com/2023/tailwind-typography-inline-code-only
    plugin(function ({ addVariant }) {
      addVariant(
        "prose-inline-code",
        // eslint-disable-next-line quotes
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      );
    }),
  ],
};
