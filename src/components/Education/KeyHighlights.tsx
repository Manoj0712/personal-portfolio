import { LABEL } from "@/constrains";
import { map } from "lodash"

const KeyHighlights = ({ highlights }: { highlights: string[] }) => {

  return <div className="mb-6">
    <h3 className={LABEL}>Key Highlights</h3>
    <ul className="space-y-2">
      {map(highlights, (h) => (
        <li key={h} className="flex items-start gap-3">
          <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
          <span className="text-sm text-white/70">{h}</span>
        </li>
      ))}
    </ul>
  </div>
}

export default KeyHighlights;