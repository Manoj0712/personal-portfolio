import { useState } from "react";
import { TECH_ICONS } from "@/constrains";

const TechIcon = ({ name, className = "h-full w-full" }: { name: string; className?: string }) => {
  const icon = TECH_ICONS[name];
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    // No logo available: fall back to a lettered badge
    return <span className={`flex items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600 text-[10px] font-bold text-white ${className}`}>
      {name.replace(/[^A-Za-z ]/g, "").split(" ").map((word) => word[0]).join("").slice(0, 2).toUpperCase()}
    </span>
  }

  return <img
    src={icon.src}
    alt={name}
    loading="lazy"
    onError={() => setFailed(true)}
    className={`object-contain ${icon.invert ? "invert" : ""} ${className}`}
  />
}

export default TechIcon;
