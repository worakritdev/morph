import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";
import node from "@sveltejs/adapter-node";



const mode = process.env.NODE_ENV;
const dev = mode === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        "postcss": true
    })],

	kit: {
		adapter:adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
