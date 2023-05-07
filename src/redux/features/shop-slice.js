import { createSlice } from "@reduxjs/toolkit";
import { productsDB } from "../../data/products-db";

const initialState = {
  uniqueCategories: [],
  uniqueStorages: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getUniqueStorages: (state, { payload }) => {
      state.uniqueStorages = [
        ...new Set(productsDB?.map((item) => item?.storage)),
      ];
    },
    getUniqueCategories: (state, { payload }) => {
      state.uniqueCategories = [
        ...new Set(productsDB?.map((item) => item?.category)),
      ];
    },
  },
});

export const { getUniqueCategories, getUniqueStorages } = shopSlice.actions;
export default shopSlice.reducer;
