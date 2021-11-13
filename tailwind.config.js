const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.trueGray,
      teal: colors.teal,
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1024px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
