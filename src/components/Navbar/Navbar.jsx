import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [showLoginRegister, setShowLoginRegister] = useState(false);
  const loginRegisterRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes (e.g., navigation)
    window.scrollTo(0, 0);

    // Close the login/register dropdown when navigating to login/register page
    setShowLoginRegister(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginRegisterRef.current &&
        !loginRegisterRef.current.contains(event.target) &&
        !event.target.closest(".login-register-dropdown") // Check if the click is inside the dropdown
      ) {
        setShowLoginRegister(false);
      }
    };

    if (showLoginRegister) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLoginRegister]);

  const handleIconClick = () => {
    setShowLoginRegister(!showLoginRegister);
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <Link
                to="/"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Coffee Cafe
              </Link>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center md:gap-8 gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                to="/order"
                className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3"
              >
                Order
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </Link>
              <div onClick={handleIconClick}>
                <IoPeople size={25} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        {showLoginRegister && (
          <div
            ref={loginRegisterRef}
            className="absolute top-16 right-4 bg-white text-black p-4 rounded shadow-lg login-register-dropdown"
          >
            <Link
              to={"/login"}
              className="text-md  hover:text-gray-600 duration-500 mb-2"
              onClick={() => setShowLoginRegister(false)}
            >
              Login
            </Link>
            <h2 className="md mt-4 mb-2">Register</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
