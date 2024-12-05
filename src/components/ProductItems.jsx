import React from "react";
import { Link } from "react-router-dom";

const ProductItems = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative group ">
        <img src="/product-1.png" className="w-full" alt="Product" />

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#3a3a3a63] scale-0 group-hover:scale-100 transition duration-500">
          <button className="font-primary text-brand text-[16px] px-[55px] py-[12px] bg-white font-semibold inline-block border-2 border-brand scale-100 hover:scale-100 hover:bg-brand hover:text-white hover:border-none hover:transition duration-500">
            Add to cart
          </button>
        </div>
      </div>
      <Link
        to="/shop/details"
        className="bg-[#f4f5f7] px-[18px] pt-[16px] pb-[30px] block"
      >
        <h3 className="text-[24px] font-primary text-primary font-semibold">
          Syltherine
        </h3>
        <p className="text-[16px] font-medium font-primary text-secondary py-[8px]">
          Stylish cafe chair
        </p>
        <div className="flex justify-between">
          <p className="font-medium text-[20px] font-primary text-primary">
            BDT 2.500.000
          </p>
          <p className="font-medium text-[16px] font-primary text-secondary line-through">
            BDT 3.500.000
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItems;
