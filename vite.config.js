import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.png'],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
  base: './',
});
