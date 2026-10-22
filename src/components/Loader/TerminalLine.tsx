import { TERMINAL_LINES } from "@/constrains";
import { useEffect, useState } from "react";

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


export default TerminalLine;