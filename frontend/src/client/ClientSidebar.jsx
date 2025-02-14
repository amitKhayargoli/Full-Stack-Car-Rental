import React, { useState } from "react";
import "./Client.css";
import {
  Bitcoin,
  Book,
  Bookmark,
  BookType,
  Calendar,
  CircleDollarSign,
  DollarSign,
  Euro,
  HandCoins,
  History,
  Mail,
  Pen,
  Search,
  Settings,
  Wallet,
  Wallet2,
  WalletCardsIcon,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ClientSidebar = ({ isSidebarCollapsed, setSidebarCollapsed }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  const sidebarClassNames = `!p-5 fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
  ${isSidebarCollapsed ? "w-0 hidden" : "xl:w-64 w-64"}
  `;

  const iconClassNames = "text-gray-500 dark:text-white";
  const menuItems = [
    {
      name: "Listings",
      icon: <WalletCardsIcon className={iconClassNames} />,
    },
    { name: "Search", icon: <Search className={iconClassNames} /> },
    { name: "Contact", icon: <Mail className={iconClassNames} /> },
    { name: "Favorites", icon: <Bookmark className={iconClassNames} /> },
    { name: "Active Bids", icon: <History className={iconClassNames} /> },
    {
      name: "Transaction",
      icon: <CircleDollarSign className={iconClassNames} />,
    },

    {
      name: "Costumer Review",
      icon: <Book className={iconClassNames} />,
    },
  ];

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* Sidebar Header */}
        <div className="z-50 flex h-[80px] w-54 !items-center !justify-between bg-white !px-5 !pt-6 dark:bg-black">
          <h1 className="font-bold text-2xl text-yellow-500">LODEX</h1>
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

        <ul className=" !px-1 !py-3 text-black list-none flex flex-col gap-4 dark:text-white ">
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

export default ClientSidebar;
