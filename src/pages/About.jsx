import React, { useState } from "react";
import img2 from "../assets/cofee6.webp";
import img1 from "../assets/coffee4.jpeg";
import c1 from "../assets/coffee2.jpeg";
import img3 from "../assets/coffee3.webp";
import { Link } from "react-router-dom";

const About = () => {
  const [currentImage, setCurrentImage] = useState(c1);

  const thumbnails = [img1, img2, img3];

  const subscriptions = [
    { label: "4 Months", price: "$80/mo", value: "4 Months" },
    { label: "8 Months", price: "$60/mo", value: "8 Months", checked: true },
    { label: "12 Months", price: "$40/mo", value: "12 Months" },
  ];

  return (
    <section className=" md:px-0 px-4 flex justify-center items-center">
      <div className=" w-full md:w-10/12 ">
        <div className="lg:col-gap-12 xl:col-gap-16  grid grid-cols-1 gap-12  lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className=" w-96 h-96 max-w-full object-cover"
                    src={currentImage}
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start gap-4 md:gap-0 lg:flex-col">
                  {thumbnails.map((src, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`flex-0 aspect-square mb-3  h-20 overflow-hidden rounded-lg border-2 ${
                        currentImage === src
                          ? "border-gray-900"
                          : "border-transparent"
                      } text-center`}
                      onClick={() => setCurrentImage(src)}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={src}
                        alt=""
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="text-xl  tracking-wider font-cursive  text-gray-900 sm:text-2xl">
              Afro-Nepalian Coffee
            </h1>

            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <svg
                      key={index}
                      className="block h-4 w-4 align-middle text-primary/80"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        className=""
                      />
                    </svg>
                  ))}
              </div>
              <p className="ml-2 text-sm font-medium text-gray-700">
                100,2009 Reviews
              </p>
            </div>

            <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-5">
              {["Premium Coffee", "Hot Coffee", "Cold Coffee"].map((type) => (
                <label key={type} className="">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    className="peer sr-only"
                    defaultChecked={type === "Premium Coffee"}
                  />
                  <p className="peer-checked:bg-primary peer-checked:text-white rounded-lg border border-primary px-6  py-2  text-xs">
                    {type}
                  </p>
                </label>
              ))}
            </div>

            <h2 className="mt-8 text-base text-gray-900">
              Choose subscription
            </h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-6">
              {subscriptions.map((subscription) => (
                <label key={subscription.value} className="">
                  <input
                    type="radio"
                    name="subscription"
                    value={subscription.value}
                    className="peer sr-only"
                    defaultChecked={subscription.checked || false}
                  />
                  <p className="peer-checked:bg-primary peer-checked:text-white rounded-lg border border-primary px-6 py-2  text-sm">
                    {subscription.label}
                  </p>
                  <span className="mt-1 block text-center text-xs">
                    {subscription.price}
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-10 flex flex-col md:items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-xl">$60.50</h1>
                <span className="text-base">/month</span>
              </div>

              <Link
                to={"/order"}
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent  bg-primary bg-none px-8 py-2 text-center  text-xs text-white transition-all duration-200 ease-in-out focus:shadow  w-max hover:bg-primary/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
