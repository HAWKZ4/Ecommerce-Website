import { cartReducer } from "./cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer:{
    cartState: cartReducer,
  }
})