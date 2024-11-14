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
      "center-transparent":
        "linear-gradient(to bottom, rgba(242, 242, 242, .25), rgba(242, 242, 242, 0), rgba(242, 242, 242, 1))",
      "black-to-white": "linear-gradient(to right, #B9B9B9, #F2F2F2)",
      "black-to-white-up": "linear-gradient(to top, #030303, #00000000)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
