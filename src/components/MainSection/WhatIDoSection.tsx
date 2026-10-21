import { motion } from "framer-motion";
import DevelopmentDetails from "./DevelopementDetails";

const WhatIDoSection = () => {

  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-4xl font-bold text-white md:text-5xl"
        >
          What I Do?
        </motion.h2>
        <DevelopmentDetails />
      </div>
    </section>
  )
}

export default WhatIDoSection;
