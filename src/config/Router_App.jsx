import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import Private_Route from "./Private_Route";
import Public_Route from "./Public_Route";
import Product_Details from "../Pages/Product_Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Private_Route />}>
        <Route path="" element={<Home />} />
        <Route path="/ProductDetails/:id" element={<Product_Details />} />
      </Route>
      <Route element={<Public_Route />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Route>
  )
);

export function Router_App() {
  return <RouterProvider router={router} />;
}
