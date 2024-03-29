/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      '2xl':'210px',
      'xl':'375px',
      'sm':'504px',
      'slider':'600px',
      'xsm':'768px',
      'md': '960px',
      'xmd':'1024px',
      'xlg':'1312px',
      'lg': '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellow': '#ffa633',
      'black': '#000000',
      'blue' :'#144298',
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif']
    },
  
  },
  plugins: [],
}