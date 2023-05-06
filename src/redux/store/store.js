import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products-slice";
import cartReducer from "../features/cart-slice";
import productReducer from "../features/product-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    product: productReducer
  },
});

export default store;
