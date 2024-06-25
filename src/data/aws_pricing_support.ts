import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `Which action can you perform with consolidated billing?`,
    choices: [
      {
        id: 1,
        choice:
          "Review how much cost your predicted AWS usage will incur by the end of the month.",
        correct: false,
      },
      {
        id: 2,
        choice: "Create an estimate for the cost of your use cases on AWS.",
        correct: false,
      },
      {
        id: 3,
        choice:
          "Combine usage across accounts to receive volume pricing discounts.",
        correct: true,
      },
      {
        id: 4,
        choice: "Visualize and manage your AWS costs and usage over time.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which pricing tool is used to visualize, understand, and manage your AWS costs and usage over time?`,
    choices: [
      {
        id: 1,
        choice: "AWS Pricing Calculator",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS Budgets",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Cost Explorer",
        correct: true,
      },
      {
        id: 4,
        choice: "AWS Free Tier",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which pricing tool enables you to receive alerts when your service usage exceeds a threshold that you have defined?`,
    choices: [
      {
        id: 1,
        choice: "Billing dashboard in the AWS Management Console",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS Budgets",
        correct: true,
      },
      {
        id: 3,
        choice: "AWS Free Tier",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Cost Explorer",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Your company wants to receive support from an AWS Technical Account Manager (TAM). Which support plan should you choose?`,
    choices: [
      {
        id: 1,
        choice: "Developer",
        correct: false,
      },
      {
        id: 2,
        choice: "Enterprise",
        correct: true,
      },
      {
        id: 3,
        choice: "Basic",
        correct: false,
      },
      {
        id: 4,
        choice: "Business",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which service or resource is used to find third-party software that runs on AWS?`,
    choices: [
      {
        id: 1,
        choice: "AWS Marketplace",
        correct: true,
      },
      {
        id: 2,
        choice: "AWS Free Tier",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Support",
        correct: false,
      },
      {
        id: 4,
        choice: "Billing dashboard in the AWS Management Console",
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
