import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartAmount: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push({ ...payload, quantity: 1 });
      state.cartAmount += 1;
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item?.id !== payload);
      state.cartAmount -= 1;
    },
    incrementItemQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item?.id === payload?.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    decrementItemQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item?.id === payload?.id
      );
      if (state.cartItems[itemIndex].quantity <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== payload?.id
        );
        state.cartAmount -= 1;
      } else {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },
    getTotalPrice: (state, { payload }) => {
      state.cartTotal = state.cartItems.reduce((total, value) => {
        return (total += value?.quantity * value?.price);
      }, 0);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  getTotalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
