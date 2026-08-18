import { ProjectCardProps, ExperienceCardProps, SkillGroupProps } from "@/types";
import profileImage from "@/assets/profile.jpg"

export const details = {
  name: "Manojkumar S",
  role: "Full Stack Developer",
  availability: "Available for new opportunities",
  description: `I build scalable, high-performance web applications — React
            and TypeScript on the front, Node.js, Spring Boot and
            PostgreSQL behind them.`,
  location: "Tiruppur, Tamil Nadu 641670, India",
  viewProjects: "View projects",
  getInTouch: "Get in touch",
  image: profileImage,
  letsBuildSomething: "Let's build something great together.",
  greatTogether: "great together.",
  openToOpportunities: "I'm open to frontend and full-stack opportunities. If you have an interesting project or role, I'd love to hear from you.",
  sayhello: "Say hello",
  mail: "manojkumars435980@gmail.com"
}

export const backeToTop = "Back to top";
export const rights = `© ${new Date().getFullYear()} Manojkumar S. All rights reserved.`;
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
  period: "Mar 2025 — Apr 2026",
  description: "Migrating legacy Angular applications to React 18 and TypeScript, building reusable components, data-heavy dashboards and scalable frontend architecture.",
  technologies: [
    "React",
    "TypeScript",
    "React Query",
    "Redux Toolkit",
    "tylertech/forge",
    "Boostrap",
    "css"
  ],
},
{
  company: "Vyoog Information Private Limited",
  role: "Software Developer",
  period: "Nav 2021 — Mar 2025",
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