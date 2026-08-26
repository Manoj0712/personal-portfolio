import { ExperienceCard } from "@/types/index.ts";

const ExperienceCard = ({
  experienceDetails
}: ExperienceCard) => {
  const { company, role, period, location, description, technologies } = experienceDetails

  return (
    <article className="rounded-[20px] border border-black/[0.08] bg-white/65 p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(50,35,25,0.06)] sm:p-8 dark:border-white/[0.08] dark:bg-white/[0.025]">
      <div className="flex flex-col justify-between gap-3 sm:flex-row">
        <div>
          <h3 className="text-[21px] font-bold">{`${company} - ${location}`}</h3>
          <p className="mt-1 text-[14px] font-medium text-[#e25727]">
            {role}
          </p>
        </div>

        <span className="text-[13px] text-[#817a74] dark:text-[#99928c]">
          {period}
        </span>
      </div>

      <p className="mt-5 max-w-[850px] text-[15px] leading-7">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-[#f3efeb] px-3 py-1.5 text-[12px] font-medium text-[#67615b] dark:bg-white/[0.06] dark:text-[#b3aca6]"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;