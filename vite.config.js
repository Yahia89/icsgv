import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: './index.html',  // Remove leading slash
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
  base: './', // Ensure relative paths in production
});
