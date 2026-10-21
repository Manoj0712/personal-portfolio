import { useEffect, useMemo, useState } from "react";
import { DETAILS, SHORT_NAME } from "@/constrains";

const DURATION = 4200;

const TERMINAL_LINES = [
  { text: "initializing portfolio...", color: "#a78bfa", delay: 1.8 },
  { text: "loading experience.tsx", color: "#67e8f9", delay: 2.3 },
  { text: "compiling projects...", color: "#86efac", delay: 2.8 },
  { text: "ready ✓", color: "#4ade80", delay: 3.4 },
];

const ORBITS = [
  { radius: 90, duration: 6, color: "#8B5CF6", dots: 6, reverse: false },
  { radius: 130, duration: 8, color: "#06B6D4", dots: 8, reverse: true },
  { radius: 170, duration: 10, color: "#3B82F6", dots: 5, reverse: false },
];

// Deterministic pseudo-random in [0, 1) so renders stay pure
const seeded = (n: number) => {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

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
      {points.map((p, i) => (
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
      {cells.map((c, i) => (
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

const TerminalLine = ({ text, color, delay }: typeof TERMINAL_LINES[number]) => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setTyped(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 32);
    }, delay * 1000);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <div className="whitespace-nowrap font-mono text-xs sm:text-sm" style={{ color, opacity: typed ? 1 : 0 }}>
      <span className="mr-2 select-none text-gray-500">&gt;</span>
      {typed}
      {typed.length < text.length && (
        <span className="ml-px inline-block h-[14px] w-[6px] animate-[blink_1s_step-end_infinite] align-middle" style={{ background: color }} />
      )}
    </div>
  );
};

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
      {ORBITS.map((orbit) => <Orbit key={orbit.radius} {...orbit} />)}
      {[0, 0.6, 1.2].map((delay) => (
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

        {stage >= 1 && (
          <div className="mt-6 flex animate-fade-up flex-col items-center">
            <h1
              className="bg-[linear-gradient(135deg,#8B5CF6,#06B6D4,#3B82F6)] bg-clip-text text-2xl font-bold uppercase tracking-[0.3em] text-transparent sm:text-3xl"
            >
              {SHORT_NAME.split("").map((char, i) => (
                <span key={i} className="inline-block" style={{ animation: `letter-in .4s ease-out ${0.2 + i * 0.06}s both` }}>
                  {char}
                </span>
              ))}
            </h1>
            <p className="mt-2 text-[11px] uppercase tracking-[0.5em] text-gray-400 sm:text-xs">
              {DETAILS.title}
            </p>
          </div>
        )}

        {stage >= 2 && (
          <div className="mt-8 w-64 animate-fade-up rounded-lg border border-white/5 bg-white/[0.02] px-5 py-3 backdrop-blur-sm sm:w-80">
            <div className="mb-2 flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-400/80" />
              <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
              <div className="h-2 w-2 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-[10px] text-gray-500">terminal</span>
            </div>
            <div className="space-y-1.5">
              {TERMINAL_LINES.map((line) => (
                <TerminalLine key={line.text} {...line} delay={line.delay - 1.6} />
              ))}
            </div>
          </div>
        )}

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
        <span className="mt-2 font-mono text-[10px] text-gray-500">{Math.round(progress)}%</span>
      </div>

      {/* Corner brackets */}
      <div className="absolute left-6 top-6 h-12 w-12 border-l-2 border-t-2 border-purple-500/40" />
      <div className="absolute right-6 top-6 h-12 w-12 border-r-2 border-t-2 border-cyan-500/40" />
      <div className="absolute bottom-6 left-6 h-12 w-12 border-b-2 border-l-2 border-cyan-500/40" />
      <div className="absolute bottom-6 right-6 h-12 w-12 border-b-2 border-r-2 border-purple-500/40" />
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)",
          animation: "scan 3s linear infinite",
        }}
      />
    </div>
  );
}

export default Loader;
