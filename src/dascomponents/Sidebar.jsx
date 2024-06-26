import React from "react";
import HeroPng from "../assets/coffee2.png";

const Sidebar = () => {
  // Sample data for dynamic rendering
  const sections = [
    {
      title: "Dashboard",
      items: [
        {
          title: "Dashboard",
          icon: (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          ),
          link: "#",
        },
      ],
    },
    {
      items: [
        {
          title: "Messages",
          icon: (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          ),
          link: "#",
          badge: "6",
        },
      ],
    },

    {
      title: "Product Management",
      items: [
        {
          title: "Products",
          icon: (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          ),
          link: "#",
        },
        {
          title: "Orders",
          icon: (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          ),
          link: "#",
        },
        {
          title: "Suppliers",
          icon: (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ),
          link: "#",
        },
      ],
    },
    {
      title: "Content Management",
      items: [
        {
          title: "Blogs",
          icon: (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012 2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          ),
          link: "#",
        },
      ],
    },
    {
      title: "Analytics",
      items: [
        {
          title: "Revenue",
          icon: (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          ),
          link: "#",
        },
        {
          title: "Refunds",
          icon: (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="w-screen bg-gray-100">
      <div className="h-screen w-64 ">
        <div className="flex h-full flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md">
          <div className="flex mt-5 items-center px-4">
            <img
              className="h-12 w-auto max-w-full align-middle"
              src={HeroPng}
              alt=""
            />
            <div className="flex ml-3 flex-col">
              <h3 className="font-medium">Software Developer</h3>
              <p className="text-xs text-gray-500">Er. Rajan Shahi</p>
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
                {section.title}
              </span>
              <nav className="flex-1">
                {section.items &&
                  section.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className="flex cursor-pointer items-center border-l-2 border-transparent py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-2 hover:border-rose-600 hover:text-rose-600 focus:border-l-2"
                    >
                      {item.icon} {/* Render SVG directly */}
                      <span className="ml-4">{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto rounded-full bg-rose-600 px-2 text-xs text-white">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
