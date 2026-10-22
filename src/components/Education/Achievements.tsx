import { LABEL } from "@/constrains";
import { map } from "lodash";

const Achievements = (
  { achievements }:
    { achievements: { text: string; icon: React.FC<{ size?: number; className?: string }> }[] }
) => {

  return <div>
    <h3 className={LABEL}>Achievements</h3>
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {map(achievements, ({ text, icon: Icon }) => (
        <div key={text} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3">
          <Icon size={20} className="shrink-0 text-yellow-400" />
          <span className="text-sm text-white/70">{text}</span>
        </div>
      ))}
    </div>
  </div>


}

export default Achievements;