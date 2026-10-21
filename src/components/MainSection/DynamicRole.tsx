import { DETAILS } from "@/constrains";
import { useEffect, useState } from "react";

const DynamicRole = () => {
  const roles = DETAILS.role; // Array of roles from constrains

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = 100;   // time between each typed letter
    const deletingSpeed = 50;  // time between each deleted letter
    const pauseAfterTyping = 2000;

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
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text font-bold text-transparent">
      {displayText}
      <span className="ml-1 animate-pulse align-middle text-orange-400">|</span>
    </span>
  );
};

export default DynamicRole;
