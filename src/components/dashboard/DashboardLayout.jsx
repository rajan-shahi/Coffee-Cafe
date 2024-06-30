import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardCards from "../../pages/dashboard/DashboardCards";
import Message from "../../pages/dashboard/Message";
import Order from "../../pages/dashboard/Order";
import Products from "../../pages/dashboard/Products";
import { BsPeopleFill } from "react-icons/bs";
import Suppliers from "../../pages/dashboard/Suppliers";
import Refund from "../../pages/dashboard/Refund";

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
      case "suppliers":
        return <Suppliers />;
      case "refund":
        return <Refund />;
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
      <div className="fixed top-0 left-0 right-0 z-20">
        {/* Navbar */}
        <div className="bg-white shadow-md p-3 px-4 md:px-12 flex justify-between items-center">
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
            <h1 className="font-medium">Coffee Cafe Dashboard</h1>
            <button
              onClick={toggleDropdown}
              className="outline-none focus:outline-none"
            >
              <BsPeopleFill size={20} />
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
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md z-30 transform transition-transform md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar setCurrentView={handleNavigation} />
      </div>

      {/* Main content */}
      <div className="flex-grow w-full md:px-14 overflow-y-scroll  px-5 py-20">
        {renderView()}
      </div>
    </div>
  );
};

export default DashboardLayout;
