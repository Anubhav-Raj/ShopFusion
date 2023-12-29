// brandSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial state
const initialState = {
  brands: [],
  status: "idle",
  error: null,
};
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://production-api.com"
    : process.env.REACT_APP_API_BASE_URL || "http://localhost:4026";
const getBrandsURL = `${baseURL}/brands`;
// Define the asynchronous thunk to fetch brands from the API
export const fetchBrands = createAsyncThunk("brands/fetchBrands", async () => {
  const response = await axios.get(getBrandsURL); // Replace with your API endpoint
  return response.data;
});

// Create a slice with the reducer and actions
const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default brandSlice.reducer;
