import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  Isfetching: false,
  initialState: {
    username: null,
    email: null,
  },

  reducers: {
    Loginstart: (state) => {
      state.Isfetching = true;
    },
    LoginSuccess: (state, action) => {
      (state.Isfetching = false), (state.user = action.payload);
    },
    LoginFailure: (state) => {
      (state.Isfetching = false), (state.user = null);
    },
    LogOut: (state) => {
      state.user = null;
    },
  },
});

export const { Loginstart, LoginSuccess, LoginFailure, LogOut } =
  userSlice.actions;

export default userSlice.reducer;
