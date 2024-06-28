import React from "react";
import Sidebar from "../dascomponents/Sidebar";
import DashboardCards from "../daspages/DashboardCards";

export default function DasLayout() {
  return (
    <div className=" flex px-1">
      <div>
        <Sidebar />
      </div>
      <div className=" w-full  px-10 py-10">
        <DashboardCards />
      </div>
    </div>
  );
}
