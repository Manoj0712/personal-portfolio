import { FiArrowUpRight, FiMail, FiMapPin } from "react-icons/fi"
import ProfessionalLinks from "../ProfessonalLinks"
import Stats from "./Stats"
import { DETAILS } from "@/constrains"
import DynamicRole from "./DynamicRole"

const HeroSection = ({ scrollToSection }:
  { scrollToSection: (section: string) => void }) => {
  const {
    availability,
    name,
    description,
    viewProjects,
    getInTouch,
    location,
    image } = DETAILS;

  return (
    <section
      id="about"
      className="relative mx-auto max-w-[1160px] px-5 pb-16 pt-20 sm:px-8 sm:pt-28 lg:px-0 lg:pb-20 lg:pt-[115px]"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_430px] lg:gap-20 hover:-translate-y-0.5 hover:z-30 hover:border-black/[0.15]
      relative z-10 rounded-[20px] border border-transparent p-4 transition-all duration-300
      ">
        {/* Left */}
        <div>
          {/* Availability */}
          {availability && (
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/[0.09] bg-white/50 px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-[#706a64] dark:border-white/[0.1] dark:bg-white/[0.03]">
              <span className="h-2 w-2 rounded-full bg-[#e85c22]" />
              {availability}
            </div>
          )}
          <h6 className="mt-8 max-w-[610px] text-[17px] leading-[1.8]  sm:text-[20px]">
            👋 Hi, I'm
          </h6>
          {/* Heading */}
          <h1 className="max-w-[760px] text-[48px] font-bold leading-[0.98] tracking-[-0.055em] sm:text-[64px] lg:text-[68px]">
            {name}
            <DynamicRole />
          </h1>

          {/* Description */}
          <h6 className="mt-8 max-w-[610px] text-[17px] leading-[1.8]  sm:text-[20px]">
            {description}
          </h6>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection("Projects")}
              className="group flex items-center gap-3 rounded-[14px] bg-gradient-to-r from-[#f45d1f] to-[#bd494c] px-5 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_28px_rgba(215,75,45,0.17)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(215,75,45,0.25)]"
            >
              {viewProjects}
              <FiArrowUpRight
                size={18}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            <button
              onClick={() => scrollToSection("Contact")}
              className="flex items-center gap-3 rounded-[14px] border border-black/[0.1] bg-white/50 px-5 py-3.5 text-[14px] font-semibold transition hover:bg-white dark:border-white/[0.1] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <FiMail size={17} strokeWidth={1.8} />
              {getInTouch}
            </button>
            <ProfessionalLinks />
          </div>

          {/* Location */}
          <div className="mt-7 flex items-center gap-2 text-[20px] font-extrabold">
            <FiMapPin size={18} strokeWidth={1.7} />
            <h2>{location}</h2>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
          <div className="absolute -inset-7 rounded-[40px] bg-gradient-to-br from-orange-300/25 via-red-200/20 to-transparent blur-3xl dark:from-orange-700/10" />
          <div className="relative overflow-hidden rounded-[22px] border border-black/[0.08] bg-[#eeeae5] shadow-[0_25px_60px_rgba(88,54,40,0.14)] dark:border-white/[0.08] dark:bg-[#292421]">
            <img src={image}
              alt="Manojkumar S"
              className="aspect-[1/1] w-full object-cover object-top" loading="lazy" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default HeroSection