import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.ts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactLenis } from "lenis/react";
gsap.registerPlugin(ScrollTrigger);

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
root.render(
  <ReactLenis root>
    <RouterProvider router={router} />
  </ReactLenis>
);

reportWebVitals();
