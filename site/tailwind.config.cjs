module.exports = {
	darkMode: false,
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter']
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('tailwind-scrollbar')]
};
