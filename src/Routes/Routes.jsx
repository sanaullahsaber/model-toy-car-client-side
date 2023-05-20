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
        path: "my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "add-toy",
        element: <AddToy></AddToy>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "view-details/:id",
        element: <CarViewDetails></CarViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/toycars/id/${params.id}`)
      },
    ],
  },
]);

export default router;
