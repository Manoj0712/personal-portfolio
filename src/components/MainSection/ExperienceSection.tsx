import { map } from "lodash";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { EXPERIENCE_CTA, EXPERIENCECARD, SKILLGROUP } from "@/constrains";
import ExperienceCard from "../ExperienceCard";
import SectionHeading from "../SectionHeading";
import SkillGroup from "../SkillGroup";
import CallToAction from "../CallToAction";

const ExperienceSection = () => {

  return (
    <div className="relative min-h-screen overflow-hidden pb-16 pt-20">
      <SectionHeading
        icon={FiBriefcase}
        gradient="from-purple-500 to-pink-600 shadow-purple-500/25"
        title="Experience"
        description="My professional journey building scalable products across industries"
      />

      <section className="relative z-10 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {map(EXPERIENCECARD, (experience, index) => (
              <ExperienceCard
                key={experience.company + index}
                index={index}
                experienceDetails={experience}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Technical Skills</h2>
            <p className="mx-auto max-w-xl text-white/60">Technologies and tools I work with</p>
          </motion.div>
          <div className="space-y-6">
            {map(SKILLGROUP, (group, index) => (
              <SkillGroup
                key={group.title + index}
                index={index}
                title={group.title}
                dot={group.dot}
                skills={group.skills}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction {...EXPERIENCE_CTA} />
    </div>
  )
}

export default ExperienceSection;
