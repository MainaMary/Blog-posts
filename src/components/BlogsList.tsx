import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import TimeTracker from "../components/TimeTracker";
import { removeBlog } from "../features/postSlice";
import styled from "styled-components";

interface IProps {
  title: string;
  content: string;
  id?: string;
  authorId?: string;
  time?: string;
  deleteId: number;
}
const BlogsList = (props: IProps) => {
  const { title, content, authorId, time, deleteId } = props;
  const authorsArr = useSelector((state: RootState) => state.Authors);
  const findAuth = authorsArr.find((el) => el.id === authorId);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBlog(deleteId));
  };
  return (
    <div
      style={{
        border: "1px solid purple",
        width: "100%",
        boxShadow: "0 0 3px #777",
        padding: "10px 12px",
        borderRadius: "5px",
      }}
    >
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{findAuth ? findAuth.name : "unknown author"}</p>
      <TimeTracker time={time} />
      <Button onClick={handleClick}>Remove post</Button>
    </div>
  );
};

export default BlogsList;
const Button = styled.div`
  color: #fff;
  background-color: red;
  padding: 5px 12px;
  font-size: 16px;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 5px;
`;
