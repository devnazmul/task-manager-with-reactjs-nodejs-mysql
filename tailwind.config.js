module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grad1': '#2AF598',
        'grad2': '#08AEEA',
        'primary': '#57D04C',
        'silver': '#E8F0FE',

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
  variants: {
    scrollbar: ['rounded']
  }
} 
