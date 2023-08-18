import { createSlice } from "@reduxjs/toolkit";

const propsSlice = createSlice({
  name: "props",

  initialState: {
    // this to handle the show of login form
    showQuickViewBox: false, 
    // this to handle the show of login form
    showLoginForm:false,
    // this to handle the show side cartlist
    showSideCart:false,
    // this is for individual productCard info
    productDetail: {
      id:null,
      image: null,
      title: null,
      category: null,
      price: null,
      rating: null,
      description: null,
      quantity: null,
    },
    searchDetail:""
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
    updateShowSideCart(state, action) {
      const updatedShowSidecart = action.payload;
      state.showSideCart = updatedShowSidecart;
    },
    updateSearchDetail(state, action) {
      const updatedSearchDetail = action.payload;
      state.searchDetail = updatedSearchDetail;
    },
    // To add products from quickview to cartList
    setProductDetail(state, action) {
      const details = action.payload;
      const { image, title, category, price, rating, description , quantity  } = details;
      state.productDetail.image = image;
      state.productDetail.title = title;
      state.productDetail.description = description;
      state.productDetail.category = category;
      state.productDetail.price = price;
      state.productDetail.rating = rating;
      state.productDetail.quantity = quantity;
    },
  },
});
export const { updateShowQuickViewBox, setProductDetail , updateShowLoginForm ,updateShowSideCart , updateSearchDetail } = propsSlice.actions;
export const propsReducer = propsSlice.reducer;
