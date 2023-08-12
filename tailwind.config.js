/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        upriseAnimation: "upriseAnimation 0.2s ease-in-out 1",
      },
      keyframes: {
        upriseAnimation: {
          "0%": { opacity: "0", scale: "0.8" },
          "65%": { opacity: "0.8", scale: "1.05" },
          "100%": { opacity: "1", scale: "1.0" },
        },
      },
    },
  },
  plugins: [],
};
