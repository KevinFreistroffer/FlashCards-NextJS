import { IFlashCard } from "@/_lib/definitions";
import { EAnswer } from "@/_lib/enums";
import { shuffle } from "lodash";

const aws_questions: IFlashCard[] = [
  {
    question: `Which pillar of the AWS Well-Architected Framework includes the ability to run workloads effectively and gain insights into their operations?`,
    choices: [
      {
        choice: "Cost Optimization",
        correct: false,
      },
      {
        choice: "Operational Excellence",
        correct: true,
      },
      {
        choice: "Performance Efficiency",
        correct: false,
      },
      {
        choice: "Reliability.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `What are the benefits of cloud computing? (Select TWO.)`,
    choices: [
      {
        choice: "Increase speed and agility.",
        correct: true,
      },
      {
        choice: "Benefit from smaller economies of scale.",
        correct: false,
      },
      {
        choice: "Trade variable expense for upfront expense.",
        correct: false,
      },
      {
        choice: "Maintain infrastructure capacity.",
        correct: false,
      },
      {
        choice: "Stop spending money running and maintaining data centers.",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
  },
];

export default aws_questions;
