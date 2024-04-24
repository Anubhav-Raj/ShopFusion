// sortSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortType: "HightoLow",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setSortType } = sortSlice.actions;

export default sortSlice.reducer;
