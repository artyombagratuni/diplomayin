import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default () => {
  import.meta.env = { ...import.meta.env };

  return defineConfig({
    plugins: [react()],
    server: {
      port: parseInt(import.meta.env.VITE_PORT) || 3000,
    },
  });
};
