// Redux slice
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterOptions",
  initialState: {
    selectedOptions: [],
  },
  reducers: {
    addFilterOption: (state, action) => {
      state.selectedOptions.push(action.payload);
    },
    removeFilterOption: (state, action) => {
      const indexToRemove = state.selectedOptions.findIndex(
        (option) => option.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        state.selectedOptions.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addFilterOption, removeFilterOption } = filterSlice.actions;

export default filterSlice.reducer;
