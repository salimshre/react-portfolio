import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: "./",
  plugins: [react()],
  optimizeDeps: command === "serve" ? { disabled: "dev" } : {},
  server: {
    fs: {
      strict: true,
    },
  },
}));
