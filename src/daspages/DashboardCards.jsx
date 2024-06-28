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
    title: "Products",
    amount: "1200",
    trendIcon: <MdShoppingCart size={25} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Orders",
    amount: "500",
    trendIcon: <FaTruck size={25} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Inquiry",
    amount: "150",
    trendIcon: <TbMessage size={25} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Refunds",
    amount: "0",
    trendIcon: <TfiMoney size={25} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Revenue",
    amount: "$23.4k",
    trendIcon: <GiPlayerPrevious size={25} />,
  },
  {
    bgColor: "bg-primary",
    iconColor: "text-white",
    title: "Suppliers",
    amount: "670",
    trendIcon: <VscSend size={25} />,
  },
];

const DashboardCards = () => {
  return (
    <div className="flex  justify-center items-center">
      <div className=" grid gap-16 sm:grid-cols-3  w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col py-6 shadow-lg hover:shadow-xl duration-500 rounded-md shadow-primary/20"
          >
            <div
              className={`h-max w-max rounded-xl ${item.bgColor} p-3 ${item.iconColor}`}
            >
              {item.trendIcon}
            </div>
            <p className="mt-4 font-medium">{item.title}</p>
            <p className="mt-2 text-xl font-medium">{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
