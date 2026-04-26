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
        primary: "#000543", // Deep Navy from Logo
        secondary: "#0071CE", // Main Blue from Logo
        accent: "#00999F", // Teal from Logo
        background: "#FFFFFF",
        "text-secondary": "#4B5563",
      },
    },
  },
  plugins: [],
};
