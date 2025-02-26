import React from "react";
import Banner from "../components/Home/Banner";
import Browse from "../components/Home/Browse";
import OurProduct from "../components/Home/OurProduct";
import Explore from "../components/Home/Explore";
import Setup from "../components/Home/Setup";

const Home = () => {
  return (
    <>
      <Banner />
      <Browse />
      <OurProduct />
      <Explore />
      <Setup />
    </>
  );
};

export default Home;
