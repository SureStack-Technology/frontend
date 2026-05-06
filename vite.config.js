import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({  
  plugins: [
    react(),
    Sitemap({
      baseUrl: 'https://surestack.tech',
      generateRobotsTxt: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'SureStack Technology',
          description: 'Risk Analysis for Crypto',
        },
      },
    }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        // manualChunks: {
        //   vendor: ['react', 'react-dom', 'react-router']
        // },
      },
    },
  },
})