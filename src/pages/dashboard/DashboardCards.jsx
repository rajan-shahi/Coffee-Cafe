import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { TfiMoney } from "react-icons/tfi";
import { GiPlayerPrevious } from "react-icons/gi";
import { VscSend } from "react-icons/vsc";

const data = [
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Total Products",
    total: "Total number of products",

    amount: "1200",
    trendIcon: <MdShoppingCart size={20} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Total Orders",
    total: "Total number of orders",

    amount: "500",
    trendIcon: <FaTruck size={20} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Total Inquiries",
    total: "Total number of inquiries",

    amount: "150",
    trendIcon: <TbMessage size={20} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Total Refunds",
    total: "Total number of refunds",
    amount: "0",
    trendIcon: <TfiMoney size={20} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Total Revenue",
    total: "Total number of revenue",
    amount: "$23.4k",
    trendIcon: <GiPlayerPrevious size={20} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Total Suppliers",
    total: "Total number of suppliers",
    amount: "670",
    trendIcon: <VscSend size={20} />,
  },
];

const DashboardCards = () => {
  return (
    <div className="flex  justify-center items-center">
      <div className=" grid gap-16 sm:grid-cols-3  w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex  justify-between  px-6  py-6 shadow-md hover:shadow-xl duration-500 rounded-md shadow-primary/20"
          >
            <div>
              <p className=" font-medium">{item.title}</p>
              <p className="mt-2 text-xl font-medium">{item.amount}</p>
              <p className=" text-xs  text-gray-500 mt-2">{item.total}</p>
            </div>
            <div>{item.trendIcon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
