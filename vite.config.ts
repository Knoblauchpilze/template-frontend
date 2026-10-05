import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
// https://kit.svelte.dev/docs/adapter-node
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: vitePreprocess(),

			// https://svelte.dev/docs/kit/adapter-node#Options
			adapter: adapter({
				out: 'svelte-build'
			})
		}),
		tailwindcss()
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			reporter: ['json'],
			include: ['src/**/*.{js,ts,svelte}'],
			exclude: ['**/index.ts']
		}
	}
});
