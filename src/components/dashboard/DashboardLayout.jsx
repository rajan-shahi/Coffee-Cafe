import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardCards from "../../pages/dashboard/DashboardCards";
import Message from "../../pages/dashboard/Message";
import Order from "../../pages/dashboard/Order";
import Products from "../../pages/dashboard/Products";

const DashboardLayout = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  return (
    <div className="relative flex h-screen">
      {/* Top bar for mobile */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center z-20 md:hidden">
        <button
          onClick={toggleSidebar}
          className="outline-none focus:outline-none"
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
        <h1 className="text-xl font-bold">Dashboard</h1>
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
      <div className="flex-grow w-full p-10 pt-20 md:pt-10">{renderView()}</div>
    </div>
  );
};

export default DashboardLayout;
