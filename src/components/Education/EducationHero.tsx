import CapIllustration from "./CapIllustration";
import { platforms } from "./education";

export default function EducationHero() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-6 px-6 pb-[60px] pt-10 text-center md:min-h-[640px] md:grid-cols-2 md:gap-10 md:pt-[110px] md:text-left">
      <CapIllustration />
      <div>
        <h1 className="mb-3.5 text-[36px] font-bold leading-[1.1] sm:text-[44px] md:text-[56px]">Education</h1>
        <p className="mb-7 text-[17px] font-medium text-[#b6bcc9] md:text-[22px]">
          Basic Qualification and Certifications
        </p>
        <div className="flex flex-wrap justify-center gap-3.5 md:justify-start">
          {platforms.map(({ name, icon: Icon, color }) => (
            <div key={name} title={name}
              className="grid h-10 w-10 place-items-center rounded-[9px] border border-white/10 bg-[#1c2030]">
              <Icon size={20} color={color} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
