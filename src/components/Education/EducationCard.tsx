import { FaGraduationCap } from "react-icons/fa";
import { FiCalendar, FiMapPin, FiAward, FiExternalLink } from "react-icons/fi";
import { education as e } from "./education";

const label = "mb-3.5 text-sm font-semibold tracking-[.06em] text-gray-400";

export default function EducationCard() {
  return (
    <div className="mx-auto max-w-[912px] px-3.5 sm:px-5">
      <div className="rounded-3xl border border-white/10 bg-[linear-gradient(160deg,#1a2244,#131728_60%)] p-[18px] sm:p-[27px]">
        <div className="flex flex-wrap items-start gap-3.5 md:flex-nowrap">
          <div className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#4f7df3] to-[#8b3fe0] text-white">
            <FaGraduationCap size={28} />
          </div>
          <div>
            <h2 className="text-[18px] font-bold md:text-2xl">{e.institution}</h2>
            <div className="mb-2 mt-1.5 text-base font-medium text-blue-400 md:text-xl">{e.degree}</div>
            <div className="flex flex-col flex-wrap gap-x-[22px] gap-y-2 text-[13px] text-gray-400 sm:flex-row md:text-base">
              <span className="flex items-center gap-2"><FiCalendar />{e.period}</span>
              <span className="flex items-center gap-2"><FiMapPin />{e.location}</span>
              <span className="flex items-center gap-2"><FiAward />{e.grade}</span>
            </div>
          </div>
          <div className="whitespace-nowrap rounded-[20px] bg-gradient-to-r from-[#4f7df3] to-[#7c4ee6] px-[15px] py-[5px] text-[15px] font-semibold md:ml-auto">
            {e.status}
          </div>
        </div>

        <p className="mb-[22px] mt-[26px] text-[15px] leading-normal text-[#d6dae3] md:text-lg">{e.description}</p>

        <p className={label}>KEY HIGHLIGHTS</p>
        <ul className="mb-[26px] list-none p-0">
          {e.highlights.map((h) => (
            <li key={h} className="relative mb-3 pl-[15px] text-[15px] leading-normal text-[#c3c8d4] before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-blue-400 before:content-['']">
              {h}
            </li>
          ))}
        </ul>

        <p className={label}>ACHIEVEMENTS</p>
        <div className="mb-[22px] grid grid-cols-1 gap-2.5 md:grid-cols-3">
          {e.achievements.map(({ text, icon: Icon }) => (
            <div key={text} className="flex min-h-14 items-center gap-3 rounded-[14px] border border-white/10 bg-white/5 px-3.5 py-4 text-[15px]">
              <Icon size={22} className="shrink-0 text-yellow-400" />{text}
            </div>
          ))}
        </div>

        <a href={e.website} target="_blank" rel="noreferrer"
          className="flex items-center gap-2 border-t border-white/10 pt-[22px] font-medium text-blue-400 hover:text-blue-300">
          Visit Institution Website <FiExternalLink />
        </a>
      </div>
    </div>
  );
}
