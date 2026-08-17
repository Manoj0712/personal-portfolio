import { professionalLinks } from "@/constrains";
import { map } from "lodash";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Footer = () => {
  return <footer className="border-t border-black/[0.06] dark:border-white/[0.06]">
    <div className="mx-auto flex max-w-[1160px] flex-col items-center justify-between gap-4 px-5 py-7 text-[13px] text-[#77716b] sm:px-8 md:flex-row lg:px-0 dark:text-[#99928c]">
      <p>© {new Date().getFullYear()} Manojkumar S. All rights reserved.</p>
      <div className="flex items-center gap-2">
        {
          map(professionalLinks, (link, index) => {
            return <a
              key={`professionalLinks-${index}`}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 transition hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
            >
              {link.name == "LinkedIn"
                ? <FaLinkedinIn size={17} />
                : <FaGithub size={17} />
              }
            </a>
          })
        }
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="ml-2 flex items-center gap-1 rounded-lg px-3 py-2 
          transition hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
        >
          Back to top
          <FiChevronDown className="rotate-180" size={15} />
        </button>
      </div>
    </div>
  </footer>
};

export default Footer;