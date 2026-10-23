import { ORBITS } from "@/constrains";
import { seeded } from "@/helper/loaderHelper";
import { map } from "lodash";
import { useMemo } from "react";

const Orbit = ({ radius, duration, color, dots, reverse }: typeof ORBITS[number]) => {


  const points = useMemo(
    () => Array.from({ length: dots }, (_, i) => ({ angle: (360 / dots) * i, size: 3 + seeded(i + dots) * 4 })),
    [dots]
  );

  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        border: `1px solid ${color}22`,
        boxShadow: `0 0 15px ${color}11`,
        animation: `${reverse ? "orbit-reverse" : "orbit"} ${duration}s linear infinite`,
      }}
    >
      {map(points, (p, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: color,
            boxShadow: `0 0 ${p.size * 3}px ${color}, 0 0 ${p.size * 6}px ${color}66`,
            transform: `rotate(${p.angle}deg) translateX(${radius}px) translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default Orbit;