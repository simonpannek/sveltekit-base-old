import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	kit: {
		// Vercel adapter
		adapter: vercel(),
		// Always add trailing slashes
		trailingSlash: "always",
	},

	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
