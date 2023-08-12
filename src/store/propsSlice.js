import { createSlice } from "@reduxjs/toolkit";

const propsSlice = createSlice({
  name: "props",

  initialState: {
    // this to handle the show of login form
    showQuickViewBox: false, 
    // this to handle the show of login form
    showLoginForm:false,
    // this is for individual productCard info
    productDetail: {
      image: null,
      title: null,
      category: null,
      price: null,
      rating: null,
      description: null,
    },
  },
  reducers: {
    updateShowQuickViewBox(state, action) {
      const updatedShowQuickViewBox = action.payload;
      state.showQuickViewBox = updatedShowQuickViewBox;
    },
    updateShowLoginForm(state, action) {
      const updatedShowLoginForm = action.payload;
      state.showLoginForm = updatedShowLoginForm;
    },
    setProductDetail(state, action) {
      const details = action.payload;
      const { image, title, category, price, rating, description } = details;
      state.productDetail.image = image;
      state.productDetail.title = title;
      state.productDetail.description = description;
      state.productDetail.category = category;
      state.productDetail.price = price;
      state.productDetail.rating = rating;
    },
  },
});
export const { updateShowQuickViewBox, setProductDetail , updateShowLoginForm } = propsSlice.actions;
export const propsReducer = propsSlice.reducer;
