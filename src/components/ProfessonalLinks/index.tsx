import { PROFESSIONALLINKS } from "@/constrains";
import { map } from "lodash";
import { motion } from "framer-motion";

const STYLES = {
  footer: "rounded-lg bg-white/5 p-2 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white",
  contact: "flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/10 text-white/70 transition-all duration-300 hover:border-white/20 hover:text-blue-400",
};

const ProfessionalLinks = ({ variant = "hero" }: { variant?: "hero" | keyof typeof STYLES }) => {
  return (<>
    {
      map(PROFESSIONALLINKS, (link) => {
        const Icon = link.icon;
        return <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          aria-label={link.name}
          title={link.name}
          whileHover={variant === "hero" ? { scale: 1.1, y: -2 } : variant === "contact" ? { scale: 1.1 } : undefined}
          whileTap={{ scale: 0.95 }}
          className={variant === "hero"
            ? `flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 ${link.bg}`
            : STYLES[variant]}
        >
          <Icon className="h-5 w-5 text-current" />
        </motion.a>
      })
    }
  </>
  )

}

export default ProfessionalLinks;
