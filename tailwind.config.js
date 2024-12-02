/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        main: "#E4007F",
        content: "#8E8F94",
        stress: "#C6006F",
        downmenubg: "#252632",
        listbg: "#252632",
      },
      fontFamily: {
        sans: ["Noto Sans TC", "sans-serif"],
      },
      transformOrigin: {
        "top-center": "top center",
      },
      scale: {
        0.5: "0.5",
      },
    },
  },
  plugins: [],
};
