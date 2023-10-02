import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Recipies from "../pages/Recipies";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
      {
        path: "recipies",
        element: <Recipies></Recipies>,

        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
    ],
  },
]);

export default mainRoutes;
