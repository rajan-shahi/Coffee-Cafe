import React from "react";
import c1 from "../../assets/coffee2.png";

const Suppliers = () => {
  const tableItems = [
    {
      avatar: c1,
      order: "Hot Coffee",
      date: "1 October, 2024",
      location: "kathmandu Nepal",
      quantity: "150",
    },
    {
      avatar: c1,
      order: "Premium Coffee",
      date: "14 November, 2024",
      location: "Surkhet Nepal",
      quantity: "90",
    },
    {
      avatar: c1,
      order: "Cold Coffee",
      date: "15 December, 2024",
      location: "Nepalgunj Nepal",
      quantity: "50",
    },
    {
      avatar: c1,
      order: "Milk Coffee",
      date: "09 January,2024",
      location: "Dhangadi Nepal",
      quantity: "80",
    },
    {
      avatar: c1,
      order: "Premium Coffee",
      date: "15 October, 2024",
      location: "Pokhara Nepal",
      quantity: "30",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="max-w-lg">
        <h3 className="text-gray-800   text-xl">Total Suppliers</h3>
        <p className="text-gray-600 mt-1 text-sm">Total number of suppliers</p>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm border-b">
            <tr>
              <th className="py-3 px-6">Suppliers Name</th>
              <th className="py-3 px-6">Suppliers Date</th>
              <th className="py-3 px-6">Suppliers Location</th>
              <th className="py-3 px-6">Suppliers Quantity</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img
                    src={item.avatar}
                    className="w-10 h-10 rounded-full"
                    alt={item.name}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
