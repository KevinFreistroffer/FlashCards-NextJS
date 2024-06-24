import { IFlashCard } from "@/_lib/definitions";
import { EAnswer } from "@/_lib/enums";
import { shuffle } from "lodash";

const aws_questions: IFlashCard[] = [
  {
    question: `Which Perspective of the AWS Cloud Adoption Framework helps you structure the selection and implementation of permissions?`,
    choices: [
      {
        choice: "Governance Perspective",
        correct: false,
      },
      {
        choice: "Security Perspective",
        correct: true,
      },
      {
        choice: "Operations Perspective",
        correct: false,
      },
      {
        choice: "Business Perspective",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which strategies are included in the six strategies for application migration? (Select TWO.)`,
    choices: [
      {
        choice: "Revisiting",
        correct: false,
      },
      {
        choice: "Retaining",
        correct: true,
      },
      {
        choice: "Remembering",
        correct: false,
      },
      {
        choice: "Redeveloping",
        correct: false,
      },
      {
        choice: "Rehosting",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
  },
  {
    question: `What is the storage capacity of AWS Snowmobile?`,
    choices: [
      {
        choice: "40 PB",
        correct: false,
      },
      {
        choice: "60 PB",
        correct: false,
      },
      {
        choice: "80 PB",
        correct: false,
      },
      {
        choice: "100 PB",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which statement best describes Amazon Lex?`,
    choices: [
      {
        choice:
          "A service that enables you to build conversational interfaces using voice and text",
        correct: false,
      },
      {
        choice:
          "A machine learning service that automatically extracts text and data from scanned documents",
        correct: false,
      },
      {
        choice: "A document database service that supports MongoDB workloads",
        correct: false,
      },
      {
        choice:
          "A service that enables you to identify potentially fraudulent online activities",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
];

export default aws_questions;
