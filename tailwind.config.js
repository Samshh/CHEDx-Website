/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
    colors: {
      yellow: "#FFA802",
      red: "#FF3131",
      blue: "#38B6FF",
      green: "#74C850",
      white: "#F2F2F2",
      black: "#030303",
    },
    backgroundImage: {
      "center-transparent": "linear-gradient(to bottom, #F2F2F2, transparent, #F2F2F2)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
