import { motion } from "framer-motion";
import { educationList } from "./education";
import { map } from "lodash";
import KeyHighlights from "./KeyHighlights";
import Achievements from "./Achievements";
import InstitutionDetails from "./InstitutionDetails";

export default function EducationCard() {
  return (
    <section className="relative z-10 py-8">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        {map(educationList, (e, index) => (
          <motion.div
            key={e.institution}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] md:p-8">
              <InstitutionDetails education={e} />
              <p className="mb-6 leading-relaxed text-white/70">{e.description}</p>

              <KeyHighlights highlights={e.highlights} />

              <Achievements achievements={e.achievements} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
