import { useEffect, useState } from "react";
import { DURATION, LOADER_DELAY, ORBITS } from "@/constrains";
import { map } from "lodash";
import Orbit from "./Orbit";
import HexGrid from "./HexGrid";
import StartAnimation from "./StartAnimation";
import EndAnimation from "./EndAnimation";
import CornerBrackets from "./CornerBrackets";

const Loader = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const tick = (now: number) => {
      start ??= now;
      const value = Math.min(((now - start) / DURATION) * 100, 100);
      setProgress(value);
      if (value < 100) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const timers = [
      setTimeout(() => setStage(1), 600),
      setTimeout(() => setStage(2), 1600),
      setTimeout(() => setVisible(false), 5100),
    ];

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex select-none items-center justify-center overflow-hidden bg-black"
      style={{ animation: "loader-out .6s ease-in-out 4.5s forwards" }}
    >
      <HexGrid />
      <div
        className="pointer-events-none absolute inset-0 animate-pulse"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)" }}
      />
      {map(ORBITS, (orbit) => <Orbit key={orbit.radius} {...orbit} />)}
      {map(LOADER_DELAY, (delay) => (
        <div
          key={delay}
          className="absolute left-1/2 top-1/2 -ml-[60px] -mt-[60px] h-[120px] w-[120px] rounded-full border border-purple-500/30"
          style={{ animation: `ripple 2.4s ease-out ${delay}s infinite` }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex h-[100px] w-[100px] items-center justify-center">
          <div
            className="absolute h-[100px] w-[100px] animate-pulse rounded-full blur-[20px]"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)" }}
          />
          <svg viewBox="0 0 100 100" className="absolute h-20 w-20">
            <defs>
              <linearGradient id="monoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path
              d="M15 80 L15 25 L35 55 L50 30 L65 55 L85 25 L85 80"
              fill="none"
              stroke="url(#monoGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="260"
              style={{ animation: "draw 1.8s ease-in-out .4s both" }}
            />
          </svg>
        </div>
        {stage >= 1 && <StartAnimation />}
        {stage >= 2 && <EndAnimation />}
        <div className="relative mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-white/5 sm:w-64">
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #8B5CF6, #06B6D4, #8B5CF6)",
              backgroundSize: "200% 100%",
              boxShadow: "0 0 20px #8B5CF6, 0 0 40px #8B5CF688",
              animation: "shimmer 2s linear infinite",
            }}
          />
        </div>
        <span className="mt-2 font-mono text-[9px] text-gray-500">{Math.round(progress)}%</span>
      </div>
      {/* Corner brackets */}
      <CornerBrackets />
    </div>
  );
}

export default Loader;
