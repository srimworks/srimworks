import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://srimworks.pages.dev',
  output: 'static',
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    ssr: {
      noExternal: ['react-phone-input-2', 'react-router-dom']
    }
  }
});
