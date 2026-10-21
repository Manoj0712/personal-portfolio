import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Background from "./components/Background";
import MainSection from "./components/MainSection";
import ExperienceSection from "./components/MainSection/ExperienceSection";
import ProjectsSection from "./components/MainSection/ProjectsSection";
import ContactPage from "./components/Contact";
import Education from "./components/Education";
import CertificationsPage from "./components/Certifications";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-blue-500/30">
      <Loader />
      <Background />
      <Header />
      <main key={pathname} className="relative z-10 flex-1">
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<MainSection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;
