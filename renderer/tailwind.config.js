const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      ...colors,
      danger: "#bb2124",
      warning: "#f0ad4e",
      info: "#5bc0de",
      success: "#22bb33",
      // my colors
      "primary-light": "#d3eae3",
      "primary-light-2": "#71bca4",
      primary: "#2c9a76",
      "primary-darkest": "#040907",
      "primary-dark": "#146c51",
      "primary-dark-2": "#145840",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
