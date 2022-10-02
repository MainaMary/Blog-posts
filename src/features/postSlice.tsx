import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PostProps {
  title: string;
  content: string;
  id?: string;
}
const initialState: any = [
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
  name: "PostBlog",
  initialState,
  reducers: {
    postBlogs: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    removeBlog: (state, action: PayloadAction<any>) => {
      const newList = state.splice(action.payload, 1);
      state.push(newList);
    },
  },
});

export const { postBlogs, removeBlog } = postSlice.actions;
export default postSlice.reducer;
