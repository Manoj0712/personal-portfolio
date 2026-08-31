import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/MainSection/HeroSection";
import ExperienceSection from "./components/MainSection/ExperienceSection";
import ContactSection from "./components/MainSection/ContactSection";
import ProjectsSection from "./components/MainSection/ProjectsSection";
import ContactPage from "./components/Contact";

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
      <Routes>
        <Route path="/" element={<HeroSection scrollToSection={scrollToSection} />} />
        <Route path="/education" element={<HeroSection scrollToSection={scrollToSection} />} />
        <Route path="/experience" element={<ExperienceSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <MainSection scrollToSection={scrollToSection} /> */}
      <Footer />
    </div>
  );
}


export default App;