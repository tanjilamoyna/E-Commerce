import React from "react";
import { LiaChevronCircleRightSolid } from "react-icons/lia";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="h-12 w-12 rounded-full flex justify-center items-center bg-white absolute top-1/2 right-0 text-brand text-[50px] cursor-pointer -translate-y-1/2 hover:text-white hover:bg-brand hover:transition duration-500"
      onClick={onClick}
    >
      <LiaChevronCircleRightSolid />
    </div>
  );
};

export default NextArrow;
