import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
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
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const location = useLocation();

  const hideNavbarAndFooter =
    location.pathname === "/login" ||
    location.pathname === "/dasLayout" ||
    location.pathname === "/registerForm";

  const getPaddingClass = () => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/registerForm"
    ) {
      return "py-8";
    } else if (!hideNavbarAndFooter) {
      return "py-28";
    } else {
      return "";
    }
  };

  return (
    <div className="overflow-x-hidden">
      {!hideNavbarAndFooter && <Navbar />}
      <div className={getPaddingClass()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/registerForm" element={<RegisterForm />} />
          <Route path="/contactSection" element={<ContactSection />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dasLayout"
            element={isLoggedIn ? <DasLayout /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer.jsx";
// import Home from "./pages/Home.jsx";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Order from "./pages/Order.jsx";
// import Login from "./pages/Login.jsx";
// import RegisterForm from "./pages/RegisterForm.jsx";
// import ContactSection from "./pages/ContactSection.jsx";
// import DasLayout from "./dasLayout/DasLayout.jsx";
// import Service from "./pages/Service.jsx";
// import About from "./pages/About.jsx";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 700,
//       easing: "ease-in",
//       delay: 100,
//     });
//   }, []);

//   const location = useLocation();

//   const hideNavbarAndFooter =
//     location.pathname === "/login" ||
//     location.pathname === "/dasLayout" ||
//     location.pathname === "/registerForm";

//   return (
//     <div className="overflow-x-hidden">
//       {!hideNavbarAndFooter && <Navbar />}
//       <div className={hideNavbarAndFooter ? "" : "py-28"}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/order" element={<Order />} />
//           <Route
//             path="/login"
//             element={<Login setIsLoggedIn={setIsLoggedIn} />}
//           />
//           <Route path="/registerForm" element={<RegisterForm />} />
//           <Route path="/contactSection" element={<ContactSection />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/about" element={<About />} />
//           <Route
//             path="/dasLayout"
//             element={isLoggedIn ? <DasLayout /> : <Navigate to="/login" />}
//           />
//         </Routes>
//       </div>
//       {!hideNavbarAndFooter && <Footer />}
//     </div>
//   );
// };

// export default App;
