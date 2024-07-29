/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      '2xl': '1440px'
    },
    colors: {
      'green': '#495E57',
      'yellow': '#F4CE14',
      'white': '#ffffff',
      'black': '#000000',
      'dark': '#333333',
      'grey': '#EDEFEE',
      'coral': '#EE9972'
    },
    fontFamily: {
      primary: ['Karla', 'sans-serif'],
      secondary: ['Markazi Text', 'serif'],
    },
  },
  plugins: [],
}

