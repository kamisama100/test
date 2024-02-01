/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      boxShadow: {
        bottom: "-5px 16px 16px #d6cfcfb8",
      },
    },
  },
  plugins: [],
}
