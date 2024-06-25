import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";

export const aws_questions: IFlashCard[] = [
  {
    question: `Each department within a company has its own independent AWS account and its own payment method. The company needs to centralize departmental governance and consolidate payments. How can the company achieve these objectives by using AWS services or features?`,
    choices: [
      {
        id: 1,
        choice: "Use AWS Cloud Map on each departmental account.",
        correct: false,
      },
      {
        id: 2,
        choice:
          "Create an organization in AWS Organizations with all features enabled within one account. Invite all accounts to join the organization.",
        correct: true,
      },
      { id: 3, choice: "Use AWS Systems Manager OpsCenter.", correct: false },
      {
        id: 4,
        choice:
          "Use the AWS Cost and Usage Reports page of the AWS Billing and Cost Management console.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `A company wants to create a learning application for students. The learning application must give students the option to choose a button to have the text read out loud to them. Which AWS machine learning service will meet this requirement?`,
    choices: [
      { id: 1, choice: "Amazon Transcribe", correct: false },
      { id: 2, choice: "Amazon Polly", correct: true },
      { id: 3, choice: "Amazon Translate", correct: false },
      { id: 4, choice: "Amazon Textract", correct: false },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which of the functionalities are characteristics of Amazon S3? (Select TWO.)`,
    choices: [
      { id: 1, choice: "A global file system", correct: false },
      { id: 2, choice: "An object store", correct: true },
      { id: 3, choice: "A local file store", correct: false },
      { id: 4, choice: "A network file system", correct: false },
      { id: 5, choice: "A durable storage system", correct: true },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `A company wants to establish a consistent and private connection from the company's on-premises data center to the AWS Cloud.
  Which AWS service will meet these requirements?`,
    choices: [
      { id: 1, choice: "AWS Client VPN", correct: false },
      { id: 2, choice: "AWS Connect", correct: false },
      { id: 3, choice: "AWS Direct Connect", correct: true },
      { id: 4, choice: "AWS Site-to-Site VPN", correct: false },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `A user deploys an Amazon RDS DB instance in multiple Availability Zones.
  This strategy involves which pillar of the AWS Well-Architected Framework?`,
    choices: [
      { id: 1, choice: "Performance efficiency", correct: false },
      { id: 2, choice: "Reliability", correct: true },
      { id: 3, choice: "Cost optimization", correct: false },
      { id: 4, choice: "Security", correct: false },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `A company requires a relational database on AWS that records new customer orders from a website.
  Which AWS service or feature will meet this requirement?`,
    choices: [
      { id: 1, choice: "AWS Global Accelerator", correct: false },
      { id: 2, choice: "Amazon DynamoDB", correct: false },
      { id: 3, choice: "Amazon Aurora", correct: true },
      {
        id: 4,
        choice: "Amazon Elastic Block Store (Amazon EBS)",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "By the time it takes for the Lambda function to run",
        correct: true,
      },
      {
        id: 2,
        choice: "By the number of versions of a specific Lambda function",
        correct: false,
      },
      {
        id: 3,
        choice: "By the number of requests made for a given Lambda function",
        correct: true,
      },
      {
        id: 4,
        choice:
          "By the programming language that is used for the Lambda function",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?`,
    choices: [
      { id: 1, choice: "AWS Trusted Advisor", correct: true },
      { id: 2, choice: "AWS Config", correct: false },
      { id: 3, choice: "Amazon CloudWatch", correct: false },
      { id: 4, choice: "AWS CloudTrail", correct: false },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `What are benefits of using the AWS Cloud for companies with customers in many countries around the world? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice:
          "Companies can deploy applications in multiple AWS Regions to reduce latency.",
        correct: true,
      },
      {
        id: 2,
        choice:
          "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
        correct: false,
      },
      {
        id: 3,
        choice:
          "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
        correct: true,
      },
      {
        id: 4,
        choice:
          "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3.
  Which AWS service can meet these requirements?`,
    choices: [
      { id: 1, choice: "Amazon Inspector", correct: false },
      { id: 2, choice: "Amazon Macie", correct: true },
      { id: 3, choice: "Amazon GuardDuty", correct: false },
      { id: 4, choice: "AWS Secrets Manager", correct: false },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `A company is moving all of their development activities to AWS. The company wants a solution to store and manage their developers' source code.
  Which AWS coding service will meet this requirement?`,
    choices: [
      { id: 1, choice: "AWS CodeArtifact", correct: false },
      { id: 2, choice: "AWS CodeBuild", correct: false },
      { id: 3, choice: "AWS CodePipeline", correct: false },
      { id: 4, choice: "AWS CodeCommit", correct: true },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `What is the MINIMUM AWS Support plan that provides technical support through phone calls?`,
    choices: [
      { id: 1, choice: "Enterprise", correct: false },
      { id: 2, choice: "Business", correct: true },
      { id: 3, choice: "Developer", correct: false },
      { id: 4, choice: "Basic", correct: false },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `A company is hosting a static website from a single Amazon S3 bucket.
  Which AWS service will achieve lower latency and high transfer speeds?`,
    choices: [
      { id: 1, choice: "AWS Elastic Beanstalk", correct: false },
      { id: 2, choice: "Amazon DynamoDB Accelerator (DAX)", correct: false },
      { id: 3, choice: "Amazon Route 53", correct: false },
      { id: 4, choice: "Amazon Cloudfront", correct: true },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `Which credential components are required to gain programmatic access to an AWS account? (Select TWO.)`,
    choices: [
      { id: 1, choice: "An access key ID", correct: true },
      { id: 2, choice: "A primary key", correct: false },
      { id: 3, choice: "A secret access key", correct: true },
      { id: 4, choice: "A user ID", correct: false },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?`,
    choices: [
      { id: 1, choice: "Reserved Instances", correct: false },
      { id: 2, choice: "On-Demand Instances", correct: false },
      { id: 3, choice: "Dedicated Instances", correct: false },
      { id: 4, choice: "Spot Instances", correct: true },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `A company has an on-premises Linux-based server with an Oracle database that runs on it. The company wants to migrate the database server to run on an Amazon EC2 instance in AWS.
  Which service should the company use to complete the migration?`,
    choices: [
      {
        id: 1,
        choice: "AWS Database Migration Service (AWS DMS)",
        correct: false,
      },
      { id: 2, choice: "AWS Migration Hub", correct: false },
      {
        id: 3,
        choice: "AWS Application Migration Service (AWS MGN)",
        correct: true,
      },
      { id: 4, choice: "AWS Application Discovery Service", correct: false },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `A company needs to monitor and receive alerts about AWS Management Console sign-in events that involve the AWS account root user.
  Which AWS service can the company use to meet these requirements?`,
    choices: [
      { id: 1, choice: "Amazon CloudWatch", correct: true },
      { id: 2, choice: "AWS Config", correct: false },
      { id: 3, choice: "AWS Trusted Advisor", correct: false },
      {
        id: 4,
        choice: "AWS Identity and Access Management (IAM)",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `Which tasks are the customer's responsibility according to the AWS shared responsibility model? (Select TWO.)`,
    choices: [
      {
        id: 1,
        choice: "Patch the operating system that AWS Lambda functions use.",
        correct: false,
      },
      {
        id: 2,
        choice: "Install patches on Amazon RDS DB instances.",
        correct: false,
      },
      {
        id: 3,
        choice:
          "Control physical access to the data center that contains a customer's VPC.",
        correct: false,
      },
      {
        id: 4,
        choice:
          "Configure IAM users according to the principle of least privilege.",
        correct: true,
      },
      {
        id: 5,
        choice: "Configure an Amazon S3 bucket to allow public access.",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Select TWO.)`,
    choices: [
      { id: 1, choice: "Preventing a single point of failure", correct: true },
      {
        id: 2,
        choice: "Reducing the operational costs of the application",
        correct: false,
      },
      {
        id: 3,
        choice:
          "Allowing the application to serve cross-Region users with low latency",
        correct: false,
      },
      {
        id: 4,
        choice: "Increasing the availability of the application",
        correct: true,
      },
      {
        id: 5,
        choice: "Increasing the load of the application",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guessedCorrectly: false,
    guesses: [],
  },
  {
    question: `A company requires an encrypted connection between the company's on-premises servers and AWS. The connection must use the company's existing internet connection.
  Which solution will meet these requirements?`,
    choices: [
      { id: 1, choice: "AWS Direct Connect", correct: false },
      { id: 2, choice: "Amazon Connect", correct: false },
      { id: 3, choice: "Amazon CloudFront", correct: false },
      { id: 4, choice: "AWS Site-to-Site VPN", correct: true },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guessedCorrectly: false,
    guesses: [],
  },
];

export default aws_questions;
