import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import mainRoutes from "./Routers/mainRoutes";
import "animate.css";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={mainRoutes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
