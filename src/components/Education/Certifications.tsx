import { motion } from "framer-motion";
import CertificationDetails from "./CertificationDetails";

export default function Certifications({ showHeading = true }: { showHeading?: boolean }) {

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
        <CertificationDetails showHeading={showHeading} />
      </div>
    </section>
  );
}
