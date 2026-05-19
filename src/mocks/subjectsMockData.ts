import type { Subject } from "@/types/Subject";
import { DEPARTMENTS_OPTIONS } from "@/constants";

export const subjectsMockData: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "computer-science",
    description:
      "Fundamentals of computing, programming concepts, and problem solving.",
    created_at: "2026-01-10T08:00:00Z",
    updated_at: "2026-01-10T08:00:00Z",
  },
  {
    id: 2,
    code: "MATH215",
    name: "Linear Algebra",
    department: "statistics",
    description:
      "Matrix theory, vector spaces, and linear transformations for engineering students.",
    created_at: "2026-01-10T08:00:00Z",
    updated_at: "2026-01-10T08:00:00Z",
  },
  {
    id: 3,
    code: "ENG201",
    name: "Academic Writing",
    department: "hospitality",
    description:
      "Writing academic essays, research papers, and effective communication skills.",
    created_at: "2026-01-10T08:00:00Z",
    updated_at: "2026-01-10T08:00:00Z",
  },
  {
    id: 4,
    code: "CS302",
    name: "Human Computer Interaction",
    department: "computer-science",
    description:
      "User interface design models, usability testing, and centering system development around user behavior.",
    created_at: "2026-02-15T10:30:00Z",
    updated_at: "2026-02-15T10:30:00Z",
  },
  {
    id: 5,
    code: "AI401",
    name: "Introduction to Artificial Intelligence",
    department: "artificial-intelligence",
    description:
      "Foundations of knowledge representation, state-space search algorithms, and intelligent agents.",
    created_at: "2026-03-01T09:00:00Z",
    updated_at: "2026-03-01T09:00:00Z",
  },
  {
    id: 6,
    code: "STAT311",
    name: "Probability & Statistics",
    department: "statistics",
    description:
      "Probability distributions, hypothesis testing, regression analysis, and data sampling techniques.",
    created_at: "2026-02-20T14:15:00Z",
    updated_at: "2026-02-20T14:15:00Z",
  },
  {
    id: 7,
    code: "HOSP105",
    name: "Food and Beverage Management",
    department: "hospitality",
    description:
      "Principles of food production control, service operations, and hospitality cost management structures.",
    created_at: "2026-01-15T11:00:00Z",
    updated_at: "2026-01-15T11:00:00Z",
  },
  {
    id: 8,
    code: "CS204",
    name: "Data Structures & Algorithms",
    department: "computer-science",
    description:
      "Analysis of arrays, linked lists, stacks, queues, trees, graphs, and core sorting/searching logic.",
    created_at: "2026-01-25T13:00:00Z",
    updated_at: "2026-01-25T13:00:00Z",
  },
  {
    id: 9,
    code: "AI405",
    name: "Machine Learning Basics",
    department: "artificial-intelligence",
    description:
      "Supervised and unsupervised learning, decision trees, linear regressions, and neural network foundations.",
    created_at: "2026-03-05T16:45:00Z",
    updated_at: "2026-03-05T16:45:00Z",
  },
  {
    id: 10,
    code: "CS202",
    name: "Web Application Development",
    department: "computer-science",
    description:
      "Building modern full-stack web applications using client-side frameworks and server-side REST APIs.",
    created_at: "2026-01-18T10:00:00Z",
    updated_at: "2026-01-18T10:00:00Z",
  },
  {
    id: 11,
    code: "STAT402",
    name: "Data Mining & Analytics",
    department: "statistics",
    description:
      "Discovering patterns in large datasets using clustering, classification, and association rule mining.",
    created_at: "2026-03-12T11:30:00Z",
    updated_at: "2026-03-12T11:30:00Z",
  },
  {
    id: 12,
    code: "HOSP202",
    name: "Hotel Front Office Operations",
    department: "hospitality",
    description:
      "Managing guest reservations, check-in sequences, front desk communications, and room allocation systems.",
    created_at: "2026-02-05T08:45:00Z",
    updated_at: "2026-02-05T08:45:00Z",
  },
  {
    id: 13,
    code: "AI410",
    name: "Natural Language Processing",
    department: "artificial-intelligence",
    description:
      "Text processing mechanics, language modeling, sentiment analysis, and building sequence-to-sequence translations.",
    created_at: "2026-03-20T14:00:00Z",
    updated_at: "2026-03-20T14:00:00Z",
  },
  {
    id: 14,
    code: "CS206",
    name: "Database Management Systems",
    department: "computer-science",
    description:
      "Relational database design, SQL querying, normalization theories, transaction security, and indexing configurations.",
    created_at: "2026-02-02T09:15:00Z",
    updated_at: "2026-02-02T09:15:00Z",
  },
  {
    id: 15,
    code: "STAT405",
    name: "Time Series Analysis",
    department: "statistics",
    description:
      "Modeling sequential data variations, forecasting methodologies, autoregressive models, and trend estimations.",
    created_at: "2026-04-01T10:00:00Z",
    updated_at: "2026-04-01T10:00:00Z",
  },
  {
    id: 16,
    code: "HOSP301",
    name: "Hospitality & Tourism Marketing",
    department: "hospitality",
    description:
      "Service marketing strategies, brand positioning, digital campaigns, and consumer behavior targeting in tourism.",
    created_at: "2026-02-28T13:00:00Z",
    updated_at: "2026-02-28T13:00:00Z",
  },
  {
    id: 17,
    code: "AI412",
    name: "Computer Vision",
    department: "artificial-intelligence",
    description:
      "Image processing features, object detection frameworks, edge extraction techniques, and convolutional neural networks.",
    created_at: "2026-04-05T15:30:00Z",
    updated_at: "2026-04-05T15:30:00Z",
  },
  {
    id: 18,
    code: "CS301",
    name: "Software Engineering Principles",
    department: "computer-science",
    description:
      "Software development lifecycles, architectural patterns, agile practices, automated system testing, and clean code paradigms.",
    created_at: "2026-01-30T11:00:00Z",
    updated_at: "2026-01-30T11:00:00Z",
  },
  {
    id: 19,
    code: "STAT304",
    name: "Biostatistics",
    department: "statistics",
    description:
      "Application of statistical methods to biological experiments, clinical trial data tracking, and epidemiological surveys.",
    created_at: "2026-03-15T09:00:00Z",
    updated_at: "2026-03-15T09:00:00Z",
  },
  {
    id: 20,
    code: "HOSP102",
    name: "Customer Service Excellence",
    department: "hospitality",
    description:
      "Interpersonal communication models, managing service delivery failures, customer retention loops, and cultural competency.",
    created_at: "2026-01-12T16:00:00Z",
    updated_at: "2026-01-12T16:00:00Z",
  },
];
