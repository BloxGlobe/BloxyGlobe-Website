import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL: development = "/", production = GitHub Pages or custom domain
  base: mode === "development" ? "/" : "/BloxyGlobe-Website/",
  
  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "components": path.resolve(__dirname, "./src/components"),
      "lib": path.resolve(__dirname, "./src/lib"),
      "ui": path.resolve(__dirname, "./src/components/ui"),
      "utils": path.resolve(__dirname, "./src/lib/utils"),
      "hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  
  // Optional: optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-query"]
  }
}));
