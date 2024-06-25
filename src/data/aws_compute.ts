import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `You want to use an Amazon EC2 instance for a batch processing workload. What would be the best Amazon EC2 instance type to use?`,
    choices: [
      {
        id: 1,
        choice: "General purpose.",
        correct: false,
      },
      {
        id: 2,
        choice: "Memory optimized",
        correct: false,
      },
      { id: 3, choice: "Compute optimized", correct: true },
      {
        id: 4,
        choice: "Storage optimized",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `What are the contract length options for Amazon EC2 Reserved Instances? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "1 year.",
        correct: true,
      },
      {
        id: 2,
        choice: "2 years.",
        correct: false,
      },
      { id: 3, choice: "3 years.", correct: true },
      {
        id: 4,
        choice: "4 years.",
        correct: false,
      },
      {
        id: 5,
        choice: "5 years.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `You have a workload that will run for a total of 6 months and can withstand interruptions. What would be the most cost-efficient Amazon EC2 purchasing option?`,
    choices: [
      {
        id: 1,
        choice: "Reserved Instance.",
        correct: false,
      },
      {
        id: 2,
        choice: "Spot Instance.",
        correct: true,
      },
      { id: 3, choice: "Dedicated Instance.", correct: false },
      {
        id: 4,
        choice: "On-Demand Instance.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which process is an example of Elastic Load Balancing?`,
    choices: [
      {
        id: 1,
        choice:
          "Ensuring that no single Amazon EC2 instance has to carry the full workload on its own.",
        correct: true,
      },
      {
        id: 2,
        choice: "Removing unneeded Amazon EC2 instances when demand is low.",
        correct: false,
      },
      {
        id: 3,
        choice:
          "Adding a second Amazon EC2 instance during an online store’s popular sale",
        correct: false,
      },
      {
        id: 4,
        choice:
          "Automatically adjusting the number of Amazon EC2 instances to meet demand",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `You want to deploy and manage containerized applications. Which service should you use?`,
    choices: [
      {
        id: 1,
        choice: "AWS Lambda",
        correct: false,
      },
      {
        id: 2,
        choice: "Amazon Simple Notification Service (Amazon SNS)",
        correct: false,
      },
      {
        id: 3,
        choice: "Amazon Simple Queue Service (Amazon SQS)",
        correct: false,
      },
      {
        id: 4,
        choice: "Amazon Elastic Kubernetes Service (Amazon EKS)",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `You want to deploy and manage containerized applications. Which service should you use?`,
    choices: [
      {
        id: 1,
        choice: "AWS Lambda",
        correct: false,
      },
      {
        id: 2,
        choice: "Amazon Simple Notification Service (Amazon SNS)",
        correct: false,
      },
      {
        id: 3,
        choice: "Amazon Simple Queue Service (Amazon SQS)",
        correct: false,
      },
      {
        id: 4,
        choice: "Amazon Elastic Kubernetes Service (Amazon EKS)",
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
