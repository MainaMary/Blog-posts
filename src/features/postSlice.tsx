import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Redux Toolkit",
    content: "Batteries included toolset for Redux development",
  },
  {
    title: "Craking coding interviews",
    content: "Learn Data structures and algorithims the right way",
  },
];
export const postSlice = createSlice({
  name: "create-blogs",
  initialState,
  reducers: {
    postBlogs: (state, action: PayloadAction<any>) => {},
  },
});

export const { postBlogs } = postSlice.actions;
export default postSlice.reducer;
