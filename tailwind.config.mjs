/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        128: "60rem",
      },
    },
    fontFamily: {
      sans: ["Inconsolata Variable", "Poppins", "Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
