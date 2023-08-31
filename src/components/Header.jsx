import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { DishesContext } from "../utils/Contexts";

const Header = () => {
  const { dishes, setDishes } = useContext(DishesContext);

  const cartLength = dishes.filter(
    (d) => d.count > 0 && d.isInCart == true
  ).length;
  const count = dishes.reduce((total, product) => total + product.count, 0);
  return (
    <nav className="header pb-3  pe-5 md:pb-0">
      <div className="flex items-center flex-shrink-0 text-white ms-6 w-32 ">
        <img src="restaurant.png" className=" hover:scale-x-110" />
      </div>

      <ul className="menu">
        <li>
          <Link to="/" className="menu-link  text-teal-200 hover:text-white">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="menu-link  text-teal-200 hover:text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            className="menu-link  text-teal-200 hover:text-white"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/contactus"
            className="menu-link  text-teal-200 hover:text-white"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="menu-link  text-teal-200 hover:text-white"
          >
            Log Out
          </Link>
        </li>
        <li>
          <Link to="/cart" className=" xl:ms-96 lg:ms-48 md:ms-20 cart-link">
            <svg
              className="cart-icon stroke-teal-200 hover:stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <title>Cart items</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="cart-count">{cartLength}</span>
          </Link>
        </li>
        {/* cart */}
        {/* <li>
          <div className="flex flex-col text-center">
            <Link to="/cart" className="cart-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  stroke-teal-200 hover:stroke-white"
              >
                <title>Cart items</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>
            <span className=" text-teal-200 hover:text-white">{count}</span>
          </div>
        </li> */}
        {/* <li>
          <Link to="/cart" className="cart-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6  stroke-teal-200 hover:stroke-white"
            >
              <title>Cart</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <span className=" text-teal-200 hover:text-white">
              {cartLength}
            </span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Header;
