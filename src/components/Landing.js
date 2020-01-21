/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "semantic-ui-react";
import "./Landing.css";
import Logo from "./Logo";
import React from "react";

const MenuBar = () => {
  return (
    <div>
      <div className="menu-bar">
        <Logo />
        <p className="links">
          <a href="#"> Home </a>
          <a href="#"> Logarithm Problems </a>
          <a href="#"> Video Solutions </a>
          <a href="#"> Contact Us </a>
        </p>
      </div>
      <div>
        <Container></Container>
      </div>
    </div>
  );
};

export default MenuBar;
