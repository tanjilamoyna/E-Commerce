import React from "react";
import BreadCrumb from "../BreadCrumb";

const Banner = () => {
  return (
    <section className="pt-[120px] pb-[98px] bg-[url('/shop-banner.png')] bg-no-repeat bg-cover bg-center">
      <div className="container">
        <h2 className="font-primary text-primary font-medium text-[48px] text-center">
          Shop
        </h2>
        <BreadCrumb />
      </div>
    </section>
  );
};

export default Banner;
