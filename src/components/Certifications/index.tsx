import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { CERTIFICATIONS_CTA } from "@/constrains";
import SectionHeading from "../SectionHeading";
import CallToAction from "../CallToAction";
import Certifications from "../Education/Certifications";
import { validatedSkills } from "../../constrains/education";
import { map } from "lodash";

const CertificationsPage = () => {

  return (
    <div className="relative min-h-screen overflow-hidden pb-16 pt-20">
      <SectionHeading
        icon={FiAward}
        title="Certifications"
        description="Professional certifications that validate my expertise across various technologies"
      />

      <Certifications showHeading={false} />

      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Skills Validated</h2>
            <p className="mx-auto max-w-xl text-white/60">Core competencies backed by real-world experience</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {map(validatedSkills, ({ badge, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                  <span className="mb-3 block text-3xl">{badge}</span>
                  <span className="text-sm font-medium text-white/80">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction {...CERTIFICATIONS_CTA} />
    </div>
  )
}

export default CertificationsPage;
