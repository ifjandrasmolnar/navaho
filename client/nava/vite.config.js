import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const serverAddress = "http://localhost:5000/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: serverAddress,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
