import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProfileUpdate from "../Pages/ProfileUpdate";
import Registration from "../Components/Registration";
import Login from "../Components/Login";
import Pricing from "../Pages/Pricing";
import UserProfile from "../Pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);
export default router;
