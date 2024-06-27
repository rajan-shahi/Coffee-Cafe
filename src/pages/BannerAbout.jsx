import React from "react";
import FooterBg from "../assets/website/coffee-footer.jpg";

const BannerAbout = () => {
  return (
    <div
      className="relative font-sans z-40  before:absolute w-full md:w-10/12 before:inset-0 before:bg-black before:opacity-50 before:z-10"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div data-aos="zoom-in"
                  data-aos-duration="1000" className="min-h-[250px] relative z-50 h-full max-w-5xl mx-auto flex flex-col justify-center items-center text-center text-white md:p-6 p-2">
        <h2 className="sm:text-4xl tracking-wider font-cursive text-2xl mb-6">
          About The Coffee Cafe
        </h2>
        <p className="sm:text-lg text-base text-center text-gray-200">
          The Coffee Cafe, situated on New Road in Kathmandu, Nepal, is the
          area's most popular coffee spot. Known for its cozy ambiance and
          excellent brews, it attracts both locals and tourists seeking a
          perfect coffee experience.
        </p>
      </div>
    </div>
  );
};

export default BannerAbout;
