import React from "react";

const DasServices = () => {
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",

      name: "Customer Service",
      desc: "Friendly and knowledgeable staff , Efficient and prompt order handling",
      salary: "$100K",
    },

    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",

      name: "Clean and Well-Maintained Facilities",
      desc: "Regular cleaning of tables, floors, and restrooms.",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",

      name: "Sustainability Practices",
      desc: "Use of eco-friendly products, such as biodegradable cups and straws.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",

      name: "Community Engagement",
      desc: "Events such as live music, open mic nights, and book clubs.",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",

      name: "Free Wi-Fi",
      desc: "Internet access for customers who want to work, study, or browse online.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",

      name: "Quality of Coffee",
      desc: "Use of high-quality, freshly roasted coffee beans.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl">Total Services</h3>
          <p className="text-gray-600 mt-1 text-sm">Total number of services</p>
        </div>
        <div className="mt-3 md:mt-0">
          <button className="inline-block px-4 py-2 text-white  rounded-md bg-primary  hover:bg-primary/95 duration-300 md:text-sm">
            Add member
          </button>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Services icons</th>
              <th className="py-3 px-6">Service Name</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.desc}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="#"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Delete
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

export default DasServices;
