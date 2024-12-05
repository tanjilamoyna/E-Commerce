import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, path }) => {
  return (
    <Link
      className="font-primary text-white text-[16px] px-[72px] py-[25px] inline-block bg-brand font-bold scale-100 hover:scale-100 hover:bg-white hover:text-brand hover:border-2 hover:border-brand hover:transition duration-500"
      to={path}
    >
      {title}
    </Link>
  );
};

export default Button;
