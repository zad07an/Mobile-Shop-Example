import { createSlice } from "@reduxjs/toolkit";
import { productsDB } from "../../data/products-db";

const initialState = {
  productItem: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, {payload}) => {
      state.productItem = productsDB?.find(item => item?.id === Number(payload));
    }
  },
});

export const {getProduct} = productSlice.actions;
export default productSlice.reducer;
