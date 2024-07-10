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
  {
    question: `According to AWS, what is the benefit of Elasticity`,
    choices: [
      {
        id: 1,
        choice:
          "Minimize storage requirements by reducing logging and auditing activities",
        correct: false,
      },
      {
        id: 2,
        choice:
          "Create systems that scale to the required capacity based on changes in demand",
        correct: true,
      },
      {
        id: 3,
        choice:
          "Enable AWS to automatically select the most cost-effective services.",
        correct: false,
      },
      {
        id: 4,
        choice:
          "Accelerate the design process because recovery from failure is automated, reducing the need for testing",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which tool can you use to forecast your AWS spending?`,
    choices: [
      {
        id: 1,
        choice: "AWS Organizations",
        correct: false,
      },
      {
        id: 2,
        choice: "Amazon Dev Pay",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Trusted Advisor",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Cost Explorer",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `A business analyst would like to move away from creating complex database queries and static spreadsheets when generating regular reports for high-level management. They would like to publish insightful, graphically appealing reports with interactive dashboards. Which service can they use to accomplish this?`,
    choices: [
      {
        id: 1,
        choice: "Amazon QuickSight",
        correct: true,
      },
      {
        id: 2,
        choice: "Business intelligence on Amazon Redshift",
        correct: false,
      },
      {
        id: 3,
        choice: "Amazon CloudWatch dashboards",
        correct: false,
      },
      {
        id: 4,
        choice: "Amazon Athena integrated with Amazon Glue",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `What is the AWS feature that enables fast, easy and secure transfers of files over long distances between your client and your Amazon S3 bucket?`,
    choices: [
      {
        id: 1,
        choice: "File Transfer",
        correct: false,
      },
      {
        id: 2,
        choice: "HTTP Transfer",
        correct: false,
      },
      {
        id: 3,
        choice: "Amazon S3 Transfer Acceleration",
        correct: true,
      },
      {
        id: 4,
        choice: "S3 Acceleration",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `What best describes the “Principle of Least Privilege”? Choose the correct answer from the options given below.`,
    choices: [
      {
        id: 1,
        choice:
          "All users should have the same baseline permissions granted to them to use basic AWS services.",
        correct: false,
      },
      {
        id: 2,
        choice:
          "Users should be granted permission to access only resources they need to do their assigned job.",
        correct: true,
      },
      {
        id: 3,
        choice:
          "Users should submit all access requests in written form so that there is a paper trail of who needs access to different AWS resources.",
        correct: false,
      },
      {
        id: 4,
        choice:
          "Users should always have a little more permission than they need.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: ` A web administrator maintains several public and private web-based resources for an organisation. Which service can they use to keep track of the expiry dates of SSL/TLS certificates as well as updating and renewal?`,
    choices: [
      {
        id: 1,
        choice: "AWS Data Lifecycle Manager",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS License Manager",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Firewall Manager",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Certificate Manager",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which of the following is the responsibility of the customer to ensure the availability and backup of the EBS volumes?`,
    choices: [
      {
        id: 1,
        choice: "Delete the data and create a new EBS volume.",
        correct: false,
      },
      {
        id: 2,
        choice: "Create EBS snapshots.",
        correct: true,
      },
      {
        id: 3,
        choice: "Attach new volumes to EC2 Instances.",
        correct: false,
      },
      {
        id: 4,
        choice: "Create copies of EBS Volumes.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which of the following services can be used as an application firewall in AWS?`,
    choices: [
      {
        id: 1,
        choice: "AWS Snowball",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS WAF",
        correct: true,
      },
      {
        id: 3,
        choice: "AWS Firewall",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Protection ",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Your design team is planning to design an application that will be hosted on the AWS Cloud. One of their main non-functional requirements is given below:
Reduce inter-dependencies so failures do not impact other components.
Which of the following concepts does this requirement relate to?`,
    choices: [
      {
        id: 1,
        choice: "Integration",
        correct: false,
      },
      {
        id: 2,
        choice: "Decoupling",
        correct: true,
      },
      {
        id: 3,
        choice: "Aggregation",
        correct: false,
      },
      {
        id: 4,
        choice: "Segregation",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `A manufacturing firm has recently migrated their application servers to the Amazon EC2 instance. The IT Manager is looking for the details of upcoming scheduled maintenance activities which AWS would be performing on AWS resources, that may impact the services on these EC2 instances.

Which of the following services can alert you about the changes that can affect resources in your account? `,
    choices: [
      {
        id: 1,
        choice: "AWS Organizations",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS Personal Health Dashboard",
        correct: true,
      },
      {
        id: 3,
        choice: "AWS Trusted Advisor",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Service Health Dashboard",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which of the following AWS services can be used to retrieve configuration changes made to AWS resources causing operational issues?`,
    choices: [
      {
        id: 1,
        choice: "Amazon Inspector",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS CloudFormation",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Trusted Advisor",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Config",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `An organization runs several EC2 instances inside a VPC using three subnets, one for Development, one for Test, and one for Production. The Security team has some concerns about the VPC configuration. It requires restricting communication across the EC2 instances using Security Groups.`,
    choices: [
      {
        id: 1,
        choice:
          "You can change a Security Group associated with an instance if the instance is in the running state.",
        correct: true,
      },
      {
        id: 2,
        choice:
          "You can change a Security Group associated with an instance if the instance is in the hibernate state.",
        correct: false,
      },
      {
        id: 3,
        choice:
          "You can change a Security Group only if there are no instances associated to it.",
        correct: false,
      },
      {
        id: 4,
        choice:
          "The only Security Group you can change is the Default Security Group.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which of the following features of Amazon RDS allows for better availability of databases? Choose the answer from the options given below.`,
    choices: [
      {
        id: 1,
        choice: "VPC Peering",
        correct: false,
      },
      {
        id: 2,
        choice: "Multi-AZ",
        correct: true,
      },
      {
        id: 3,
        choice: "Read Replicas",
        correct: false,
      },
      {
        id: 4,
        choice: "Data encryption",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Your company wants to move an existing Oracle database to the AWS Cloud. Which of the following services can help facilitate this move?`,
    choices: [
      {
        id: 1,
        choice: "AWS Database Migration Service",
        correct: true,
      },
      {
        id: 2,
        choice: "AWS VM Migration Service",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Inspector",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Trusted Advisor",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which of the following services allows you to analyze EC2 Instances against pre-defined security templates to check for vulnerabilities?`,
    choices: [
      {
        id: 1,
        choice: "AWS Trusted Advisor",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS Inspector",
        correct: true,
      },
      {
        id: 3,
        choice: "AWS WAF",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Shield",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `A website for an international sport governing body would like to serve its content to viewers from different parts of the world in their vernacular language. Which of the following services provide location-based web personalization using geolocation headers?`,
    choices: [
      {
        id: 1,
        choice: "Amazon CloudFront",
        correct: true,
      },
      {
        id: 2,
        choice: "Amazon EC2 Instance",
        correct: false,
      },
      {
        id: 3,
        choice: "Amazon Lightsail",
        correct: false,
      },
      {
        id: 4,
        choice: "Amazon Route 53",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which of the following can be used to protect against DDoS attacks? Choose 2 answers from the options given below.`,
    choices: [
      {
        id: 1,
        choice: "AWS EC2",
        correct: false,
      },
      {
        id: 2,
        choice: "AWS RDS",
        correct: false,
      },
      {
        id: 3,
        choice: "AWS Shield",
        correct: true,
      },
      {
        id: 4,
        choice: "AWS Shield Advanced",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 2,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which of the following are the recommended resources to be deployed in the Amazon VPC private subnet?`,
    choices: [
      {
        id: 1,
        choice: "NAT Gateways",
        correct: false,
      },
      {
        id: 2,
        choice: "Bastion Hosts",
        correct: false,
      },
      {
        id: 3,
        choice: "Database Servers",
        correct: true,
      },
      {
        id: 4,
        choice: "Internet Gateways",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `A company wants to utilize AWS storage. For them, low storage cost is paramount. The data is rarely retrieved and a data retrieval time of 13-14 hours is acceptable for them. What is the best storage option to use?`,
    choices: [
      {
        id: 1,
        choice: "Amazon S3 Glacier",
        correct: false,
      },
      {
        id: 2,
        choice: "S3 Glacier Deep Archive",
        correct: true,
      },
      {
        id: 3,
        choice: "Amazon EBS volumes",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS CloudFront",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which AWS service provides a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability?`,
    choices: [
      {
        id: 1,
        choice: "AWS RDS",
        correct: false,
      },
      {
        id: 2,
        choice: "DynamoDB",
        correct: true,
      },
      {
        id: 3,
        choice: "Oracle RDS",
        correct: false,
      },
      {
        id: 4,
        choice: "Elastic Map Reduce",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `For which of the following AWS resources, the Customer is responsible for the infrastructure-related security configurations?`,
    choices: [
      {
        id: 1,
        choice: "Amazon RDS",
        correct: false,
      },
      {
        id: 2,
        choice: "Amazon DynamoDB",
        correct: true,
      },
      {
        id: 3,
        choice: "Amazon EC2",
        correct: false,
      },
      {
        id: 4,
        choice: "AWS Fargate",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `In the shared responsibility model for infrastructure services, such as Amazon Elastic Compute Cloud, which of the below two are customers responsibility?`,
    choices: [
      {
        id: 1,
        choice: "Network infrastructure",
        correct: false,
      },
      {
        id: 2,
        choice: "Amazon Machine Images (AMIs)",
        correct: true,
      },
      {
        id: 3,
        choice: "Virtualization infrastructure",
        correct: false,
      },
      {
        id: 4,
        choice: "Physical security of hardware",
        correct: false,
      },
      {
        id: 5,
        choice: "Policies and configuration",
        correct: true,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `AWS offers two savings plans to enable more savings and flexibility for its customers, namely, compute saving plans and EC2 Instance Savings plans.

Which of the below statement is FALSE regarding Saving Plans?`,
    choices: [
      {
        id: 1,
        choice: "Capacity Reservations are not provided with Saving Plans.",
        correct: false,
      },
      {
        id: 2,
        choice: "Savings Plans are available for all the regions.",
        correct: true,
      },
      {
        id: 3,
        choice:
          "Savings plans will apply on ‘On-Demand Capacity Reservations’ that customers can allocate for their needs.",
        correct: false,
      },
      {
        id: 4,
        choice:
          "The prices for Savings Plans do not change based on the amount of hourly commitment.",
        correct: false,
      },
    ],
    showAnswer: false,
    maxGuesses: 1,
    guesses: [],
    guessedCorrectly: false,
  },
  {
    question: `Which of the below-listed services is a region-based AWS service?`,
    choices: [
      {
        id: 1,
        choice: "AWS IAM",
        correct: false,
      },
      {
        id: 2,
        choice: "Amazon EFS",
        correct: true,
      },
      {
        id: 3,
        choice: "Amazon Route 53",
        correct: false,
      },
      {
        id: 4,
        choice: "Amazon CloudFront",
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
