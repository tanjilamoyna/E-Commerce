import React from "react";
import CommonBanner from "../components/CommonBanner";
import CartDetails from "../components/Cart/CartDetails";

const Cart = () => {
  return (
    <>
      <CommonBanner title="Cart" />
      <CartDetails />
    </>
  );
};

export default Cart;
