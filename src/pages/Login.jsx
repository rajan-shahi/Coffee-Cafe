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
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [forgotPassword, setForgotPassword] = useState(false); // Track if user is in "Forgot Password" mode

  const fixedUsername = "Rajan Shahi";
  const fixedEmail = "rajanshahi1267@gmail.com";
  const fixedPassword = "Rajan@2058";

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

    const { username, email, password } = formData;

    let valid = true;
    let newErrors = {
      username: "",
      email: "",
      password: "",
    };

    if (username !== fixedUsername) {
      valid = false;
      newErrors.username = "Invalid username";
    }

    if (email !== fixedEmail) {
      valid = false;
      newErrors.email = "Invalid email";
    }

    if (password !== fixedPassword) {
      valid = false;
      newErrors.password = "Invalid password";
    }

    setErrors(newErrors);

    if (valid) {
      toast.success("Login successfully!");
      setFormData({
        username: "",
        email: "",
        password: "",
      });
      // Redirect to dasLayout page
      window.location.href = "/dasLayout";
    } else {
      toast.error("Invalid username, email, or password");
    }
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setForgotPassword(false);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    setErrors({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleResetPassword = () => {
    if (formData.email === fixedEmail) {
      toast.success("Password reset link sent!");
      handleBackToLogin();
    } else {
      setErrors({
        ...errors,
        email: "Invalid email address",
      });
      toast.error("Invalid email address");
    }
  };

  return (
    <div className="md:px-0 px-4 flex justify-center md:h-[80vh] items-center">
      <form
        onSubmit={forgotPassword ? handleResetPassword : handleSubmit}
        className="relative space-y-3 w-full md:w-max rounded-md bg-white md:p-10 p-6 shadow-xl border border-gray-100"
      >
        <h1 className="text-xl font-semibold lg:text-2xl text-primary">
          {forgotPassword ? "Forgot Password" : "Login"}
        </h1>
        <p className="pb-4 text-gray-500">
          {forgotPassword
            ? "Enter your email to reset your password"
            : "Sign in to access your account"}
        </p>
        {forgotPassword ? (
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Info@example.com"
                className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-primary ${
                  errors.email && "border border-red-500"
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <button
                type="button"
                onClick={handleResetPassword}
                className="mt-5 w-full rounded-md bg-primary hover:bg-primary/90 duration-500 p-2 text-center font-semibold text-white outline-primary"
              >
                Reset Password
              </button>
            </div>
            <div className="flex justify-start">
              <div
                className="text-sm text-primary/90 hover:underline cursor-pointer"
                onClick={handleBackToLogin}
              >
                Back to Login
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-primary ${
                  errors.username && "border border-red-500"
                }`}
                required
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
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
                className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-primary ${
                  errors.email && "border border-red-500"
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
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
                className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-primary ${
                  errors.password && "border border-red-500"
                }`}
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform text-primary cursor-pointer"
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
            </div>
            <div className="flex justify-end">
              <div
                className="text-sm text-primary/90 hover:underline cursor-pointer"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-5 w-full rounded-md bg-primary hover:bg-primary/90 duration-500 p-2 text-center font-semibold text-white outline-primary"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { Toaster, toast } from "react-hot-toast";

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const fixedUsername = "Rajan Shahi";
//   const fixedEmail = "rajanshahi1267@gmail.com";
//   const fixedPassword = "Rajan@2058";

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { username, email, password } = formData;

//     let valid = true;
//     let newErrors = {
//       username: "",
//       email: "",
//       password: "",
//     };

//     if (username !== fixedUsername) {
//       valid = false;
//       newErrors.username = "Invalid username";
//     }

//     if (email !== fixedEmail) {
//       valid = false;
//       newErrors.email = "Invalid email";
//     }

//     if (password !== fixedPassword) {
//       valid = false;
//       newErrors.password = "Invalid password";
//     }

//     setErrors(newErrors);

//     if (valid) {
//       toast.success("Login successfully!");
//       setFormData({
//         username: "",
//         email: "",
//         password: "",
//       });
//       // Redirect to dasLayout page
//       window.location.href = "/dasLayout";
//     } else {
//       toast.error("Invalid username, email, or password");
//     }
//   };

//   return (
//     <div className="md:px-0 px-4 flex justify-center items-center">
//       <form
//         onSubmit={handleSubmit}
//         className="relative space-y-3 w-full md:w-max rounded-md bg-white md:p-10 p-6 shadow-xl border border-gray-100"
//       >
//         <h1 className="text-xl font-semibold lg:text-2xl text-primary">
//           Login
//         </h1>
//         <p className="pb-4 text-gray-500">Sign in to access your account</p>
//         <div className="grid grid-cols-1 gap-6">
//           <div>
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Username"
//               className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-primary ${errors.username && 'border border-red-500'}`}
//               required
//             />
//             {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
//           </div>
//           <div>
//             <label htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Info@example.com"
//               className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-primary ${errors.email && 'border border-red-500'}`}
//               required
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>
//           <div className="relative">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               name="password"
//               type={passwordVisible ? "text" : "password"}
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="******"
//               className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-primary ${errors.password && 'border border-red-500'}`}
//               required
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//             <span
//               onClick={togglePasswordVisibility}
//               className="absolute right-3 top-1/2 transform text-primary cursor-pointer"
//             >
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//           <div className="flex justify-end">
//             <div className="text-sm text-primary/90 hover:underline cursor-pointer">
//               Forgot Password?
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="mt-5 w-full rounded-md bg-primary hover:bg-primary/90 duration-500 p-2 text-center font-semibold text-white outline-primary"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </form>
//       <Toaster />
//     </div>
//   );
// };

// export default Login;
