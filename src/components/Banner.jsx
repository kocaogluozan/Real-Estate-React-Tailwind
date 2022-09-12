import React from "react";

//import image
import Image from "../assets/img/house-banner.png";

//import components
import Search from "./Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center lg:items-start lg:ml-8 xl:ml-[135px] text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-tight mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="mb-8 max-w-[480px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            molestiae ipsam et quam itaque ut consequatur aut repellat
            laudantium odio.
          </p>
        </div>
        <div className="hidden lg:flex flex-1 justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
