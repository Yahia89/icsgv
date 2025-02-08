import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/icsgv/", // Changed from "/icsgv/" to "/"
  build: {
    outDir: "dist",
  },
});
