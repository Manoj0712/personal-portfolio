import { ProjectCardProps, ExperienceCardProps, SkillGroupProps } from "@/types";

export const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

export const stats = [
  {
    value: "4+",
    label: "Years building for the web",
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
  period: "2023 — Present",
  description: "Migrating legacy Angular applications to React 18 and TypeScript, building reusable components, data-heavy dashboards and scalable frontend architecture.",
  technologies: [
    "React",
    "TypeScript",
    "React Query",
    "Redux Toolkit",
    "Tailwind CSS",
  ],
},
{
  company: "Vyoog Information Private Limited",
  role: "Software Developer",
  period: "2021 — 2023",
  description: "Worked on ERP-based enterprise applications and optimized backend workflows, PostgreSQL reporting queries and legacy Groovy/Grails applications.",
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
  title: "Executive Insights",
  description: "Interactive business dashboards for visualizing country-wide transactions, budgets and executive-level insights.",
  technologies: [
    "React",
    "Plotly.js",
    "React Query",
    "PostgreSQL",
  ]
}, {
  number: "03",
  title: "E-commerce Platform",
  description: "Full-stack commerce application with product listing, server-side rendering, APIs and PostgreSQL data management.",
  technologies: [
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
  ]
}, {
  number: "04",
  title: "Angular → React Migration",
  description: "Modernized a legacy Angular application into React 18 with TypeScript and reusable component architecture.",
  technologies: [
    "React 18",
    "TypeScript",
    "React Query",
    "Redux",
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