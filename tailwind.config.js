/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "2xl": { max: "2000px" },
      // => @media (max-width: 1535px) { ... }
    },
  },
  
  plugins: [],
}

