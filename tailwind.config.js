/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        bottom: "-5px 16px 16px #d6cfcfb8",
      },
      borderColor: {
        primary: "#c6c3c396",
      },
      opacity: {
        100: "100",
      },
    },
  },
  plugins: [],
}
