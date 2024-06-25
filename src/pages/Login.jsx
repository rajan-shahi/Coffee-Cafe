import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
    toast.success("Login successfully!");
    // Reset form data to clear the input fields
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="md:px-0 px-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative space-y-3 w-full md:w-max rounded-md bg-white md:p-10 p-6 shadow-xl border border-gray-100"
      >
        <h1 className="text-xl font-semibold lg:text-2xl text-primary ">Login</h1>
        <p className="pb-4 text-gray-500">Sign in to access your account</p>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Username"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3  outline-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3  outline-primary"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="******"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3  outline-primary"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform text-primary cursor-pointer"
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="flex justify-end">
            <div className="text-sm  text-primary/90 hover:underline cursor-pointer">
              Forgot Password?
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md  bg-primary  hover:bg-primary/90 duration-500 p-2 text-center font-semibold text-white outline-primary"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
