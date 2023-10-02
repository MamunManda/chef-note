import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
    ],
  },
]);

export default mainRoutes;
