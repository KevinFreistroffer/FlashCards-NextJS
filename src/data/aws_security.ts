import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `Which statement best describes an IAM policy?`,
    choices: [
      {
        id: 1,
        choice:
          "An authentication process that provides an extra layer of protection for your AWS account",
        correct: false,
      },
      {
        id: 2,
        choice:
          "A document that grants or denies permissions to AWS services and resources",
        correct: true,
      },
      {
        id: 3,
        choice:
          "An identity that you can assume to gain temporary access to permissions",
        correct: false,
      },
      {
        id: 4,
        choice:
          "The identity that is established when you first create an AWS account",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `An employee requires temporary access to create several Amazon S3 buckets. Which option would be the best choice for this task?`,
    choices: [
      {
        id: 1,
        choice: "AWS account root user",
        correct: false,
      },
      {
        id: 2,
        choice: "IAM group",
        correct: false,
      },
      {
        id: 3,
        choice: "IAM role",
        correct: true,
      },
      {
        id: 4,
        choice: "Service control policy (SCP)",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which statement best describes the principle of least privilege?`,
    choices: [
      {
        id: 1,
        choice: "Adding an IAM user into at least one IAM group",
        correct: false,
      },
      {
        id: 2,
        choice:
          "Checking a packet’s permissions against an access control list",
        correct: false,
      },
      {
        id: 3,
        choice:
          "Granting only the permissions that are needed to perform specific tasks",
        correct: true,
      },
      {
        id: 4,
        choice:
          "Performing a denial of service attack that originates from at least one device",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which service helps protect your applications against distributed denial-of-service (DDoS) attacks?`,
    choices: [
      {
        id: 1,
        choice: "Amazon GuardDuty",
        correct: false,
      },
      {
        id: 2,
        choice: "Amazon Inspector",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Artifact",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Shield",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which task can AWS Key Management Service (AWS KMS) perform?`,
    choices: [
      {
        id: 1,
        choice: "Configure multi-factor authentication (MFA).",
        correct: false,
      },
      {
        id: 2,
        choice: "Update the AWS account root user password.",
        correct: false,
      },
      {
        id: 3,
        choice: "Create cryptographic keys.",
        correct: true,
      },
      {
        id: 4,
        choice: "Assign permissions to users and groups.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which task can AWS Key Management Service (AWS KMS) perform?`,
    choices: [
      {
        id: 1,
        choice: "Configure multi-factor authentication (MFA).",
        correct: false,
      },
      {
        id: 2,
        choice: "Update the AWS account root user password.",
        correct: false,
      },
      {
        id: 3,
        choice: "Create cryptographic keys.",
        correct: true,
      },
      {
        id: 4,
        choice: "Assign permissions to users and groups.",
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
