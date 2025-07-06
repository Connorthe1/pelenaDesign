/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'sans-serif'],
      'roboto': ['Roboto Mono', 'sans-serif'],
      'LXGW': ['LXGW Marker Gothic', 'sans-serif'],
      'montserrat': ['Montserrat Alternates', 'sans-serif'],
    },
    extend: {
      colors: {
        mainBlack: '#0d0d0d',
        blackElem: '#111111',
        white: '#ededed',
        accentColor: '#fa8072'
      },
      spacing: {
        'work': '1400px'
      },
      padding: {
        'global': '5%'
      }
    },
  },
  plugins: [],
}

