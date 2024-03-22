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
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '868px'
			}
		},
		extend: {
			screens: {
				xs: "375px",
				smx: "425px",
			},
		},
	},
	plugins: [],
}

