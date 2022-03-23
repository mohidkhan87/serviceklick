module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B2D33',
        secondary: '#660019',
        lightGray: '#F5F7FA',
        darkGray: '#818799',
        skyBlue: '#F5F7FA'
        // darkGray: '#81858E',
      },
      backgroundImage: {
        'professional-bg': "url('/src/assets/images/pages/homepage/professional-bg.svg')",
      }
    },
  },
  plugins: [],
}
