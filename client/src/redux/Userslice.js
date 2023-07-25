import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    Isfetching: false,
    RegisterStatus: false,
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
    RegisterStart: (state) => {
      state.Isfetching = true;
    },
    RegisterSuccess: (state, action) => {
      (state.RegisterStatus = true), (state.user = action.payload);
    },
    RegisterFailure: (state) => {
      state.RegisterStatus = false;
      state.user = null;
    },
  },
});

export const {
  Loginstart,
  LoginSuccess,
  LoginFailure,
  LogOut,
  RegisterStart,
  RegisterSuccess,
  RegisterFailure,
} = userSlice.actions;

export default userSlice.reducer;
