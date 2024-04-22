import { createSlice } from "@reduxjs/toolkit";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
  },
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addReview: (state, action) => {
      state.reviews.unshift(action.payload); // Add new review to the beginning of the array
    },
  },
});

export const { setReviews, addReview } = reviewsSlice.actions;

export const selectReviews = (state) => state.reviews.reviews;

export default reviewsSlice.reducer;
