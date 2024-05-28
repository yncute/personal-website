/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#ffffff",
      lightgray: "#f9fafb", //gray-50
      midgray: "#e5e7eb", //gray-200
      gray: "#6b7280", //gray-500
      darkgray: "#121212", //rgb(18,18,18)
      hovergray: "#1A1A1A",
      green: "#22c55e",
      lightgreen: "#4ade80",
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    },
  ],
};
