export type Questions = Question[];
export interface Question {
  id: number;
  title: string;
  prompt: string;
  equation: string;
  choices: string[];
  answer: "A" | "B" | "C" | "D";
  isComplete: boolean;
}

const questions: Questions = [
  {
    id: 1,
    title: "What is a logarithm?",
    prompt: "Evaluate the following logarithm:",
    equation: `\\log_{\\frac{1}{\\sqrt{3}}}{3\\sqrt{3}}`,
    choices: [`\\frac{2}{3}`, `\\frac{1}{2}`, `3`, `\\frac{4}{3}`],
    answer: "B",
    isComplete: false
  }
];

export default questions;
