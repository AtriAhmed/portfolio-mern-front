/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d1836",
        primaryLight: "#151030",
        secondary: "rgb(234,179,8)"
      }
    },
  },
  plugins: [],
}