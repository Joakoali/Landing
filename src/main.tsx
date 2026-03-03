import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header name="Joaquin" lastname="Alizegui" title="Fullstack Developer" />
  </StrictMode>,
);
