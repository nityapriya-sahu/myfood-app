import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // userInfo: .....
    // we can add multiple slice
  },
});

export default appStore;
