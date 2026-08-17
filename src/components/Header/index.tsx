import { HeaderProps } from "@/types";
import Navigation from "../Navigation";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import NavItems from "../Navigation/NavItems";
import HireMeButton from "./HiremeButton";

const Header = ({
  scrollToSection,
  darkMode,
  setDarkMode,
  mobileMenu,
  setMobileMenu
}: HeaderProps) => {

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#faf9f7]/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#171412]/80">
      <div className="mx-auto flex h-[76px] max-w-[1160px] items-center justify-between px-5 sm:px-8 lg:px-0">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[20px] font-bold tracking-[-0.04em]"
        >
          manojkumar<span className="text-[#ed5b22]">.dev</span>
        </button>
        <Navigation scrollToSection={scrollToSection} />
        {/* Desktop Actions */}
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
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-black /[0.09] md:hidden dark:border-white/[0.1]"
          aria-label="Open menu"
        >
          {mobileMenu ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
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
      )}
    </header >
  )
}

export default Header;