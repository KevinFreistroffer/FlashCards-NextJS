import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `Which Amazon S3 storage classes are optimized for archival data? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "Amazon S3 Standard",
        correct: false,
      },
      {
        id: 2,
        choice: "Amazon S3 Glacier Flexible Retrieval",
        correct: true,
      },
      {
        id: 3,
        choice: "Amazon S3 Intelligent-Tiering.",
        correct: false,
      },
      {
        id: 4,
        choice: "Amazon S3 Standard-IA",
        correct: false,
      },
      {
        id: 5,
        choice: "Amazon S3 Glacier Deep Archive",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which statement or statements are TRUE about Amazon EBS volumes and Amazon EFS file systems?`,
    choices: [
      {
        id: 1,
        choice:
          "EBS volumes store data within a single Availability Zone. Amazon EFS file systems store data across multiple Availability Zones.",
        correct: true,
      },
      {
        id: 2,
        choice:
          "EBS volumes store data across multiple Availability Zones. Amazon EFS file systems store data within a single Availability Zone.",
        correct: false,
      },
      {
        id: 3,
        choice:
          "EBS volumes and Amazon EFS file systems both store data within a single Availability Zone.",
        correct: false,
      },
      {
        id: 4,
        choice:
          "EBS volumes and Amazon EFS file systems both store data across multiple Availability Zones.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `You want to store data in an object storage service. Which AWS service is best for this type of storage?`,
    choices: [
      {
        id: 1,
        choice: "Amazon Managed Blockchain",
        correct: false,
      },
      {
        id: 2,
        choice: "Amazon Elastic File System (Amazon EFS)",
        correct: false,
      },
      {
        id: 3,
        choice: "Amazon Elastic Block Store (Amazon EBS)",
        correct: false,
      },
      {
        id: 4,
        choice: "Amazon Simple Storage Service (Amazon S3)",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which statement best describes Amazon DynamoDB?`,
    choices: [
      {
        id: 1,
        choice:
          "A service that enables you to run relational databases in the AWS Cloud",
        correct: false,
      },
      {
        id: 2,
        choice: "A serverless key-value database service",
        correct: true,
      },
      {
        id: 3,
        choice:
          "A service that you can use to migrate relational databases, nonrelational databases, and other types of data stores",
        correct: false,
      },
      {
        id: 4,
        choice: "An enterprise-class relational database",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which service is used to query and analyze data across a data warehouse?`,
    choices: [
      {
        id: 1,
        choice: "Amazon Redshift",
        correct: true,
      },
      {
        id: 2,
        choice: "Amazon Neptune",
        correct: false,
      },
      {
        id: 3,
        choice: "Amazon DocumentDB",
        correct: false,
      },
      {
        id: 4,
        choice: "Amazon ElastiCache",
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
