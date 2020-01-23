/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Landing.css";
import Logo from "../components/Logo";
import React from "react";

const MenuBar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-logo">
          <Logo />
        </div>
        <div className="nav-item">Home</div>
        <div className="nav-item">HL Problems</div>
        <div className="nav-item">Solutions</div>
        <div className="nav-item">Contact Us</div>
      </nav>
      <div className="hero">Welcome to HL Academy.</div>
      <main className="main">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </main>
      <footer className="footer">@Abdul Shabbir</footer>
    </div>
  );
};

export default MenuBar;
