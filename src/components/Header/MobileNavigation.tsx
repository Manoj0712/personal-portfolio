import { FiMoon, FiSun } from "react-icons/fi";
import NavItems from "../Navigation/NavItems";
import HireMeButton from "./HireMeButton";
import { MobileNavigationProps } from "@/types";

const MobileNavigation = ({ scrollToSection,
  darkMode,
  setDarkMode,
  mobileMenu }: MobileNavigationProps) => {

  if (!mobileMenu) {
    return null;
  }

  return (
    <div className="border-t border-black/[0.06] bg-[#faf9f7] px-5 py-5 dark:border-white/[0.06] dark:bg-[#171412] md:hidden">
      <nav className="flex flex-col gap-1">
        <NavItems scrollToSection={scrollToSection} />
        <div className="mt-3 flex gap-2 border-t border-black/[0.06] pt-4 dark:border-white/[0.06]">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex flex-1 items-center justify-center
                gap-2 rounded-xl border border-black /[0.09] py-3 text-sm
              dark:border-white/[0.1] text-white
                ">
            {darkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
            {darkMode ? "Light mode" : "Dark mode"}
          </button>
          <HireMeButton scrollToSection={scrollToSection}
            className={"flex-1 rounded-xl bg-[#d95338] py-3 text-sm font-semibold text-white"}
          />
        </div>
      </nav>
    </div >
  )
}

export default MobileNavigation;