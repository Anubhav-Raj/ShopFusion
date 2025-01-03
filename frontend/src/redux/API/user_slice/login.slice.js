// login.slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const loginData = (state) => state.login.user;
export const { loginSuccess, loginFailure, logout } = loginSlice.actions;

// Export the reducer as the default export
export default loginSlice.reducer;
