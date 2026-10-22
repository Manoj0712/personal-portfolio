import { DETAILS, SHORT_NAME } from "@/constrains";
import { map, split } from "lodash";


const StartAnimation = () => {

  return (
    <div className="mt-6 flex animate-fade-up flex-col items-center">
      <h1
        className="bg-[linear-gradient(135deg,#8B5CF6,#06B6D4,#3B82F6)] bg-clip-text text-2xl font-bold uppercase tracking-[0.3em] text-transparent sm:text-3xl"
      >
        {map(split(SHORT_NAME, ""), (char, i) => (
          <span key={i} className="inline-block" style={{ animation: `letter-in .4s ease-out ${0.2 + i * 0.06}s both` }}>
            {char}
          </span>
        ))}
      </h1>
      <p className="mt-2 text-[11px] uppercase tracking-[0.5em] text-gray-400 sm:text-xs">
        {DETAILS.title}
      </p>
    </div>
  )
}

export default StartAnimation;