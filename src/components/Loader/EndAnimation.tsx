import { TERMINAL_LINES } from "@/constrains";
import { map } from "lodash";
import TerminalLine from "./TerminalLine";

const EndAnimation = () => {

  return (
    <div className="mt-8 w-64 animate-fade-up rounded-lg border border-white/5 bg-white/[0.02] px-5 py-3 backdrop-blur-sm sm:w-80">
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-red-400/80" />
        <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <div className="h-2 w-2 rounded-full bg-green-400/80" />
        <span className="ml-2 font-mono text-[10px] text-gray-500">terminal</span>
      </div>
      <div className="space-y-1.5">
        {map(TERMINAL_LINES, (line) => (
          <TerminalLine key={line.text} {...line} delay={line.delay - 1.6} />
        ))}
      </div>
    </div>
  )
}

export default EndAnimation;