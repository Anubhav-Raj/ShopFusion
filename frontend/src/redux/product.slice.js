// productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const { REACT_APP_API_BASE_URL } = process.env;

export const fetchProductData = createAsyncThunk(
  "products/fetchProductData",
  async ({ id, type, filterData }, { rejectWithValue }) => {
    try {
      // console.log(filterData);

      // Ensure filterData is an array
      const parsedFilterData = Array.isArray(filterData) ? filterData : [];

      let endpoint;

      // Depending on the 'type', construct the endpoint URL
      if (type === "subcategory") {
        endpoint = `${REACT_APP_API_BASE_URL}api/product/subcategoriesProducts`;
        // console.log(endpoint);
      } else if (type === "dept") {
        endpoint = `${REACT_APP_API_BASE_URL}api/product/getProductsByDepartment`;
      } else {
        endpoint = `${REACT_APP_API_BASE_URL}api/product/getallproduct`;
      }

      // Make the request with filterData in the request body
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filterData: parsedFilterData, id: id }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productData: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productData = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
