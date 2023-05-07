import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementItemQuantity,
  incrementItemQuantity,
  removeFromCart,
} from "../redux/features/cart-slice";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/all";
import { motion } from "framer-motion";

export default memo(
  function Product({ item }) {
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const isProductInCart = cartItems?.find(
      (inCartItem) => inCartItem?.id === item?.id
    );

    const handleAddToCart = () => dispatch(addToCart(item));
    const handleRemoveFromCart = () => dispatch(removeFromCart(item?.id));
    const handleIncrementCartItem = () => dispatch(incrementItemQuantity(item));
    const handleDecrementCartItem = () => dispatch(decrementItemQuantity(item));
    const handleSeeProduct = () => navigate("/product/" + item?.id);

    return (
      <motion.div
        className=" flex justify-between items-center gap-4 flex-col border-2 border-gray-300 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className=" p-4 cursor-pointer" onClick={handleSeeProduct}>
          <img src={item?.thumbnail} className=" w-full object-cover" alt="" />
        </div>
        <div className=" px-5">
          <p className=" text-md text-center">
            {item?.title} {item?.storage}
          </p>
        </div>
        <div>
          <p>
            {item?.price?.toLocaleString()}{" "}
            <span className=" text-orange-500 font-medium">AMD</span>
          </p>
        </div>
        <div>
          {isProductInCart ? (
            <div className=" flex items-center gap-4">
              <div className=" flex items-center gap-2">
                <button
                  className=" w-8 h-8 bg-primary-orange text-xl text-white rounded-sm flex items-center justify-center"
                  onClick={handleDecrementCartItem}
                >
                  <MdKeyboardArrowDown />
                </button>
                <button>{isProductInCart?.quantity}</button>
                <button
                  className=" w-8 h-8 bg-primary-orange text-xl text-white rounded-sm flex items-center justify-center"
                  onClick={handleIncrementCartItem}
                >
                  <MdKeyboardArrowUp />
                </button>
              </div>
              <button
                className=" h-8 px-4 bg-red-600 text-white rounded-sm"
                onClick={handleRemoveFromCart}
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              className=" py-1 px-10 text-white bg-primary-black rounded-sm"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
        </div>
      </motion.div>
    );
  },
  (prevProps, nextProps) => {
    if (JSON.stringify(prevProps.item) === JSON.stringify(nextProps.item)) {
      return true;
    }
    return false;
  }
);
