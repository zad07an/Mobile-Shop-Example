import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/cart-slice";
import { useNavigate } from "react-router-dom";

export default function Product({ item }) {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const itemExist = cartItems?.find(
      (existItem) => existItem?.id === item?.id
    );
    if (itemExist) {
      dispatch(removeFromCart(item?.id));
      return;
    } else {
      dispatch(addToCart(item));
    }
  };

  const handleSeeProduct = () => navigate("/product/" + item?.id);

  return (
    <div className=" flex justify-between items-center gap-4 flex-col border-2 border-gray-300 pb-4">
      <div className=" p-4 cursor-pointer" onClick={handleSeeProduct}>
        <img src={item?.thumbnail} className=" w-full object-cover" alt="" />
      </div>
      <div>
        <p className=" font-medium text-lg">
          {item?.title} {item?.storage}
        </p>
      </div>
      <div>
        <p>{item?.price?.toLocaleString()} AMD</p>
      </div>
      <div>
        <button
          className=" py-1 px-10 text-white bg-purple-600 rounded-sm"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}