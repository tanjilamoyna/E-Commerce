import React from "react";
import { Link } from "react-router-dom";

const CartButton = ({ title, path }) => {
  return (
    <Link
      to={path}
      className="py-2 px-8 border border-secondary rounded-full font-primary font-normal text-xs text-primary hover:text-white hover:bg-brand hover:font-medium hover:transition duration-500"
    >
      {title}
    </Link>
  );
};

export default CartButton;
