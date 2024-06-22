// import { EAnswer, IFlashCard } from "./FlashCards";

// const data: IFlashCard[] = [
//   {
//     question: `Each department within a company has its own independent AWS account and its own payment method. The company needs to centralize departmental governance and consolidate payments.

// How can the company achieve these objectives by using AWS services or features?`,
//     choices: {
//       A: "Use AWS Cloud Map on each departmental account.",
//       B: "Create an organization in AWS Organizations with all features enabled within one account. Invite all accounts to join the organization.",
//       C: "Use AWS Systems Manager OpsCenter.",
//       D: "Use the AWS Cost and Usage Reports page of the AWS Billing and Cost Management console.",
//     },
//     answer: [EAnswer.B],
//     showAnswer: false,
//   },
//   {
//     question: `A company wants to create a learning application for students. The learning application must give students the option to choose a button to have the text read out loud to them.

// Which AWS machine learning service will meet this requirement?`,
//     choices: {
//       A: "Amazon Transcribe",
//       B: "Amazon Polly",
//       C: "Amazon Translate",
//       D: "Amazon Textract",
//     },
//     answer: [EAnswer.B],
//     showAnswer: false,
//   },
//   {
//     question: `Which of the functionalities are characteristics of Amazon S3? (Select TWO.)`,
//     choices: {
//       A: "A global file system",
//       B: "An object store",
//       C: "A local file store",
//       D: "A network file system",
//       E: "A durable storage system",
//     },
//     answer: [EAnswer.B, EAnswer.E],
//     showAnswer: false,
//   },
//   {
//     question: `A company wants to establish a consistent and private connection from the company's on-premises data center to the AWS Cloud.

// Which AWS service will meet these requirements?`,
//     choices: {
//       A: "AWS Client VPN",
//       B: "AWS Connect",
//       C: "AWS Direct Connect",
//       D: "AWS Site-to-Site VPN",
//     },
//     answer: [EAnswer.C],
//     showAnswer: false,
//   },
//   {
//     question: `A user deploys an Amazon RDS DB instance in multiple Availability Zones.

// This strategy involves which pillar of the AWS Well-Architected Framework?`,
//     choices: {
//       A: "Performance efficiency",
//       B: "Reliability",
//       C: "Cost optimization",
//       D: "Security",
//     },
//     answer: [EAnswer.B],
//     showAnswer: false,
//   },
//   {
//     question: `A company requires a relational database on AWS that records new customer orders from a website.

// Which AWS service or feature will meet this requirement?`,
//     choices: {
//       A: "AWS Global Accelerator",
//       B: "Amazon DynamoDB",
//       C: "Amazon Aurora",
//       D: "Amazon Elastic Block Store (Amazon EBS)",
//     },
//     answer: [EAnswer.C],
//     showAnswer: false,
//   },
//   {
//     question: `How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Select TWO.)`,
//     choices: {
//       A: "By the time it takes for the Lambda function to run",
//       B: "By the number of versions of a specific Lambda function",
//       C: "By the number of requests made for a given Lambda function",
//       D: "By the programming language that is used for the Lambda function",
//     },
//     answer: [EAnswer.A, EAnswer.C],
//     showAnswer: false,
//   },
//   {
//     question: `Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?`,
//     choices: {
//       A: "AWS Trusted Advisor",
//       B: "AWS Config",
//       C: "Amazon CloudWatch",
//       D: "AWS CloudTrail",
//     },
//     answer: [EAnswer.A],
//     showAnswer: false,
//   },
//   {
//     question: `What are benefits of using the AWS Cloud for companies with customers in many countries around the world? (Select TWO.)`,
//     choices: {
//       A: "Companies can deploy applications in multiple AWS Regions to reduce latency.",
//       B: "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
//       C: "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
//       D: "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
//     },
//     answer: [EAnswer.A, EAnswer.C],
//     showAnswer: false,
//   },
//   {
//     question: `A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3.

// Which AWS service can meet these requirements?`,
//     choices: {
//       A: "Amazon Inspector",
//       B: "Amazon Macie",
//       C: "Amazon GuardDuty",
//       D: "AWS Secrets Manager",
//     },
//     answer: [EAnswer.B],
//     showAnswer: false,
//   },
//   {
//     question: `A company is moving all of their development activities to AWS. The company wants a solution to store and manage their developers' source code.

// Which AWS coding service will meet this requirement?`,
//     choices: {
//       A: "AWS CodeArtifact",
//       B: "AWS CodeBuild",
//       C: "AWS CodePipeline",
//       D: "AWS CodeCommit",
//     },
//     answer: [EAnswer.D],
//     showAnswer: false,
//   },
//   {
//     question: `What is the MINIMUM AWS Support plan that provides technical support through phone calls?`,
//     choices: {
//       A: "Enterprise",
//       B: "Business",
//       C: "Developer",
//       D: "Basic",
//     },
//     answer: [EAnswer.B],
//     showAnswer: false,
//   },
//   {
//     question: `A company is hosting a static website from a single Amazon S3 bucket.

// Which AWS service will achieve lower latency and high transfer speeds?`,
//     choices: {
//       A: "AWS Elastic Beanstalk",
//       B: "Amazon DynamoDB Accelerator (DAX)",
//       C: "Amazon Route 53",
//       D: "Amazon Cloudfront",
//     },
//     answer: [EAnswer.D],
//     showAnswer: false,
//   },
//   {
//     question: `Which credential components are required to gain programmatic access to an AWS account? (Select TWO.)`,
//     choices: {
//       A: "An access key ID",
//       B: "A primary key",
//       C: "A secret access key",
//       D: "A user ID",
//     },
//     answer: [EAnswer.A, EAnswer.C],
//     showAnswer: false,
//   },
//   {
//     question: `Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?`,
//     choices: {
//       A: "Reserved Instances",
//       B: "On-Demand Instances",
//       C: "Dedicated Instances",
//       D: "Spot Instances",
//     },
//     answer: [EAnswer.D],
//     showAnswer: false,
//   },
//   {
//     question: `A company has an on-premises Linux-based server with an Oracle database that runs on it. The company wants to migrate the database server to run on an Amazon EC2 instance in AWS.

// Which service should the company use to complete the migration?`,
//     choices: {
//       A: "AWS Database Migration Service (AWS DMS)",
//       B: "AWS Migration Hub",
//       C: "AWS Application Migration Service (AWS MGN)",
//       D: "AWS Application Discovery Service",
//     },
//     answer: [EAnswer.C],
//     showAnswer: false,
//   },
//   {
//     question: `A company needs to monitor and receive alerts about AWS Management Console sign-in events that involve the AWS account root user.

// Which AWS service can the company use to meet these requirements?`,
//     choices: {
//       A: "Amazon CloudWatch",
//       B: "AWS Config",
//       C: "AWS Trusted Advisor",
//       D: "AWS Identity and Access Management (IAM)",
//     },
//     answer: [EAnswer.A],
//     showAnswer: false,
//   },
//   {
//     question: `Which tasks are the customer's responsibility according to the AWS shared responsibility model? (Select TWO.)`,
//     choices: {
//       A: "Patch the operating system that AWS Lambda functions use.",
//       B: "Install patches on Amazon RDS DB instances.",
//       C: "Control physical access to the data center that contains a customer's VPC.",
//       D: "Configure IAM users according to the principle of least privilege.",
//       E: "Configure an Amazon S3 bucket to allow public access.",
//     },
//     answer: [EAnswer.D, EAnswer.E],
//     showAnswer: false,
//   },
//   {
//     question: `What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Select TWO.)`,
//     choices: {
//       A: "Preventing a single point of failure",
//       B: "Reducing the operational costs of the application",
//       C: "Allowing the application to serve cross-Region users with low latency",
//       D: "Increasing the availability of the application",
//       E: "Increasing the load of the application",
//     },
//     answer: [EAnswer.A, EAnswer.D],
//     showAnswer: false,
//   },
//   {
//     question: `A company requires an encrypted connection between the company's on-premises servers and AWS. The connection must use the company's existing internet connection.

// Which solution will meet these requirements?`,
//     choices: {
//       A: "AWS Direct Connect",
//       B: "Amazon Connect",
//       C: "Amazon CloudFront",
//       D: "AWS Site-to-Site VPN",
//     },
//     answer: [EAnswer.D],
//     showAnswer: false,
//   },
// ];

// export default data;
