/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        ancient: {
          gold: '#C6A962',
          stone: '#2C3539',
          sand: '#E6D5B8',
        },
      },
    },
  },
  plugins: [],
}