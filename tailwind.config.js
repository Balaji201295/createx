/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FF3F3A",
        secondary: "#FFCF2D",
        danger: "#FF4242",
        gray200: "#F4F5F6",
        gray300: "#E5E8ED",
        gray400: "#D7DADD",
        gray500: "#B3B7BC",
        gray600: "#9A9CA5",
        gray700: "#787A80",
        gray800: "#424551",
        gray900: "#1E212C",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        circles_bg: "url('./src/assets/bg-circles.svg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
