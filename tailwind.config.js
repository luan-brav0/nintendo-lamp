/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./source/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#CF010B",
        white: "#FFFFFF",
        black: "#000000",
        dimRed: "#E98F93",
      },
    },
  },
  plugins: [],
};
