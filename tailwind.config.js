const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2D33",
        secondary: "#660019",
        
        // Gray
        darkGray: "#818799",
        borderGray: "#EDEFF2",
        footerTextGray: "#81858E",
        lightGray: "#F5F7FA",
        textGray: '#686868',
        customGray: "#C0C3CC",

        skyBlue: "#F5F7FA",
        lightPink: "#FCECE9",
        darkYellow: "#FCA101",
        gradientPink: '#F9CFC6',
        gradientBlue: '#B9D2EA',
        textRed: '#E52322'
      },
      fontFamily: {
        sans: ["silka", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        ellipseCurve: "0 0 0 100%",
        ellipseCurveCenter: "0 0 50% 50%",
        ellipseCurveCenterImage: "0 0 100px 10%",
      },
      boxShadow: {
        fade: "10px 30px 150px 1px rgba(0, 0, 0, 0.20)",
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
