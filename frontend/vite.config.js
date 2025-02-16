import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "localhost",
      "0725-2400-1a00-b080-51a6-a44b-cde2-4f10-b694.ngrok-free.app",
    ],
    port: 5173, // Specify the port here
    open: true, // Optionally, open the browser automatically when the server starts
  },
});
