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
    plugin(function({ addBase }) {
      addBase({
        '*, ::after, ::before, ::backdrop, ::file-selector-button': {
          'border-color': 'var(--color-gray-200, currentColor)',
        },
        ':root': {
          '--gray-100': '0 0% 90%',
          '--gray-200': '0 0% 79%',
          '--gray-300': '0 0% 68%',
          '--gray-400': '0 0% 57%',
          '--gray-500': '0 0% 46%',
          '--gray-600': '0 0% 36%',
          '--gray-700': '0 0% 27%',
          '--gray-800': '0 0% 18%',
          '--gray-900': '0 0% 11%',
          '--gray-1000': '0 0% 0%',
          '--neutral-1000': '85 4% 13%',
          '--neutral-900': '85 4% 21%',
          '--neutral-800': '85 4% 30%',
          '--neutral-700': '85 4% 39%',
          '--neutral-600': '85 4% 48%',
          '--neutral-500': '85 4% 57%',
          '--neutral-400': '85 4% 66%',
          '--neutral-300': '85 4% 76%',
          '--neutral-200': '85 4% 85%',
          '--neutral-100': '85 4% 95%',
          '--green-1000': '150 6% 18%',
          '--green-900': '150 6% 26%',
          '--green-800': '150 6% 33%',
          '--green-700': '150 6% 39%',
          '--green-600': '150 6% 45%',
          '--green-500': '150 6% 53%',
          '--green-400': '150 6% 61%',
          '--green-300': '150 6% 70%',
          '--green-200': '150 6% 78%',
          '--green-100': '150 6% 87%',
          '--aqua-1000': '195 100% 7%',
          '--aqua-900': '195 100% 20%',
          '--aqua-800': '195 100% 33%',
          '--aqua-700': '195 100% 46%',
          '--aqua-600': '195 100% 59%',
          '--aqua-500': '195 100% 72%',
          '--aqua-400': '195 100% 80%',
          '--aqua-300': '195 100% 88%',
          '--aqua-200': '195 100% 96%',
          '--aqua-100': '195 100% 98%',
          '--color-bg': 'var(--neutral-100)',
          '--color-text': 'var(--neutral-1000)',
          '--color-primary': 'var(--green-900)',
          '--color-primary-200': 'var(--green-700)',
          '--color-primary-400': 'var(--green-500)',
          '--color-secondary': 'var(--green-700)',
          '--color-accent-1': 'var(--aqua-700)',
          '--color-accent-2': 'var(--aqua-200)',
        },
        'h1, h2, h3, h4, h5, h6': {
          'font-family': '"Karla Variable", system-ui, sans-serif',
        },
      })
    }),
  ],
};
