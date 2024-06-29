import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardCards from "../../pages/dashboard/DashboardCards";
import Message from "../../pages/dashboard/Message";
import Order from "../../pages/dashboard/Order";

const DashboardLayout = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardCards />;
      case "messages":
        return <Message />;
        case "order":
        return <Order />;
      default:
        return <DashboardCards />;
    }
  };

  return (
    <div className="flex ">
      <Sidebar setCurrentView={setCurrentView} />
      <div className="flex-grow w-full  px-10 py-10">{renderView()}</div>
    </div>
  );
};

export default DashboardLayout;
