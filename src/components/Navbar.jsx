import React from "react";
import { navbarDb } from "../data/navbar-db";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/all";
import useScrollDirection from "../hooks/UseScrollDirection";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartAmount } = useSelector((state) => state.cart);
  const activeLink = ({ isActive }) => ({ color: isActive ? "#F97316" : null });

  const scrollDirection = useScrollDirection();

  return (
    <nav
      className=" w-full h-[60px] px-[60px] transition-all duration-150 sticky z-10 grid grid-cols-3 bg-primary-black"
      style={{ top: scrollDirection === "down" ? "-60px" : "0px" }}
    >
      <div className=" h-full flex justify-start items-center">
        <NavLink to="/" className=" text-white text-3xl font-medium uppercase">
          LOGO
        </NavLink>
      </div>
      <ul className=" flex items-center justify-center gap-6">
        {navbarDb?.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link?.path}
                className=" text-white"
                style={activeLink}
              >
                {link?.pathname}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className=" flex items-center justify-end">
        <div
          className=" text-white text-2xl relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <FiShoppingCart />
          <div className=" w-5 h-5 flex items-center justify-center rounded-full bg-red-600 absolute top-[-8px] right-[-13px]">
            <p className=" text-[12px]">{cartAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
