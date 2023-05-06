import React from "react";
import { navbarDb } from "../data/navbar-db";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/all";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartAmount } = useSelector((state) => state.cart);
  const activeLink = ({ isActive }) => ({ color: isActive ? "gold" : null });

  return (
    <nav className=" w-full h-[60px] px-[60px] grid grid-cols-3 bg-purple-600">
      <div className=" h-full flex justify-start items-center">
        <NavLink to="/" className=" text-white text-3xl font-medium uppercase">
          LOGO
        </NavLink>
      </div>
      <ul className=" flex items-center justify-center gap-4">
        {navbarDb?.map((link, index) => {
          return (
            <li key={index}>
              {link?.pathname === "Cart" ? (
                <NavLink
                  to={link?.path}
                  className=" text-white text-lg relative"
                  style={activeLink}
                >
                  <FiShoppingCart/>
                  <div className=" w-4 h-4 flex items-center justify-center rounded-full bg-red-600 absolute top-[-10px] right-[-10px]">
                    <p className=" text-[12px]">{cartAmount}</p>
                  </div>
                </NavLink>
              ) : (
                <NavLink
                  to={link?.path}
                  className=" text-white text-lg"
                  style={activeLink}
                >
                  {link?.pathname}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
      <div className=" flex items-center justify-end">
        <button
          className=" px-10 py-1 bg-orange-500 text-white uppercase rounded-md"
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
