import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "./images/logo.png";

const Nav = styled.nav`
  position: fixed;
  z-index: 2;
  color: #edf0f1;
  background-color: #77a8a8;
  width: 100%;
  height: 55px;
  /* border-bottom: 2px solid #f1f1f1; */
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <img src={logo} alt="React Logo" className="logo" />
      <Burger />
    </Nav>
  );
};

export default Navbar;
