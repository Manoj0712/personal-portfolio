import { HeaderProps } from "@/types";
import MobileNavigation from "./MobileNavigation";
import DeskTopActions from "./DeskTopActions";
import { FiBookOpen, FiBriefcase, FiCode, FiHome, FiMail } from "react-icons/fi";

const Header = ({
  scrollToSection,
  darkMode,
  setDarkMode,
  mobileMenu,
  setMobileMenu
}: HeaderProps) => {

  const navLinks = [
    { label: "Home", icon: FiHome },
    { label: "Education", icon: FiBookOpen },
    { label: "Experience", icon: FiBriefcase },
    { label: "Projects", icon: FiCode },
    // { label: "Certifications", icon: FiAward },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#faf9f7]/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#171412]/80">

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <span
            className="text-3xl text-indigo-400"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            Manojkumar
          </span>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </nav>
          <a href="/contact">
            <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group text-blue-400 bg-blue-400/10 shadow-lg shadow-blue-400/20">
              <FiMail size={16} className="mr-2" />
              Contact
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
              </div>
            </button>
          </a>
          <a href="/contact">
            <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group text-white/70 hover:text-white hover:bg-white/10">
              <FiMail size={16} className="mr-2" />
              Contact
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
              </div> */}
            </button>
          </a>
        </div>
      </header>

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
    </header >
  )
}

export default Header;