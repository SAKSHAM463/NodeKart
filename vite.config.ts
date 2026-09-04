import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — smallest, most-cached chunk
          'react-vendor': ['react', 'react-dom'],
          // Ethers.js — large but rarely changes
          'ethers-vendor': ['ethers'],
          // Lucide icons
          'icons-vendor': ['lucide-react'],
        },
      },
    },
  },
});
