import { FiChevronDown } from "react-icons/fi";
import ProfessionalLinks from "../ProfessonalLinks";
import { backeToTop, rights } from "@/constrains";

const Footer = () => {
  return <footer className="border-t border-black/[0.06] dark:border-white/[0.06]">
    <div className="mx-auto flex max-w-[1160px] flex-col items-center justify-between gap-4 px-5 py-7 text-[13px] sm:px-8 md:flex-row lg:px-0">
      <p>© {rights}</p>
      <div className="flex items-center gap-2">
        <ProfessionalLinks />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="ml-2 flex items-center gap-1 rounded-lg px-3 py-2 
          transition hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
        >
          {backeToTop}
          <FiChevronDown className="rotate-180" size={15} />
        </button>
      </div>
    </div>
  </footer>
};

export default Footer;