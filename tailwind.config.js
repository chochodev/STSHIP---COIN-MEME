/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }
    },
    colors: {
      'background': '#000000',
      'primary': '#0055B3',

      'secondary-light': '#52d660',
      'secondary': '#2ECC40',
      'secondary-dim': '#175020',
      'secondary-dark': '#072C0D',

      'tertiary': '#FF4136',
      'tertiary2': '#AAAAAA'
    },
    
  },
  plugins: [],
}

