import styled from "styled-components";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postBlogs } from "../features/postSlice";
import { RootState } from "../store";
import { nanoid } from "@reduxjs/toolkit";
import BlogsList from "./BlogsList";
const BlogsForm = () => {
  const dispatch = useDispatch();
  const blogsArr = useSelector((state: RootState) => state.PostBlog);
  console.log(blogsArr, "blogs");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleContent = (e: any) => {
    setContent(e.target.value);
  };
  const checkValue = Boolean(title) && Boolean(content);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title && !content) return;
    dispatch(
      postBlogs({
        title: title,
        content: content,
        id: nanoid(),
      })
    );
    setContent("");
    setTitle("");
  };
  return (
    <Main>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Box>
            <Title>Add blog post</Title>
          </Box>
          <Box>
            <Label>Title</Label>
            <CustomInput type="text" name="title" onChange={handleTitle} />
          </Box>
          <Box>
            <Label>Content</Label>
            <CustomTextArea name="content" onChange={handleContent} />
          </Box>
          <Box>
            <Button disabled={!checkValue}>Add blog</Button>
          </Box>
        </Form>
      </Wrapper>
      <Grid>
        {blogsArr.map((blog: any, index: number) => {
          return (
            <BlogsList key={index} title={blog.title} content={blog.content} />
          );
        })}
      </Grid>
    </Main>
  );
};

export default BlogsForm;
const Main = styled.div`
  padding: 0 48px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: auto;
  width: 100%;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 0 3px #777;
  border-radius: 10px;
`;
const CustomTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  height: 15vh;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;
const CustomInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;
const Title = styled.h2``;
const Form = styled.form`
  width: 100%;
  padding: 0 30px;
`;
const Box = styled.div`
  margin: 8px 0;
`;
const Button = styled.button`
  background-color: var(--clr-primary);
  color: #fff;
  padding: 10px 20px;
  width: 100%;
  margin: 8px 0;
  outline: none;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;
