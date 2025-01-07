import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig( {
	plugins: [ react() ],
	base: '/block-development-examples/',
	build: {
		outDir: 'dist',
	},
} );
