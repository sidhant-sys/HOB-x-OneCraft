import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    target: 'es2020',
    outDir: './public/build' // Ensure the output directory is properly set
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: '/src/assets'
      },
      {
        find: '~',
        replacement: '/src/'
      }
    ]
  },
  assetsInclude: ['**/*.mp4']
});
