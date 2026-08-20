import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		// Bind to all interfaces so the v0 preview proxy can reach the dev server
		// (previously it only listened on 127.0.0.1, which the preview cannot reach).
		host: true,
		port: 5173,
		strictPort: false,
		// Allow the preview's forwarded Host header
		allowedHosts: true
	}
};

export default config;
