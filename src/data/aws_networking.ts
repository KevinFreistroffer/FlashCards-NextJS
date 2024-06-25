import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `Your company has an application that uses Amazon EC2 instances to run the customer-facing website and Amazon RDS database instances to store customers’ personal information. How should the developer configure the VPC according to best practices?`,
    choices: [
      {
        id: 1,
        choice:
          "Place the Amazon EC2 instances in a private subnet and the Amazon RDS database instances in a public subnet.",
        correct: false,
      },
      {
        id: 2,
        choice:
          "Place the Amazon EC2 instances in a public subnet and the Amazon RDS database instances in a private subnet.",
        correct: true,
      },
      {
        id: 3,
        choice:
          "Place the Amazon EC2 instances and the Amazon RDS database instances in a public subnet.",
        correct: false,
      },
      {
        id: 4,
        choice:
          "Place the Amazon EC2 instances and the Amazon RDS database instances in a private subnet.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which component can be used to establish a private dedicated connection between your company’s data center and AWS?`,
    choices: [
      {
        id: 1,
        choice: "Private subnet",
        correct: false,
      },
      {
        id: 2,
        choice: "DNS",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Direct Connect",
        correct: true,
      },
      {
        id: 4,
        choice: "Virtual private gateway",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which statement best describes security groups?`,
    choices: [
      {
        id: 1,
        choice: "They are stateful and deny all inbound traffic by default.",
        correct: true,
      },
      {
        id: 2,
        choice: "They are stateful and allow all inbound traffic by default.",
        correct: false,
      },
      {
        id: 3,
        choice: "They are stateless and deny all inbound traffic by default.",
        correct: false,
      },
      {
        id: 4,
        choice: "They are stateless and allow all inbound traffic by default.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which component is used to connect a VPC to the internet?`,
    choices: [
      {
        id: 1,
        choice: "Public subnet",
        correct: false,
      },
      {
        id: 2,
        choice: "Edge location",
        correct: false,
      },
      {
        id: 3,
        choice: "Security group",
        correct: false,
      },
      {
        id: 4,
        choice: "Internet gateway",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which service is used to manage the DNS records for domain names?`,
    choices: [
      {
        id: 1,
        choice: "Amazon Virtual Private Cloud",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS Direct Connect",
        correct: false,
      },
      {
        id: 3,
        choice: "Amazon CloudFront",
        correct: false,
      },
      {
        id: 4,
        choice: "Amazon Route 53",
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
