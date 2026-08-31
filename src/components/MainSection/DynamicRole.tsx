import { DETAILS } from "@/constrains";
import { useEffect, useState } from "react";

const DynamicRole = () => {
  const roles = DETAILS.role; // Array of roles from constrains

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = 120;   // time between each typed letter
    const deletingSpeed = 70;  // time between each deleted letter
    const pauseAfterTyping = 1000;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className="mt-2 block bg-gradient-to-r from-[#f05b20] via-[#df5235] to-[#c9484c] bg-clip-text text-transparent">
      {displayText}
      <span
        className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[2px] bg-[#df5235] align-middle animate-[blink_0.8s_step-end_infinite]"
      />
    </span>
  );
};

export default DynamicRole;