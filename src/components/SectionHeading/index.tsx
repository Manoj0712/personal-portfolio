import { SectionHeadingprops } from "@/types";

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingprops) => {

  return (
    <div className="max-w-[700px]">
      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#e65a25]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-[36px] font-bold tracking-[-0.045em] sm:text-[46px]">
        {title}
      </h2>
      <p className="mt-4 text-[16px] leading-7">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;