import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `Which statement is TRUE for the AWS global infrastructure?`,
    choices: [
      {
        id: 1,
        choice: "A Region consists of a single Availability Zone.",
        correct: false,
      },
      {
        id: 2,
        choice:
          "Memory optimizedAn Availability Zone consists of two or more Regions.",
        correct: false,
      },
      {
        id: 3,
        choice: "A Region consists of three or more Availability Zones.",
        correct: true,
      },
      {
        id: 4,
        choice: "An Availability Zone consists of a single Region.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which factors should be considered when selecting a Region? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "Compliance with data governance and legal requirements",
        correct: true,
      },
      {
        id: 2,
        choice: "Proximity to your customers",
        correct: true,
      },
      {
        id: 3,
        choice: "Access to 24/7 technical support",
        correct: false,
      },
      {
        id: 4,
        choice: "Ability to assign custom permissions to different users",
        correct: false,
      },
      {
        id: 5,
        choice: "Access to the AWS Command Line Interface (AWS CLI)",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which statement best describes Amazon CloudFront?`,
    choices: [
      {
        id: 1,
        choice:
          "A service that enables you to run infrastructure in a hybrid cloud approach",
        correct: false,
      },
      {
        id: 2,
        choice: "A serverless compute engine for containers",
        correct: false,
      },
      {
        id: 3,
        choice:
          "A service that enables you to send and receive messages between software components through a queue",
        correct: false,
      },
      {
        id: 4,
        choice: "A global content delivery service",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which site does Amazon CloudFront use to cache copies of content for faster delivery to users at any location?`,
    choices: [
      {
        id: 1,
        choice: "Region",
        correct: false,
      },
      {
        id: 2,
        choice: "Availability Zone",
        correct: false,
      },
      {
        id: 3,
        choice: "Edge location",
        correct: true,
      },
      {
        id: 4,
        choice: "Origin",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which action can you perform with AWS Outposts?`,
    choices: [
      {
        id: 1,
        choice:
          "Automate actions for AWS services and applications through scripts.",
        correct: false,
      },
      {
        id: 2,
        choice:
          "Access wizards and automated workflows to perform tasks in AWS services.",
        correct: false,
      },
      {
        id: 3,
        choice: "Develop AWS applications in supported programming languages.",
        correct: false,
      },
      {
        id: 4,
        choice:
          "Extend AWS infrastructure and services to different locations including your on-premises data center.",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
];

export default aws_questions;
