import React from "react";

const Refund = () => {
  const tableItems = [
    {
      name: "Rajan Bahadur Shahi",
      location: "Kathmandu New Road",
      date: "15 October, 2024",
      quantity: 20,
      pricePerUnit: 350, // Example price per unit
      refundType: "Premium Coffee", // Example refund type
    },
    {
      name: "Jun Parsad Rokaya",
      location: "Nepalgunj Buspark",
      date: "14 November, 2024",
      quantity: 32,
      pricePerUnit: 180, // Example price per unit
      refundType: "Hot Coffee", // Example refund type
    },
    {
      name: "Mina Sapkota",
      location: "Surkhet Ari Chowk",
      date: "15 December, 2024",
      quantity: 30,
      pricePerUnit: 60, // Example price per unit
      refundType: "Milk Coffee", // Example refund type
    },
    {
      name: "Dinesh Kumar Shah",
      location: "Pokhara Fewa Lake",
      date: "09 January, 2024",
      quantity: 80,
      pricePerUnit: 160, // Example price per unit
      refundType: "Cold Coffee", // Example refund type
    },
    {
      name: "Loki Chaulagain",
      location: "Mahendra Nagar",
      date: "07 February, 2024",
      quantity: 25,
      pricePerUnit: 180, // Example price per unit
      refundType: "Hot Coffee", // Example refund type
    },
  ];

  // Calculate refund price for each item
  tableItems.forEach((item) => {
    item.refundPrice = item.quantity * item.pricePerUnit;
  });

  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl">Total Refunds</h3>
        <p className="text-gray-600 text-sm mt-1">Total number of refunds</p>
      </div>
      <div className="mt-8 shadow-sm border rounded-lg md:overflow-hidden overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600  text-sm border-b">
            <tr className="divide-x">
              <th className="py-3 px-6">Full Name</th>
              <th className="py-3 px-6">Refund Type</th>
              <th className="py-3 px-6">Location</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Quantity</th>
              <th className="py-3 px-6">Price per Unit</th>
              <th className="py-3 px-6">Refund Price</th>{" "}
              {/* Added refund price column header */}
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, index) => (
              <tr key={index} className="divide-x">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                  <span>{index + 1}</span>
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.refundType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.pricePerUnit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.refundPrice}
                </td>{" "}
                {/* Added refund price cell */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Refund;
