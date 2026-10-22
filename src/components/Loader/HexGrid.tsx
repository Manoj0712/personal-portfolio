import { seeded } from "@/helper/LoaderHelper";
import { map } from "lodash";
import { useMemo } from "react";

const HexGrid = () => {

  const cells = useMemo(() => {
    const list = [];
    for (let row = 0; row < 8; row++)
      for (let col = 0; col < 12; col++)
        list.push({ x: col * 90 + (row % 2 ? 45 : 0), y: row * 78, delay: seeded(row * 12 + col) * 2 });
    return list;
  }, []);

  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 1080 624" preserveAspectRatio="xMidYMid slice">
      {map(cells, (c, i) => (
        <polygon
          key={i}
          points="40,0 80,23 80,69 40,92 0,69 0,23"
          transform={`translate(${c.x},${c.y})`}
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="0.5"
          style={{ animation: `hex-flicker 4s ${c.delay}s infinite` }}
        />
      ))}
    </svg>
  );
};

export default HexGrid; 