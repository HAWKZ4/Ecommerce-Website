import { cartReducer } from "./cartSlice";
import { dataReducer } from "./dataSlice";
import { filterReducer } from "./filterSlice";
import { propsReducer } from "./propsSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer:{
    cartState: cartReducer,
    filterState: filterReducer,
    dataState: dataReducer,
    propsState: propsReducer
  }
})