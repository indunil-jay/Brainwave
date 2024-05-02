import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
});
