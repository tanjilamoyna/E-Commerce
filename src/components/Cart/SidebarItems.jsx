import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const SidebarItems = () => {
  return (
    <div className="flex items-center pb-[20px]">
      <div className="w-[105px] rounded-xl overflow-hidden">
        <img
          src="/cart-product.png"
          className="w-full bg-[#b88f2f23]"
          alt="Product"
        />
      </div>
      <div className="ml-[32px] mr-[60px] ">
        <h3 className="font-primary font-normal text-primary text-[20px] pb-[8px]">
          Asgaard sofa
        </h3>
        <p className="font-primary font-light text-primary text-[20px]">
          1 X{" "}
          <span className=" font-primary font-medium text-brand text-[16px]">
            BDT. 250,000.00
          </span>
        </p>
      </div>
      <AiFillCloseCircle className="text-[#9F9F9F] text-3xl cursor-pointer hover:text-brand hover:transition duration-500" />
    </div>
  );
};

export default SidebarItems;
