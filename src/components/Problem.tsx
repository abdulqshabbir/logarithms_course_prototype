import React from "react";
import Navigation from "./Navigation";

const Problem = () => {
  return (
    <div className="problem-container">
      <Navigation />
      <h1 className="problem-title">Title</h1>
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
