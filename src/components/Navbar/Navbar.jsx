import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5"; // Import close icon

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
    window.scrollTo(0, 0);
    setShowLoginRegister(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginRegisterRef.current &&
        !loginRegisterRef.current.contains(event.target) &&
        !event.target.closest(".login-register-dropdown")
      ) {
        setShowLoginRegister(false);
      }
    };

    if (showLoginRegister) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [showLoginRegister]);

  const handleIconClick = () => {
    setShowLoginRegister(!showLoginRegister);
  };

  const handleCloseClick = () => {
    setShowLoginRegister(false);
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            <div data-aos="fade-down" data-aos-once="true">
              <Link
                to="/"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Coffee Cafe
              </Link>
            </div>

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
                className="bg-primary/70 hover:scale-105 duration-200 text-white md:px-4 px-3 md:py-2 py-1 rounded-full flex items-center gap-3"
              >
                Order
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </Link>
              <div onClick={handleIconClick}>
                <HiOutlineBars3 size={30} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        {showLoginRegister && (
          <>
            <div className="fixed inset-0 bg-black/80 z-40"></div>
            <div
              ref={loginRegisterRef}
              className="fixed top-0 right-0 h-full w-64 bg-white text-black p-4 z-50 shadow-lg transform transition-transform duration-300"
            >
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex justify-between ">
                  <Link
                    to="/"
                    className="text-md hover:text-gray-500 duration-500"
                    onClick={handleCloseClick}
                  >
                    Home
                  </Link>
                  <IoClose
                    size={30}
                    className=" cursor-pointer text-primary font-extrabold "
                    onClick={handleCloseClick}
                  />
                </div>

                <Link
                  to="/"
                  className="text-md mb-2 hover:text-gray-500 duration-500"
                  onClick={handleCloseClick}
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="text-md mb-2 hover:text-gray-500 duration-500"
                  onClick={handleCloseClick}
                >
                  Services
                </Link>
                <Link
                  to="/"
                  className="text-md mb-2 hover:text-gray-500 duration-500"
                  onClick={handleCloseClick}
                >
                  Contact Us
                </Link>
                
                <Link
                  to="/login"
                  className="bg-primary hover:scale-105 duration-200 w-max text-white px-12 py-2 rounded-md items-center"
                  onClick={handleCloseClick}
                >
                  Login
                </Link>
                <Link
                  to="/registerForm"
                  className="bg-primary hover:scale-105 duration-200 w-max mt-4 text-white px-10 py-2 rounded-md items-center"
                  onClick={handleCloseClick}
                >
                  Register
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
