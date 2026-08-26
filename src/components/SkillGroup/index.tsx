const SkillGroup = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => {

  return (
    <div className="rounded-[18px] border border-black/[0.08] bg-white/60 p-6 dark:border-white/[0.08] dark:bg-white/[0.025]">
      <h3 className="text-[17px] font-bold">{title}</h3>

      <div className="mt-5 space-y-2.5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 text-[13px]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#e85a25]" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;