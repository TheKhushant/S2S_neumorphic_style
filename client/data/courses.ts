export interface Module {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  short: string;
  description: string;
  duration: string;
  fees: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  syllabus: string[];
  modules?: Module[];
  projects?: string[];
  outcomes: string[];
  prerequisites?: string[];
  schedule?: string;
  image?: string;
  certificate?: string;
  demoVideo?: string;
}

export const courses: Course[] = [
  {
    id: "fullstack-java",
    title: "Full-Stack Java Developer",
    short: "Enterprise Java, Spring Boot & Microservices",
    description:
      "Become a backend & full-stack Java developer with hands-on projects, REST APIs, Microservices, and deployment workflows.",
    duration: "5 Months",
    fees: "₹25,000",
    level: "Advanced",
    category: "Fullstack",
    syllabus: [
      "Core Java & OOPs",
      "Collections & Generics",
      "Spring & Spring Boot",
      "REST APIs & Microservices",
      "Hibernate/JPA",
      "SQL & NoSQL Databases",
      "Testing & CI/CD",
      "Cloud Basics (AWS/GCP)",
    ],
    modules: [
      { title: "Java Core", topics: ["OOPs", "Collections", "Concurrency"] },
      { title: "Spring Ecosystem", topics: ["Spring Core", "Spring Boot", "Spring Security"] },
      { title: "Data & Persistence", topics: ["JPA/Hibernate", "SQL", "MongoDB"] },
      { title: "Microservices", topics: ["Design", "Gateway", "Service Discovery"] },
    ],
    projects: [
      "E-commerce REST API with Spring Boot",
      "Microservice-based Order Processing System",
    ],
    outcomes: [
      "Build production-ready backend services",
      "Understand microservice architecture",
      "Prepare for interviews and placements",
    ],
    prerequisites: ["Basic programming knowledge", "Familiarity with Linux/CLI"],
    schedule: "Weekday / Weekend batches available",
    image: "/placeholder.svg",
    certificate: "Certificate of Completion: Full-Stack Java Developer",
    demoVideo: "/videos/fullstack-demo.mp4",
  },
  {
    id: "react-ts",
    title: "React + TypeScript",
    short: "Modern frontend with React 18 & TypeScript",
    description:
      "Master modern frontend development using React, TypeScript, state management, testing and performance optimization.",
    duration: "2.5 Months",
    fees: "₹15,000",
    level: "Intermediate",
    category: "Frontend",
    syllabus: [
      "React 18 fundamentals",
      "TypeScript with React",
      "Routing & State Management (Redux/Query)",
      "Forms & Validation",
      "Testing (Jest, Testing Library)",
      "Performance & Accessibility",
      "Project: Real-world SPA",
    ],
    modules: [
      { title: "React Fundamentals", topics: ["JSX", "Components", "Hooks"] },
      { title: "State Management", topics: ["Redux", "React Query"] },
      { title: "Testing & Performance", topics: ["Jest", "Lighthouse"] },
    ],
    projects: ["SPA Dashboard with Authentication", "Performance Optimization Case Study"],
    outcomes: ["Build scalable React applications", "Ship accessible and performant code", "Portfolio-ready projects"],
    prerequisites: ["HTML/CSS basics", "JavaScript fundamentals"],
    schedule: "Evening & Weekend batches",
    image: "/placeholder.svg",
    certificate: "Certificate of Completion: React + TypeScript",
    demoVideo: "/videos/react-demo.mp4",
  },
  {
    id: "python-django",
    title: "Python & Django",
    short: "Backend web development with Django",
    description:
      "From core Python to Django REST frameworks, deployable apps and real-world projects for backend roles.",
    duration: "3 Months",
    fees: "₹18,000",
    level: "Intermediate",
    category: "Backend",
    syllabus: [
      "Python from basics to advanced",
      "Django MVC & ORM",
      "Authentication & Permissions",
      "Django REST Framework",
      "Deployments & Containers",
      "Project & Mentorship",
    ],
    modules: [
      { title: "Python Core", topics: ["Data Structures", "OOP", "File I/O"] },
      { title: "Django Web", topics: ["Models", "Views", "Templates", "DRF"] },
      { title: "Deployment", topics: ["Docker", "Gunicorn", "Nginx"] },
    ],
    projects: ["Django E-commerce App", "REST API for Mobile App"],
    outcomes: ["Develop backend services", "REST API development", "Deploy apps to cloud"],
    prerequisites: ["Basic programming experience"],
    schedule: "Weekend batches",
    image: "/placeholder.svg",
    certificate: "Certificate of Completion: Python & Django",
    demoVideo: "/videos/python-demo.mp4",
  },
];

export function getCourseById(id: string) {
  return courses.find((c) => c.id === id) || null;
}
