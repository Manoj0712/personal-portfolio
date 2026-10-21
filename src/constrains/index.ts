import type {
  CallToActionProps,
  ContactCardProps,
  ExperienceCardProps,
  FaqProps,
  NavItemsProps,
  ProjectCardProps,
  SkillGroupProps,
  SocialLink,
  StatProps,
  TechIconProps,
  WhatIDoProps,
} from "@/types";
import ManojImage from "@/assets/ManojImage.png"
import {
  FiAward,
  FiBriefcase,
  FiClock,
  FiCode,
  FiDatabase,
  FiDollarSign,
  FiGithub,
  FiHome,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiShoppingCart,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";


export const NAME = "Manojkumar S";
export const SHORT_NAME = "Manojkumar";
export const DETAILS = {
  name: "Manojkumar S",
  title: "Software Engineer",
  role: [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mern Stack Developer",
    "React Developer",
    "Java Developer"
  ],
  description: `With 4+ years of experience, I build scalable, high-performance web
  applications that turn complex business requirements into intuitive digital
  experiences. I specialize in React, TypeScript, and JavaScript, creating
  modern, responsive interfaces and interactive data visualizations with
  Plotly.js. On the backend, I work with Node.js, Express.js, Java, and Spring
  Boot, developing reliable APIs and data-driven applications using PostgreSQL,
  MySQL, and MongoDB. I’m passionate about writing clean, maintainable code
  and building products that deliver great performance and user experiences.`,
  footerBio: `Full Stack Developer building scalable web applications with React,
  TypeScript, Node.js and Java. Passionate about clean code and great user experiences.`,
  location: "Tiruppur, Tamil Nadu-641670, India",
  image: ManojImage,
  mail: "manojkumars435980@gmail.com",
  // Drop your resume into public/resume/ and set the path, e.g. "/resume/ManojkumarS-Resume.pdf".
  // The "Download Resume" button stays hidden while this is empty.
  resume: "/resume/Manojkumar-S-Resume.pdf",
}

export const RIGHTS = `© ${new Date().getFullYear()} ${NAME}. Made with`;

export const NAVITEMS: NavItemsProps[] = [
  { label: "Home", icon: FiHome, routerName: "/" },
  { label: "Education", icon: LuGraduationCap, routerName: "/education" },
  { label: "Experience", icon: FiBriefcase, routerName: "/experience" },
  { label: "Projects", icon: FiCode, routerName: "/projects" },
  // { label: "Certifications", icon: FiAward, routerName: "/certifications" },
  { label: "Contact", icon: FiMail, routerName: "/contact" },
];

export const PROFESSIONALLINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Manoj0712", icon: FiGithub, bg: "bg-gray-800 hover:bg-gray-700" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/manojkumar-sakthivel-358214271", icon: FiLinkedin, bg: "bg-blue-600 hover:bg-blue-500" },
  { name: "Email", url: "mailto:manojkumars435980@gmail.com", icon: FiMail, bg: "bg-red-600 hover:bg-red-500" },
];

export const STATS: StatProps[] = [
  { value: "4+", label: "Years Experience", icon: FiClock, gradient: "from-blue-500 to-cyan-500" },
  { value: "~35%", label: "Faster Load Time", icon: FiZap, gradient: "from-yellow-500 to-orange-500" },
  { value: "~30%", label: "Performance Gain", icon: FiTrendingUp, gradient: "from-purple-500 to-pink-500" },
  { value: "~25%", label: "Faster DB Queries", icon: FiDatabase, gradient: "from-green-500 to-teal-500" },
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const TECH_ICONS: Record<string, TechIconProps> = {
  "HTML5": { name: "HTML5", src: `${DEVICON}/html5/html5-original.svg` },
  "CSS3": { name: "CSS3", src: `${DEVICON}/css3/css3-original.svg` },
  "JavaScript": { name: "JavaScript", src: `${DEVICON}/javascript/javascript-original.svg` },
  "TypeScript": { name: "TypeScript", src: `${DEVICON}/typescript/typescript-original.svg` },
  "React.js": { name: "React.js", src: `${DEVICON}/react/react-original.svg` },
  "Next.js": { name: "Next.js", src: `${DEVICON}/nextjs/nextjs-original.svg`, invert: true },
  "Redux Toolkit": { name: "Redux Toolkit", src: `${DEVICON}/redux/redux-original.svg` },
  "React Query": { name: "React Query", src: "https://cdn.simpleicons.org/reactquery/FF4154" },
  "Tailwind CSS": { name: "Tailwind CSS", src: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  "Plotly.js": { name: "Plotly.js", src: "https://cdn.simpleicons.org/plotly/FFFFFF" },
  "Node.js": { name: "Node.js", src: `${DEVICON}/nodejs/nodejs-original.svg` },
  "Express.js": { name: "Express.js", src: `${DEVICON}/express/express-original.svg`, invert: true },
  "Java": { name: "Java", src: `${DEVICON}/java/java-original.svg` },
  "Spring Boot": { name: "Spring Boot", src: `${DEVICON}/spring/spring-original.svg` },
  "Groovy": { name: "Groovy", src: `${DEVICON}/groovy/groovy-original.svg` },
  "Grails": { name: "Grails", src: `${DEVICON}/grails/grails-original.svg` },
  "PostgreSQL": { name: "PostgreSQL", src: `${DEVICON}/postgresql/postgresql-original.svg` },
  "MySQL": { name: "MySQL", src: `${DEVICON}/mysql/mysql-original.svg` },
  "MongoDB": { name: "MongoDB", src: `${DEVICON}/mongodb/mongodb-original.svg` },
  "Redis": { name: "Redis", src: `${DEVICON}/redis/redis-original.svg` },
  "Supabase": { name: "Supabase", src: `${DEVICON}/supabase/supabase-original.svg` },
  "Git": { name: "Git", src: `${DEVICON}/git/git-original.svg` },
  "GitHub": { name: "GitHub", src: `${DEVICON}/github/github-original.svg`, invert: true },
  "Docker": { name: "Docker", src: `${DEVICON}/docker/docker-original.svg` },
  "RAG": { name: "RAG", src: "https://cdn.simpleicons.org/langchain/FFFFFF" },
  "MCP": { name: "MCP", src: "https://cdn.simpleicons.org/modelcontextprotocol/FFFFFF" },
  "Visual Studio Code": { name: "Visual Studio Code", src: `${DEVICON}/vscode/vscode-original.svg` },
  "IntelliJ IDEA": { name: "IntelliJ IDEA", src: `${DEVICON}/intellij/intellij-original.svg` },
  "Postman": { name: "Postman", src: `${DEVICON}/postman/postman-original.svg` },
};

export const WHAT_I_DO: WhatIDoProps[] = [
  {
    title: "Frontend Development",
    image: "/images/FullStackDev.png",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"],
    points: [
      "Building modern, responsive interfaces with React, TypeScript and Tailwind CSS",
      "Creating interactive analytics dashboards and data visualizations with Plotly.js",
      "Managing complex state and API caching with Redux Toolkit and React Query",
    ],
  },
  {
    title: "Backend Development",
    image: "/images/cloud-computing.png",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "Groovy", "PostgreSQL", "MySQL", "MongoDB"],
    points: [
      "Developing reliable REST APIs with Node.js and Express.js",
      "Building enterprise ERP applications using Java, Groovy, Grails and Spring Boot",
      "Designing and optimizing PostgreSQL queries, reporting and database workflows",
    ],
  },
  {
    title: "AI & Developer Tools",
    image: "/genai-logo.png",
    skills: ["RAG", "MCP", "Chroma DB", "Docker", "Git", "GitHub", "Postman", "Visual Studio Code"],
    points: [
      "Building Retrieval-Augmented Generation (RAG) pipelines with vector databases like Chroma DB",
      "Working with MCP and AI-assisted development using Copilot, ChatGPT, Codex and Claude",
      "Shipping applications with Docker, Git and GitHub based workflows",
    ],
  },
];

export const EXPERIENCECARD: ExperienceCardProps[] = [{
  company: "Elumitas India",
  role: "Frontend Developer",
  period: "Mar 2025 - Apr 2026",
  location: "Coimbatore",
  sector: "Software",
  type: "Full-time",
  logo: "EI",
  color: "from-purple-500 to-blue-600",
  description: `Migrated a legacy Angular application to React 18 and TypeScript, and built
  analytics dashboards that help users analyze large transaction datasets across reporting periods.`,
  responsibilities: [
    "Migrated a legacy Angular application to React 18 and TypeScript with reusable components and scalable state-management patterns",
    "Improved initial load time by ~35% and reduced unnecessary re-renders through frontend performance optimization",
    "Built interactive analytics dashboards with Plotly.js: bar, pie and line charts plus data tables for large transaction datasets",
    "Implemented financial-year-wise filters, dynamic data filtering and drill-down workflows to transaction-level detail pages",
    "Improved application performance by ~30% using React Query for API caching and background synchronization",
    "Used Redux Toolkit for centralized state management and integrated Node.js / Express.js REST APIs",
    "Used AI-assisted tools (GitHub Copilot, ChatGPT, Codex, Claude) to speed up coding and debugging",
  ],
  technologies: [
    "React",
    "TypeScript",
    "Plotly.js",
    "React Query",
    "Redux Toolkit",
    "tylertech/forge",
    "Bootstrap",
    "CSS"
  ],
},
{
  company: "Vyoog Information Private Limited",
  role: "Software Developer",
  period: "Nov 2021 - Mar 2025",
  location: "Coimbatore",
  sector: "ERP Software",
  type: "Full-time",
  logo: "VY",
  color: "from-green-500 to-teal-600",
  description: `Developed and maintained enterprise ERP applications using Groovy, Grails,
  PostgreSQL and Java-based technologies.`,
  responsibilities: [
    "Developed and maintained enterprise ERP applications using Groovy, Grails, PostgreSQL and Java",
    "Designed and optimized backend workflows, reporting queries and database operations",
    "Reduced PostgreSQL query execution time by ~25%",
    "Contributed to modernizing legacy applications by migrating backend functionality to Spring Boot",
  ],
  technologies: [
    "Java",
    "Groovy",
    "Grails",
    "PostgreSQL",
    "Spring Boot",
  ],
}];

export const PROJECTCARD: ProjectCardProps[] = [{
  title: "Personal Finance Management",
  description: "A complete finance platform for tracking transactions, budgets, savings goals, EMIs and financial insights.",
  category: "Fintech",
  icon: FiDollarSign,
  color: "from-blue-600 via-indigo-600 to-purple-700",
  featured: true,
  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind",
  ],
  // Add liveUrl / githubUrl / image to show the "View" and "Code" buttons and a cover image.
}, {
  title: "E-commerce Platform",
  description: "Full-stack commerce application with product listing, server-side rendering, APIs and PostgreSQL data management.",
  category: "E-commerce",
  icon: FiShoppingCart,
  color: "from-purple-600 via-pink-600 to-orange-500",
  featured: true,
  technologies: [
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
  ]
}];

export const SKILLGROUP: SkillGroupProps[] = [
  {
    title: "Frontend",
    dot: "bg-blue-500",
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
    dot: "bg-green-500",
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
    dot: "bg-orange-500",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Supabase",
      "Chroma DB",
    ]
  }, {
    title: "Tools & AI",
    dot: "bg-red-500",
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

export const EXPERIENCE_CTA: CallToActionProps = {
  title: "Interested in working together?",
  description: "I'm always open to discussing new opportunities and interesting projects.",
  primary: { label: "View Projects", routerName: "/projects" },
  secondary: { label: "Get In Touch", routerName: "/contact" },
};

export const CERTIFICATIONS_CTA: CallToActionProps = {
  title: "Always Learning, Always Growing",
  description: "Committed to continuous professional development and staying updated with the latest technologies.",
  primary: { label: "Get In Touch", routerName: "/contact" },
  secondary: { label: "View Experience", routerName: "/experience" },
  primaryGradient: "from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500",
};

export const CONTACTCARDS: ContactCardProps[] = [
  {
    icon: FiMail,
    title: "Email",
    sub: "Send me an email",
    value: DETAILS.mail,
    href: `mailto:${DETAILS.mail}`,
  },
  {
    icon: FiMapPin,
    title: "Location",
    sub: "Where I'm based",
    value: DETAILS.location,
    href: "https://maps.google.com/?q=Tiruppur,Tamil+Nadu",
  },
  {
    icon: FiGithub,
    title: "GitHub",
    sub: "Check my code",
    value: "github.com/Manoj0712",
    href: "https://github.com/Manoj0712",
  },
  {
    icon: FiLinkedin,
    title: "LinkedIn",
    sub: "Let's connect",
    value: "linkedin.com/in/manojkumar-sakthivel",
    href: "https://www.linkedin.com/in/manojkumar-sakthivel-358214271",
  },
];

export const FAQS: FaqProps[] = [
  {
    q: "What's your typical response time?",
    a: "I usually respond to messages within 24 hours, often sooner. If it's urgent, feel free to mention that in your message.",
  },
  {
    q: "Are you open to new roles?",
    a: "Yes! I'm open to frontend and full-stack opportunities. If you have an interesting project or role, I'd love to hear from you.",
  },
  {
    q: "What technologies do you work with?",
    a: "Mainly React, TypeScript, Node.js, Java and Spring Boot, with PostgreSQL, MySQL and MongoDB on the data side.",
  },
  {
    q: "Can you help with existing projects?",
    a: "Yes, I can help with code reviews, debugging, performance optimization, and feature development on existing projects.",
  },
];
