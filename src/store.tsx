import { configureStore } from "@reduxjs/toolkit";
import AddTodoReducer from "./features/AddTodoSlice";
import PostBlogReducer from "./features/postSlice";
import AuthorsReducer from "./features/AuthorsSlice";

export const store = configureStore({
  reducer: {
    AddTodo: AddTodoReducer,
    PostBlog: PostBlogReducer,
    Authors: AuthorsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
