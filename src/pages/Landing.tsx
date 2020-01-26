/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { Icon } from "semantic-ui-react";
import "./Landing.css";

const LandingPage: React.FC = () => {
  return (
    <div className="container">
      <div className="hero"> Welcome To HL Academy.</div>
      <main className="content-main">
        <h1>What do we do? </h1>
        <p>
          HL Academy provides IB Math HL questions to help students prepare for
          their upcoming examinations.Each question is representative of the
          depth, difficulty and rigor of actual IB examination questions.Every
          question on our site is paired with a video explanation for the
          problem - solving strategy needed to solve questions of a similar
          nature.
        </p>
      </main>
      <div className="content-secondary">
        <div className="content">
          <h1>Clear explanations </h1>
          <p>
            We provide clear, concise explanations on foundational concepts to
            get you up and running.
          </p>
          <div className="icon">
            <Icon bordered size="huge" color="black" inverted name="pencil" />
          </div>
        </div>
        <div className="content">
          <h1>Difficult Math problems.</h1>
          <p>
            We know that to maximize learning you need to be doing lots of
            unfamiliar problems that require an novel approach.
          </p>
          <div className="icon">
            <Icon bordered size="huge" color="black" inverted name="question" />
          </div>
        </div>
        <div className="content">
          <h1>Video solutions.</h1>
          <p>
            If you're stuck, we have you covered with a complete video solution
            that not only walks you through the problem but also the intuition
            behind the solution.
          </p>
          <div className="icon">
            <Icon
              bordered
              inverted
              color="black"
              size="huge"
              name="video play"
            />
          </div>
        </div>
      </div>
      <footer className="footer">&copy; 2020 HL Academy </footer>
    </div>
  );
};

export default LandingPage;
