import {defineConfig} from "vite";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  build: {
    lib: {
      entry: "./src/index.css.ts",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
});