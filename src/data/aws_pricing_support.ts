import { IFlashCard } from "@/_lib/definitions";
import { EAnswer } from "@/_lib/enums";
import { shuffle } from "lodash";

const aws_questions: IFlashCard[] = [
  {
    question: `Which action can you perform with consolidated billing?`,
    choices: [
      {
        choice:
          "Review how much cost your predicted AWS usage will incur by the end of the month.",
        correct: false,
      },
      {
        choice: "Create an estimate for the cost of your use cases on AWS.",
        correct: false,
      },
      {
        choice:
          "Combine usage across accounts to receive volume pricing discounts.",
        correct: true,
      },
      {
        choice: "Visualize and manage your AWS costs and usage over time.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which pricing tool is used to visualize, understand, and manage your AWS costs and usage over time?`,
    choices: [
      {
        choice: "AWS Pricing Calculator",
        correct: false,
      },
      {
        choice: "AWS Budgets",
        correct: false,
      },
      {
        choice: "AWS Cost Explorer",
        correct: true,
      },
      {
        choice: "AWS Free Tier",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which pricing tool enables you to receive alerts when your service usage exceeds a threshold that you have defined?`,
    choices: [
      {
        choice: "Billing dashboard in the AWS Management Console",
        correct: false,
      },
      {
        choice: "AWS Budgets",
        correct: true,
      },
      {
        choice: "AWS Free Tier",
        correct: false,
      },
      {
        choice: "AWS Cost Explorer",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Your company wants to receive support from an AWS Technical Account Manager (TAM). Which support plan should you choose?`,
    choices: [
      {
        choice: "Developer",
        correct: false,
      },
      {
        choice: "Enterprise",
        correct: true,
      },
      {
        choice: "Basic",
        correct: false,
      },
      {
        choice: "Business",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which service or resource is used to find third-party software that runs on AWS?`,
    choices: [
      {
        choice: "AWS Marketplace",
        correct: true,
      },
      {
        choice: "AWS Free Tier",
        correct: false,
      },
      {
        choice: "AWS Support",
        correct: false,
      },
      {
        choice: "Billing dashboard in the AWS Management Console",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
];

export default aws_questions;
