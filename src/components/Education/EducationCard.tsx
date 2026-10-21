import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiExternalLink, FiMapPin } from "react-icons/fi";
import { educationList } from "./education";

const label = "mb-3 text-sm font-semibold uppercase tracking-wider text-white/40";

export default function EducationCard() {
  return (
    <section className="relative z-10 py-8">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        {educationList.map((e, index) => (
          <motion.div
            key={e.institution}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] md:p-8">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-3xl shadow-lg">
                🎓
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-bold text-white md:text-2xl">{e.institution}</h2>
                  <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white">
                    {e.status}
                  </span>
                </div>
                <p className="mb-2 text-lg font-medium text-blue-400">{e.degree}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1.5"><FiCalendar size={16} />{e.period}</span>
                  <span className="flex items-center gap-1.5"><FiMapPin size={16} />{e.location}</span>
                  <span className="flex items-center gap-1.5"><FiAward size={16} />{e.grade}</span>
                </div>
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-white/70">{e.description}</p>

            <div className="mb-6">
              <h3 className={label}>Key Highlights</h3>
              <ul className="space-y-2">
                {e.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span className="text-sm text-white/70">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={e.website ? "mb-6" : ""}>
              <h3 className={label}>Achievements</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {e.achievements.map(({ text, icon: Icon }) => (
                  <div key={text} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <Icon size={20} className="shrink-0 text-yellow-400" />
                    <span className="text-sm text-white/70">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {e.website && (
              <div className="border-t border-white/5 pt-4">
                <a href={e.website} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">
                  Visit Institution Website <FiExternalLink />
                </a>
              </div>
            )}
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
