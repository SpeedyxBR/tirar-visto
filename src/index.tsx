import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TirarVisto } from "./screens/TirarVisto";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TirarVisto />
  </StrictMode>,
);
