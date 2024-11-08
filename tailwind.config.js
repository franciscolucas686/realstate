/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      maxWidth: {
        '95%': '95%',
        '90%': '90%',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        customGreen: '#1F4B43',
        customYellow: '#E7C873',
        customBrown: '#493927',

      },
    },
  },
  plugins: [],
}

