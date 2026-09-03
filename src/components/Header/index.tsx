import { HeaderProps } from "@/types";
import MobileNavigation from "./MobileNavigation";
import DeskTopActions from "./DeskTopActions";
import { FiBookOpen, FiBriefcase, FiCode, FiHome, FiMail } from "react-icons/fi";
import { NAME } from "@/constrains";
import { useNavigate } from "react-router-dom";

const Header = ({
  scrollToSection,
  darkMode,
  setDarkMode,
  mobileMenu,
  setMobileMenu
}: HeaderProps) => {


  const navigate = useNavigate();

  return (
    // <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#faf9f7]/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#171412]/80">


    < header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950" >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        <button
          onClick={() => navigate("/")}
          className="text-3xl text-indigo-400"
        // className="text-[20px] font-bold tracking-[-0.04em]"
        >
          {NAME}
        </button>
        <DeskTopActions
          scrollToSection={scrollToSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <MobileNavigation
          scrollToSection={scrollToSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          mobileMenu={mobileMenu}
        />
      </div>
    </header >
  )
}

export default Header;