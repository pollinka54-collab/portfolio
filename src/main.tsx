import "./styles.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { Portfolio } from "./portfolio";

const container = document.getElementById("app");
if (!container) throw new Error("Portfolio container is missing");

if (import.meta.env.PROD) {
  hydrateRoot(container, <Portfolio />);
} else {
  createRoot(container).render(<Portfolio />);
}
