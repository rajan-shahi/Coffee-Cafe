import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import c1 from "../assets/coffee2.png";
import img from "../assets/coffee-white.png";

const Order = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Coffee",
      size: "Premium Coffee",
      price: 170,
      quantity: 1,
      image: c1,
    },
    {
      id: 2,
      name: "Hot Coffee",
      size: "Hot Coffee",
      price: 200,
      quantity: 1,
      image: img,
    },
    {
      id: 3,
      name: "Milk Coffee",
      size: "milk coffee",
      price: 140,
      quantity: 1,
      image: c1,
    },
    {
      id: 4,
      name: "Cold Coffee",
      size: "Cold Coffee",
      price: 150,
      quantity: 1,
      image: img,
    },
  ]);

  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.quantity,
      0
    );
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    const taxRate = 0.1; // 10% tax rate
    return subtotal * taxRate;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleOrderClick = (item) => {
    setSelectedItem(item); // Set the selected item
    setShowContactForm(true); // Show the contact form
  };

  const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
      order: selectedItem ? selectedItem.name : "", // Set initial value based on selectedItem
      number: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const { name, email, message, order, number } = formData;

      // Format the email body
      const emailBody = `Name: ${name}\nEmail: ${email}\nOrder Name: ${order}\nQuantity: ${number}\nMessage: ${message}`;

      // Open mailto link with updated email address
      window.open(
        `mailto:sujanbista2025@gmail.com?subject=New Order&body=${encodeURIComponent(
          emailBody
        )}`
      );

      // Display toast notification
      toast.success("Order sent successfully!");

      // Close the form after submission
      onClose();
    };

    return (
      <div className="md:px-0 px-4 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-80 z-50">
        <div className="bg-white p-6 rounded-md md:mt-12 max-w-xl w-full relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-2xl tracking-wider font-cursive font-semibold mb-5 text-primary">
            Order Now
          </h2>
          <form onSubmit={handleSubmit} className=" grid grid-cols-2 gap-10">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium pb-1 text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block pb-1 text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="order"
                className="block pb-1 text-sm font-medium text-gray-700"
              >
                Order Name
              </label>
              <input
                type="text"
                id="order"
                name="order"
                value={formData.order}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block pb-1 text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block pb-1 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-primary sm:text-sm"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="flex md:px-0 px-4 justify-center items-center">
      <div className="font-sans w-full md:w-10/12">
        <h1
          data-aos="fade-down"
          data-aos-once="true"
          className="text-2xl tracking-wider font-cursive font-semibold text-primary text-center"
        >
          Booking An Appointment
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="md:col-span-2 space-y-4 md:w-9/12"
          >
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
                onOrderClick={() => handleOrderClick(item)} // Pass function to handle order click
              />
            ))}
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="bg-gray-100 h-max rounded-md p-10"
          >
            <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
              Order Summary
            </h3>

            <ul className="mt-6 space-y-3">
              <li className="flex justify-between">
                <span>Subtotal</span>
                <span>{calculateSubtotal().toFixed(2)}</span>
              </li>
              <li className="flex justify-between">
                <span>Tax</span>
                <span>{calculateTax().toFixed(2)}</span>
              </li>
              <li className="flex justify-between font-bold">
                <span>Total</span>
                <span>{calculateTotal().toFixed(2)}</span>
              </li>
            </ul>

            <button
              onClick={() => setShowContactForm(true)}
              className="mt-8 w-full inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}

      <Toaster position="bottom-center" />
    </div>
  );
};

const CartItem = ({ item, onUpdateQuantity, onRemoveItem, onOrderClick }) => {
  const { id, name, size, price, quantity, image } = item;

  const handleQuantityChange = (e) => {
    onUpdateQuantity(id, parseInt(e.target.value, 10));
  };

  const handleRemoveClick = () => {
    onRemoveItem(id);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="h-16 w-16 object-cover" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">{size}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          className="border border-gray-300 rounded-md px-3 py-1 w-20 text-center"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <p className="text-lg font-semibold">{(price * quantity).toFixed(2)}</p>
        <button
          onClick={handleRemoveClick}
          className="text-red-500 hover:text-red-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          onClick={onOrderClick} // Handle order click
          className="text-green-500 hover:text-green-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Order;
