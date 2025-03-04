// ClientPage.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import ClientSidebar from "./ClientSidebar";
import ClientNavbar from "../components/Navbar";
import useTheme from "./useTheme";
import "./Client.css";
import Search from "./Search";
import Navbar from "../components/Navbar";

const ClientPage = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useTheme();

  const toggleDarkMode = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`${theme === "dark" ? "dark" : ""} border-box-page`}>
      <ClientSidebar
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

export default ClientPage;
