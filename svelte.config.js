import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { preprocessThrelte } from '@threlte/preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
    },
    preprocess: seqPreprocessor([vitePreprocess(), preprocessThrelte()]),
};

export default config;
