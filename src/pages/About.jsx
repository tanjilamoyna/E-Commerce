import React from "react";
import CommonBanner from "../components/CommonBanner";
import Explore from "../components/Home/Explore";
import Browse from "../components/Home/Browse";

const About = () => {
  return (
    <>
      <CommonBanner title="About" />
      <Browse />
      <Explore />
    </>
  );
};

export default About;
