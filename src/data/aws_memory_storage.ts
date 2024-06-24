import { IFlashCard } from "@/_lib/definitions";
import { EAnswer } from "@/_lib/enums";
import { shuffle } from "lodash";

const aws_questions: IFlashCard[] = [
  {
    question: `Which Amazon S3 storage classes are optimized for archival data? (Select TWO.)`,
    choices: [
      {
        choice: "Amazon S3 Standard",
        correct: false,
      },
      {
        choice: "Amazon S3 Glacier Flexible Retrieval",
        correct: true,
      },
      {
        choice: "Amazon S3 Intelligent-Tiering.",
        correct: false,
      },
      {
        choice: "Amazon S3 Standard-IA",
        correct: false,
      },
      {
        choice: "Amazon S3 Glacier Deep Archive",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
  },
  {
    question: `Which statement or statements are TRUE about Amazon EBS volumes and Amazon EFS file systems?`,
    choices: [
      {
        choice:
          "EBS volumes store data within a single Availability Zone. Amazon EFS file systems store data across multiple Availability Zones.",
        correct: true,
      },
      {
        choice:
          "EBS volumes store data across multiple Availability Zones. Amazon EFS file systems store data within a single Availability Zone.",
        correct: false,
      },
      {
        choice:
          "EBS volumes and Amazon EFS file systems both store data within a single Availability Zone.",
        correct: false,
      },
      {
        choice:
          "EBS volumes and Amazon EFS file systems both store data across multiple Availability Zones.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `You want to store data in an object storage service. Which AWS service is best for this type of storage?`,
    choices: [
      {
        choice: "Amazon Managed Blockchain",
        correct: false,
      },
      {
        choice: "Amazon Elastic File System (Amazon EFS)",
        correct: false,
      },
      {
        choice: "Amazon Elastic Block Store (Amazon EBS)",
        correct: false,
      },
      {
        choice: "Amazon Simple Storage Service (Amazon S3)",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which statement best describes Amazon DynamoDB?`,
    choices: [
      {
        choice:
          "A service that enables you to run relational databases in the AWS Cloud",
        correct: false,
      },
      {
        choice: "A serverless key-value database service",
        correct: true,
      },
      {
        choice:
          "A service that you can use to migrate relational databases, nonrelational databases, and other types of data stores",
        correct: false,
      },
      {
        choice: "An enterprise-class relational database",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which service is used to query and analyze data across a data warehouse?`,
    choices: [
      {
        choice: "Amazon Redshift",
        correct: true,
      },
      {
        choice: "Amazon Neptune",
        correct: false,
      },
      {
        choice: "Amazon DocumentDB",
        correct: false,
      },
      {
        choice: "Amazon ElastiCache",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
];

export default aws_questions;
