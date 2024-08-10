/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens : {
        '2xl' : '1536px',
        'sm' : '640px', 
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