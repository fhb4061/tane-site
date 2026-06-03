import path from "path";
import { defineConfig } from "vitest/config";

// clean this up so we can possibly just have to manage one file for the alias
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
  },
});
