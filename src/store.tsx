import { configureStore } from "@reduxjs/toolkit";
import AddTodoReducer from "./features/AddTodoSlice";

export const store = configureStore({
  reducer: {
    AddTodo: AddTodoReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
