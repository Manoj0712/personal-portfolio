import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

const MainSection = ({ scrollToSection }: { scrollToSection: (section: string) => void }) => {

  return (
    <main>
      <HeroSection scrollToSection={scrollToSection} />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )

}

export default MainSection;