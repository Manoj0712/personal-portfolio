import { PROJECTCARD } from "@/constrains";
import { map, uniq } from "lodash";
import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import ProjectCard from "../ProjectCard";
import SectionHeading from "../SectionHeading";

const ProjectsSection = () => {
  const stats = [
    { value: `${PROJECTCARD.length}+`, label: "Projects Built", delay: 0.4 },
    { value: `${uniq(map(PROJECTCARD, "category")).length}`, label: "Categories", delay: 0.6 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden pb-16 pt-20">
      <SectionHeading
        icon={FiCode}
        width="max-w-4xl"
        padding="py-12"
        title="My Projects"
        description="A collection of projects focused on performance, usability and scalable architecture"
      >
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {map(stats, ({ value, label, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay }}
              className="text-center"
            >
              <div className="mb-1 text-3xl font-bold text-white">{value}</div>
              <div className="text-sm text-white/60">{label}</div>
            </motion.div>
          ))}
        </div>
      </SectionHeading>

      <section className="relative z-10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {map(PROJECTCARD, (project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsSection;
