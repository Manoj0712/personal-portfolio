import { CONTACTCARDS } from "@/constrains";
import { map } from "lodash";
import { motion } from "framer-motion";


function ContactCards() {

  return <div className="space-y-6">
    {map(CONTACTCARDS, ({ icon: Icon, title, sub, value, href }, index) => (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex items-start space-x-4 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:from-white/10 hover:to-white/15"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        <div className="min-w-0">
          <h3 className="mb-1 font-semibold text-white">{title}</h3>
          <p className="mb-2 text-sm text-white/60">{sub}</p>
          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
            className="break-words font-medium text-blue-400 transition-colors hover:text-blue-300">
            {value}
          </a>
        </div>
      </motion.div>
    ))}
  </div>
}


export default ContactCards;