import React from "react";

const Order = () => {
  // Example data array (replace with your actual data source)
  const orders = [
    {
      id: 1,
      invoice: "Muna Sapkota",
      date: "07 February, 2024",
      amount: "10",
      status: "Complete",
      location: "Kathmandu",
      order: "Hot Coffee",
    },
    {
      id: 2,
      invoice: "Jun Parsad Rokaya",
      date: "09 January, 2024",
      amount: "250",
      status: "Canceled",
      location: "Pokhara",
      order: "Cold Coffee",
    },
    {
      id: 3,
      invoice: "Subeena Gurung",
      date: "15 December, 2024",
      amount: "100",
      status: "Complete",
      location: "Surkhet",
      order: "Milk Coffee",
    },
    {
      id: 4,
      invoice: "Loki Chaulagain",
      date: "14 November, 2024",
      amount: "30",
      status: "Pending",
      location: "Nepalgunj",
      order: "Hot Coffee",
    },
    {
      id: 5,
      invoice: "Rajan Bahadur Shahi",
      date: "15 October, 2024",
      amount: "60",
      status: "Complete",
      location: "Kathmandu",
      order: "Premium Coffee",
    },
  ];

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <div>
          <p className="flex-1 text-xl text-gray-800">Total orders</p>
          <p className="mt-1 text-gray-600 text-sm">Total number of orders</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="flex items-center justify-start sm:justify-end">
            <div className="flex items-center">
              <label
                htmlFor="sort"
                className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
              >
                Sort by:
              </label>
              <select
                id="sort"
                name="sort"
                className="sm:mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
              >
                <option className="whitespace-no-wrap text-sm">Recent</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="text-left">
              <th className="whitespace-normal py-3 text-sm text-gray-700 sm:px-6">
                Full Name
              </th>
              <th className="whitespace-normal py-3 text-sm text-gray-700 sm:px-6">
                Order Date
              </th>
              <th className="whitespace-normal py-3 text-sm text-gray-700 sm:px-6">
                Order Location
              </th>
              <th className="whitespace-normal py-3 text-sm text-gray-700 sm:px-6">
                Order Name
              </th>
              <th className="whitespace-normal py-3 text-sm text-gray-700 sm:px-6">
                Order Quantity
              </th>
              <th className="whitespace-normal py-3 text-sm text-gray-700 sm:px-6">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="lg:border-gray-300">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="whitespace-no-wrap py-3 text-sm text-gray-500 font-normal sm:px-6">
                  {order.invoice}
                  <div className="mt-1 lg:hidden">
                    <p className="font-normal text-gray-500">{order.date}</p>
                  </div>
                </td>
                <td className="whitespace-no-wrap hidden py-3 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  {order.date}
                </td>
                <td className="whitespace-no-wrap hidden py-3 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  {order.location}
                </td>
                <td className="whitespace-no-wrap hidden py-3 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  {order.order}
                </td>
                <td className="whitespace-no-wrap py-3 px-6 text-right text-sm text-gray-600 lg:text-left">
                  {order.amount}
                  <div
                    className={`flex mt-1 ml-auto w-fit items-center rounded-full ${
                      order.status === "Complete"
                        ? "bg-blue-600 text-white"
                        : order.status === "Canceled"
                        ? "bg-red-200 text-red-500"
                        : "bg-green-400 text-white" // Changed to green for Pending status
                    } py-2 px-3 text-left text-xs font-medium lg:hidden`}
                  >
                    {order.status}
                  </div>
                </td>
                <td className="whitespace-no-wrap hidden py-3 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  <div
                    className={`inline-flex items-center rounded-full ${
                      order.status === "Complete"
                        ? "bg-blue-600 text-white"
                        : order.status === "Canceled"
                        ? "bg-red-200 text-red-500"
                        : "bg-green-400 text-white" // Changed to green for Pending status
                    } py-2 px-3 text-xs`}
                  >
                    {order.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
