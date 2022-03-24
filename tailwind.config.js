const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2D33",
        secondary: "#660019",
        lightGray: "#F5F7FA",
        darkGray: "#818799",
        skyBlue: "#F5F7FA",
        lightPink: "#FCECE9"
      },
      fontFamily: {
        'sans': ['silka', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "professional-bg":
          "url('/src/assets/images/pages/homepage/professional-bg.svg')",
        "customer-bg":
          "url('/src/assets/images/pages/homepage/customer-bg.svg')",
      },
    },
  },
  plugins: [],
};
