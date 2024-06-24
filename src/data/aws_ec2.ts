import { IFlashCard } from "@/_lib/definitions";
import { EAnswer } from "@/_lib/enums";
import { shuffle } from "lodash";

const aws_questions: IFlashCard[] = [
  {
    question: `You want to use an Amazon EC2 instance for a batch processing workload. What would be the best Amazon EC2 instance type to use?`,
    choices: [
      {
        choice: "General purpose.",
        correct: false,
      },
      {
        choice: "Memory optimized",
        correct: false,
      },
      { choice: "Compute optimized", correct: true },
      {
        choice: "Storage optimized",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `What are the contract length options for Amazon EC2 Reserved Instances? (Select TWO.)`,
    choices: [
      {
        choice: "1 year.",
        correct: true,
      },
      {
        choice: "2 years.",
        correct: false,
      },
      { choice: "3 years.", correct: true },
      {
        choice: "4 years.",
        correct: false,
      },
      {
        choice: "5 years.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
  },
  {
    question: `You have a workload that will run for a total of 6 months and can withstand interruptions. What would be the most cost-efficient Amazon EC2 purchasing option?`,
    choices: [
      {
        choice: "Reserved Instance.",
        correct: false,
      },
      {
        choice: "Spot Instance.",
        correct: true,
      },
      { choice: "Dedicated Instance.", correct: false },
      {
        choice: "On-Demand Instance.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which process is an example of Elastic Load Balancing?`,
    choices: [
      {
        choice:
          "Ensuring that no single Amazon EC2 instance has to carry the full workload on its own.",
        correct: true,
      },
      {
        choice: "Removing unneeded Amazon EC2 instances when demand is low.",
        correct: false,
      },
      {
        choice:
          "Adding a second Amazon EC2 instance during an online store’s popular sale",
        correct: false,
      },
      {
        choice:
          "Automatically adjusting the number of Amazon EC2 instances to meet demand",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `You want to deploy and manage containerized applications. Which service should you use?`,
    choices: [
      {
        choice: "AWS Lambda",
        correct: false,
      },
      {
        choice: "Amazon Simple Notification Service (Amazon SNS)",
        correct: false,
      },
      {
        choice: "Amazon Simple Queue Service (Amazon SQS)",
        correct: false,
      },
      {
        choice: "Amazon Elastic Kubernetes Service (Amazon EKS)",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `You want to deploy and manage containerized applications. Which service should you use?`,
    choices: [
      {
        choice: "AWS Lambda",
        correct: false,
      },
      {
        choice: "Amazon Simple Notification Service (Amazon SNS)",
        correct: false,
      },
      {
        choice: "Amazon Simple Queue Service (Amazon SQS)",
        correct: false,
      },
      {
        choice: "Amazon Elastic Kubernetes Service (Amazon EKS)",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
];

export default aws_questions;
