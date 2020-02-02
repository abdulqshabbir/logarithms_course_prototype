import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";

type ProblemTitle = string;

const Problem = () => {
  const { problemTitle: ProblemTitle } = useParams();
  return (
    <div className="problem-container">
      <Navigation />
      <h1 className="problem-title">{ProblemTitle}</h1>
      <main className="problem-prompt">
        This is where the details of the question would go.
      </main>
      <div className="problem-sidebar">
        <div className="sidebar-header"></div>
        <div className="sidebar-form">
          <div className="sidebar-MCQ"></div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
