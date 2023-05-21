import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import Blog from "../pages/Blog/Blog";
import CarViewDetails from "../pages/Shared/CarViewDetails/CarViewDetails";
import PrivateRoute from "./PrivateRoute";
import AllToyDetails from "../pages/AllToys/AllToyDetails";
import UpdateMyToy from "../pages/MyToys/UpdateMyToy";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "all-toy-details/:id",
        element: (
          <PrivateRoute>
            <AllToyDetails></AllToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://73-model-toy-cars-server.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "bookings/:id",
        element: (
          <PrivateRoute>
            <UpdateMyToy></UpdateMyToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://73-model-toy-cars-server.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: "add-toy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "view-details/:id",
        element: (
          <PrivateRoute>
            <CarViewDetails></CarViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://73-model-toy-cars-server.vercel.app/toycars/id/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
