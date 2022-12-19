import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue2";
import checker from "vite-plugin-checker";
import dynamicImport from "vite-plugin-dynamic-import";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: false,
      },
    }),
    dynamicImport({}),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".vue"],
    alias: {
      "@@": path.resolve(__dirname, "./"),
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   hmr: false
  // }
  // define: {
  //   "process.env": process.env
  // }
  // server: {
  //   port: 8083,
  //   proxy: {}
  // }
});
