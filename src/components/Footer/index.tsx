import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { DETAILS, NAME, NAVITEMS, RIGHTS } from "@/constrains";
import ProfessionalLinks from "../ProfessonalLinks";

const Footer = () => {

  return <footer className="relative z-10 border-t border-white/10 bg-gradient-to-t from-gray-900 to-black">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
            {NAME}
          </h3>
          <p className="max-w-md text-white/70">
            {DETAILS.footerBio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {NAVITEMS.map((item) => (
              <Link
                key={item.routerName}
                to={item.routerName}
                className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h4 className="text-lg font-semibold text-white">Connect</h4>
          <div className="flex space-x-4">
            <ProfessionalLinks variant="footer" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-8 md:flex-row md:space-y-0">
        <p className="flex flex-wrap items-center justify-center text-sm text-white/50">
          {RIGHTS}{" "}
          <FiHeart className="mx-1 h-4 w-4 fill-current text-red-500" />
          using React &amp; Tailwind CSS
        </p>
      </motion.div>
    </div>
  </footer>

};

export default Footer;
