import { createSlice } from "@reduxjs/toolkit";

export const mobileproduct = createSlice({
  name: "mobileproduct",
  initialState: {
    mobile: [],
  },
  reducers: {
    mobile: (state, action) => {
      state.mobile = action.payload;
    },
  },
});
