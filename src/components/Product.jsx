import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementItemQuantity,
  incrementItemQuantity,
  removeFromCart,
} from "../redux/features/cart-slice";
import { useNavigate } from "react-router-dom";

export default function Product({ item }) {
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
        {isProductInCart ? (
          <div className=" flex items-center gap-4">
            <div className=" flex items-center gap-2">
              <button
                className=" w-6 h-6 bg-purple-600 text-white rounded-sm flex items-center justify-center"
                onClick={handleDecrementCartItem}
              >
                -
              </button>
              <button>{isProductInCart?.quantity}</button>
              <button
                className=" w-6 h-6 bg-purple-600 text-white rounded-sm flex items-center justify-center"
                onClick={handleIncrementCartItem}
              >
                +
              </button>
            </div>
            <button
              className=" py-1 px-4 bg-red-500 text-white rounded-sm"
              onClick={handleRemoveFromCart}
            >
              Remove
            </button>
          </div>
        ) : (
          <button
            className=" py-1 px-10 text-white bg-purple-600 rounded-sm"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
