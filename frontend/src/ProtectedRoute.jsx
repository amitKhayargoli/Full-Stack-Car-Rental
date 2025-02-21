import React from "react";
import { Navigate, Outlet, replace } from "react-router-dom";

const ProtectedRoute = ({ roleRequired }) => {
  const token = localStorage.getItem("token");

  const role = localStorage.getItem("role");

  console.log(role);

  if (!token) {
    return <Navigate to="/" replace />;
  }
  if (role !== roleRequired) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
