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
        'sm' : '676px' 
      },
      colors : {
        primary:'#14b8a6',
        dark: '#0f172a',
        gray: '#64748b',
      },
    },
  },
  plugins: [],
}