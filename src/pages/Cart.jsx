import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import MainContainer from "../components/ui/MainContainer";
import { clearCartItems } from "../redux/features/cart-slice";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  const handleClearCartItems = () => dispatch(clearCartItems());

  return (
    <MainContainer>
      <div className=" w-full px-[120px] flex items-center flex-col gap-10">
        {cartItems?.length ? (
          <>
            <div className=" w-full flex items-center flex-col gap-2">
              {cartItems?.map((item) => {
                return <CartProduct key={item?.id} item={item} />;
              })}
            </div>
            <div className=" w-full grid grid-cols-2">
              <div className=" flex items-center justify-start">
                <button
                  className=" py-1 px-10 bg-red-600 text-white rounded-sm"
                  onClick={handleClearCartItems}
                >
                  Clear All
                </button>
              </div>
              <div className=" flex items-center justify-end">
                <p className=" text-lg">
                  Total price: {cartTotal?.toLocaleString()}{" "}
                  <span className=" text-orange-500 font-medium">AMD</span>
                </p>
              </div>
            </div>
          </>
        ) : (
          <div>
            <p className=" text-2xl">No cart items</p>
          </div>
        )}
      </div>
    </MainContainer>
  );
}
