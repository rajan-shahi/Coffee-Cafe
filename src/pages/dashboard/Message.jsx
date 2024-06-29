import React from "react";

const Message = () => {
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      phone_number: "9866448106",
      location: "Kathmandu Nepla",
      order: "Premium Coffee",
      date: "2024-06-30",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      phone_number: "9866448106",
      location: "Surkhet Nepal",
      order: "Hot Coffee",
      date: "2024-06-29",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      phone_number: "9866448106",
      location: "Pokhara Nepal",
      order: "Cold Coffee",
      date: "2024-06-28",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      phone_number: "9866448106",
      location: "Nepalgunj Nepal",
      order: "Milk Coffee",
      date: "2024-06-27",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      phone_number: "9866448106",
      location: "Dang Nepal",
      order: "Hot Coffee",
      date: "2024-06-26",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl">Total messages</h3>
          <p className="text-gray-600 text-sm mt-1">Total number of Messages</p>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Mobile Number</th>
              <th className="py-3 px-6">Location</th>
              <th className="py-3 px-6">Order</th>
              <th className="py-3 px-6">Message date</th>
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
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.phone_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.order}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Message;
