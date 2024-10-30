/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#BE50C8",
      white: "#FFFFFF",
    },
    backgroundImage: {
      "hero-bg": "url(/public/CHEDx_Hero.png)",
      "breakout-card": "url(/public/Cybersecurity_BG.png)",
      "center-transparent": "linear-gradient(to bottom, #131313, transparent, #131313)",
    },
  },
  plugins: [],
};
