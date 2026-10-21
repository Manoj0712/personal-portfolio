import { motion } from "framer-motion";
import { SectionHeadingprops } from "@/types";

const SectionHeading = ({
  icon: Icon,
  title,
  description,
  gradient = "from-blue-500 to-purple-600 shadow-blue-500/25",
  width = "max-w-6xl",
  padding = "py-20",
  children,
}: SectionHeadingprops) => {

  return (
    <section className={`relative z-10 ${padding}`}>
      <div className={`${width} mx-auto px-4 text-center sm:px-6 lg:px-8`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-2xl ${gradient}`}>
            <Icon className="h-10 w-10 text-white" />
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl md:leading-7">
            {description}
          </p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export default SectionHeading;
