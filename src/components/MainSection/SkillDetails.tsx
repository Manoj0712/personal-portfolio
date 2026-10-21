import { motion } from "framer-motion";
import TechIcon from "../TechIcon";

const SkillDetails = ({ item }: { item: { skills: string[] } }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="mb-8 flex flex-wrap gap-4"
    >
      {item.skills.map((skill: string, i: number) => (
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
  )
}

export default SkillDetails;