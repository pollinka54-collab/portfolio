import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

const basePath = (process.env.PORTFOLIO_BASE_PATH ?? "").replace(/^\/+|\/+$/g, "");
const siteUrl = new URL(process.env.PORTFOLIO_SITE_URL ?? "https://pollinka54-collab.github.io/portfolio/");
siteUrl.pathname = siteUrl.pathname.replace(/\/?$/, "/");

export default defineConfig(({ isSsrBuild }) => ({
  base: basePath ? "/" + basePath + "/" : "/",
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  plugins: [
    react(),
    {
      name: "portfolio-metadata",
      transformIndexHtml: (html) => html.replaceAll("__PORTFOLIO_URL__", siteUrl.href),
    },
  ],
  build: isSsrBuild
    ? { copyPublicDir: false, rolldownOptions: { output: { entryFileNames: "render.mjs" } } }
    : {},
}));
