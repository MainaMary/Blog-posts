import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Navbar = () => {
  const blogsArr = useSelector((state: RootState) => state.PostBlog);
  return (
    <Nav>
      <div>
        <Title>Blogs</Title>
      </div>

      <div>
        <Items> {`No of blogs ${blogsArr.length}`}</Items>
      </div>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav`
  height: 10vh;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  background-color: var(--clr-primary);
  align-items: center;
`;
const Title = styled.h2`
  color: #fff;
`;
const Items = styled.h2`
  color: #fff;
`;
