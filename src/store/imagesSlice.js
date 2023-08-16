import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    instagramImages: [],
  },
  reducers: {
    addInstagramImages(state, action) {
      state.instagramImages = action.payload.filter((item) => item.instagram);
    },
  },
});

export const { addInstagramImages } = imagesSlice.actions;
export const imagesReducer = imagesSlice.reducer;
