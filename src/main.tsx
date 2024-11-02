import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuildDetails from "./BuildDetails.tsx";

const router = createBrowserRouter([
  { path: "/wynn-featured-builds", element: <App /> },
  { path: "/wynn-featured-builds/builds/:buildId", element: <BuildDetails /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
