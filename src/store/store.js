import { cartReducer } from "./cartSlice";
import { filterReducer } from "./filterSlice";
import { imagesReducer } from "./imagesSlice";
import { propsReducer } from "./propsSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer:{
    cartState: cartReducer,
    filterState: filterReducer,
    propsState: propsReducer,
    imagesState: imagesReducer
  }
})