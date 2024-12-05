import React from "react";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

const CartDetails = () => {
  return (
    <section className="py-[70px]">
      <div className="container flex gap-[30px]">
        <table className="w-[70%]">
          <thead>
            <tr>
              <th className="py-4 font-primary font-medium text-[16px] bg-[#F9F1E7]">
                Product
              </th>
              <th className="py-4 font-primary font-medium text-[16px] bg-[#F9F1E7]">
                Price
              </th>
              <th className="py-4 font-primary font-medium text-[16px] bg-[#F9F1E7]">
                Quantity
              </th>
              <th className="py-4 font-primary font-medium text-[16px] bg-[#F9F1E7]">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            <CartItems />
            <CartItems />
          </tbody>
        </table>
        <div className="w-[30%] bg-[#F9F1E7] h-fit pb-[80px]">
          <h3 className="font-primary font-semibold text-primary text-[32px] pt-4 text-center mb-[61px]">
            Cart Totals
          </h3>
          <div className="text-center px-[60px]">
            <div className="flex justify-between items-center pb-[30px]">
              <p className="ont-primary font-medium text-primary text-[16px]">
                Subtotal
              </p>
              <p className="font-primary font-normal text-secondary text-[16px]">
                BDT. 250,000.00
              </p>
            </div>
            <div className="flex justify-between items-center pb-[30px]">
              <p className="ont-primary font-medium text-primary text-[16px]">
                Subtotal
              </p>
              <p className="font-primary font-normal text-secondary text-[16px]">
                BDT. 250,000.00
              </p>
            </div>
            <div className="flex gap-[62px] justify-center items-center pb-10 border-t-2 border-t-brand pt-[10px]">
              <p className="font-primary font-medium text-primary text-[16px]">
                Total
              </p>
              <p className="font-primary font-medium text-brand text-[18px]">
                BDT. 250,000.00
              </p>
            </div>
            <Link
              to="/checkout"
              className="py-[14px] px-[60px] border border-secondary rounded-xl font-primary font-normal text-[18px] text-primary inline-block hover:text-white hover:bg-brand hover:font-medium hover:transition duration-500"
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartDetails;
