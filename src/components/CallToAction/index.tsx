import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { CallToActionProps } from "@/types";

const CallToAction = ({
  title,
  description,
  primary,
  secondary,
  primaryGradient = "from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500",
}: CallToActionProps) => {

  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm md:p-12"
        >
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">{title}</h2>
          <p className="mx-auto mb-8 max-w-lg text-white/60">{description}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to={primary.routerName}
              className={`inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r px-8 py-3 text-sm font-medium text-white transition-all ${primaryGradient}`}
            >
              {primary.label} <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to={secondary.routerName}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-white/20 bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction;
