import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Public_Route() {
  const get = localStorage.getItem("isloggedin");
  return !get ? <Outlet /> : <Navigate to="/" />;
}
