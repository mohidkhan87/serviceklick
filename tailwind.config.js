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
        textGray: "#686868",
        customGray: "#C0C3CC",

        lightBlue: "#A1D0E2",
        skyBlue: "#F5F7FA",
        lightPink: "#FCECE9",
        darkYellow: "#FCA101",
        gradientPink: "#F9CFC6",
        gradientBlue: "#B9D2EA",
        textRed: "#E52322",

        CustomerYellow: '#FFC107',
        CustomerGreen: '#044855',
        CustomerRed: '#911436',
        CategoriesYellow: '#F5AC2E'
      },
      fontFamily: {
        sans: ["silka", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xxs': '9px',
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
        "customer-bg":
          "url('/src/assets/images/pages/homepage/customer-bg.svg')",
        pinkBlueGradient:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18)), linear-gradient(167.96deg, #F9CFC6 0%, #B9D2EA 100%)",
        magentaGradient:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18)), linear-gradient(167.96deg, #660019 0%, #660019 100%)",
        greenGradient:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18)), linear-gradient(167.96deg, #2F4121 0%, #2F4121 100%)",
        orangeGradient:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18)), linear-gradient(167.96deg, #B33F0E 0%, #B33F0E 100%)",
        pinkGradient:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18)), linear-gradient(167.96deg, #B11842 0%, #B11842 100%)",
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [],
};
