import type { ComponentType } from "react";
import {
  FiBriefcase as Briefcase,
  FiCalendar as Calendar,
  FiMapPin as MapPin,
  FiTrendingUp as TrendingUp,
  FiCode as Code2,
  FiExternalLink as ExternalLink,
} from "react-icons/fi";
import { BsBuilding as Building2 } from "react-icons/bs";
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiPrisma,
  SiDocker,
  SiGithubactions,
  SiLangchain,
  SiTensorflow,
} from "react-icons/si";
import { FiCpu, FiRefreshCw } from "react-icons/fi"; // used in the AI & ML stack row

/* ----------------------------- Types & data ----------------------------- */

type Badge = { label: string; className: string };

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  sector: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  website: string;
  current?: boolean;
  badge: Badge;
  logo: { text: string; className: string; src?: string };
}

const experiences: ExperienceItem[] = [
  {
    company: "Orion Innovation",
    role: "Associate Engineer - AI Delivery",
    period: "Sept 2025 - Present",
    location: "Remote",
    sector: "AI & Technology",
    description:
      "Working on Gen AI, Machine Learning, and Data Related projects. Developed Insurance Automation solutions and currently working on NLB Japanese Loan Automation (TOYO).",
    responsibilities: [
      "Developing Gen AI and Machine Learning solutions",
      "Built Insurance Automation (Underwriter) using RAG, Langchain, and Azure",
      "Implemented Subro Automation system",
      "Currently working on NLB (Japanese Loan Automation - TOYO)",
      "Working with cutting-edge AI technologies and frameworks",
    ],
    technologies: [
      "Gen AI",
      "Machine Learning",
      "RAG",
      "Langchain",
      "Azure",
      "Python",
      "Data Engineering",
      "NLP",
    ],
    website: "https://www.orioninc.com",
    current: true,
    badge: {
      label: "Full-time",
      className: "bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white",
    },
    logo: {
      text: "O/",
      className: "bg-gradient-to-br from-purple-500 to-indigo-700 text-white",
    },
  },
  {
    company: "Fresh Spar Technologies",
    role: "Freelancing",
    period: "May 2021 - Present",
    location: "Coimbatore, Tamil Nadu",
    sector: "Freelancing",
    description:
      "I started my freelancing by the name of Fresh Spar Technologies in 2021. Developed about more than 10 projects which improves their profits by more than 10%.",
    responsibilities: [
      "Founded and leading Fresh Spar Technologies",
      "Developed 10+ projects for various clients",
      "Improved client profits by more than 10%",
      "Full Stack Development and Digital Marketing services",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Firebase",
      "Digital Marketing",
    ],
    website: "#",
    current: true,
    badge: {
      label: "Part-time",
      className: "bg-gradient-to-r from-green-500 to-emerald-400 text-white",
    },
    logo: {
      text: "FS",
      className: "bg-gradient-to-br from-emerald-600 to-indigo-900 text-yellow-300",
    },
  },
  {
    company: "Scoutabroad Pvt Ltd",
    role: "Junior Software Engineer - Intern",
    period: "Nov 2024 - Jan 2025",
    location: "Remote",
    sector: "Software",
    description:
      "Automated marketing workflows, boosting productivity and efficiency by 30%, resulting in improved client engagement and campaign performance. Streamlined deployments with Azure DevOps pipelines, cutting deployment time by 40%.",
    responsibilities: [
      "Automated marketing workflows",
      "Implemented Azure DevOps CI/CD pipelines",
      "Improved client engagement and campaign performance",
      "Streamlined deployment processes",
    ],
    technologies: ["Azure DevOps", "Marketing Automation", "CI/CD", "Node.js"],
    website: "#",
    badge: {
      label: "Internship",
      className: "bg-gradient-to-r from-blue-500 to-violet-500 text-white",
    },
    logo: {
      text: "S",
      className: "bg-gradient-to-br from-indigo-500 to-violet-600 text-white",
    },
  },
  {
    company: "Senchola University",
    role: "Flutter Mobile App Developer",
    period: "Aug 2023 - Dec 2023",
    location: "Coimbatore",
    sector: "Education",
    description:
      "Involved in the development of the Social Media Application for the Senchola Internship Students. I have developed about 3 mobile apps during the period of the internship. It helps a lot to gain knowledge about the mobile app development.",
    responsibilities: [
      "Developed Social Media Application for students",
      "Built 3 mobile applications using Flutter",
      "Collaborated with team on app features",
      "Gained expertise in mobile app development",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
    website: "#",
    badge: { label: "Internship", className: "text-white" },
    logo: { text: "SU", className: "bg-white/5 text-white" },
  },
  {
    company: "KarmaDev Pvt. Ltd.",
    role: "Front End Developer and Digital Marketer",
    period: "May 2019 - Sept 2019",
    location: "Erode, Tamil Nadu",
    sector: "Startup",
    description:
      "My First Work in a Startup company called Karma Developers, I am Proud to be a part in the Company. Founder Name Called Sanjay. Really a Hard Working Person. I have done some front end development projects and digital marketing strategies in that startup company.",
    responsibilities: [
      "Front-end web development projects",
      "Digital marketing strategies implementation",
      "Collaborated with startup team",
      "Learned startup culture and work ethics",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Digital Marketing Tools"],
    website: "#",
    badge: {
      label: "Internship",
      className: "bg-gradient-to-r from-orange-600 to-amber-500 text-white",
    },
    logo: {
      text: "☯",
      className: "bg-gradient-to-br from-orange-700 to-amber-600 text-black",
    },
  },
];

type IconType = ComponentType<{ className?: string }>;

interface StackGroup {
  label: string;
  dot: string;
  items: { name: string; icon: IconType; color: string }[];
}

const stack: StackGroup[] = [
  {
    label: "Frontend",
    dot: "bg-blue-500",
    items: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    label: "Backend",
    dot: "bg-green-500",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    ],
  },
  {
    label: "Database",
    dot: "bg-orange-500",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "Prisma", icon: SiPrisma, color: "text-slate-400" },
    ],
  },
  {
    label: "DevOps & Cloud",
    dot: "bg-red-500",
    items: [
      { name: "Docker", icon: SiDocker, color: "text-sky-500" },
      { name: "CI/CD", icon: SiGithubactions, color: "text-gray-300" },
    ],
  },
  {
    label: "AI & ML",
    dot: "bg-green-500",
    items: [
      { name: "Gen AI", icon: SiTensorflow, color: "text-orange-500" },
      { name: "LangChain", icon: SiLangchain, color: "text-green-400" },
      { name: "RAG", icon: FiRefreshCw, color: "text-orange-500" },
      { name: "NLP", icon: FiCpu, color: "text-orange-400" },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
    ],
  },
];

/* ------------------------------ Components ------------------------------ */

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl backdrop-blur">
      {/* Top row */}
      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl text-xl font-extrabold ${item.logo.className}`}
        >
          {item.logo.src ? (
            <img src={item.logo.src} alt={item.company} className="h-full w-full object-cover" />
          ) : (
            item.logo.text
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-tight text-white">{item.company}</h2>
          <p className="mt-2 text-lg font-semibold text-purple-400">{item.role}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {item.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {item.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4" /> {item.sector}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {item.current && (
            <span className="flex items-center gap-1.5 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" /> Current
            </span>
          )}
          <span className={`rounded-full px-3 py-1 text-sm font-semibold ${item.badge.className}`}>
            {item.badge.label}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 text-base leading-snug text-gray-300">{item.description}</p>

      {/* Responsibilities */}
      <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
        <TrendingUp className="h-4 w-4 text-blue-400" /> Key Responsibilities
      </h3>
      <ul className="mt-3 space-y-2">
        {item.responsibilities.map((r) => (
          <li key={r} className="flex items-center gap-3 text-[15px] text-gray-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
            {r}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
        <Code2 className="h-4 w-4 text-purple-400" /> Technologies
      </h3>
      <div className="mt-3 flex flex-wrap gap-2.5">
        {item.technologies.map((t) => (
          <span
            key={t}
            className="rounded-lg border border-purple-400/25 bg-purple-500/10 px-3.5 py-1.5 text-sm text-purple-100"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      <div className="mt-6 border-t border-white/10 pt-5">
        <a
          href={item.website}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-base font-medium text-purple-400 transition hover:text-purple-300"
        >
          Visit Company Website <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function TechStack() {
  return (
    <div className="mt-24 space-y-4">
      {stack.map((group) => (
        <div
          key={group.label}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-6"
        >
          <div className="flex w-44 items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${group.dot}`} />
            <span className="text-lg font-semibold text-white">{group.label}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {group.items.map(({ name, icon: Icon, color }) => (
              <span
                key={name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-base font-medium text-gray-200"
              >
                <Icon className={`h-5 w-5 ${color}`} />
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CallToAction() {
  return (
    <div className="mt-28 rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-16 text-center">
      <h2 className="text-4xl font-bold text-white">Interested in working together?</h2>
      <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
        I'm always open to discussing new opportunities and interesting projects.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3.5 text-base font-semibold text-white transition hover:opacity-90"
        >
          View Projects <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href="/contact"
          className="rounded-xl border border-white/15 bg-black px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}

/* --------------------------------- Page --------------------------------- */

export default function Experience() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05050b] text-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-900/30 blur-[140px]" />
        <div className="absolute -right-40 bottom-40 h-[500px] w-[500px] rounded-full bg-rose-950/40 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pb-28 pt-40">
        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <div className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-6xl">Experience</h1>
          <p className="mt-6 text-xl text-gray-400">
            My professional journey building innovative solutions across industries
          </p>
        </section>

        {/* Timeline cards */}
        <section className="mt-28 space-y-6">
          {experiences.map((item) => (
            <ExperienceCard key={item.company} item={item} />
          ))}
        </section>

        <TechStack />
        <CallToAction />
      </div>
    </main>
  );
}
