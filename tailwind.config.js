/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {},
    fontFamily: {
      'passion' : ['Passions Conflict', 'cursive'
    ],
      'display' : ['Playfair Display', 'serif'],
      'display2' : ['Roboto', 'sans-serif'],
      'display3' : ['Cormorant Garamond', 'serif']
    }
  },
  plugins: [],
}
