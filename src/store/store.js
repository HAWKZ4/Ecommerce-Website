import { cartReducer } from "./cartSlice";
import { dataReducer } from "./dataSlice";
import { filterReducer } from "./filterSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer:{
    cartState: cartReducer,
    filterState: filterReducer,
    dataState: dataReducer
  }
})