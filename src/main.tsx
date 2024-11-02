import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { HashRouter, Routes, Route } from "react-router-dom";
import BuildDetails from "./BuildDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/builds/:buildId" element={<BuildDetails />}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
