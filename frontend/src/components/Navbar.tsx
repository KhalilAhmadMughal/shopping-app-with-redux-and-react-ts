import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { homeNavs } from "../constants/data";
import { useSelector } from "react-redux";

const Navbar = () => {
  const productDataState = useSelector((state: any) => state.cartReducer);

  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex justify-between items-center bg-white w-full px-6 h-[50px] font-sans shadow-lg">
      <span className="border  p-1">logo</span>
      <div className="basis-[60%] md:flex justify-between items-center hidden">
        <ul className="flex gap-4">
          {homeNavs.map((nav, index) => (
            <li className="capitalize" key={nav.id + "-" + index}>
              <NavLink
                to={nav.to}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-dashed font-semibold text-purple border-purple transition-all duration-200 text-secondary hover:text-white"
                    : "hover:text-purple font-semibold cursor-pointer"
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="h-[40px] w-[40px] border-2 rounded-full bg-white relative flex items-center justify-center hover:text-white hover:font-bold hover:border-purple hover:shadow-lg hover:bg-purple hover:cursor-pointer">
          <AiOutlineShoppingCart size={24} />
          <div className="absolute -bottom-1 -right-1 p-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            {productDataState.cartTotalQuantity}
          </div>
        </div>
      </div>
      <div
        onClick={clickHandler}
        className="cursor-pointer hover:text-purple md:hidden"
      >
        {!toggle ? <BiMenu size={32} /> : ""}
      </div>
      <div
        className={`${
          toggle
            ? "fixed right-0 top-0 p-4 w-[300px] rounded-lg border-r border-r-gray min-h-screen bg-white shadow-lg ease-in-out duration-700"
            : "fixed right-[-100%]"
        } `}
      >
        <div
          onClick={clickHandler}
          id="menu"
          className="flex justify-end cursor-pointer hover:text-secondary mb-6"
        >
          {toggle ? <BiX size="32px" /> : ""}
        </div>
        <div className="flex justify-between">
          <span className="border border-white p-1 cursor-pointer hover:text-purple">
            logo
          </span>
        </div>
        <ul className="flex flex-col mt-6 gap-2">
          {homeNavs.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.to}
                className={({ isActive }) =>
                  isActive
                    ? "border-2 p-2 border-dashed font-semibold text-purple border-purple transition-all duration-200 text-secondary hover:text-white"
                    : "p-2 hover:text-purple font-semibold cursor-pointer"
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
