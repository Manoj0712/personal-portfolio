import EducationCard from "./EducationCard";
import EducationHero from "./EducationHero";
import Certifications from "./Certifications";

export default function Education() {

  return (
    <div className="relative min-h-screen overflow-hidden pb-16 pt-20">
      <EducationHero />
      <EducationCard />
      <Certifications />
    </div>
  );
}
