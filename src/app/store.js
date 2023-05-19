import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../theme/themeSlice";
import demoApiReducer from "../features/demoApi/demoApiSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    api: demoApiReducer,
  },
});
