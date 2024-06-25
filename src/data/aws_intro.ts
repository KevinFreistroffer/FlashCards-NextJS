import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `What is cloud computing?`,
    choices: [
      {
        id: 1,
        choice:
          "Backing up files that are stored on desktop and mobile devices to prevent data loss",
        correct: false,
      },
      {
        id: 2,
        choice:
          "Deploying applications connected to on-premises infrastructure",
        correct: false,
      },
      {
        id: 3,
        choice: "Running code without needing to manage or provision servers",
        correct: false,
      },
      {
        id: 4,
        choice:
          "On-demand delivery of IT resources and applications through the internet with pay-as-you-go pricing",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `What is another name for on-premises deployment?`,
    choices: [
      {
        id: 1,
        choice: "Private cloud deployment",
        correct: true,
      },
      {
        id: 2,
        choice: "Hybrid deployment",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Cloud",
        correct: false,
      },
      {
        id: 4,
        choice: "Service control policy (SCP)",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `How does the scale of cloud computing help you to save costs?`,
    choices: [
      {
        id: 1,
        choice:
          "You do not have to invest in technology resources before using them.",
        correct: false,
      },
      {
        id: 2,
        choice:
          "The aggregated cloud usage from a large number of customers results in lower pay-as-you-go prices.",
        correct: true,
      },
      {
        id: 3,
        choice:
          "Accessing services on-demand helps to prevent excess or limited capacity.",
        correct: false,
      },
      {
        id: 4,
        choice:
          "You can quickly deploy applications to customers and provide them with low latency.",
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
