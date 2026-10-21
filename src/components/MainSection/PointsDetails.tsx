
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

const PointsDetails = ({ item, flip }: { item: { points: string[] }, flip: boolean }) => {

  return (
    <div className="space-y-4">
      {item.points.map((point: string, i: number) => (
        <motion.div
          key={point}
          initial={{ opacity: 0, x: flip ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          viewport={{ once: true }}
          className="flex items-start gap-3"
        >
          <FiZap className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
          <span className="text-lg text-yellow-400">{point}</span>
        </motion.div>
      ))}
    </div>
  )

}

export default PointsDetails;