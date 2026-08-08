import { useState } from "react";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { navItems, stats } from "@/constrains";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";
import profileImage from "@/assets/profile.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileMenu(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-[#171412] text-white" : "bg-[#faf9f7] text-[#171513]"
        }`}
    >
      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 ${darkMode ? "opacity-[0.035]" : "opacity-[0.045]"
            }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, #777 1px, transparent 1px),
              linear-gradient(to bottom, #777 1px, transparent 1px)
            `,
            backgroundSize: "68px 68px",
          }}
        />

        <div
          className={`absolute left-1/2 top-[-300px] h-[700px] w-[800px] -translate-x-1/2 rounded-full blur-[120px] ${darkMode ? "bg-orange-700/10" : "bg-orange-300/25"
            }`}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#faf9f7]/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#171412]/80">
        <div className="mx-auto flex h-[76px] max-w-[1160px] items-center justify-between px-5 sm:px-8 lg:px-0">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[20px] font-bold tracking-[-0.04em]"
          >
            manoj<span className="text-[#ed5b22]">.dev</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[14px] font-medium text-[#706b66] transition hover:text-[#ed5b22] dark:text-[#aaa39d] dark:hover:text-[#ed6a35]"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-black/[0.09] transition hover:bg-black/[0.04] dark:border-white/[0.1] dark:hover:bg-white/[0.05]"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <FiSun size={18} strokeWidth={1.8} />
              ) : (
                <FiMoon size={18} strokeWidth={1.8} />
              )}
            </button>

            <button
              onClick={() => scrollToSection("Contact")}
              className="ml-1 rounded-[13px] bg-gradient-to-r from-[#f65c20] to-[#bd484a] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_8px_25px_rgba(215,75,45,0.18)] transition hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(215,75,45,0.25)]"
            >
              Hire me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.09] md:hidden dark:border-white/[0.1]"
            aria-label="Open menu"
          >
            {mobileMenu ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenu && (
          <div className="border-t border-black/[0.06] bg-[#faf9f7] px-5 py-5 dark:border-white/[0.06] dark:bg-[#171412] md:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="rounded-xl px-4 py-3 text-left text-[15px] font-medium text-[#615c57] hover:bg-black/[0.04] hover:text-[#ed5b22] dark:text-[#b4aea8] dark:hover:bg-white/[0.04]"
                >
                  {item}
                </button>
              ))}

              <div className="mt-3 flex gap-2 border-t border-black/[0.06] pt-4 dark:border-white/[0.06]">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/[0.09] py-3 text-sm dark:border-white/[0.1]"
                >
                  {darkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
                  {darkMode ? "Light mode" : "Dark mode"}
                </button>

                <button
                  onClick={() => scrollToSection("Contact")}
                  className="flex-1 rounded-xl bg-[#d95338] py-3 text-sm font-semibold text-white"
                >
                  Hire me
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="about"
          className="relative mx-auto max-w-[1160px] px-5 pb-16 pt-20 sm:px-8 sm:pt-28 lg:px-0 lg:pb-20 lg:pt-[115px]"
        >
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_430px] lg:gap-20">
            {/* Left */}
            <div>
              {/* Availability */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/[0.09] bg-white/50 px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-[#706a64] dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-[#aaa39d]">
                <span className="h-2 w-2 rounded-full bg-[#e85c22]" />
                Available for new opportunities
              </div>

              {/* Heading */}
              <h1 className="max-w-[760px] text-[48px] font-bold leading-[0.98] tracking-[-0.055em] sm:text-[64px] lg:text-[68px]">
                Manojkumar S
                <span className="mt-2 block bg-gradient-to-r from-[#f05b20] via-[#df5235] to-[#c9484c] bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-[610px] text-[17px] leading-[1.8] text-[#69635d] sm:text-[18px] dark:text-[#aaa39d]">
                I build scalable, high-performance web applications — React
                and TypeScript on the front, Node.js, Spring Boot and
                PostgreSQL behind them.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollToSection("Projects")}
                  className="group flex items-center gap-3 rounded-[14px] bg-gradient-to-r from-[#f45d1f] to-[#bd494c] px-5 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_28px_rgba(215,75,45,0.17)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(215,75,45,0.25)]"
                >
                  View projects
                  <FiArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                <button
                  onClick={() => scrollToSection("Contact")}
                  className="flex items-center gap-3 rounded-[14px] border border-black/[0.1] bg-white/50 px-5 py-3.5 text-[14px] font-semibold transition hover:bg-white dark:border-white/[0.1] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                >
                  <FiMail size={17} strokeWidth={1.8} />
                  Get in touch
                </button>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 flex h-11 w-11 items-center justify-center rounded-xl text-[#756f69] transition hover:bg-black/[0.04] hover:text-black dark:text-[#aaa39d] dark:hover:bg-white/[0.05] dark:hover:text-white"
                >
                  <FaGithub size={19} strokeWidth={1.7} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-[#756f69] transition hover:bg-black/[0.04] hover:text-black dark:text-[#aaa39d] dark:hover:bg-white/[0.05] dark:hover:text-white"
                >
                  <FaLinkedinIn size={19} strokeWidth={1.7} />
                </a>
              </div>

              {/* Location */}
              <div className="mt-7 flex items-center gap-2 text-[14px] text-[#77716b] dark:text-[#aaa39d]">
                <FiMapPin size={18} strokeWidth={1.7} />
                Tiruppur, Tamil Nadu 641670, India
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
              <div className="absolute -inset-7 rounded-[40px] bg-gradient-to-br from-orange-300/25 via-red-200/20 to-transparent blur-3xl dark:from-orange-700/10" />
              <div className="relative overflow-hidden rounded-[22px] border border-black/[0.08] bg-[#eeeae5] shadow-[0_25px_60px_rgba(88,54,40,0.14)] dark:border-white/[0.08] dark:bg-[#292421]">
                <img src={profileImage}
                  alt="Manojkumar S"
                  className="aspect-[1/1] w-full object-cover object-top" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-[17px] border border-black/[0.09] bg-white/65 px-5 py-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(50,35,25,0.06)] dark:border-white/[0.08] dark:bg-white/[0.025]"
              >
                <div className="text-[31px] font-bold leading-none tracking-[-0.04em] text-[#e65420]">
                  {stat.value}
                </div>

                <p className="mt-3 text-[13px] leading-[1.6] text-[#706963] dark:text-[#aaa39d]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto max-w-[1160px] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-0"
        >
          <SectionHeading
            eyebrow="Experience"
            title="Building products that scale."
            description="4+ years of experience building enterprise applications, dashboards and modern web products."
          />

          <div className="mt-12 space-y-4">
            <ExperienceCard
              company="Elumitas India"
              role="Frontend Developer"
              period="2023 — Present"
              description="Migrating legacy Angular applications to React 18 and TypeScript, building reusable components, data-heavy dashboards and scalable frontend architecture."
              technologies={[
                "React",
                "TypeScript",
                "React Query",
                "Redux Toolkit",
                "Tailwind CSS",
              ]}
            />

            <ExperienceCard
              company="Vyoog Information Private Limited"
              role="Software Developer"
              period="2021 — 2023"
              description="Worked on ERP-based enterprise applications and optimized backend workflows, PostgreSQL reporting queries and legacy Groovy/Grails applications."
              technologies={[
                "Java",
                "Groovy",
                "Grails",
                "PostgreSQL",
                "Spring Boot",
              ]}
            />
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24 border-y border-black/[0.06] bg-white/35 dark:border-white/[0.06] dark:bg-white/[0.015]"
        >
          <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 lg:px-0">
            <SectionHeading
              eyebrow="Projects"
              title="Things I've built."
              description="Selected projects focused on performance, usability and scalable architecture."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <ProjectCard
                number="01"
                title="Personal Finance Management"
                description="A complete finance platform for tracking transactions, budgets, savings goals, EMIs and financial insights."
                technologies={[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "PostgreSQL",
                  "Tailwind",
                ]}
              />

              <ProjectCard
                number="02"
                title="Executive Insights"
                description="Interactive business dashboards for visualizing country-wide transactions, budgets and executive-level insights."
                technologies={[
                  "React",
                  "Plotly.js",
                  "React Query",
                  "PostgreSQL",
                ]}
              />

              <ProjectCard
                number="03"
                title="E-commerce Platform"
                description="Full-stack commerce application with product listing, server-side rendering, APIs and PostgreSQL data management."
                technologies={[
                  "Next.js",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                ]}
              />

              <ProjectCard
                number="04"
                title="Angular → React Migration"
                description="Modernized a legacy Angular application into React 18 with TypeScript and reusable component architecture."
                technologies={[
                  "React 18",
                  "TypeScript",
                  "React Query",
                  "Redux",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-[1160px] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-0"
        >
          <SectionHeading
            eyebrow="Skills"
            title="My technical toolkit."
            description="A practical stack focused on building reliable, maintainable production applications."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SkillGroup
              title="Frontend"
              skills={[
                "React.js",
                "TypeScript",
                "JavaScript",
                "Next.js",
                "Tailwind CSS",
                "React Query",
              ]}
            />

            <SkillGroup
              title="Backend"
              skills={[
                "Node.js",
                "Express.js",
                "Spring Boot",
                "Java",
                "Groovy",
                "REST APIs",
              ]}
            />

            <SkillGroup
              title="Database"
              skills={[
                "PostgreSQL",
                "MySQL",
                "Redis",
                "Supabase",
                "Chroma DB",
              ]}
            />

            <SkillGroup
              title="Tools & AI"
              skills={[
                "Git",
                "GitHub",
                "Docker",
                "RAG",
                "LangChain",
                "MCP",
              ]}
            />
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-black/[0.06] dark:border-white/[0.06]"
        >
          <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 lg:px-0">
            <div className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-gradient-to-br from-[#fff3ed] to-[#f9e8e0] px-6 py-14 text-center dark:border-white/[0.08] dark:from-[#251b17] dark:to-[#211917] sm:px-12">
              <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

              <div className="relative">
                <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#e85b24]">
                  Get in touch
                </span>

                <h2 className="mt-4 text-[38px] font-bold tracking-[-0.045em] sm:text-[52px]">
                  Let's build something
                  <span className="block text-[#df5730]">great together.</span>
                </h2>

                <p className="mx-auto mt-5 max-w-[580px] text-[16px] leading-7 text-[#716962] dark:text-[#aaa39d]">
                  I'm open to frontend and full-stack opportunities. If you
                  have an interesting project or role, I'd love to hear from
                  you.
                </p>

                <a
                  href="mailto:your.email@example.com"
                  className="mt-8 inline-flex items-center gap-3 rounded-[14px] bg-[#d95338] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/10 transition hover:-translate-y-0.5 hover:bg-[#c94b32]"
                >
                  <FiMail size={18} />
                  Say hello
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto flex max-w-[1160px] flex-col items-center justify-between gap-4 px-5 py-7 text-[13px] text-[#77716b] sm:px-8 md:flex-row lg:px-0 dark:text-[#99928c]">
          <p>© {new Date().getFullYear()} Manojkumar S. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 transition hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 transition hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
            >
              <FaLinkedinIn size={17} />
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-2 flex items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
            >
              Back to top
              <FiChevronDown className="rotate-180" size={15} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default App;