import React from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import { Button } from "semantic-ui-react";
import "./Problems.css";

const Problems = () => {
  return (
    <div className="problems-container">
      <Navigation />
      <div className="problems-title">Logarithms</div>
      <header className="grouping-progress-container">
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
      <div className="questions-title">Introduction to Logarithms</div>
      <div className="questions-container">
        <Card
          title="What is a logarithm?"
          content="Get started with the fondations of logarithms."
        />
        <Card
          title="What are logarithm laws?"
          content="Understand the why of logarithm laws."
        />
        <Card
          title="How do you prove logarithmic laws?"
          content="Prove the common logarithmic laws for yourself!"
        />
      </div>
    </div>
  );
};

export default Problems;
