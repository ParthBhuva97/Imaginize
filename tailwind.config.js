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
      header : ['Elsie', 'cursive'],
      subHeader : ['Albert Sans', 'sans-serif'],
      header2 : ['Elsie', 'cursive']
    },
    letterSpacing:{
      widest : '3em'
    }
  },
  plugins: [],
}