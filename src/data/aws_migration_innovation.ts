import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `Which Perspective of the AWS Cloud Adoption Framework helps you structure the selection and implementation of permissions?`,
    choices: [
      {
        id: 1,
        choice: "Governance Perspective",
        correct: false,
      },
      {
        id: 2,
        choice: "Security Perspective",
        correct: true,
      },
      {
        id: 3,
        choice: "Operations Perspective",
        correct: false,
      },
      {
        id: 4,
        choice: "Business Perspective",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which strategies are included in the six strategies for application migration? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "Revisiting",
        correct: false,
      },
      {
        id: 2,
        choice: "Retaining",
        correct: true,
      },
      {
        id: 3,
        choice: "Remembering",
        correct: false,
      },
      {
        id: 4,
        choice: "Redeveloping",
        correct: false,
      },
      {
        id: 5,
        choice: "Rehosting",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `What is the storage capacity of AWS Snowmobile?`,
    choices: [
      {
        id: 1,
        choice: "40 PB",
        correct: false,
      },
      {
        id: 2,
        choice: "60 PB",
        correct: false,
      },
      {
        id: 3,
        choice: "80 PB",
        correct: false,
      },
      {
        id: 4,
        choice: "100 PB",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which statement best describes Amazon Lex?`,
    choices: [
      {
        id: 1,
        choice:
          "A service that enables you to build conversational interfaces using voice and text",
        correct: true,
      },
      {
        id: 2,
        choice:
          "A machine learning service that automatically extracts text and data from scanned documents",
        correct: false,
      },
      {
        id: 3,
        choice: "A document database service that supports MongoDB workloads",
        correct: false,
      },
      {
        id: 4,
        choice:
          "A service that enables you to identify potentially fraudulent online activities",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
];

export default aws_questions;
