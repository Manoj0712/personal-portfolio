import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import Navigation from "../Navigation";
import HireMeButton from "./HireMeButton";
import { DeskTopActionsProps } from "@/types";

const DeskTopActions = ({
  scrollToSection,
  darkMode,
  setDarkMode,
  mobileMenu,
  setMobileMenu
}: DeskTopActionsProps) => {

  return (
    <div className="mx-auto flex h-[76px] max-w-[1160px] items-center justify-between px-5 sm:px-8 lg:px-0">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-[20px] font-bold tracking-[-0.04em]"
      >
        manojkumar<span className="text-[#ed5b22]">.dev</span>
      </button>
      <Navigation />
      <div className="hidden items-center gap-2 md:flex">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-black/[0.09] transition hover:bg-black/[0.04] dark:border-white/[0.1] dark:hover:bg-white/[0.05]"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <FiSun size={18} strokeWidth={1.8} />
          ) : (
            <FiMoon size={18} strokeWidth={1.8} />
          )}
        </button>
        <HireMeButton scrollToSection={scrollToSection}
          className={"ml-1 rounded-[13px] bg-gradient-to-r from-[#f65c20] to-[#bd484a] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_8px_25px_rgba(215,75,45,0.18)] transition hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(215,75,45,0.25)]"}
        />
      </div>
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-black /[0.09] md:hidden dark:border-white/[0.1]"
        aria-label="Open menu"
      >
        {mobileMenu ? <FiX size={21} /> : <FiMenu size={21} />}
      </button>
    </div>
  )
}


export default DeskTopActions;