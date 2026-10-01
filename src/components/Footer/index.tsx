// import { FiChevronDown } from "react-icons/fi";
// import ProfessionalLinks from "../ProfessonalLinks";
import { BACKTOTOP, NAME, RIGHTS, SOCIALICONS } from "@/constrains";

const Footer = () => {
  // return <footer className="border-t border-black/[0.06] dark:border-white/[0.06]">
  //   <div className="mx-auto flex max-w-[1160px] flex-col items-center justify-between gap-4 px-5 py-7 text-[13px] sm:px-8 md:flex-row lg:px-0">
  //     <p>{RIGHTS}</p>
  //     <div className="flex items-center gap-2">
  //       <ProfessionalLinks />
  //       <button
  //         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  //         className="ml-2 flex items-center gap-1 rounded-lg px-3 py-2 
  //         transition hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
  //       >
  //         {BACKTOTOP}
  //         <FiChevronDown className="rotate-180" size={15} />
  //       </button>
  //     </div>
  //   </div>
  // </footer>

  return <footer className="border-t border-slate-800 bg-black  ">
    <div className="mx-auto text-[500px] grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
      <div>
        <h4 className="text-[26px] font-bold text-indigo-300 sm:text-xl">
          {NAME}
        </h4>
        <p className="mt-3 max-w-xs text-[20px] text-slate-400">
          Full Stack Developer, Gen AI Engineer, and Cloud Engineer.
          Founder of Fresh Spar Technologies, passionate about creating
          innovative solutions and contributing to the tech community.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-[20px] text-white font-semibold">Quick Links</h4>
        <div className="grid grid-cols-2 gap-2 text-[20px] text-slate-400 items-start ">
          <button onClick={() => window.location.href = "/"} className="text-left hover:text-white">
            Home
          </button>
          <button onClick={() => window.location.href = "/education"} className="text-left hover:text-white">
            Education
          </button>
          <button onClick={() => window.location.href = "/experience"} className="text-left hover:text-white">
            Experience
          </button>
          <button onClick={() => window.location.href = "/projects"} className="text-left hover:text-white">
            Projects
          </button>
          <button onClick={() => window.location.href = "/contact"} className="text-left hover:text-white">
            Contact
          </button>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-[20px] text-white font-semibold">Connect</h4>
        <div className="flex gap-3">
          {SOCIALICONS.map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-slate-800 py-6 text-center text-[20px] text-slate-500">
      © 2026 {NAME} . Made with{" "}
      <span className="text-pink-500">♥</span> using React &amp; Tailwind
      CSS
    </div>
  </footer>

};

export default Footer;