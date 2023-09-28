import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./home/index";
import Login from "./login/index";
import Invoice from "./invoice/index";

const Routes = createBrowserRouter([
  {
    path: "/invoice",
    element: <Invoice />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Home />
  }
]);

export default Routes;
