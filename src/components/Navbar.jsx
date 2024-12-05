import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import CartSidebar from "./Cart/CartSidebar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [sideCart, setSideCart] = useState(false);
  const handelSidebar = (result) => {
    setSideCart(result);
  };
  return (
    <>
      <nav className="py-7 relative bg-white">
        <div className="container flex justify-between items-center">
          <div>
            <img src="/logo.png" alt="Logo" />
          </div>
          <ul
            className={`w-1/3 flex flex-col lg:w-auto ${
              show ? "-translate-x-full" : "translate-x-0"
            } transition-all lg:flex-row items-center gap-[75px] font-primary text-lg font-medium text-black absolute lg:static top-full left-0 bg-white h-screen lg:h-auto`}
          >
            <li className="hover:text-brand hover:transition duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-brand hover:transition duration-500">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:text-brand hover:transition duration-500">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-brand hover:transition duration-500">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div>
            <ul className="flex items-center gap-[45px] text-2xl">
              <li className="hover:text-brand hover:transition duration-500">
                <Link>
                  <FaRegUser />
                </Link>
              </li>
              <li className="hover:text-brand hover:transition duration-500">
                <Link>
                  <IoSearch />
                </Link>
              </li>
              <li className="hover:text-brand hover:transition duration-500">
                <Link>
                  <FaRegHeart />
                </Link>
              </li>
              <li
                className="hover:text-brand hover:transition duration-500"
                onClick={() => setSideCart(true)}
              >
                <AiOutlineShoppingCart className="cursor-pointer" />
              </li>
            </ul>
          </div>
          <button className="block lg:hidden" onClick={() => setShow(!show)}>
            <FaBarsStaggered className="text-2xl" />
          </button>
        </div>
      </nav>
      {sideCart && <CartSidebar handelSidebar={handelSidebar} />}
    </>
  );
};

export default Navbar;
