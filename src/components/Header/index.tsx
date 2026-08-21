import { HeaderProps } from "@/types";
import MobileNavigation from "./MobileNavigation";
import DeskTopActions from "./DeskTopActions";

const Header = ({
  scrollToSection,
  darkMode,
  setDarkMode,
  mobileMenu,
  setMobileMenu
}: HeaderProps) => {

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#faf9f7]/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#171412]/80">
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