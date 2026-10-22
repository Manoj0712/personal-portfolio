import { motion } from "framer-motion"
import ProfessionalLinks from "../ProfessonalLinks"
import { CONTAINER, DETAILS, ITEM } from "@/constrains"
import DynamicRole from "./DynamicRole"
import ProfileImage from "./ProfileImage"
import ProfileActions from "./ProfileActions"

const HeroSection = () => {
  const { name } = DETAILS;

  return (
    <section className="relative z-10 flex min-h-screen items-center pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={CONTAINER}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={ITEM}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-none lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {name}
              </span>
            </motion.h1>
            <motion.div variants={ITEM} className="mb-8 min-h-[3rem] text-xl font-medium sm:text-2xl lg:text-3xl">
              <DynamicRole />
            </motion.div>
            <motion.div variants={ITEM} className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
              <ProfessionalLinks />
            </motion.div>
            <ProfileActions />
          </motion.div>
          {/* Profile Image */}
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
