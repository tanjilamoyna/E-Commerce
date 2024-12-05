import React from "react";
import { PiLockFill } from "react-icons/pi";
import SidebarItems from "./SidebarItems";
import CartButton from "./CartButton";

const CartSidebar = ({ handelSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000020] z-50">
      <div className="w-fit py-[28px] bg-white ml-auto h-[703px] rounded-lg">
        <div className="flex items-center justify-between mb-[30px] pb-[26px] border-b px-[25px]">
          <h2 className="font-primary font-semibold text-primary text-[24px]">
            Shopping Cart
          </h2>
          <PiLockFill
            onClick={() => handelSidebar(false)}
            className="text-secondary cursor-pointer text-3xl hover:text-brand hover:transition duration-500"
          />
        </div>
        <div className="sideCart h-[437px] overflow-y-scroll px-[25px]">
          <SidebarItems />
          <SidebarItems />
          <SidebarItems />
          <SidebarItems />
          <SidebarItems />
          <SidebarItems />
        </div>
        <div className="flex items-center justify-between pb-[18px] border-b-2 pt-3 px-[25px]">
          <p className="font-primary font-normal text-primary text-[20px]">
            Subtotal
          </p>
          <p className=" font-primary font-semibold text-brand text-[18px]">
            BDT. 520,000.00
          </p>
        </div>
        <div className="flex items-center justify-center gap-[50px] mt-[28px] mb-[28px] px-[25px]">
          <CartButton path="/cart" title="Cart" />
          <CartButton path="/checkout" title="Checkout" />
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
