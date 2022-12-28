/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 29px rgb(0 0 0 / 13%)'
      },
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    colors: {
      'petrol': '#012e4b',
      'myorange': '#f26e22',
    },
   
   
  },
  plugins: [],
}
