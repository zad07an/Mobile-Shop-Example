import { createSlice } from "@reduxjs/toolkit";
import { productsDB } from "../../data/products-db";

const initialState = {
  productItems: productsDB
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

  }
})

export const {} = productsSlice.actions;
export default productsSlice.reducer;