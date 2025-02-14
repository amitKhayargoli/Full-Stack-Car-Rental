import React from "react";
import { Menu, Moon, Sun, Search, Link, Settings } from "lucide-react";
import AccountMenu from "./AccountMenu";

const Navbar = ({
  isSidebarCollapsed,
  setSidebarCollapsed,
  isDarkMode,
  toggleDarkMode,
}) => {
  console.log("Sidebar COllapsed?" + isSidebarCollapsed); // This will show if the sidebar is collapsed or not
  // console.log(isDarkMode);
  return (
    <div
      className={`w-full h-25 flex items-center justify-between bg-[#f9f9f9] px-4 py-3 dark:bg-black transition-all duration-300 
 border-b-[0.5px] border-b-gray-200 dark:border-gray-800`}
    >
      <div className="!ml-4 flex items-center">
        {isSidebarCollapsed ? (
          <li
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
            className="list-none"
          >
            <Menu className="dark:text-white" />
          </li>
        ) : (
          ""
        )}

        {/* Search Box */}
        <div className=" !ml-8 flex items-center gap-2 bg-white shadow-slate-400 w-[200px] xl:w-[350px] h-[40%] !px-2 !py-2 dark:bg-[#343436] rounded-sm">
          <Search
            strokeWidth={1.5}
            className="text-gray-900 dark:text-gray-200 "
          ></Search>

          <input
            type="text"
            placeholder="Search Cars"
            className="focus:outline-none"
          />
        </div>
      </div>

      {/* Theme Toggle and Settings */}
      <div className="flex items-center gap-2 !mr-2">
        <button
          onClick={toggleDarkMode}
          className={`rounded p-2 ${
            isDarkMode ? `dark:hover:bg-gray-700` : `hover:bg-gray-100`
          }`}
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
          ) : (
            <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
          )}
        </button>
        <AccountMenu></AccountMenu>

        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block order-first"></div>
      </div>
    </div>
  );
};

export default Navbar;
