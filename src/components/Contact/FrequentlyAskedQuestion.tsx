import { FAQS } from "@/constrains";
import { motion } from "framer-motion";
import { map } from "lodash";

const FrequentlyAskedQuestion = () => {

  return <section className="relative z-10 py-16">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-white">Frequently Asked Questions</h2>
        <p className="text-white/70">Quick answers to common questions</p>
      </motion.div>
      <div className="space-y-6">
        {map(FAQS, ({ q, a }, index) => (
          <motion.div
            key={q}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-3 font-semibold text-white">{q}</h3>
            <p className="text-white/70">{a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
}

export default FrequentlyAskedQuestion;