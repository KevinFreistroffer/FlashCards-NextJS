import { IFlashCard } from "@/_lib/definitions";
import { EAnswer } from "@/_lib/enums";
import { shuffle } from "lodash";

const aws_questions: IFlashCard[] = [
  {
    question: `Which statement best describes an IAM policy?`,
    choices: [
      {
        choice:
          "An authentication process that provides an extra layer of protection for your AWS account",
        correct: false,
      },
      {
        choice:
          "A document that grants or denies permissions to AWS services and resources",
        correct: true,
      },
      {
        choice:
          "An identity that you can assume to gain temporary access to permissions",
        correct: false,
      },
      {
        choice:
          "The identity that is established when you first create an AWS account",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `An employee requires temporary access to create several Amazon S3 buckets. Which option would be the best choice for this task?`,
    choices: [
      {
        choice: "AWS account root user",
        correct: false,
      },
      {
        choice: "IAM group",
        correct: false,
      },
      {
        choice: "IAM role",
        correct: true,
      },
      {
        choice: "Service control policy (SCP)",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which statement best describes the principle of least privilege?`,
    choices: [
      {
        choice: "Adding an IAM user into at least one IAM group",
        correct: false,
      },
      {
        choice:
          "Checking a packet’s permissions against an access control list",
        correct: false,
      },
      {
        choice:
          "Granting only the permissions that are needed to perform specific tasks",
        correct: true,
      },
      {
        choice:
          "Performing a denial of service attack that originates from at least one device",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which service helps protect your applications against distributed denial-of-service (DDoS) attacks?`,
    choices: [
      {
        choice: "Amazon GuardDuty",
        correct: false,
      },
      {
        choice: "Amazon Inspector",
        correct: false,
      },
      {
        choice: "AWS Artifact",
        correct: false,
      },
      {
        choice: "AWS Shield",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which task can AWS Key Management Service (AWS KMS) perform?`,
    choices: [
      {
        choice: "Configure multi-factor authentication (MFA).",
        correct: false,
      },
      {
        choice: "Update the AWS account root user password.",
        correct: false,
      },
      {
        choice: "Create cryptographic keys.",
        correct: true,
      },
      {
        choice: "Assign permissions to users and groups.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
  {
    question: `Which task can AWS Key Management Service (AWS KMS) perform?`,
    choices: [
      {
        choice: "Configure multi-factor authentication (MFA).",
        correct: false,
      },
      {
        choice: "Update the AWS account root user password.",
        correct: false,
      },
      {
        choice: "Create cryptographic keys.",
        correct: true,
      },
      {
        choice: "Assign permissions to users and groups.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
  },
];

export default aws_questions;
