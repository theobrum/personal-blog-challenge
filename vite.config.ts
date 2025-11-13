import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { skate } from 'skate';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		skate({
			errorHandling: 'result',
			outFile: 'src/lib/api/client.ts',
			mode: 'auto',
			addExtensionToOutFile: false,
			importFormat: 'esm'
		}) as any
	]
});