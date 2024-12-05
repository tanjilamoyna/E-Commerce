import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-[48px] pb-[38px] border-t">
      <div className="container">
        <div className="container flex justify-between">
          <div>
            <img src="/logo.png" alt="Logo" />
            <p className="footer w-[285px] pt-[50px]">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <ul>
            <li>
              <p className="footer pb-[55px]">Menu</p>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <p className="footer pb-[55px]">Help</p>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                Payment Options
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                Returns
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                Privacy Policies
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <p className="footer pb-[55px]">Stay Connected</p>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                to="https://x.com/"
                className="text-primary text-[16px] font-medium font-primary pb-[25px] inline-block hover:text-brand hover:transition duration-500"
              >
                Twitter
              </Link>
            </li>
          </ul>
          <div>
            <p className="footer pb-[55px]">Stay Updated</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b border-b-black"
            />
            <button className="border-b border-b-black text-primary text-[14px] font-medium font-primary ml-[11px] hover:text-brand hover:transition duration-500">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <p className="text-primary text-[16px] font-normal font-primary border-t pt-[35px]">
          2023 furniro. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
