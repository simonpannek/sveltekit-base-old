const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		// Execute tailwindcss
		tailwindcss,
		// Add vendor prefixes
		autoprefixer,
		// Apply cssnano default preset if not in dev mode
		!dev &&
			cssnano({
				preset: "default",
			}),
	],
};
