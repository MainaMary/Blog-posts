import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  value: string[];
}
interface EditTodo {
  newName: string;
  id: string;
}
const initialState: Todo = {
  value: ["checkup", "code"],
};
export const AddTodoSlice = createSlice({
  name: "AddTodo",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeTodos: (state, action: PayloadAction<number>) => {
      const newTodos = state.value.splice(action.payload, 1);
    },
    editTodos: (state, action: PayloadAction<EditTodo>) => {},
  },
});

export const { addTodos, removeTodos } = AddTodoSlice.actions;
export default AddTodoSlice.reducer;
