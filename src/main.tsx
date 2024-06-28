import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import Router from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
