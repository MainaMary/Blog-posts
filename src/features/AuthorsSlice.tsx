import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    name: "Arthur Yans",
  },
  {
    id: "2",
    name: "Dom Dotzert",
  },
  {
    id: "3",
    name: "Jack Daniels",
  },
];
export const AuthorsSlice = createSlice({
  name: "Authros",
  initialState,
  reducers: {},
});

export default AuthorsSlice.reducer;
