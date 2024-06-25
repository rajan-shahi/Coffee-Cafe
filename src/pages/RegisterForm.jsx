import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import eye icons from react-icons
import { toast, Toaster } from "react-hot-toast"; // Import react-hot-toast

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    conpassword: "",
    mobile: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Display toast notification
    toast.success("Message sent successfully!");
    // Reset form data to clear the input fields
    setFormData({
      name: "",
      email: "",
      password: "",
      conpassword: "",
      mobile: "",
    });
  };

  return (
    <div className="md:px-0 px-4">
      <Toaster /> {/* Add Toaster component to display toast notifications */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl tracking-wider font-cursive font-semibold text-primary">
          Register an Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none bg-gray-100 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 outline-primary/70 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none bg-gray-100 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 outline-primary/70 sm:text-sm"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-primary"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirm-password"
                  name="conpassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.conpassword}
                  onChange={handleChange}
                  className="appearance-none bg-gray-100 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 outline-primary/70 sm:text-sm"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-primary"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none bg-gray-100 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 outline-primary/70 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <div className="mt-1">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="appearance-none bg-gray-100 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 outline-primary/70 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 duration-300 focus:outline-none"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
