/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-1200': { max: '1200px' },
        'custom-924': { max: '924px' },
        'custom-786': { max: '786px' },
        'custom-576': { max: '576px' },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

