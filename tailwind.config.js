/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C4A45C',
        charcoal: '#1A1A1A',
        cream: '#F9F8F6'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}