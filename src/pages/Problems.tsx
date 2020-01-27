import React from "react";
import Navigation from "../components/Navigation";
import { Button } from "semantic-ui-react";
import "./Problems.css";

const Problems = () => {
  return (
    <div className="problems-container">
      <Navigation />
      <div className="problems-title">Logarithm Fundamentals</div>
      <header className="problems-header">
        <div className="grouping-container">
          <h3>Group</h3>
          <Button as="button" className="topic-button">
            By Topic
          </Button>
          <Button as="button" className="difficulty-button">
            By Difficulty
          </Button>
        </div>
        <div className="progress-bar-container">
          <h3>Progress</h3>
          <div className="progress-bar"></div>
          <p>O out of 3 problems complete</p>
        </div>
      </header>
      <div className="problems-list-container">
        <div className="problems-list-header ">
          <h1>0 out of 1 Easy Prolems Complete</h1>
          <div className="problems-list-questions">
            <div className="easy problem"></div>
          </div>
        </div>
        <div className="problems-list-questions">
          <h1>0 out of 1 Medium Problems Complete</h1>
          <div>
            <div className="medium problem"></div>
          </div>
        </div>
        <div className="problems-list-questions">
          <h1>0 out of 1 Hard Problems Complete</h1>
          <div>
            <div className="hard problem"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
