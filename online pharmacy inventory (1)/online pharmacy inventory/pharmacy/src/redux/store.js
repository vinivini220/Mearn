import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import medicineReducer from "./medicineSlice";
import salesReducer from "./salesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    medicines: medicineReducer,
    sales: salesReducer,
  },
});

export default store;
