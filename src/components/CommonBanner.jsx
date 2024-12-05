import React from "react";
import BreadCrumb from "./BreadCrumb";

const CommonBanner = ({ title }) => {
  return (
    <section className="pt-[120px] pb-[98px] bg-[url('/shop-banner.png')] bg-no-repeat bg-cover bg-center">
      <div className="container">
        <img src="/logo-icon.png" alt="Logo-icon" className="m-auto" />
        <h2 className="font-primary text-primary font-medium text-[48px] text-center">
          {title}
        </h2>
        <BreadCrumb />
      </div>
    </section>
  );
};
export default CommonBanner;
