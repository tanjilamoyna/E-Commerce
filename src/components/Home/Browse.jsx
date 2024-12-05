import React from "react";

const Browse = () => {
  return (
    <section className="py-[33px]">
      <div className="container">
        <div className="pb-[62px]">
          <h2 className="title text-center">Browse The Range</h2>
          <p className="details text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="w-1/3">
            <img src="/dining.png" className="w-full" alt="Dining" />
            <p className="browse-details text-center">Dining</p>
          </div>
          <div className="w-1/3">
            <img src="/living.png" className="w-full" alt="Lining" />
            <p className="browse-details text-center ">Living</p>
          </div>
          <div className="w-1/3">
            <img src="/bedroom.png" className="w-full" alt="Bedroom" />
            <p className="browse-details text-center">Bedroom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
