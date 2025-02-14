import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // ✅ Check for token

  return token ? <Outlet /> : <Navigate to="/" replace />; // ✅ Redirect if no token
};

export default ProtectedRoute;
