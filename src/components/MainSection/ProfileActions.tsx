import { DETAILS, ITEM, PROFESSIONALLINKS } from "@/constrains";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi"


const ProfileActions = () => {
  const github = PROFESSIONALLINKS.find((link) => link.name === "GitHub");
  const buttonClass = "inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-lg px-8 py-6 text-base font-semibold transition-all duration-300 sm:w-auto";

  return <motion.div variants={ITEM} className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
    {github && (
      <a href={github.url} target="_blank" rel="noreferrer"
        className={`${buttonClass} bg-white text-black hover:bg-gray-100`}>
        <span className="mr-2">⭐</span>Star Me On Github
      </a>
    )}
    {DETAILS.resume && (
      <a href={DETAILS.resume} download
        className={`${buttonClass} bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500`}>
        <FiDownload className="mr-2 h-5 w-5" />Download Resume
      </a>
    )}
  </motion.div>
}

export default ProfileActions