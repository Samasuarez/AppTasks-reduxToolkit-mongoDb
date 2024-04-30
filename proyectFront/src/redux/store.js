import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice.js";
import modalReducer from "./modalSlice.js";
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    modal: modalReducer,
  },
});
