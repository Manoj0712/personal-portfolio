import { motion } from "framer-motion";
import { platforms } from "./education";

export default function EducationHero() {
  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img src="/education.svg" alt="Education" width={500} height={400} className="h-auto w-full max-w-lg drop-shadow-2xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Education</h1>
            <p className="mb-8 text-xl font-medium text-white/70 md:text-2xl">
              Basic Qualification and Certifications
            </p>
            <div className="flex flex-wrap gap-4">
              {platforms.map(({ name, url, logo, invert }) => (
                <motion.a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20">
                  <img src={logo} alt={name} className={`h-7 w-7 ${invert ? "invert" : ""}`} />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-black opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                    {name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
