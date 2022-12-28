/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    screens: {
      xtraSmall: { min: "0px", max: "319px" },
      // => @media (min-width: 0px and max-width: 319px) { ... }

      iphone5: { min: "320px", max: "321px" },
      // => @media (min-width: 320px and max-width: 321px) { ... }

      allT: { max: "321px" },
      // => @media (min-width: 0px and max-width: 321px) { ... }

      xs: { min: "322px", max: "389px" },
      // => @media (min-width: 322px and max-width: 389px) { ... }

      sm: { min: "390px", max: "767px" },
      // => @media (min-width: 390px and max-width: 767px) { ... }

      allEM: { min: "322px", max: "767px" },
      // => @media (min-width: 322px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      allM: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1309px" },
      // => @media (min-width: 1024px and max-width: 1309px) { ... }

      allIL: { max: "1309px" },
      // => @media (max-width: 1309px) { ... }

      xl: { min: "1310px", max: "1535px" },
      // => @media (min-width: 1310px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }

      "ultraWide": { min: "2001px" },
      // => @media (min-width: 2001px) { ... }
    },screens: {
      xtraSmall: { min: "0px", max: "319px" },
      // => @media (min-width: 0px and max-width: 319px) { ... }

      iphone5: { min: "320px", max: "321px" },
      // => @media (min-width: 320px and max-width: 321px) { ... }

      allT: { max: "321px" },
      // => @media (min-width: 0px and max-width: 321px) { ... }

      xs: { min: "322px", max: "389px" },
      // => @media (min-width: 322px and max-width: 389px) { ... }

      sm: { min: "390px", max: "767px" },
      // => @media (min-width: 390px and max-width: 767px) { ... }

      allEM: { min: "322px", max: "767px" },
      // => @media (min-width: 322px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      allM: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1309px" },
      // => @media (min-width: 1024px and max-width: 1309px) { ... }

      allIL: { max: "1309px" },
      // => @media (max-width: 1309px) { ... }

      xl: { min: "1310px", max: "1535px" },
      // => @media (min-width: 1310px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }

      "ultraWide": { min: "2001px" },
      // => @media (min-width: 2001px) { ... }
    },
    extend: {
      color: {
        backingsss: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
