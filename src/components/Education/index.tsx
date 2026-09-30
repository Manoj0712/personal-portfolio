import EducationCard from "./EducationCard";
import EducationHero from "./EducationHero";
import Certifications from "./Certifications";

export default function Education() {

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070a12] bg-[image:radial-gradient(ellipse_at_20%_10%,#0f1a33_0,transparent_50%),radial-gradient(ellipse_at_90%_60%,#1c1236_0,transparent_45%)] font-['Inter',system-ui,sans-serif] text-white">
      <EducationHero />
      <EducationCard />
      <Certifications />
    </div>
  );
}
