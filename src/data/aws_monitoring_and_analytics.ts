import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `Which actions can you perform using Amazon CloudWatch? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "Monitor your resources’ utilization and performance",
        correct: true,
      },
      {
        id: 2,
        choice: "Receive real-time guidance for improving your AWS environment",
        correct: false,
      },
      {
        id: 3,
        choice:
          "Compare your infrastructure to AWS best practices in five categories",
        correct: false,
      },
      {
        id: 4,
        choice: "Access metrics from a single dashboard",
        correct: true,
      },
      {
        id: 5,
        choice: "Automatically detect unusual account activity",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which service enables you to review the security of your Amazon S3 buckets by checking for open access permissions?`,
    choices: [
      {
        id: 1,
        choice: "Amazon CloudWatch",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS CloudTrail",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Trusted Advisor",
        correct: true,
      },
      {
        id: 4,
        choice: "Amazon GuardDuty",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which categories are included in the AWS Trusted Advisor dashboard? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "Reliability",
        correct: false,
      },
      {
        id: 2,
        choice: "Performance",
        correct: true,
      },
      {
        id: 3,
        choice: "Scalability",
        correct: false,
      },
      {
        id: 4,
        choice: "Elasticity",
        correct: false,
      },
      {
        id: 5,
        choice: "Fault tolerance",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
    guessedCorrectly: false,
  },
];

export default aws_questions;
