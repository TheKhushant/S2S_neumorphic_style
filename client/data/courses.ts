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
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: Full-Stack Java Developer",
    demoVideo: "/videos/fullstack-demo.mp4", // Verify video file path
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
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: React + TypeScript",
    demoVideo: "/videos/react-demo.mp4", // Verify video file path
  },
  {
    id: "python-dsa",
    title: "Python & DSA",
    short: "Master Data Structures & Algorithms with Python",
    description:
      "Learn problem-solving and coding fundamentals through Python, focusing on Data Structures & Algorithms (DSA). Build strong foundations for interviews, competitive programming, and real-world applications.",
    duration: "3 Months",
    fees: "₹15,000",
    level: "Beginner",
    category: "Programming",
    syllabus: [
      "Python Basics & OOP",
      "Arrays & Strings",
      "Linked Lists",
      "Stacks & Queues",
      "Recursion & Backtracking",
      "Trees & Graphs",
      "Sorting & Searching Algorithms",
      "Dynamic Programming",
      "Problem-Solving & Interview Prep",
    ],
    modules: [
      { title: "Python Foundations", topics: ["Syntax", "Loops", "Functions", "OOP"] },
      { title: "Core DSA", topics: ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues"] },
      { title: "Advanced DSA", topics: ["Trees", "Graphs", "Dynamic Programming", "Greedy Algorithms"] },
    ],
    projects: ["Mini Coding Challenges", "Algorithm Visualizer", "Problem-Solving Portfolio"],
    outcomes: [
      "Write efficient algorithms",
      "Crack coding interviews",
      "Build strong problem-solving mindset",
    ],
    prerequisites: ["Basic knowledge of Python programming"],
    schedule: "Weekday & Weekend batches",
    image: "/placeholder.svg", // Replace with actual image path
    certificate: "Certificate of Completion: Python & DSA",
    demoVideo: "/videos/python-dsa-demo.mp4", // Verify video file path
  },
  {
    id: "ai-data-analytics",
    title: "AI-Data Analytics Training & Certification",
    short: "AI-Powered Data Analytics with Forage Certification",
    description:
      "Master AI-driven data analytics with hands-on training, real-world datasets, and a Forage certification, starting from 6th October.",
    duration: "3 Months",
    fees: "₹18,000",
    level: "Intermediate",
    category: "Data Analytics",
    syllabus: [
      "Excel Spreadsheet, Data Aggregation, Pivot Charts",
      "BI Tools, Data Modeling, AI based Visualization, Query",
      "SQL database, Wildcard Operators, Stored procedure",
      "Python, Programming Strings, Exception Handling, oops",
      "Python for Data, regex, WebScraping, Numpy, API",
    ],
    modules: [
      { title: "Excel & Data Basics", topics: ["Spreadsheet", "Data Aggregation", "Pivot Charts"] },
      { title: "BI & Visualization", topics: ["BI Tools", "Data Modeling", "AI Visualization", "Query"] },
      { title: "SQL & Database", topics: ["SQL", "Wildcard Operators", "Stored Procedure"] },
      { title: "Python Fundamentals", topics: ["Programming", "Strings", "Exception Handling", "OOPs"] },
      { title: "Advanced Python", topics: ["Data Handling", "Regex", "WebScraping", "Numpy", "API"] },
    ],
    projects: [
      "Data Visualization Dashboard with BI Tools",
      "WebScraping and Data Analysis Project",
    ],
    outcomes: [
      "Analyze and visualize data using AI tools",
      "Develop skills for data analyst roles",
      "Earn a Forage certification and placement assistance",
    ],
    prerequisites: ["Basic computer skills", "Interest in data analysis"],
    schedule: "Batches start from 6th October", // Check against current date (Sep 26, 2025)
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: AI-Data Analytics with Forage Certification",
    demoVideo: "/videos/ai-data-analytics-demo.mp4", // Verify video file path
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    short: "Cutting-edge Cybersecurity Training",
    description: "Enroll in our cutting-edge cybersecurity training program, expertly crafted to combat the ever-changing landscape of digital threats. No matter your level of experience, our all-inclusive curriculum empowers you with the most current techniques and information to safeguard against cyber attacks. Don't lag behind – take part in our program and remain ahead of the game in the world of cybersecurity!",
    duration: "3 Months",
    level: "Intermediate",
    category: "Cybersecurity",
    syllabus: [
      "Network Security Fundamentals",
      "Cryptography Techniques",
      "Threat Detection & Prevention",
      "Incident Response & Recovery",
      "Ethical Hacking Basics",
      "Security Compliance & Standards",
    ],
    modules: [
      { title: "Network Security", topics: ["Fundamentals", "Firewalls", "VPNs"] },
      { title: "Cryptography", topics: ["Encryption", "Key Management"] },
      { title: "Threat Management", topics: ["Detection", "Prevention", "Response"] },
    ],
    projects: ["Network Security Audit", "Simulated Cyber Attack Defense"],
    outcomes: [
      "Protect systems from digital threats",
      "Apply current cybersecurity techniques",
      "Stay ahead in the cybersecurity field",
    ],
    prerequisites: ["Basic IT knowledge", "Interest in security"],
    schedule: "Weekday / Weekend batches available",
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: Cyber Security",
    demoVideo: "/videos/cyber-security-demo.mp4",
    fees: ""
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    short: "Expert-Led Digital Marketing Training",
    description: "Join our expert-led training program covering vital topics like SEO, PPC advertising, social media strategies, email campaigns, and web analytics. Gain actionable knowledge through practical exercises and real-world examples to excel in the digital landscape. Whether you're a beginner or experienced marketer, our program equips you to thrive in the digital world. Enroll today!",
    duration: "2.5 Months",
    level: "Beginner",
    category: "Digital Marketing",
    syllabus: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Strategies",
      "Email Campaign Management",
      "Web Analytics & Reporting",
    ],
    modules: [
      { title: "SEO & PPC", topics: ["SEO Basics", "PPC Campaigns"] },
      { title: "Social Media", topics: ["Strategy", "Advertising"] },
      { title: "Email & Analytics", topics: ["Campaigns", "Web Analytics"] },
    ],
    projects: ["SEO Optimization Project", "Social Media Marketing Campaign"],
    outcomes: [
      "Master digital marketing techniques",
      "Apply skills in real-world scenarios",
      "Thrive in the digital marketing field",
    ],
    prerequisites: ["Basic computer skills"],
    schedule: "Evening & Weekend batches",
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: Digital Marketing",
    demoVideo: "/videos/digital-marketing-demo.mp4",
    fees: ""
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    short: "Expert-Led Data Analytics Training",
    description: "Explore data analytics with our expert-led training program! From data collection to visualization, statistical analysis, and machine learning, gain hands-on experience with real-world projects. Whether you're a beginner or experienced, we'll equip you to uncover insights and make informed decisions. Join us now!",
    duration: "3 Months",
    level: "Beginner",
    category: "Data Analytics",
    syllabus: [
      "Data Collection Techniques",
      "Data Visualization Tools",
      "Statistical Analysis",
      "Machine Learning Basics",
    ],
    modules: [
      { title: "Data Collection", topics: ["Techniques", "Sources"] },
      { title: "Visualization", topics: ["Tools", "Charts"] },
      { title: "Analysis", topics: ["Statistics", "Machine Learning"] },
    ],
    projects: ["Data Visualization Dashboard", "Predictive Analysis Model"],
    outcomes: [
      "Uncover insights from data",
      "Master statistical and ML techniques",
      "Make informed business decisions",
    ],
    prerequisites: ["Basic math skills", "Interest in data"],
    schedule: "Weekday batches",
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: Data Analytics",
    demoVideo: "/videos/data-analytics-demo.mp4",
    fees: ""
  },
  {
    id: "web-development",
    title: "Web Development",
    short: "Dynamic Web Development Training",
    description: "Discover the full potential of your web development abilities through our dynamic training program. Led by industry experts, our comprehensive curriculum includes HTML, CSS, JavaScript, and backend development. Whether you're a beginner or an experienced developer, this is the ideal path to enhance your skills. Get hands-on experience and unleash your potential now!",
    duration: "3 Months",
    level: "Beginner",
    category: "Web Development",
    syllabus: [
      "HTML & CSS Fundamentals",
      "JavaScript Basics",
      "Backend Development Basics",
    ],
    modules: [
      { title: "Frontend Basics", topics: ["HTML", "CSS", "JavaScript"] },
      { title: "Backend Introduction", topics: ["Node.js", "Express"] },
    ],
    projects: ["Static Website", "Simple Backend API"],
    outcomes: [
      "Build functional websites",
      "Enhance development skills",
      "Gain hands-on experience",
    ],
    prerequisites: ["Basic computer skills"],
    schedule: "Weekend batches",
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: Web Development",
    demoVideo: "/videos/web-development-demo.mp4",
    fees: ""
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    short: "Comprehensive Full Stack Training",
    description: "Elevate your skills with our full stack development training. Led by industry experts, you'll learn HTML, CSS, JavaScript, server-side programming, databases, clouds and more. Build dynamic web apps hands-on, whether you're a beginner or seasoned pro. Advance your tech career - join us today!",
    duration: "5 Months",
    level: "Beginner",
    category: "Fullstack",
    syllabus: [
      "HTML, CSS, JavaScript",
      "Server-side Programming",
      "Databases",
      "Cloud Technologies",
    ],
    modules: [
      { title: "Frontend Development", topics: ["HTML", "CSS", "JavaScript"] },
      { title: "Backend Development", topics: ["Node.js", "Python", "Databases"] },
      { title: "Cloud Basics", topics: ["AWS", "Azure"] },
    ],
    projects: ["Dynamic Web App", "Cloud-Deployed Application"],
    outcomes: [
      "Develop full stack web applications",
      "Master cloud and database technologies",
      "Advance your tech career",
    ],
    prerequisites: ["Basic programming knowledge"],
    schedule: "Weekday / Weekend batches",
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: Full Stack Development",
    demoVideo: "/videos/full-stack-demo.mp4",
    fees: ""
  },
  {
    id: "microsoft-azure",
    title: "Microsoft Azure",
    short: "Mastery in Microsoft Azure",
    description: "Gain mastery of Microsoft Azure through our dynamic training program. Our experienced instructors will guide you through key services such as cloud computing, virtual machines, and storage, allowing you to apply your knowledge through hands-on projects. Take your career in cloud solutions to the next level - enroll with us now!",
    duration: "3 Months",
    level: "Intermediate",
    category: "Cloud Computing",
    syllabus: [
      "Cloud Computing Basics",
      "Virtual Machines",
      "Storage Solutions",
    ],
    modules: [
      { title: "Cloud Fundamentals", topics: ["Basics", "Services"] },
      { title: "Virtual Machines", topics: ["Setup", "Management"] },
      { title: "Storage", topics: ["Blob", "File Storage"] },
    ],
    projects: ["Azure Virtual Machine Setup", "Cloud Storage Solution"],
    outcomes: [
      "Master Azure cloud services",
      "Apply skills in hands-on projects",
      "Elevate your cloud career",
    ],
    prerequisites: ["Basic IT knowledge", "Interest in cloud"],
    schedule: "Evening batches",
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: Microsoft Azure",
    demoVideo: "/videos/azure-demo.mp4",
    fees: ""
  },
  {
    id: "salesforce",
    title: "Salesforce",
    short: "Comprehensive Salesforce Training",
    description: "Embrace the full potential of Salesforce with our all-inclusive training program. From administration and customization to automation, our program covers it all. Put your skills into action and elevate your career with hands-on experience. Don't wait, unleash the power of Salesforce by joining us today!",
    duration: "3 Months",
    level: "Intermediate",
    category: "CRM",
    syllabus: [
      "Salesforce Administration",
      "Customization",
      "Automation",
    ],
    modules: [
      { title: "Administration", topics: ["Setup", "Users"] },
      { title: "Customization", topics: ["Fields", "Page Layouts"] },
      { title: "Automation", topics: ["Workflows", "Process Builder"] },
    ],
    projects: ["Salesforce CRM Customization", "Automation Workflow"],
    outcomes: [
      "Master Salesforce administration",
      "Implement customizations and automation",
      "Elevate your career with hands-on skills",
    ],
    prerequisites: ["Basic CRM knowledge"],
    schedule: "Weekend batches",
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: Salesforce",
    demoVideo: "/videos/salesforce-demo.mp4",
    fees: ""
  },
  {
    id: "itil",
    title: "ITIL",
    short: "Mastery in ITIL Training",
    description: "Unlock your mastery of ITIL through our immersive training program. Immerse yourself in key concepts and best practices of IT service management. Develop practical skills for streamlined service delivery that aligns with business goals. Enroll now and elevate your understanding and application of ITIL!",
    duration: "2.5 Months",
    level: "Intermediate",
    category: "IT Service Management",
    syllabus: [
      "ITIL Foundations",
      "Service Strategy",
      "Service Design",
      "Service Transition",
      "Service Operation",
      "Continual Service Improvement",
    ],
    modules: [
      { title: "Foundations", topics: ["Basics", "Key Concepts"] },
      { title: "Service Lifecycle", topics: ["Strategy", "Design", "Transition", "Operation", "Improvement"] },
    ],
    projects: ["IT Service Management Plan", "Service Improvement Proposal"],
    outcomes: [
      "Understand ITIL best practices",
      "Streamline service delivery",
      "Align IT services with business goals",
    ],
    prerequisites: ["Basic IT service knowledge"],
    schedule: "Evening batches",
    image: "/placeholder.svg", // Ensure this file exists in the public folder
    certificate: "Certificate of Completion: ITIL",
    demoVideo: "/videos/itil-demo.mp4",
    fees: ""
  },
];

export function getCourseById(id: string) {
  return courses.find((c) => c.id === id) || null;
}