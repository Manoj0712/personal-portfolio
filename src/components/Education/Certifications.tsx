import { motion } from "framer-motion";
import { certifications } from "./education";

export default function Certifications({ showHeading = true }: { showHeading?: boolean }) {
  // On the Certifications page the card titles are the top-level headings
  const HeadingTag = showHeading ? "h3" : "h2";

  return (
    <section className={`relative z-10 ${showHeading ? "py-16" : "py-8"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Certifications</h2>
            <p className="mx-auto max-w-xl text-white/60">
              Professional certifications and continuous learning achievements
            </p>
          </motion.div>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, index) => (
            <motion.a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: showHeading ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={showHeading ? { duration: 0.4, delay: index * 0.05 } : { duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.05]">
                {c.logo ? (
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-white p-3 shadow-lg">
                    <img src={c.logo} alt={`${c.issuer} logo`} className="h-full w-full object-contain" />
                  </div>
                ) : (
                  <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br text-3xl shadow-lg ${c.gradient}`}>
                    {c.badge}
                  </div>
                )}
                <HeadingTag className="mb-3 line-clamp-2 text-lg font-bold text-white">{c.title}</HeadingTag>
                <p className="mt-auto text-sm font-medium text-yellow-400">- {c.issuer} · {c.year}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
