
import { DETAILS } from "@/constrains";
import { motion } from "framer-motion";
const ProfileImage = () => {

  return <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="flex w-full items-center justify-center"
  >
    <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg">
      <div className="absolute inset-0 scale-75 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
      <motion.img
        src={DETAILS.image}
        alt={DETAILS.name}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 aspect-square h-auto w-full rounded-full border border-white/10 object-cover object-top p-2 drop-shadow-2xl"
      />
    </div>
  </motion.div>
}
export default ProfileImage;