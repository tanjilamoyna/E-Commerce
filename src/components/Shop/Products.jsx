import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductItems from "../ProductItems";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

const Products = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };
  console.log({ currentItems });

  return (
    <>
      <section className="py-[46px]">
        <div className="container">
          <div className=" grid grid-cols-4 gap-[32px] mt-[32px]">
            {currentItems &&
              currentItems.map((Item, i) => <ProductItems key={i} />)}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            className="flex items-center justify-center mt-[40px] gap-[38px] pagination-product"
          />
        </div>
      </section>
    </>
  );
};

export default Products;
