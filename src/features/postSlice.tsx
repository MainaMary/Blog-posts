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
  },
});

export const { postBlogs } = postSlice.actions;
export default postSlice.reducer;
