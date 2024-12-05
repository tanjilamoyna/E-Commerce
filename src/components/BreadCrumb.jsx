import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = () => {
  const location = useLocation();
  const path1 = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  console.log(path2);
  return (
    <ul className="flex items-center justify-center gap-6 mt-1">
      <li>
        <Link
          to="/"
          className="font-primary font-medium text-[16px] text-primary"
        >
          Home
        </Link>
      </li>
      <li>
        <FaChevronRight />
      </li>
      <li>
        <Link
          to={`/${path1}`}
          className="font-primary font-light text-[16px] text-primary capitalize"
        >
          {path1}
        </Link>
      </li>
      {path2 && (
        <>
          <li>
            <FaChevronRight />
          </li>
          <p className="font-primary font-light text-[16px] text-primary capitalize border-l-2 border-l-secondary pl-[32px]">
            {path2}
          </p>
        </>
      )}
    </ul>
  );
};

export default BreadCrumb;
