import { IFlashCard } from "@/_lib/definitions";
import { EAnswer } from "@/_lib/enums";
import { shuffle } from "lodash";

const aws_questions: IFlashCard[] = [
  {
    question: `Each department within a company has its own independent AWS account and its own payment method. The company needs to centralize departmental governance and consolidate payments. How can the company achieve these objectives by using AWS services or features?`,
    choices: [
      "Use AWS Cloud Map on each departmental account.",
      "Create an organization in AWS Organizations with all features enabled within one account. Invite all accounts to join the organization.", // correct
      "Use AWS Systems Manager OpsCenter.",
      "Use the AWS Cost and Usage Reports page of the AWS Billing and Cost Management console.",
    ],
    answer: [1],
    showAnswer: false,
  },
  {
    question: `A company wants to create a learning application for students. The learning application must give students the option to choose a button to have the text read out loud to them. Which AWS machine learning service will meet this requirement?`,
    choices: [
      "Amazon Transcribe",
      "Amazon Polly",
      "Amazon Translate",
      "Amazon Textract",
    ],
    answer: [1],
    showAnswer: false,
  },
  // {
  //   question: `Which of the functionalities are characteristics of Amazon S3? (Select TWO.)`,
  //   choices: [
  //     "A global file system",
  //     "An object store",
  //     "A local file store",
  //     "A network file system",
  //     "A durable storage system",
  //   ],
  //   answer: [1, 4],
  //   showAnswer: false,
  // },
  // {
  //   question: `A company wants to establish a consistent and private connection from the company's on-premises data center to the AWS Cloud.
  // Which AWS service will meet these requirements?`,
  //   choices: [
  //     "AWS Client VPN",
  //     "AWS Connect",
  //     "AWS Direct Connect",
  //     "AWS Site-to-Site VPN",
  //   ],
  //   answer: [2],
  //   showAnswer: false,
  // },
  // {
  //   question: `A user deploys an Amazon RDS DB instance in multiple Availability Zones.
  // This strategy involves which pillar of the AWS Well-Architected Framework?`,
  //   choices: [
  //     "Performance efficiency",
  //     "Reliability",
  //     "Cost optimization",
  //     "Security",
  //   ],
  //   answer: [1],
  //   showAnswer: false,
  // },
  // {
  //   question: `A company requires a relational database on AWS that records new customer orders from a website.
  // Which AWS service or feature will meet this requirement?`,
  //   choices: [
  //     "AWS Global Accelerator",
  //     "Amazon DynamoDB",
  //     "Amazon Aurora",
  //     "Amazon Elastic Block Store (Amazon EBS)",
  //   ],
  //   answer: [2],
  //   showAnswer: false,
  // },
  // {
  //   question: `How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Select TWO.)`,
  //   choices: [
  //     "By the time it takes for the Lambda function to run",
  //     "By the number of versions of a specific Lambda function",
  //     "By the number of requests made for a given Lambda function",
  //     "By the programming language that is used for the Lambda function",
  //   ],
  //   answer: [0, 2],
  //   showAnswer: false,
  // },
  // {
  //   question: `Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?`,
  //   choices: [
  //     "AWS Trusted Advisor",
  //     "AWS Config",
  //     "Amazon CloudWatch",
  //     "AWS CloudTrail",
  //   ],
  //   answer: [0],
  //   showAnswer: false,
  // },
  // {
  //   question: `What are benefits of using the AWS Cloud for companies with customers in many countries around the world? (Select TWO.)`,
  //   choices: [
  //     "Companies can deploy applications in multiple AWS Regions to reduce latency.",
  //     "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
  //     "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
  //     "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
  //   ],
  //   answer: [0, 2],
  //   showAnswer: false,
  // },
  // {
  //   question: `A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3.
  // Which AWS service can meet these requirements?`,
  //   choices: [
  //     "Amazon Inspector",
  //     "Amazon Macie",
  //     "Amazon GuardDuty",
  //     "AWS Secrets Manager",
  //   ],
  //   answer: [1],
  //   showAnswer: false,
  // },
  // {
  //   question: `A company is moving all of their development activities to AWS. The company wants a solution to store and manage their developers' source code.
  // Which AWS coding service will meet this requirement?`,
  //   choices: [
  //     "AWS CodeArtifact",
  //     "AWS CodeBuild",
  //     "AWS CodePipeline",
  //     "AWS CodeCommit",
  //   ],
  //   answer: [3],
  //   showAnswer: false,
  // },
  // {
  //   question: `What is the MINIMUM AWS Support plan that provides technical support through phone calls?`,
  //   choices: ["Enterprise", "Business", "Developer", "Basic"],
  //   answer: [1],
  //   showAnswer: false,
  // },
  // {
  //   question: `A company is hosting a static website from a single Amazon S3 bucket.
  // Which AWS service will achieve lower latency and high transfer speeds?`,
  //   choices: [
  //     "AWS Elastic Beanstalk",
  //     "Amazon DynamoDB Accelerator (DAX)",
  //     "Amazon Route 53",
  //     "Amazon Cloudfront",
  //   ],
  //   answer: [3],
  //   showAnswer: false,
  // },
  // {
  //   question: `Which credential components are required to gain programmatic access to an AWS account? (Select TWO.)`,
  //   choices: [
  //     "An access key ID",
  //     "A primary key",
  //     "A secret access key",
  //     "A user ID",
  //   ],
  //   answer: [0, 2],
  //   showAnswer: false,
  // },
  // {
  //   question: `Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?`,
  //   choices: [
  //     "Reserved Instances",
  //     "On-Demand Instances",
  //     "Dedicated Instances",
  //     "Spot Instances",
  //   ],
  //   answer: [3],
  //   showAnswer: false,
  // },
  // {
  //   question: `A company has an on-premises Linux-based server with an Oracle database that runs on it. The company wants to migrate the database server to run on an Amazon EC2 instance in AWS.
  // Which service should the company use to complete the migration?`,
  //   choices: [
  //     "AWS Database Migration Service (AWS DMS)",
  //     "AWS Migration Hub",
  //     "AWS Application Migration Service (AWS MGN)",
  //     "AWS Application Discovery Service",
  //   ],
  //   answer: [2],
  //   showAnswer: false,
  // },
  // {
  //   question: `A company needs to monitor and receive alerts about AWS Management Console sign-in events that involve the AWS account root user.
  // Which AWS service can the company use to meet these requirements?`,
  //   choices: [
  //     "Amazon CloudWatch",
  //     "AWS Config",
  //     "AWS Trusted Advisor",
  //     "AWS Identity and Access Management (IAM)",
  //   ],
  //   answer: [0],
  //   showAnswer: false,
  // },
  // {
  //   question: `Which tasks are the customer's responsibility according to the AWS shared responsibility model? (Select TWO.)`,
  //   choices: [
  //     "Patch the operating system that AWS Lambda functions use.",
  //     "Install patches on Amazon RDS DB instances.",
  //     "Control physical access to the data center that contains a customer's VPC.",
  //     "Configure IAM users according to the principle of least privilege.",
  //     "Configure an Amazon S3 bucket to allow public access.",
  //   ],
  //   answer: [3, 4],
  //   showAnswer: false,
  // },
  // {
  //   question: `What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Select TWO.)`,
  //   choices: [
  //     "Preventing a single point of failure",
  //     "Reducing the operational costs of the application",
  //     "Allowing the application to serve cross-Region users with low latency",
  //     "Increasing the availability of the application",
  //     "Increasing the load of the application",
  //   ],
  //   answer: [0, 3],
  //   showAnswer: false,
  // },
  // {
  //   question: `A company requires an encrypted connection between the company's on-premises servers and AWS. The connection must use the company's existing internet connection.
  // Which solution will meet these requirements?`,
  //   choices: [
  //     "AWS Direct Connect",
  //     "Amazon Connect",
  //     "Amazon CloudFront",
  //     "AWS Site-to-Site VPN",
  //   ],
  //   answer: [3],
  //   showAnswer: false,
  // },
];

export default aws_questions;
