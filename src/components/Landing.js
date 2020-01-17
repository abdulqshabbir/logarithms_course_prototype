import "semantic-ui-css";
import "./Landing.css";
import React from "react";

const MenuBar = () => {
  return (
    <div>
      <div class="ui pointing menu">
        <a class="active item" href="localhost:3000">
          Home
        </a>
        <a class="item" href="localhost:3000">
          Logarithm Problems
        </a>
        <a class="item" href="localhost:3000">
          Contact Us
        </a>
      </div>
      <h1>This is a header tag. </h1>
      <h3>This is a subheading. </h3>
      <p>This is a paragraph text. </p>
    </div>
  );
};

export default MenuBar;
