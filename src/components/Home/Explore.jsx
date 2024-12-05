import React from "react";
import Button from "../Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";

const Explore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <span></span>,
  };
  return (
    <section className="mb-[67px] py-[44px] bg-[#FCF8F3] explore">
      <div className="container flex gap-10">
        <div className="w-2/5">
          <h2 className="title pt-[179px]">50+ Beautiful rooms inspiration</h2>
          <p className="details pt-[7px] pb-[25px]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you.
          </p>
          <Button title="EXPLORE MORE " path="/shop" />
        </div>
        <div className="w-3/5">
          <Slider {...settings}>
            <div className="slide_items">
              <img src="/slide-1.png" className="w-full h-full" alt="Slider" />
            </div>
            <div className="slide_items">
              <img src="/slide-2.png" className="w-full h-full" alt="Slider" />
            </div>
            <div className="slide_items">
              <img src="/slide-3.png" className="w-full h-full" alt="Slider" />
            </div>
            <div className="slide_items">
              <img src="/slide-2.png" className="w-full h-full" alt="Slider" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;
