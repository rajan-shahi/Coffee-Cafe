import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Order from "./pages/Order.jsx";
import Login from "./pages/Login.jsx";
import RegisterForm from "./pages/RegisterForm.jsx";
// Import Toaster if it's a custom component or from a library
// import { Toaster } from "react-hot-toast"; // Example if using react-hot-toast

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    // AOS.refresh(); // Usually, you don't need to call refresh right after init
  }, []);

  return (
    <div className=" overflow-x-hidden ">
      <BrowserRouter>
        <Navbar />
        <div className="  py-28 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registerForm" element={<RegisterForm />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
