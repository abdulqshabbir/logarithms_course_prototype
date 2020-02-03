import React, { useState, MouseEvent } from "react";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Navigation from "./Navigation";
import "./Problem.css";

interface Props {
  title: string;
  prompt: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  choiceD: string;
  correctChoice: "A" | "B" | "C" | "D";
}

const Problem: React.FunctionComponent = () => {
  const { problemTitle } = useParams();
  const handleProblemSubmit = (e: MouseEvent) => {
    e.preventDefault();
    alert(e.currentTarget.tagName);
  };
  return (
    <div className="problem-page-container">
      <Navigation />
      <div className="problem-card-container">
        <h1 className="problem-title">{problemTitle}</h1>
        <main className="problem-prompt">prompt this is a prompt...</main>
        <form className="problem-form">
          <div className="problem-choices">
            <Button className="choice A">Choice A</Button>
            <Button className="choice B">Choice B</Button>
            <Button className="choice C">Choice C</Button>
            <Button className="choice D">Choice D</Button>
          </div>
          <Button
            as="button"
            className="problem-submit"
            onClick={handleProblemSubmit}
          >
            Submit
          </Button>
          <Button as="button" className="video-solution">
            Video Solution
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Problem;
