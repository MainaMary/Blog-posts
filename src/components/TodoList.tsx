import React, { useState } from "react";
import styled from "styled-components";
import { removeTodos } from "../features/AddTodoSlice";
import { useSelector, useDispatch } from "react-redux";
interface TodoProps {
  todo: string;
  index: number;
}
const TodoList = ({ todo, index }: TodoProps) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodos(index));
  };
  const handleEdit = () => {};
  return (
    <Container>
      {todo}
      <button>Edit</button>
      <button onClick={handleRemove}>Remove</button>
    </Container>
  );
};

export default TodoList;
const Container = styled.div`
  box-shadow: 0 3px 3px #777;
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 10px auto;
`;
