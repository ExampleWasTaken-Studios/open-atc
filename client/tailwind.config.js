/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/renderer/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        atmo: '#009BDA',
        spanish: '#006FBA',
      },
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
};

