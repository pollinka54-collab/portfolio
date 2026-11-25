import { renderToString } from "react-dom/server";
import { Portfolio } from "./portfolio";

export function renderPortfolio() {
  return renderToString(<Portfolio />);
}
