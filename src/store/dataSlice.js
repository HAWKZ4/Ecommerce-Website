import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    name: "",
    email: "",
  },

  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },
    addEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const dataReducer = dataSlice.reducer;

export const { addName, addEmail } = dataSlice.actions;
