import React from "react";
import Banner from "../components/Shop/Banner";
import Filter from "../components/Shop/Filter";
import Products from "../components/Shop/Products";

const Shop = () => {
  return (
    <>
      <Banner />
      <Filter />
      <Products itemsPerPage={12} />
    </>
  );
};

export default Shop;
