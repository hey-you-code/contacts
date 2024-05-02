import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "window",
  },
  server: {
    proxy: {
      "/api": {
        target: "https://contacts-api-p91s.onrender.com",
        changeOrigin: true,
      },
    },
  },

  plugins: [react()],
});
