import { createSlice } from "@reduxjs/toolkit";
import { AuthSlice } from "../../interface/interface";

const initialSlice: AuthSlice = {
  user: null,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialSlice,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginSuccessNofycation: (state) => {
      state.loading = true;
    },
    loginHasDone: (state) => {
      state.loading = false;
    },
    signOut: (state) => {
      state.loading = true;
      state.user = null;
    },
    signOutSuccess: (state) => {
      state.loading = false;
    },
    signOutFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  login,
  loginSuccess,
  loginFailed,
  loginHasDone,
  loginSuccessNofycation,
  signOut,
  signOutFailed,
  signOutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
