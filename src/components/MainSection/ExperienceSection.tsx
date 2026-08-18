import { experienceCard } from "@/constrains";
import ExperienceCard from "../ExperienceCard";
import SectionHeading from "../SectionHeading";
import { map } from "lodash";

const ExperienceSection = () => {

  return (
    <section
      id="experience"
      className="mx-auto max-w-[1160px] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-0"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Building products that scale."
        description="4+ years of experience building enterprise applications, dashboards and modern web products."
      />
      <div className="mt-12 space-y-4">
        {map(experienceCard, (experience, index) => (
          <ExperienceCard
            key={experience.company + index}
            experienceDetails={experience}
          />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection;