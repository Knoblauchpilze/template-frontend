// https://kit.svelte.dev/docs/adapter-node
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// https://svelte.dev/docs/kit/adapter-node#Options
		adapter: adapter({
			out: 'svelte-build'
		}),
		alias: {
			$styles: './src/styles'
		}
	}
};

export default config;
