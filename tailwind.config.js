/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fb805a",
        black: "#000",
        white: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
