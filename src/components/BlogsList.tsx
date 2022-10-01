import React from "react";

interface IProps {
  title: string;
  content: string;
  id?: string;
}
const BlogsList = (props: IProps) => {
  const { title, content } = props;
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
    </div>
  );
};

export default BlogsList;
