import { stats } from "@/constrains";
import { map } from "lodash";

const Stats = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
      {map(stats, (stat) => (
        <div
          key={stat.value}
          className="rounded-[17px] border border-black/[0.09] bg-white/65 px-5 py-6 backdrop-blur-sm transition hover:-translate-y-10 hover:shadow-[0_15px_35px_rgba(50,35,25,0.06)] dark:border-white/[0.08] dark:bg-white/[0.025]"
        >
          <div className="text-[31px] font-bold leading-none tracking-[-0.04em] text-[#e65420]">
            {stat.value}
          </div>

          <p className="mt-3 text-[13px] leading-[1.6]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

  )
}
export default Stats;