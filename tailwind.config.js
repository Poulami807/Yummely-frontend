/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors:{
        main:{
              50: '#ffebdf',
              100: '#ffc8b1',
              200: '#ffa680',
              300: '#fe824e',
              400: '#fe5f1d',
              500: '#e54704',
              600: '#b23701',
              700: '#802600',
              800: '#4e1600',
              900: '#1f0500',
      }
      }
    },
  },
  plugins: [],
}
