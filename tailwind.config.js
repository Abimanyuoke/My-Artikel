/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding : '16px'
    },
    extend: {
      screens : {
        '2xl' : '800px',
      },
    },
  },
  plugins: [],
}