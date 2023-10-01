import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
  },
]);

export default mainRoutes;
