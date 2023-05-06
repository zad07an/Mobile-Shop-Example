import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

export default function Cart() {
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  return (
    <div className=" w-full flex items-center flex-col">
      <div className=" px-60px">
        {
        cartItems.length ? (
          cartItems?.map((item) => {
            return <CartProduct key={item?.id} item={item} />;
          })
        ) : (
          <div>
            <p>No cart items</p>
          </div>
        )}
      </div>
      <div>
        {
          cartItems?.length ? (
            <div className=" grid grid-cols-2">
              <div>
                <button></button>
              </div>
              <div>
                <p>Total price: {cartTotal?.toLocaleString()} AMD</p>
              </div>
            </div>
          ) : null
        }
      </div>
    </div>
  );
}
