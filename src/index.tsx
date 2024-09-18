import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.ts";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
gsap.registerPlugin(useGSAP);

const lazyWrap = (factory: () => Promise<any>) => {
  return async () => {
    const page = await factory();
    return {
      Component: page.default || page.Component,
      ErrorBoundary: page.ErrorBoundary,
    };
  };
};

const router = createBrowserRouter([
  {
    path: "",
    lazy: lazyWrap(() => import("./layout/dashboard.tsx")),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

reportWebVitals();
