/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "280px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      screens: {
        ssm: "400px",
      },
    },
  },
  plugins: [],
};
