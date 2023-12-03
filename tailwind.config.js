/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "280px",
      md: "768px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
