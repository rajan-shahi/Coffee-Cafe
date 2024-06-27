import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Order from "./pages/Order.jsx";
import Login from "./pages/Login.jsx";
import RegisterForm from "./pages/RegisterForm.jsx";
import ContactSection from "./pages/ContactSection.jsx";
import DasLayout from "./dasLayout/DasLayout.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" overflow-x-hidden ">
      {location.pathname !== "/dasLayout" && <Navbar />}
      <div className={`${location.pathname === "/dasLayout" ? "" : "py-28"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerForm" element={<RegisterForm />} />
          <Route path="/contactSection" element={<ContactSection />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />

          <Route path="/dasLayout" element={<DasLayout />} />
         

        </Routes>
      </div>
      {location.pathname !== "/dasLayout" && <Footer />}
    </div>
  );
};

export default App;
