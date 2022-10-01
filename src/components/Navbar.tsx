import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Title>Blogs</Title>
      </div>

      <div>
        <Items> No of blogs: 3</Items>
      </div>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav`
  height: 10vh;
  padding: 0 32px;
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
