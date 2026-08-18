import { skillGroup } from "@/constrains";
import SectionHeading from "../SectionHeading";
import SkillGroup from "../SkillGroup";
import { map } from "lodash";

const SkillsSection = () => {

  return (
    <section
      id="skills"
      className="mx-auto max-w-[1160px] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-0"
    >
      <SectionHeading
        eyebrow="Skills"
        title="My technical toolkit."
        description="A practical stack focused on building reliable, maintainable production applications."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {map(skillGroup, (group, index) => (
          <SkillGroup
            key={group.title + index}
            title={group.title}
            skills={group.skills}
          />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection;