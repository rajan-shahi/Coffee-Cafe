import React, { useState } from "react";

const DasServices = () => {
  const [showAddService, setShowAddService] = useState(false);
  const [services, setServices] = useState([
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Customer Service",
      desc: "Friendly and knowledgeable staff, Efficient and prompt order handling",
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
  ]);

  const [newService, setNewService] = useState({
    avatar: "",
    name: "",
    desc: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      // Handle file input for avatar
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewService({
            ...newService,
            avatar: reader.result,
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      // Handle other inputs (name, desc)
      setNewService({ ...newService, [name]: value });
    }
  };

  const handleAddService = (e) => {
    e.preventDefault();
    // Add the new service to the services list
    const updatedServices = [...services, newService];
    setServices(updatedServices);
    // Reset form fields and close the overlay
    setNewService({ avatar: "", name: "", desc: "" });
    setShowAddService(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl">Total Services</h3>
          <p className="text-gray-600 mt-1 text-sm">
            Total number of services: {services.length}
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={() => setShowAddService(true)}
            className="inline-block px-4 py-2 text-white rounded-md bg-primary hover:bg-primary/95 duration-300 md:text-sm"
          >
            Add Service
          </button>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Service Icon</th>
              <th className="py-3 px-6">Service Name</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {services.map((item, idx) => (
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
                  <button
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg mr-2"
                    onClick={() => handleEdit(item)} // Example handler for editing
                  >
                    Edit
                  </button>
                  <button
                    className="py-2 px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    onClick={() => handleDelete(item)} // Example handler for deletion
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Service Overlay */}
      {showAddService && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-max p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Add Service Form</h2>
            <form onSubmit={handleAddService}>
              <label className="block mb-2">
                Service Image:
                <input
                  type="file"
                  name="avatar"
                  required
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1"
                />
              </label>
              {newService.avatar && (
                <img
                  src={newService.avatar}
                  alt="Selected Service"
                  className="block mx-auto h-32 w-auto max-w-full mb-2 rounded-lg shadow-md"
                />
              )}
              <label className="block mb-2">
                Service Name:
                <input
                  required
                  type="text"
                  name="name"
                  value={newService.name}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mt-1"
                  placeholder="Enter service name"
                />
              </label>
              <label className="block mb-2">
                Description:
                <textarea
                  name="desc"
                  required
                  value={newService.desc}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mt-1"
                  rows="4"
                  placeholder="Enter service description"
                />
              </label>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setShowAddService(false)}
                  className="px-4 py-2 mr-4   text-gray-700 rounded-md bg-gray-200 duration-500 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary/95"
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DasServices;
