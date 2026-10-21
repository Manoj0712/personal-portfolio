import HeroSection from "./HeroSection";
import Stats from "./Stats";
import WhatIDoSection from "./WhatIDoSection";

const MainSection = () => {

  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <Stats />
      <WhatIDoSection />
    </div>
  )

}

export default MainSection;
