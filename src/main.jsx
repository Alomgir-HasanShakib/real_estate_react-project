import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import Authentication from "./Contexts/Authentication/Authentication.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={router}></RouterProvider>
    </Authentication>
  </React.StrictMode>
);
