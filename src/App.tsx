import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileMenu(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 
        ${darkMode ? "bg-[#171412] text-white" : "bg-[#faf9f7] text-[#171513]"
        }`}
    >
      <Header
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu} />
      <MainSection scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
}


export default App;