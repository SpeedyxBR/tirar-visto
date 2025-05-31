import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TirarVisto } from "./TirarVisto";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TirarVisto />
  </StrictMode>
);
