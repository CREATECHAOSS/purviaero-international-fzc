/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
      },
      colors: {
        primary: "#0E1C36", // Navy
        accent: "#B8872A", // Gold
        background: "#FFFFFF", // White
        "text-secondary": "#666258",
      },
    },
  },
  plugins: [],
};
