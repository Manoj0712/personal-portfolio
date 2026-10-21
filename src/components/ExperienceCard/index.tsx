import { motion } from "framer-motion";
import { ExperienceCardProps } from "@/types/index.ts";
import { BsBuilding } from "react-icons/bs";
import { FiCalendar, FiCode, FiExternalLink, FiMapPin, FiTrendingUp } from "react-icons/fi";

const ExperienceCard = ({
  experienceDetails,
  index = 0,
}: { experienceDetails: ExperienceCardProps; index?: number }) => {
  const {
    company, role, period, location, sector, type, current, logo, color,
    description, responsibilities, technologies, website
  } = experienceDetails

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br shadow-lg ${color}`}>
          {logo.startsWith("/") || logo.startsWith("http")
            ? <img src={logo} alt={`${company} logo`} className="h-12 w-12 rounded-lg object-contain" />
            : <span className="text-xl font-bold text-white">{logo}</span>}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-white md:text-2xl">{company}</h2>
            <div className="flex items-center gap-2">
              {current && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  Current
                </span>
              )}
              <span className={`inline-flex items-center rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white ${color}`}>
                {type}
              </span>
            </div>
          </div>
          <p className="mb-2 text-lg font-medium text-purple-400">{role}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><FiCalendar size={16} />{period}</span>
            <span className="flex items-center gap-1.5"><FiMapPin size={16} />{location}</span>
            <span className="flex items-center gap-1.5"><BsBuilding size={16} />{sector}</span>
          </div>
        </div>
      </div>

      <p className="mb-6 leading-relaxed text-white/70">{description}</p>

      <div className="mb-6">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/40">
          <FiTrendingUp size={16} />Key Responsibilities
        </h3>
        <ul className="space-y-2">
          {responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              <span className="text-sm text-white/70">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={website ? "mb-6" : ""}>
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/40">
          <FiCode size={16} />Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-sm text-purple-300 transition-colors hover:border-purple-500/40 hover:bg-purple-500/20"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {website && (
        <div className="border-t border-white/5 pt-4">
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
          >
            Visit Company Website <FiExternalLink />
          </a>
        </div>
      )}
    </article>
    </motion.div>
  );
}

export default ExperienceCard;
