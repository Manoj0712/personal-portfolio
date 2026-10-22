import type { IconType } from "react-icons";
import { FiStar, FiUsers } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";

export interface Platform { name: string; url: string; logo: string; invert?: boolean }
export interface Achievement { text: string; icon: IconType }
export interface EducationItem {
  institution: string; degree: string; period: string; location: string; grade: string;
  status: string; description: string; highlights: string[]; achievements: Achievement[]; website?: string;
}
export interface Certification {
  title: string; issuer: string; year: string; badge: string; gradient: string; logo?: string; url?: string;
}

// Coding / professional profiles shown under the Education heading.
// Add LeetCode, HackerRank, etc. here with your own profile URLs.
export const platforms: Platform[] = [
  { name: "GitHub", url: "https://github.com/Manoj0712", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/manojkumar-sakthivel-358214271", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
];

// TODO: replace with your real degree details.
export const educationList: EducationItem[] = [{
  institution: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science, Coimbatore",
  degree: "B.sc(Information Technology)",
  period: "2018 - 2021",
  location: "Coimbatore, Tamil Nadu, India",
  grade: "First Class / 7.67 CGPA",
  status: "Completed",
  description:
    "Studied computer science fundamentals and built a strong foundation in programming, databases and web development.",
  highlights: [
    "Studied core subjects like Data Structures, Algorithms, DBMS, Operating Systems and Computer Networks.",
    "Built projects in web development using JavaScript,React,Java,Springboot,Node and Postgresql,SQL.",
    "Started my professional career as a Software Developer at Vyoog Information Private Limited.",
  ],
  achievements: [
    { text: "4+ years of industry experience", icon: LuTrophy },
    { text: "Full Stack Developer", icon: FiStar },
    { text: "Active in Tech Communities", icon: FiUsers },
  ],
}];

// TODO: replace with your real certifications. Set `logo` to show an issuer logo instead of the emoji badge.
export const certifications: Certification[] = [
  { title: "Cloud Practitioner", issuer: "Dummy Issuer", year: "2024", badge: "☁️", gradient: "from-orange-400 to-yellow-500" },
  { title: "Machine Learning", issuer: "Dummy Issuer", year: "2023", badge: "🤖", gradient: "from-blue-400 to-cyan-500" },
  { title: "Full Stack Development", issuer: "Dummy Issuer", year: "2023", badge: "💻", gradient: "from-purple-400 to-pink-500" },
];

export const validatedSkills = [
  { badge: "⚛️", label: "React & TypeScript" },
  { badge: "🟢", label: "Node.js & Express" },
  { badge: "☕", label: "Java & Spring Boot" },
  { badge: "🐘", label: "PostgreSQL" },
  { badge: "📊", label: "Data Visualization" },
  { badge: "🤖", label: "RAG & AI Tools" },
];
