import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        darkMode: 'class',
        content: ['./index.html', './src/**/*.{js,jsx}'],
        theme: {
          extend: {
            animation: {
              gradient: 'gradient 8s ease infinite',
            },
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  }, // Ensures paths are relative (helpful for GitHub Pages)
});
