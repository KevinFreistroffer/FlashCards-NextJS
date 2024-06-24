import { IFlashCard } from "@/_lib/definitions";
import { EAnswer } from "@/_lib/enums";
import { shuffle } from "lodash";

const aws_questions: IFlashCard[] = [
  {
    question: `Which statement is TRUE for the AWS global infrastructure?`,
    choices: [
      {
        choice: "A Region consists of a single Availability Zone.",
        correct: false,
      },
      {
        choice:
          "Memory optimizedAn Availability Zone consists of two or more Regions.",
        correct: false,
      },
      {
        choice: "A Region consists of three or more Availability Zones.",
        correct: true,
      },
      {
        choice: "An Availability Zone consists of a single Region.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which factors should be considered when selecting a Region? (Select TWO.)`,
    choices: [
      {
        choice: "Compliance with data governance and legal requirements",
        correct: true,
      },
      {
        choice: "Proximity to your customers",
        correct: true,
      },
      {
        choice: "Access to 24/7 technical support",
        correct: false,
      },
      {
        choice: "Ability to assign custom permissions to different users",
        correct: false,
      },
      {
        choice: "Access to the AWS Command Line Interface (AWS CLI)",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
  },
  {
    question: `Which statement best describes Amazon CloudFront?`,
    choices: [
      {
        choice:
          "A service that enables you to run infrastructure in a hybrid cloud approach",
        correct: false,
      },
      {
        choice: "A serverless compute engine for containers",
        correct: false,
      },
      {
        choice:
          "A service that enables you to send and receive messages between software components through a queue",
        correct: false,
      },
      {
        choice: "A global content delivery service",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which site does Amazon CloudFront use to cache copies of content for faster delivery to users at any location?`,
    choices: [
      {
        choice: "Region",
        correct: false,
      },
      {
        choice: "Availability Zone",
        correct: false,
      },
      {
        choice: "Edge location",
        correct: true,
      },
      {
        choice: "Origin",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which action can you perform with AWS Outposts?`,
    choices: [
      {
        choice:
          "Automate actions for AWS services and applications through scripts.",
        correct: false,
      },
      {
        choice:
          "Access wizards and automated workflows to perform tasks in AWS services.",
        correct: false,
      },
      {
        choice: "Develop AWS applications in supported programming languages.",
        correct: false,
      },
      {
        choice:
          "Extend AWS infrastructure and services to different locations including your on-premises data center.",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
];

export default aws_questions;
