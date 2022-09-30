import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import { addTodos } from "../features/AddTodoSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
const AddTodo = () => {
  const todosArr = useSelector((state: RootState) => state.AddTodo.value);
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!inputValue) return;
    dispatch(addTodos(inputValue));
    setInputValue("");
  };
  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type todo"
          />
          <Button>Add todo</Button>
        </Form>
      </Wrapper>
      {todosArr.map((todo: string, index: number) => (
        <TodoList todo={todo} index={index} key={index} />
      ))}
    </>
  );
};

export default AddTodo;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: auto;
  width: 100%;
  max-width: 600px;
  margin: auto;

  box-shadow: 0 0 3px #777;
  border-radius: 10px;
`;
const Form = styled.form`
  padding: 26px 20px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  outline: nonel
  border-radius: 10px;
  color: #737373;

`;
const Button = styled.button`
  width: 50%;
  color: #fff;
  background-color: blue;
  text-align: center;
  font-size: 18px;
  padding: 10xp 12px;
`;
