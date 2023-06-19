/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{tsx,js,ts}"],
  theme: {
    extend: {
      textColor: {
        blue: {
          100: "hsl(229, 8%, 60%)",
          200: "hsl(229, 31%, 21%)",
          300: "hsl(231, 69%, 60%)",
        },
        white: "#ffff",
      },
      backgroundColor: {
        red: "hsl(0, 94%, 66%)",
        blue: {
          100: "hsl(229, 8%, 60%)",
          200: "hsl(231, 69%, 60%)",
        },
        "mobile-menu": "hsla(229, 31%, 21%, 0.952)  ",
      },
      fontFamily: {
        sans: ["Rubik", defaultTheme],
      },

      borderColor: {
        blue: {
          100: "hsl(229, 8%, 60%)",
          200: "hsl(231, 69%, 60%)",
        },
      },
      // translate: {
      //   '0.2': '20%'
      // }
    },
  },
  plugins: [],
};
