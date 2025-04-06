import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

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
});
