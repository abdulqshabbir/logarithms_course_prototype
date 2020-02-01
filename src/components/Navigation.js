import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Logo />
      </div>
      <div className="nav-item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item">
        <Link to="/problems">Logarithms</Link>
      </div>
      <div className="nav-item">
        <Link to="/about">About Us</Link>
      </div>
      <div className="nav-item">
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navigation;
