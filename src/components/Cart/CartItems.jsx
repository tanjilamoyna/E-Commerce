import React from "react";
import { MdDelete } from "react-icons/md";

const CartItems = () => {
  return (
    <>
      <tr>
        <td className="pt-[20px]">
          <div className="flex items-center gap-[36px] justify-center">
            <div className="w-[105px] bg-[#F9F1E7] rounded-xl overflow-hidden">
              <img
                src="/cart-product.png"
                alt="Cart Items"
                className="w-full"
              />
            </div>
            <p className="font-primary font-normal text-secondary text-base">
              Asgaard sofa
            </p>
          </div>
        </td>
        <td className="pt-[20px]">
          <p className="font-primary font-normal text-secondary text-base text-center">
            BDT. 250,000.00
          </p>
        </td>
        <td className="pt-[20px]">
          <p className="w-[32px] h-[32px] border flex justify-center items-center m-auto">
            1
          </p>
        </td>
        <td className="pt-[20px]">
          <div className="flex items-center gap-[40px] justify-center">
            <p className="font-primary font-normal text-[16px] text-primary">
              BDT. 250,000.00
            </p>
            <button>
              <MdDelete className="text-secondary cursor-pointer text-2xl hover:text-brand hover:transition duration-500" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CartItems;
