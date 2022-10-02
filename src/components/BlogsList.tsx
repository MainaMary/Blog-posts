import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import TimeTracker from "../components/TimeTracker";

interface IProps {
  title: string;
  content: string;
  id?: string;
  authorId?: string;
  time?: string;
}
const BlogsList = (props: IProps) => {
  const { title, content, authorId, time } = props;
  const authorsArr = useSelector((state: RootState) => state.Authors);
  const findAuth = authorsArr.find((el) => el.id === authorId);
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
      <p>{findAuth ? findAuth.name : "unknown"}</p>
      <TimeTracker time={time} />
    </div>
  );
};

export default BlogsList;
