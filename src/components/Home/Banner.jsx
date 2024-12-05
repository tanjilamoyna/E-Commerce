import React from "react";
import Button from "../Button";

const Banner = () => {
  return (
    <section className="py-36 bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="container">
        <div className="w-1/2 bg-[#FFF3E3] px-[42px] ml-auto pt-[62px] pb-[50px] rounded-xl">
          <h2 className="text-[20px] font-semibold font-primary text-primary">
            New Arrival
          </h2>
          <h1 className="font-bold font-primary text-[#edb73a] text-[52px] pt-[4px] pb-[17px] leading-[65px] w-[410px]">
            Discover Our New Collection
          </h1>
          <p className="font-medium font-primary text-primary text-[18px] pb-[46px] ">
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </p>
          <Button title="BUY NOW" path="/shop" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
