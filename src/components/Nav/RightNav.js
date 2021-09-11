import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    &:hover {
      color: #024f49;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #024f49;
    position: fixed;

    transform: scale(1);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.5s ease-in-out;
    li {
      color: #fff;
      &:hover {
        color: red;
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Button size="small" style={{ textTransform: "none" }}>
        <Link to="/">Home</Link>
      </Button>

      <Button size="small" style={{ textTransform: "none" }}>
        <Link to="/about">About</Link>
      </Button>
      <Button size="small" style={{ textTransform: "none" }}>
        <Link to="/counter">Counter</Link>
      </Button>
      <Button size="small" style={{ textTransform: "none" }}>
        <Link to="/stoper">Stoper</Link>
      </Button>
    </Ul>
  );
};

export default RightNav;
