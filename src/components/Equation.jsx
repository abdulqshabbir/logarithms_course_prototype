import React from "react";
import MathJax from "react-mathjax2";

const Equation = ({ latexInput = `undefined` }) => {
  return (
    <MathJax.Context input="tex">
      <div className="equation-container">
        <MathJax.Node inline>{latexInput}</MathJax.Node>
      </div>
    </MathJax.Context>
  );
};

export default Equation;
