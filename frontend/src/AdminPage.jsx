// ClientPage.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Navbar from "./components/Navbar";
import useTheme from "./client/useTheme";
import "./client/Client.css";

const AdminPage = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useTheme();

  const toggleDarkMode = () => setTheme(theme === "light" ? "dark" : "light");
  console.log("setSidebarCollapsed:", setSidebarCollapsed);
  return (
    <div className={`${theme === "dark" ? "dark" : ""} border-box-page`}>
      <AdminSidebar
        isSidebarCollapsed={isSidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <div
        className={`${
          isSidebarCollapsed ? "!px-0" : "xl:!pl-64" // Adjusts margin based on sidebar state
        } `}
      >
        <Navbar
          isSidebarCollapsed={isSidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          isDarkMode={theme === "dark"}
          toggleDarkMode={toggleDarkMode}
        />

        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
