import { readFile, writeFile } from "node:fs/promises";
import { renderPortfolio } from "../.prerender/render.mjs";

const indexFile = new URL("../dist/index.html", import.meta.url);
const indexHtml = await readFile(indexFile, "utf8");
const mountPoint = '<div id="app"></div>';

if (!indexHtml.includes(mountPoint)) {
  throw new Error("The built page is missing the portfolio mount point");
}

await writeFile(
  indexFile,
  indexHtml.replace(mountPoint, () => '<div id="app">' + renderPortfolio() + "</div>"),
);
