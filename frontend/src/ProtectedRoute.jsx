import React from "react";
import { Navigate, Outlet, replace } from "react-router-dom";

const ProtectedRoute = ({ roleRequired }) => {
  const token = localStorage.getItem("token"); // ✅ Check for token'

  const role = localStorage.getItem("role");

  console.log(role);

  if (!token) {
    return <Navigate to="/" replace />; // ✅ Redirect if no token
  }
  if (role !== roleRequired) {
    return <Navigate to="/unauthorized" replace />; // Redirect if role doesn't match
  }

  return <Outlet />;

  // return token ? <Outlet /> : <Navigate to="/" replace />; // ✅ Redirect if no token
};

export default ProtectedRoute;
