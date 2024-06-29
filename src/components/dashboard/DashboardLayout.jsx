import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardCards from "../../pages/dashboard/DashboardCards";
import Message from "../../pages/dashboard/Message";
import Order from "../../pages/dashboard/Order";
import Products from "../../pages/dashboard/Products";
import { BsPeopleFill } from "react-icons/bs";

const DashboardLayout = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardCards />;
      case "messages":
        return <Message />;
      case "order":
        return <Order />;
      case "products":
        return <Products />;
      default:
        return <DashboardCards />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
    if (window.innerWidth < 768) {
      // Only close sidebar on mobile devices
      setIsSidebarOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement your logout functionality here
    console.log("Logged out successfully");
  };

  return (
    <div className="relative flex h-screen">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-3  px-4  md:px-12 flex justify-between items-center z-20 w-full">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="outline-none focus:outline-none md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="relative flex gap-10">
          <h1 className=" font-medium">Coffee Cafe Dashboard</h1>
          <button
            onClick={toggleDropdown}
            className="outline-none focus:outline-none"
          >
            <BsPeopleFill  size={20}/>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-8 w-36 bg-white shadow-lg rounded-lg py-2">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                Edit Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                onClick={handleLogout}
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Background dimming for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-10 transition-opacity md:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md z-20 transform transition-transform md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar setCurrentView={handleNavigation} />
      </div>

      {/* Main content */}
      <div className="flex-grow w-full p-10 pt-20 md:pt-24">{renderView()}</div>
    </div>
  );
};

export default DashboardLayout;
