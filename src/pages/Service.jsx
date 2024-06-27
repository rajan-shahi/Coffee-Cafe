import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    bgColor: "bg-red-500",
    shadowColor: "shadow-red-200",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Customer Service",
    description:
      "Friendly and knowledgeable staff , Efficient and prompt order handling.",
  },
  {
    bgColor: "bg-orange-500",
    shadowColor: "shadow-orange-200",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    title: "Clean and Well-Maintained Facilities",
    description: "Regular cleaning of tables, floors, and restrooms.",
  },
  {
    bgColor: "bg-yellow-500",
    shadowColor: "shadow-yellow-200",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    title: "Free Wi-Fi",
    description:
      "Internet access for customers who want to work, study, or browse online.",
  },
  {
    bgColor: "bg-lime-500",
    shadowColor: "shadow-lime-200",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Sustainability Practices",
    description:
      "Use of eco-friendly products, such as biodegradable cups and straws.",
  },
  {
    bgColor: "bg-teal-500",
    shadowColor: "shadow-teal-200",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    title: "Community Engagement",
    description: "Events such as live music, open mic nights, and book clubs.",
  },
  {
    bgColor: "bg-indigo-500",
    shadowColor: "shadow-indigo-200",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Quality of Coffee",
    description: "Use of high-quality, freshly roasted coffee beans.",
  },
];

const Service = () => {
  return (
    <div
      className="px-4 md:lg:xl:px-32 border-t border-b md:py-16 py-14 bg-opacity-10"
      style={{
        backgroundImage:
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')",
      }}
    >
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl  shadow-neutral-100 border">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b border-b hover:bg-slate-50 cursor-pointer"
          >
            <span
              data-aos="fade-left"
              className={`p-5 rounded-full ${card.bgColor} text-white shadow-lg   duration-300 ${card.shadowColor}`}
            >
              {card.iconPath}
            </span>
            <p
              data-aos="fade-right"
              className="text-xl font-medium text-slate-700 mt-3"
            >
              {card.title}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-2 text-sm text-slate-500"
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full  bg-primary shadow-xl shadow-indigo-200 py-10 md:px-20 px-4 md:flex justify-between items-center">
        <p data-aos="fade-up" className="text-white">
          <span className="md:text-4xl text-3xl font-medium  tracking-wider font-cursive ">
            Still Confused ?
          </span>{" "}
          <br />{" "}
          <span className="md:text-lg ">
            Book For Free Career Consultation Today!
          </span>
        </p>
        <Link data-aos="fade-up" to={"/order"}>
          <button className="px-5  text-xs md:mt-0 mt-5 py-3 rounded-md  hover:bg-gray-200 tracking-wider font-cursive bg-white duration-300">
            BOOK AN APPOINTMENT
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Service;
