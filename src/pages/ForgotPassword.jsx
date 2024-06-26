import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "rajanshahi1267@gmail.com") {
      toast.success("Password reset link sent!");
      setEmail("");
      setError("");
    } else {
      setError("Invalid email address");
      toast.error("Invalid email address");
    }
  };

  return (
    <div className="md:px-0 px-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative space-y-3 w-full md:w-max rounded-md bg-white md:p-10 p-6 shadow-xl border border-gray-100"
      >
        <h1 className="text-xl font-semibold lg:text-2xl text-primary">
          Forgot Password
        </h1>
        <p className="pb-4 text-gray-500">
          Enter your email to reset your password
        </p>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Info@example.com"
              className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-primary ${
                error && "border border-red-500"
              }`}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-primary hover:bg-primary/90 duration-500 p-2 text-center font-semibold text-white outline-primary"
            >
              Reset Password
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default ForgotPassword;
