import { motion } from "framer-motion";
import { SkillGroupProps } from "@/types";
import TechIcon from "../TechIcon";
import { map } from "lodash";

const SkillGroup = ({
  title,
  dot,
  skills,
  index = 0,
}: SkillGroupProps & { index?: number }) => {

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex shrink-0 items-center gap-3 sm:w-44">
          <div className={`h-3 w-3 rounded-full ${dot}`} />
          <h3 className="font-semibold text-white">{title}</h3>
        </div>

        <div className="flex flex-1 flex-wrap gap-3">
          {map(skills, (skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15, y: -3 }}
              className="group relative flex cursor-default items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 transition-all duration-300 hover:border-white/20 hover:bg-white/15"
            >
              <TechIcon name={skill} className="h-5 w-5" />
              <span className="text-sm font-medium text-white/80">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SkillGroup;
