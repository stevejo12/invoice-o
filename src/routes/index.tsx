import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./home/index";
import Login from "./login/index";
import Invoice from "./invoice/index";
import InvoicePreview from "./invoicePreview";

const Routes = createBrowserRouter([
  {
    path: "/invoice",
    element: <InvoicePreview />
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
