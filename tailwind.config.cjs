module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{html,svelte}"],
	darkMode: "class",
	theme: {
		extend: {
			zIndex: {
				"-1": "-1",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
