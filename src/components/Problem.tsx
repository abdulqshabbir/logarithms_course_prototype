import React, { useState, useRef, MouseEvent, MutableRefObject } from "react";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Navigation from "./Navigation";
import Equation from "./Equation";
import questions from "../assets/logarithms/questions";
import "./Problem.css";

interface Props {}

type Choice = "A" | "B" | "C" | "D";

const Problem: React.FC<Props> = () => {
  const { problemTitle } = useParams();
  const [currentChoice, setCurrentChoice] = useState<Choice | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const choiceARef = useRef<any>(null);
  const choiceBRef = useRef<any>(null);
  const choiceCRef = useRef<any>(null);
  const choiceDRef = useRef<any>(null);

  return (
    <div className="problem-page-container">
      <Navigation />
      <div className="problem-card-container">
        <h1 className="problem-title">{problemTitle}</h1>
        <main className="problem-prompt">
          <p>{questions[0].prompt}</p>
          <Equation latexInput={questions[0].equation} />
        </main>
        <form className="problem-form">
          <div className="problem-choices">
            <Button
              className="choice A"
              onClick={selectChoice}
              ref={choiceARef}
              name="A"
            >
              <Equation latexInput={questions[0].choices[0]} />
            </Button>
            <Button
              className="choice B"
              onClick={selectChoice}
              ref={choiceBRef}
            >
              <Equation latexInput={questions[0].choices[1]} />
            </Button>

            <Button
              className="choice C"
              onClick={selectChoice}
              ref={choiceCRef}
            >
              <Equation latexInput={questions[0].choices[2]} />
            </Button>

            <Button
              className="choice D"
              onClick={selectChoice}
              ref={choiceDRef}
            >
              <Equation latexInput={questions[0].choices[3]} />
            </Button>
          </div>
          <Button
            as="button"
            className="problem-submit"
            onClick={submitProblem}
          >
            Submit
          </Button>
          <QuestionFeedback />
          <Button as="button" className="video-solution" onClick={showVideo}>
            Video Solution
          </Button>
        </form>
      </div>
    </div>
  );

  // Updates react state on if problem has been submitted and whether it is correct
  function submitProblem(e: MouseEvent) {
    e.preventDefault();
    if (currentChoice === questions[0].answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setHasSubmitted(true);
    }
  }

  // Renders video solution
  function showVideo(e: MouseEvent) {
    e.preventDefault();
  }

  //
  function selectChoice(e: MouseEvent) {
    e.preventDefault();

    // Get the button currently chosen
    const clickedButton = e.currentTarget;

    // Update state to reflect current choice
    updateCurrentChoice(clickedButton, setCurrentChoice);

    // Create background color change for active choice
    clickedButton.classList.toggle("active");

    // Toggle active class "on" for current choice and "off" for others
    const parent: any = clickedButton.parentElement;
    const childNodes: any = parent.childNodes;
    childNodes.forEach((child: HTMLElement) => {
      if (child.classList.contains("active") && child !== clickedButton) {
        child.classList.toggle("active");
      }
    });
  }

  function QuestionFeedback() {
    if (hasSubmitted && isCorrect) {
      return (
        <div className="question-feedback">
          <h3>Correct!</h3>
          <p>Nice work, you rock.</p>
        </div>
      );
    } else if (hasSubmitted && !isCorrect) {
      return (
        <div className="question-feedback">
          <h3>Incorrect.</h3>
          <p>
            Getting stuck is normal! View the video solution to learn the why.
          </p>
        </div>
      );
    } else {
      return null;
    }
  }
};

function updateCurrentChoice(
  clickedButton: any,
  setCurrentChoice: React.Dispatch<
    React.SetStateAction<"A" | "B" | "C" | "D" | null>
  >
) {
  if (clickedButton.classList.contains("A")) {
    setCurrentChoice("A");
  } else if (clickedButton.classList.contains("B")) {
    setCurrentChoice("B");
  } else if (clickedButton.classList.contains("C")) {
    setCurrentChoice("C");
  } else if (clickedButton.classList.contains("D")) {
    setCurrentChoice("D");
  }
}

export default Problem;
