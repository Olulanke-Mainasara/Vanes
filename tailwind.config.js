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

      allEM: { min: "322px", max: "767px" },
      // => @media (min-width: 322px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1309px" },
      // => @media (min-width: 1024px and max-width: 1309px) { ... }

      allIL: { max: "1309px" },
      // => @media (max-width: 1309px) { ... }

      laptop: { min: "1310px" },
      // => @media (max-width: 1309px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
