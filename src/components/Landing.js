/* eslint-disable jsx-a11y/anchor-is-valid */
import "semantic-ui-css";
import "./Landing.css";
import React from "react";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <p className="links">
        <a href="#"> Home </a>
        <a href="#"> Logarithm Problems </a>
        <a href="#"> Video Solutions </a>
        <a href="#"> Contact Us </a>
      </p>
    </div>
  );
};

export default MenuBar;
