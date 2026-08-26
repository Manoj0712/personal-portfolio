import { ProjectCardProps, ExperienceCardProps, SkillGroupProps } from "@/types";
// import profileImage from "@/assets/profile.jpg"
import ManojImage from "@/assets/ManojImage.png"

export const details = {
  name: "Manojkumar",
  role: "Full Stack Developer",
  availability: "",//"Available for new opportunities",
  description: `With 4+ years of experience, I build scalable, high-performance web
  applications that turn complex business requirements into intuitive digital
  experiences. I specialize in React, TypeScript, and JavaScript, creating 
  modern, responsive interfaces and interactive data visualizations with 
  Plotly.js. On the backend, I work with Node.js, Express.js, Java, and Spring 
  Boot, developing reliable APIs and data-driven applications using PostgreSQL,
  MySQL, and MongoDB. I’m passionate about writing clean, maintainable code 
  and building products that deliver great performance and user experiences.`,
  location: "Tiruppur, Tamil Nadu-641670, India",
  viewProjects: "View projects",
  getInTouch: "Get in touch",
  image: ManojImage,
  letsBuildSomething: "Let's build something great together.",
  greatTogether: "great together.",
  openToOpportunities: `I'm open to frontend and full-stack opportunities.
   If you have an interesting project or role, I'd love to hear from you.`,
  sayhello: "Say hello",
  mail: "manojkumars435980@gmail.com"
}

export const backeToTop = "Back to top";
export const rights = `© ${new Date().getFullYear()} Manojkumar S. All rights reserved.`;
export const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

export const stats = [
  {
    value: "4+",
    label: "Years building for the web applications",
  },
  {
    value: "~35%",
    label: "Faster load after Angular → React migration",
  },
  {
    value: "~30%",
    label: "Performance gain with React Query caching",
  },
  {
    value: "~25%",
    label: "Query time cut in PostgreSQL reporting",
  },
];

export const experienceCard: ExperienceCardProps[] = [{
  company: "Elumitas India",
  role: "Frontend Developer",
  period: "Mar 2025 — Apr 2026",
  location: "Coimbatore",
  description: `Migrated a legacy Angular application to React 18 and TypeScript, introducing a modern frontend architecture with reusable components and scalable state-management patterns.
Improved initial application load time by approximately 35% and reduced unnecessary re-renders through component architecture and frontend performance optimization.
Built interactive analytics dashboards using Plotly.js, including bar charts, pie charts, line charts, and data tables for analyzing large transaction datasets.
Implemented financial-year-wise filters and dynamic data filtering to help users analyze business and transaction data across different reporting periods.
Developed drill-down workflows and detail pages, allowing users to move from high-level dashboard metrics to detailed transaction-level information.
Improved application performance by approximately 30% using React Query for API caching and background synchronization.
Used Redux Toolkit for centralized state management and predictable data flow across complex dashboard workflows.
Integrated Node.js and Express.js REST APIs for data retrieval, API communication, and frontend feature development.
Created reusable visualization and dashboard components to improve maintainability, scalability, and development efficiency.
Used AI-assisted development tools including GitHub Copilot, ChatGPT, Codex, and Claude to improve coding efficiency, debugging, and development productivity.`,
  technologies: [
    "React",
    "TypeScript",
    "Plotly.js",
    "React Query",
    "Redux Toolkit",
    "tylertech/forge / UI Components",
    "Boostrap",
    "CSS"
  ],
},
{
  company: "Vyoog Information Private Limited",
  role: "Software Developer",
  period: "Nav 2021 — Mar 2025",
  location: "Coimbatore",
  description: `Developed and maintained enterprise
   ERP applications using Groovy, Grails, PostgreSQL,
  and Java-based technologies.Designed and optimized 
    backend workflows, reporting queries, and database operations,
  reducing PostgreSQL query execution time by ~25 %.Contributed to
     the modernization of legacy applications by migrating backend 
     functionality toward Spring Boot and improving application performance
      and maintainability.`,
  technologies: [
    "Java",
    "Groovy",
    "Grails",
    "PostgreSQL",
    "Spring Boot",
  ],
}];

export const projectCard: ProjectCardProps[] = [{
  number: "01",
  title: "Personal Finance Management",
  description: "A complete finance platform for tracking transactions, budgets, savings goals, EMIs and financial insights.",
  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind",
  ],
}, {
  number: "02",
  title: "E-commerce Platform",
  description: "Full-stack commerce application with product listing, server-side rendering, APIs and PostgreSQL data management.",
  technologies: [
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
  ]
}];

export const skillGroup: SkillGroupProps[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "React Query",
    ]
  }, {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Java",
      "Groovy",
      "REST APIs",
    ]
  }, {
    title: "Database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Supabase",
      "Chroma DB",
    ]
  }, {
    title: "Tools & AI",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "RAG",
      "MCP",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "Postman",
    ]
  }
]

export const professionalLinks = [{
  name: "GitHub",
  url: "https://github.com/Manoj0712"
},
{
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/manojkumar-sakthivel-358214271"
}]