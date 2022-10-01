import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <h2>Blogs</h2>
      </div>

      <div>No of blogs: 3</div>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav`
  height: 40vh;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  backgorund-color: var(--clr-primary);
`;
