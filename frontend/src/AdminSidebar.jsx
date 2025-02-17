import React, { useState, useEffect } from "react";
import "./client/Client.css";
import {
  LayoutDashboard,
  WalletCardsIcon,
  ListCollapseIcon,
  History,
  User,
  Book,
  Settings,
  X,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const AdminSidebar = ({ isSidebarCollapsed, setSidebarCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Access the current location
  const LSactiveTab = localStorage.getItem("activeTab");
  const [activeTab, setActiveTab] = useState(LSactiveTab || "/Admin/Dashboard");

  const sidebarClassNames = `!p-5 fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
  ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`;

  const iconClassNames = "text-gray-500 dark:text-white";
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className={iconClassNames} />,
      path: "/Admin/Dashboard",
    },
    {
      name: "Bookings",
      icon: <WalletCardsIcon className={iconClassNames} />,
      path: "/Admin/Bookings",
    },
    {
      name: "Listings",
      icon: <ListCollapseIcon className={iconClassNames} />,
      path: "/Admin/Listings",
    },
    {
      name: "Active Bids",
      icon: <History className={iconClassNames} />,
      path: "/Admin/ActiveBids",
    },
    {
      name: "Users",
      icon: <User className={iconClassNames} />,
      path: "/Admin/Users",
    },
    {
      name: "Customer Review",
      icon: <Book className={iconClassNames} />,
      path: "/Admin/CustomerReview",
    },
    {
      name: "Settings",
      icon: <Settings className={iconClassNames} />,
      path: "/Admin/Settings",
    },
  ];

  // Sync the active tab with the current route
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* Sidebar Header */}
        <div className="z-50 flex h-[80px] w-54 !items-center !justify-between bg-white !px-5 dark:bg-black">
          <h1 className="font-bold text-2xl !mb-5 text-yellow-500">LODEX</h1>
          {!isSidebarCollapsed && (
            <button
              className="py-3"
              onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
            >
              <X className="h-6 w-6 !mb-5 !mr-2 text-gray-800 dark:hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>

        {/* Menu */}
        <h2 className="!mx-5 !text-md text-gray-600">Menu</h2>

        <ul className="!px-1 !py-3 text-black list-none flex flex-col gap-4 dark:text-white">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`!px-5 !py-3 flex gap-3 cursor-pointer rounded-2xl transition-all duration-500 ease-in-out
                ${
                  activeTab === item.path
                    ? "bg-blue-800 border-none text-white"
                    : ""
                }
              `}
              onClick={() => {
                setActiveTab(item.path);
                localStorage.setItem("activeTab", item.path);
                navigate(item.path); // Navigate to the exact path
              }}
            >
              <span
                className={`text-gray-500 transition-all duration-200 ${
                  activeTab === item.path ? "text-white" : ""
                }`}
              >
                {item.icon}
              </span>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
