import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProfileUpdate from "../Pages/ProfileUpdate";
import Registration from "../Components/Registration";
import Login from "../Components/Login";

import UserProfile from "../Pages/UserProfile";
import PropertyDetails from "../Pages/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import Booking from "../Pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/propertyBook",
        element: <Booking></Booking>,
      },
      {
        path: "/profile-up",
        element: <ProfileUpdate></ProfileUpdate>,
      },
      {
        path: "/signup",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/propertyDetails/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
export default router;
