import { motion, Variants } from "framer-motion"
import { FiDownload } from "react-icons/fi"
import ProfessionalLinks from "../ProfessonalLinks"
import { DETAILS, PROFESSIONALLINKS } from "@/constrains"
import DynamicRole from "./DynamicRole"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonClass = "inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-lg px-8 py-6 text-base font-semibold transition-all duration-300 sm:w-auto";

const HeroSection = () => {
  const { name, image, resume } = DETAILS;
  const github = PROFESSIONALLINKS.find((link) => link.name === "GitHub");

  return (
    <section className="relative z-10 flex min-h-screen items-center pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={item}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-none lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {name}
              </span>
            </motion.h1>
            <motion.div variants={item} className="mb-8 min-h-[3rem] text-xl font-medium sm:text-2xl lg:text-3xl">
              <DynamicRole />
            </motion.div>
            <motion.div variants={item} className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
              <ProfessionalLinks />
            </motion.div>
            <motion.div variants={item} className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              {github && (
                <a href={github.url} target="_blank" rel="noreferrer"
                  className={`${buttonClass} bg-white text-black hover:bg-gray-100`}>
                  <span className="mr-2">⭐</span>Star Me On Github
                </a>
              )}
              {resume && (
                <a href={resume} download
                  className={`${buttonClass} bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500`}>
                  <FiDownload className="mr-2 h-5 w-5" />Download Resume
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex w-full items-center justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg">
              <div className="absolute inset-0 scale-75 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
              <motion.img
                src={image}
                alt={name}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 aspect-square h-auto w-full rounded-full border border-white/10 object-cover object-top p-2 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
