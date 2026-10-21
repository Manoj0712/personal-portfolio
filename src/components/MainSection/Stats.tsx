import { STATS } from "@/constrains";
import { map } from "lodash";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {map(STATS, ({ value, label, icon: Icon, gradient }) => (
            <motion.div
              key={label}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10 ${gradient}`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:ring-white/30">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                  {value}
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
export default Stats;
