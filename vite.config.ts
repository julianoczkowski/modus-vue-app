import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Tell Vue to ignore all components starting with "modus-wc"
          isCustomElement: (tag) => tag.startsWith("modus-wc"),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue", "vue-router"],
          modus: [
            "@trimble-oss/moduswebcomponents",
            "@trimble-oss/moduswebcomponents-vue",
          ],
        },
      },
    },
  },
});
