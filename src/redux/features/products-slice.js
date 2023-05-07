import { createSlice } from "@reduxjs/toolkit";
import { productsDB } from "../../data/products-db";

const initialState = {
  productItems: productsDB,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getSortedProducts: (state, { payload }) => {
      if (payload !== "default") {
        state.productItems.sort((a, b) => {
          if (payload === "lower") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
      } else {
        state.productItems = productsDB;
      }
    },
  },
});

export const { getSortedProducts } = productsSlice.actions;
export default productsSlice.reducer;
