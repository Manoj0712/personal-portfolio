import { WHAT_I_DO } from "@/constrains";
import { map } from "lodash";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";
import TechIcon from "../TechIcon";

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

        {map(WHAT_I_DO, (item, index) => {
          // Image always sits on the left; odd rows slide in from the opposite side
          const flip = index % 2 === 1;

          return (
            <div
              key={item.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${index < WHAT_I_DO.length - 1 ? "mb-24" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, x: flip ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex justify-center"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.05, rotate: flip ? -2 : 2 }}
                  transition={{ duration: 0.3 }}
                  className="h-auto w-full max-w-md object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: flip ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl">{item.title}</h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-8 flex flex-wrap gap-4"
                >
                  {item.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="group relative flex h-12 w-12 cursor-default items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2.5 transition-all duration-300 hover:border-white/30 hover:bg-white/20"
                    >
                      <TechIcon name={skill} />
                      <div className="pointer-events-none absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="space-y-4">
                  {item.points.map((point, i) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: flip ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <FiZap className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                      <span className="text-lg text-yellow-400">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default WhatIDoSection;
