/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	},
  	colors: {
  		yellow: '#FFDE59',
  		red: '#FF3131',
  		blue: '#38B6FF',
  		green: '#74C850',
  		white: '#FFFFFF'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
