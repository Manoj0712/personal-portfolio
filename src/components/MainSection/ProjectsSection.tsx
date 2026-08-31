import { PROJECTCARD } from "@/constrains";
import ProjectCard from "../ProjectCard";
import SectionHeading from "../SectionHeading";
import { map } from "lodash";

const ProjectsSection = () => {

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-black/[0.06] bg-white/35 dark:border-white/[0.06] dark:bg-white/[0.015]"
    >
      <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 lg:px-0">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="Selected projects focused on performance, usability and scalable architecture."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {map(PROJECTCARD, (project, index) => {
            return <ProjectCard
              key={`projectCard + ${index}`}
              number={project.number}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;