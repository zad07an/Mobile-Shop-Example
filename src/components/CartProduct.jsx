import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
} from "../redux/features/cart-slice";

export default function CartProduct({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementItemQuantity(item));
  const handleDecrement = () => dispatch(decrementItemQuantity(item));

  return (
    <div className=" h-[100px] grid grid-cols-5 place-items-center">
      <div className=" w-[80px] h-[80px] overflow-hidden">
        <img src={item?.thumbnail} className=" object-cover" alt="" />
      </div>
      <div>
        <p>{item?.title}</p>
      </div>
      <div className=" flex items-center gap-2">
        <button
          className=" w-6 h-6 bg-purple-600 text-white rounded-sm flex items-center justify-center"
          onClick={handleDecrement}
        >
          -
        </button>
        <span>{item?.quantity}</span>
        <button
          className=" w-6 h-6 bg-purple-600 text-white rounded-sm flex items-center justify-center"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div>
        <p>{item?.price}</p>
      </div>
      <div>
        <button>Remove</button>
      </div>
    </div>
  );
}
