/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/*.{html,js,jsx}",

	"./src/components/*.{html,js,jsx}",
	"./src/components/**/*.{html,js,jsx}",
	"./src/components/**/**/*.{html,js,jsx}",
	"./src/components/**/**/**/*.{html,js,jsx}",
	
	"./src/container/*.{html,js,jsx}",
	"./src/container/**/*.{html,js,jsx}",
	"./src/container/**/**/*.{html,js,jsx}",
	"./src/container/**/**/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

