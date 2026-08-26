import { FiArrowUpRight } from "react-icons/fi";
import type { ProjectCardProps } from "@/types";


const ProjectCard = ({
  number,
  title,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-black/[0.08] bg-white/65 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(50,35,25,0.07)] dark:border-white/[0.08] dark:bg-white/[0.025]">
      <div className="flex items-start justify-between">
        <span className="text-[12px] font-bold tracking-[0.15em] text-[#e65b25]">
          {number}
        </span>

        <FiArrowUpRight
          size={20}
          className="text-[#88817b] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#e65b25]"
        />
      </div>

      <h3 className="mt-12 text-[23px] font-bold tracking-[-0.03em]">
        {title}
      </h3>

      <p className="mt-3 text-[14px] leading-7">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-black/[0.07] px-3 py-1.5 text-[11px] font-medium  dark:border-white/[0.08]"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;