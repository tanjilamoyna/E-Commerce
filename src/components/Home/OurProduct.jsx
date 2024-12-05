import React from "react";
import ProductItems from "../ProductItems";
import { Link } from "react-router-dom";

const OurProduct = () => {
  return (
    <section className="pb-[69px]">
      <div className="container">
        <h2 className="title text-center pt-[22px]">Our Products</h2>
        <p className="details text-center pt-[4px] pb-[30px]">
          Design your home with your favourite furniture.
        </p>

        <div className=" grid grid-cols-4 gap-[32px] mt-[32px]">
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
        </div>
        <div className="mt-[32px] flex justify-center group">
          <Link
            className="font-primary text-brand text-[16px] px-[78px] py-[12px] bg-white font-semibold inline-block border-2 border-brand scale-100 hover:scale-100 hover:bg-brand hover:text-white hover:transition duration-500"
            to="/shop"
          >
            SHOW MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
