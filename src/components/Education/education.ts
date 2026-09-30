import type { IconType } from "react-icons";
import { SiLeetcode, SiHackerrank, SiCodechef, SiHackerearth, SiKaggle } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
import { FiUsers, FiStar } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";

export interface Platform { name: string; icon: IconType; color: string }
export interface Achievement { text: string; icon: IconType }
export interface EducationItem {
  institution: string; degree: string; period: string; location: string; grade: string;
  status: string; description: string; highlights: string[]; achievements: Achievement[]; website: string;
}
export interface Certification { title: string; issuer: string; year: string; image?: string; gradient: string }

export const platforms: Platform[] = [
  { name: "LeetCode", icon: SiLeetcode, color: "#f5a623" },
  { name: "HackerRank", icon: SiHackerrank, color: "#2ec866" },
  { name: "CodeChef", icon: SiCodechef, color: "#dddddd" },
  { name: "HackerEarth", icon: SiHackerearth, color: "#e8dcb8" },
  { name: "Kaggle", icon: SiKaggle, color: "#38b6ff" },
  { name: "Stats", icon: FaChartBar, color: "#3b82f6" },
];

export const education: EducationItem = {
  institution: "Sri Krishna College Of Engineering and Technology",
  degree: "B.Tech. in Computer Science and Business System",
  period: "2021 - 2025",
  location: "Coimbatore, Tamil Nadu",
  grade: "First Class",
  status: "Completed",
  description:
    "Studied software engineering fundamentals with specialization in Full Stack Development, Machine Learning, and Cloud Computing.",
  highlights: [
    "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    "Apart from this, I have done courses on Machine Learning, Cloud Computing and Full Stack Development.",
    "I have won many Hackathons with my friends such as Kavach, VOIS Finals, SVCE etc.. and also started Fresh Spar Technologies.",
  ],
  achievements: [
    { text: "Multiple Hackathon Winner (Kavach, VOIS Finals, SVCE)", icon: LuTrophy },
    { text: "Founder of Fresh Spar Technologies", icon: FiStar },
    { text: "Active in Tech Communities", icon: FiUsers },
  ],
  website: "https://example.com",
};

// Set `image` to a real URL/import to show a logo instead of the gradient placeholder.
export const certifications: Certification[] = [
  { title: "Cloud Practitioner", issuer: "Dummy Issuer", year: "2024", gradient: "#d9822b,#7a4a2a" },
  { title: "Machine Learning", issuer: "Dummy Issuer", year: "2023", gradient: "#4aa3f0,#1e3a6e" },
  { title: "Full Stack Development", issuer: "Dummy Issuer", year: "2023", gradient: "#e8b84a,#3a9c5f" },
];
