import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `Which pillar of the AWS Well-Architected Framework includes the ability to run workloads effectively and gain insights into their operations?`,
    choices: [
      {
        id: 1,
        choice: "Cost Optimization",
        correct: false,
      },
      {
        id: 2,
        choice: "Operational Excellence",
        correct: true,
      },
      {
        id: 3,
        choice: "Performance Efficiency",
        correct: false,
      },
      {
        id: 4,
        choice: "Reliability.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `What are the benefits of cloud computing? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "Increase speed and agility.",
        correct: true,
      },
      {
        id: 2,
        choice: "Benefit from smaller economies of scale.",
        correct: false,
      },
      {
        id: 3,
        choice: "Trade variable expense for upfront expense.",
        correct: false,
      },
      {
        id: 4,
        choice: "Maintain infrastructure capacity.",
        correct: false,
      },
      {
        id: 5,
        choice: "Stop spending money running and maintaining data centers.",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
    guessedCorrectly: false,
  },
];

export default aws_questions;
