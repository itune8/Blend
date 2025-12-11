import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable better code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-tooltip', '@radix-ui/react-dialog', '@radix-ui/react-slot'],
          'query-vendor': ['@tanstack/react-query'],
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 500,
    // Enable minification
    minify: 'esbuild',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate source maps for production (optional, remove for smaller builds)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
