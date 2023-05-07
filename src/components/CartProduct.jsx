import React, { memo } from "react";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeFromCart,
} from "../redux/features/cart-slice";
import { motion } from "framer-motion";

export default memo(function CartProduct({ item }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => dispatch(removeFromCart(item?.id));
  const handleIncrement = () => dispatch(incrementItemQuantity(item));
  const handleDecrement = () => dispatch(decrementItemQuantity(item));

  return (
    <motion.div
      className=" w-full h-[100px] grid grid-cols-5 place-items-center border-2 border-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className=" w-[80px] h-[80px] overflow-hidden">
        <img src={item?.thumbnail} className=" object-cover" alt="" />
      </div>
      <div>
        <p className=" text-lg">{item?.title}</p>
      </div>
      <div className=" flex items-center gap-2">
        <button
          className=" w-8 h-8 bg-orange-600 text-white rounded-sm flex items-center justify-center"
          onClick={handleDecrement}
        >
          -
        </button>
        <span>{item?.quantity}</span>
        <button
          className=" w-8 h-8 bg-orange-600 text-white rounded-sm flex items-center justify-center"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className=" flex items-center flex-col">
        <div>
          <p>Price</p>
        </div>
        <div>
          <p>
            {item?.price?.toLocaleString()}{" "}
            <span className=" text-orange-500 font-medium">AMD</span>
          </p>
        </div>
      </div>
      <div>
        <button
          className=" h-8 px-10 bg-red-600 text-white rounded-sm"
          onClick={handleRemoveFromCart}
        >
          Remove
        </button>
      </div>
    </motion.div>
  );
}, (prevProps, nextProps) => {
  if (JSON.stringify(prevProps?.item) === JSON.stringify(nextProps?.item)) {
    return true;
  }
  return false;
})
