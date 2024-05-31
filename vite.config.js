import { defineConfig } from "vite"; // node_modules/vite/index.cjsのdefineConfigの内容を上書きする?
import vitePluginPugStatic from '@macropygia/vite-plugin-pug-static'
// import {ViteEjsPlugin} from "vite-plugin-ejs";

export default defineConfig({
  root: "src",
  build:{
    outDir:"../dist",
    emptyOutDir:true,
    rollupOptions:{
      input:["src/index.pug","src/about/index.pug"],
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return 'assets/images/[name].[ext]';
          }
          if (/\.(css|scss)$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        }
      }
    }
  },
  plugins: [
    vitePluginPugStatic({
      buildOptions: { basedir: "./src" },
      serveOptions: { basedir: "./src" },
    }),
  ],
 })