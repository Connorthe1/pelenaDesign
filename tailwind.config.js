/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        mainBlack: '#0d0d0d',
        white: '#ededed',
      }
    },
  },
  plugins: [],
}

