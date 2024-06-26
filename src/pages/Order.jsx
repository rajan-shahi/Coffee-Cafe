import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import c1 from "../assets/coffee-white.png";

const Order = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Milk Coffee",
      size: "milk coffee",
      price: 170,
      quantity: 1,
      image: c1,
    },
    {
      id: 2,
      name: "Milk Coffee",
      size: "milk coffee",
      price: 200,
      quantity: 1,
      image: c1,
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
      name: "Milk Coffee",
      size: "Milk Coffee",
      price: 150,
      quantity: 1,
      image: c1,
    },
  ]);

  const [showContactForm, setShowContactForm] = useState(false);

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

  const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
      order: "",
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
      // Handle form submission
      console.log(formData);
      // Display toast notification
      toast.success("book Now successfully!");
      // Close the form after submission
      onClose();
    };

    return (
      <div  className="md:px-0 px-4 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-80 z-50">
        <div className="bg-white p-6 rounded-md md:mt-12 max-w-md w-full">
          <h2 className="text-2xl  tracking-wider font-cursive  font-semibold mb-5   text-primary">
            Book Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                htmlFor="email"
                className="block pb-1 text-sm font-medium text-gray-700"
              >
                Order Name
              </label>
              <input
                type="name"
                id="email"
                name="order"
                value={formData.order}
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
                Quentity
              </label>
              <input
                type="number"
                id="email"
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
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary  hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
        <h1 className="text-2xl  tracking-wider font-cursive font-semibold  text-primary text-center">
          Booking An Appointment
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="md:col-span-2 space-y-4 md:w-9/12">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            ))}
          </div>

          <div className="bg-gray-100 h-max rounded-md p-10">
            <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
              Order Summary
            </h3>

            <ul className="text-gray-800 mt-6 space-y-3">
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

            <div className="mt-6 space-y-3">
              <button
                onClick={() => setShowContactForm(true)}
                className="w-full py-2  bg-primary  hover:bg-primary/90 duration-500 text-white font-semibold rounded-md"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}

      <Toaster />
    </div>
  );
};

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const handleQuantityChange = (e) => {
    onUpdateQuantity(item.id, parseInt(e.target.value));
  };

  return (
    <div className="grid  grid-cols-3 items-start gap-4 border-b pb-4">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-20 h-20 max-sm:w-24 max-sm:h-24 bg-gray-100 p-2 object-cover rounded-md">
          <img  data-aos="zoom-in"
              data-aos-duration="300"
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">
            Name: {item.size}
          </p>

          <button
            onClick={() => onRemoveItem(item.id)}
            type="button"
            className="mt-4 font-semibold text-red-500 text-xs flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current inline"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                clipRule="evenodd"
              />
            </svg>
            REMOVE
          </button>
        </div>
      </div>

      <div className="ml-auto">
        <h4 className="text-lg max-sm:text-base font-semibold text-gray-700">
          {(item.price * item.quantity).toFixed(2)}
        </h4>

        <div className="flex items-center mt-4">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            type="button"
            className="px-3 py-1 border border-gray-300 text-gray-800 text-xs rounded-l-md"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100 text-gray-800 text-sm font-semibold">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            type="button"
            className="px-3 py-1 border border-gray-300 text-gray-800 text-xs rounded-r-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
