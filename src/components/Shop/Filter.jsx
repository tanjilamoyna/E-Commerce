import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Filter = () => {
  return (
    <section className="py-[35px] bg-[#FFF3E3]">
      <div className="container flex items-center justify-between">
        <div className="flex">
          <p className="flex items-center gap-4 font-primary font-normal text-primary text-[20px] pr-[30px]">
            <HiAdjustmentsHorizontal className=" text-[25px]" />
            <span>Filter</span>
          </p>
          <p className="flex items-center font-primary font-normal text-primary text-base pl-[32px] border-l-2 border-l-secondary">
            Showing 1–12 of 40 results
          </p>
        </div>
        <div className="flex items-center gap-8">
          <label className="font-primary font-normal text-primary text-[20px] pr-[16px]">
            Show
          </label>
          <input
            type="number"
            value="12"
            className="font-primary text-secondary font-normal py-3 w-14 text-center"
          />
          <label className="font-primary font-normal text-primary text-[20px] pr-[16px]">
            Short by
          </label>
          <select className="py-3 px-7 font-primary font-normal text-secondary text-center ">
            <option value="default">Default</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filter;
