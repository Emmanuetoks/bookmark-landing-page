/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{tsx,js,ts}"],
  theme: {
    extend: {
      height: {
        90: "90svh",
        "screen-s": "100svh",
      },
      textColor: {
        blue: {
          100: "hsl(229, 8%, 60%)",
          200: "hsl(229, 31%, 21%)",
          300: "hsl(231, 69%, 60%)",
          400: "hsl(240, 1%, 17%)",
        },
        white: "#ffff",
        red: {
          100: "hsl(0, 94%, 66%)",
        },
      },
      backgroundColor: {
        red: "hsl(0, 94%, 66%)",
        blue: {
          100: "hsl(229, 8%, 60%)",
          200: "hsl(231, 69%, 60%)",
          300: "hsl(229, 31%, 21%)",
          400: "hsl(240, 1%, 17%)",
        },
        "mobile-menu": "hsla(229, 31%, 21%, 0.952)  ",
      },
      fontFamily: {
        sans: ["Rubik", defaultTheme],
      },

      outlineColor: {
        blue: {
          100: "hsl(229, 8%, 60%)",
          200: "hsl(231, 69%, 60%)",
          400: "hsl(240, 1%, 17%)",
        },

        red: 'hsl(0, 94%, 66%)'
      },

      borderColor: {
        blue: {
          100: "hsl(229, 8%, 60%)",
        },
      },
      // translate: {
      //   '0.2': '20%'
      // }
    },
  },
  plugins: [],
};
