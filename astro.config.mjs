// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages deployment config
  // Site: the canonical URL of the deployed site
  // Base: the repository name (GitHub Pages serves from a subpath by default)
  site: 'https://kostis-kounadis.github.io',
  base: '/generative-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});