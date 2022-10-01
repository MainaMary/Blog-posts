import { configureStore } from "@reduxjs/toolkit";
import AddTodoReducer from "./features/AddTodoSlice";
import PostBlogReducer from "./features/postSlice";

export const store = configureStore({
  reducer: {
    AddTodo: AddTodoReducer,
    PostBlog: PostBlogReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
