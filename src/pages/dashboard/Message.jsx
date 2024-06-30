import React, { useState } from "react";

const Message = () => {
  const [replyingTo, setReplyingTo] = useState(null); // State to track which item is being replied to (null means no reply)
  const [replyText, setReplyText] = useState(""); // State to hold the reply message
  const [successMessage, setSuccessMessage] = useState(""); // State to show success message

  const [tableItems, setTableItems] = useState([
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Rajan Bahadur Shahi",
      phone_number: "9866448106",
      location: "Kathmandu Nepla",
      order: "Premium Coffee",
      date: "2024-06-30",
      replyMessage: null, // Initially no reply message
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Loki Chaulagain",
      phone_number: "9866448106",
      location: "Surkhet Nepal",
      order: "Hot Coffee",
      date: "2024-06-29",
      replyMessage: null,
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Subeena Gurung",
      phone_number: "9866448106",
      location: "Pokhara Nepal",
      order: "Cold Coffee",
      date: "2024-06-28",
      replyMessage: null,
    },
    {
      id: 4,
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      phone_number: "9866448106",
      location: "Nepalgunj Nepal",
      order: "Milk Coffee",
      date: "2024-06-27",
      replyMessage: null,
    },
    {
      id: 5,
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Muna Sapkota",
      phone_number: "9866448106",
      location: "Dang Nepal",
      order: "Hot Coffee",
      date: "2024-06-26",
      replyMessage: null,
    },
  ]);

  const handleReply = (itemId, itemName) => {
    setReplyingTo({ id: itemId, name: itemName });
    setSuccessMessage("");
    setReplyText(""); // Clear reply text when initiating a reply
  };

  const handleInputChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyText.trim() !== "") {
      // Update tableItems with the reply message
      const updatedItems = tableItems.map((item) =>
        item.id === replyingTo.id ? { ...item, replyMessage: replyText } : item
      );
      setTableItems(updatedItems);

      // Clear states after sending the message
      setSuccessMessage("Message sent successfully!");
      setReplyText("");
      setReplyingTo(null); // Clear replyingTo state after sending the message
    } else {
      setSuccessMessage("Please enter a message.");
    }
  };

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
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item) => (
              <React.Fragment key={item.id}>
                <tr>
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.order}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleReply(item.id, item.name)}
                      className="text-blue-600 hover:text-blue-900 focus:outline-none"
                    >
                      Reply
                    </button>
                  </td>
                </tr>
                {item.replyMessage && (
                  <tr>
                    <td colSpan="6" className="px-6 py-4">
                      <p className="text-gray-700">
                        <span className="font-medium">{item.name}</span>{" "}
                        replied:
                        <br />
                        {item.replyMessage}
                      </p>
                    </td>
                  </tr>
                )}
                {replyingTo && replyingTo.id === item.id && (
                  <tr>
                    <td colSpan="6" className="px-6 py-4">
                      <p className="text-gray-700 mb-2">
                        Reply message for {replyingTo.name}:
                      </p>
                      <form
                        onSubmit={handleSubmit}
                        className="flex items-center"
                      >
                        <input
                          type="text"
                          value={replyText}
                          onChange={handleInputChange}
                          className="border border-gray-300 rounded-md px-3 py-2 w-96"
                          placeholder={`Type your reply here...`}
                        />
                        <button
                          type="submit"
                          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                          Send
                        </button>
                      </form>
                      {successMessage && (
                        <p className="mt-2 text-green-600">{successMessage}</p>
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Message;
