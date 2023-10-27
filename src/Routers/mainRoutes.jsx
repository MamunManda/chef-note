import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Recipies from "../pages/Recipies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Category from "../pages/Category";
import Recipie from "../pages/Recipie";
import PrivateRoute from "./PrivateRoute";
import Kitchen from "../pages/Kitchen";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/recipies/:category",
        element: <Category></Category>,

        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipies/${params.category}`),
      },
      {
        path: "recipie/:id",
        element: (
          <PrivateRoute>
            <Recipie></Recipie>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipie/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "kitchen",
        element: (
          <PrivateRoute>
            <Kitchen></Kitchen>
          </PrivateRoute>
        ),
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
    ],
  },
]);

export default mainRoutes;
