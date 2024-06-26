import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `AWS Shield`,
    choices: [
      {
        id: 1,
        choice:
          "DDoS protection service that safeguards web applications running on AWS.",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Trusted Advisor Categories`,
    choices: [
      {
        id: 1,
        choice: "Cost optimization",
        correct: true,
      },
      {
        id: 2,
        choice: "Increase performance",
        correct: true,
      },
      {
        id: 3,
        choice: "Improve security and resilience",
        correct: true,
      },
      {
        id: 4,
        choice: "Fault tolerance.",
        correct: true,
      },
      {
        id: 5,
        choice: "Service limits.",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 5,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `CloudWatch`,
    choices: [
      {
        id: 1,
        choice: "Metrics",
        correct: true,
      },
      {
        id: 2,
        choice: "Monitoring",
        correct: true,
      },
      {
        id: 3,
        choice: "Act with automated responses",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 3,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which strategies are included in the six strategies for application migration? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "Rehosting",
        correct: true,
      },
      {
        id: 2,
        choice: "Replatforming",
        correct: true,
      },
      {
        id: 3,
        choice: "Refactoring/re-architecting",
        correct: true,
      },
      {
        id: 4,
        choice: "Repurchasing",
        correct: true,
      },
      {
        id: 5,
        choice: "Retaining",
        correct: true,
      },
      {
        id: 6,
        choice: "Retiring",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 6,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `The six advantages of cloud computing are`,
    choices: [
      {
        id: 1,
        choice: "Trade upfront expense for variable expense.",
        correct: true,
      },
      {
        id: 2,
        choice: "Benefit from massive economies of scale.",
        correct: true,
      },
      {
        id: 3,
        choice: "Stop guessing capacity.",
        correct: true,
      },
      {
        id: 4,
        choice: "Increase speed and agility.",
        correct: true,
      },
      {
        id: 5,
        choice: "Stop spending money running and maintaining data centers.",
        correct: true,
      },
      {
        id: 6,
        choice: "Go global in minutes.",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 6,
    guesses: [],
    guessedCorrectly: false,
  },
];

export default aws_questions;
