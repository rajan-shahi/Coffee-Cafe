import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import c1 from "../../assets/coffee2.png";

const Suppliers = () => {
  const [tableItems, setTableItems] = useState([
    {
      avatar: c1,
      order: "Hot Coffee",
      date: "1 October, 2024",
      location: "Kathmandu, Nepal",
      quantity: "150",
      received: true,
    },
    {
      avatar: c1,
      order: "Premium Coffee",
      date: "14 November, 2024",
      location: "Surkhet, Nepal",
      quantity: "90",
      received: false,
    },
    {
      avatar: c1,
      order: "Cold Coffee",
      date: "15 December, 2024",
      location: "Nepalgunj, Nepal",
      quantity: "50",
      received: true,
    },
    {
      avatar: c1,
      order: "Milk Coffee",
      date: "9 January, 2024",
      location: "Dhangadi, Nepal",
      quantity: "80",
      received: false,
    },
    {
      avatar: c1,
      order: "Premium Coffee",
      date: "15 October, 2024",
      location: "Pokhara, Nepal",
      quantity: "30",
      received: true,
    },
  ]);

  const toggleReceived = (index) => {
    const newItems = [...tableItems];
    newItems[index].received = !newItems[index].received;
    setTableItems(newItems);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl">Total Suppliers</h3>
        <p className="text-gray-600 mt-1 text-sm">Total number of suppliers</p>
      </div>
      <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm border-b">
            <tr>
              <th className="py-3 px-6">Suppliers Type</th>
              <th className="py-3 px-6">Suppliers Date</th>
              <th className="py-3 px-6">Suppliers Location</th>
              <th className="py-3 px-6">Suppliers Quantity</th>
              <th className="py-3 px-6">Received</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img
                    src={item.avatar}
                    className="w-10 h-10 rounded-full"
                    alt={item.order}
                  />
                  <div>
                    <span className="block text-gray-700 text-sm font-medium">
                      {item.order}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${
                    item.received
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  } flex items-center justify-center`}
                >
                  {item.received ? (
                    <>
                      <FontAwesomeIcon icon={faCheck} />
                      <span className="ml-2">Received</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faTimes} />
                      <span className="ml-2">Not Received</span>
                    </>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => toggleReceived(idx)}
                    className="  bg-primary hover:bg-primary/95 duration-500 text-white py-1 px-3 rounded"
                  >
                    Change
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
