import React, { useState } from "react";
import "./client/Client.css";
import {
  Bitcoin,
  Book,
  BookType,
  Calendar,
  CircleDollarSign,
  DollarSign,
  Euro,
  HandCoins,
  History,
  LayoutDashboard,
  ListCollapseIcon,
  Mail,
  Pen,
  Search,
  Settings,
  User,
  Users2Icon,
  Wallet,
  Wallet2,
  WalletCardsIcon,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = ({ isSidebarCollapsed, setSidebarCollapsed }) => {
  const navigate = useNavigate();

  const LSactiveTab = localStorage.getItem("activeTab");
  const [activeTab, setActiveTab] = useState(LSactiveTab);

  const sidebarClassNames = `!p-5 fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
  ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}
  `;

  const iconClassNames = "text-gray-500 dark:text-white";
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className={iconClassNames} /> },
    {
      name: "Bookings",
      icon: <WalletCardsIcon className={iconClassNames} />,
    },

    {
      name: "Listings",
      icon: <ListCollapseIcon className={iconClassNames} />,
    },

    { name: "Active Bids", icon: <History className={iconClassNames} /> },
    {
      name: "Transactions",
      icon: <CircleDollarSign className={iconClassNames} />,
    },

    {
      name: "Users",
      icon: <User className={iconClassNames}></User>,
    },

    {
      name: "Costumer Review",
      icon: <Book className={iconClassNames} />,
    },

    {
      name: "Settings",
      icon: <Settings className={iconClassNames} />,
    },
  ];

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
                  activeTab === item.name
                    ? "bg-blue-800 border-none text-white"
                    : ""
                }
              `}
              onClick={() => {
                setActiveTab(item.name);

                localStorage.setItem("activeTab", item.name);
                // navigate(`${item.name}`);
                navigate(`${item.name.trim().replace(/\s+/g, "")}`);
              }}
            >
              <span
                className={`text-gray-500 transition-all duration-200 ${
                  activeTab === item.name ? "text-white" : ""
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
