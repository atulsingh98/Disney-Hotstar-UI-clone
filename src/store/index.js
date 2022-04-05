import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import movie from "./movieSlice";
export const store = configureStore({
  reducer: { auth, movie },
});
