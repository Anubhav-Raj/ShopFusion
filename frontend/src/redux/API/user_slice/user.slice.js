import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userinfo",
  initialState: {
    user: null,
    loading: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    logoutUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logoutUser, userlogin } = userSlice.actions;
export const selectUserData = (state) => state.userInfo.user;
export default userSlice.reducer;
