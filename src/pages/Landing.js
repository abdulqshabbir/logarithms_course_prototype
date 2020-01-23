/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Landing.css";
import Logo from "../components/Logo";
import React from "react";

const MenuBar = () => {
  return (
    <div className="container">
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
      <main className="content-main">
        <p>
          HL Academy provides IB Math HL questions to help students prepare for
          their upcoming examinations. Each question is representative of the
          depth, difficulty and rigor of actual IB examination questions. Every
          question on our site is paired with a video explanation for the
          problem-solving strategy needed to solve questions of a similar
          nature.
        </p>
      </main>
      <div className="content-secondary">
        <div>
          <h1>Clear explanations</h1>
          <p>
            We provide clear, concise explanations to get you up and running
            with foundational concepts.
          </p>
        </div>
        <div>
          <h1>Difficult Math problems at the right level.</h1>
          <p>
            We know that to maximize learning you need to be doing lots of
            unfamiliar problems that require an novel approach.
          </p>
        </div>
        <div>
          <h1>Video solutions.</h1>
          <p>
            If you're stuck, we have you covered with a complete video solution
            that not only walks you through the problem but also the intuition
            behind the solution.
          </p>
        </div>
      </div>
      <footer className="footer">&copy; 2020 HL Academy</footer>
    </div>
  );
};

export default MenuBar;
