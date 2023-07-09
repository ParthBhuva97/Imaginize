/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily:{
      header : ['Wix Madefor Display', 'sans-serif'],
      subHeader : ['Albert Sans', 'sans-serif']
    },
    letterSpacing:{
      widest : '3em'
    }
  },
  plugins: [],
}