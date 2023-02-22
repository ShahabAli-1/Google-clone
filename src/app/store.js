import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/appSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
