import { configureStore, createSlice } from "@reduxjs/toolkit";

const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem("isAdminLoggedIn", "true");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("isAdminLoggedIn");
    },
  },
});

export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;