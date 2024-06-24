import { IFlashCard } from "@/_lib/definitions";
import { EAnswer } from "@/_lib/enums";
import { shuffle } from "lodash";

const aws_questions: IFlashCard[] = [
  {
    question: `Which actions can you perform using Amazon CloudWatch? (Select TWO.)`,
    choices: [
      {
        choice: "Monitor your resources’ utilization and performance",
        correct: true,
      },
      {
        choice: "Receive real-time guidance for improving your AWS environment",
        correct: false,
      },
      {
        choice:
          "Compare your infrastructure to AWS best practices in five categories",
        correct: false,
      },
      {
        choice: "Access metrics from a single dashboard",
        correct: true,
      },
      {
        choice: "Automatically detect unusual account activity",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
  },
  {
    question: `Which service enables you to review the security of your Amazon S3 buckets by checking for open access permissions?`,
    choices: [
      {
        choice: "Amazon CloudWatch",
        correct: false,
      },
      {
        choice: "AWS CloudTrail",
        correct: false,
      },
      {
        choice: "AWS Trusted Advisor",
        correct: true,
      },
      {
        choice: "Amazon GuardDuty",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which categories are included in the AWS Trusted Advisor dashboard? (Select TWO.)`,
    choices: [
      {
        choice: "Reliability",
        correct: false,
      },
      {
        choice: "Performance",
        correct: true,
      },
      {
        choice: "Scalability",
        correct: false,
      },
      {
        choice: "Elasticity",
        correct: false,
      },
      {
        choice: "Fault tolerance",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
  },
];

export default aws_questions;
