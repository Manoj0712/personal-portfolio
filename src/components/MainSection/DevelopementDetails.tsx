
import { motion } from "framer-motion";
import { map } from "lodash";
import { WHAT_I_DO } from "@/constrains";
import SkillDetails from "./SkillDetails";
import PointsDetails from "./PointsDetails";

const DevelopmentDetails = () => {

  return <>
    {map(WHAT_I_DO, (item: any, index: number) => {
      const flip = index % 2 === 1;
      return (
        <div
          key={item.title}
          className={`grid items-center gap-12 lg:grid-cols-2 ${index < WHAT_I_DO.length - 1 ? "mb-24" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, x: flip ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <motion.img
              src={item.image}
              alt={item.title}
              whileHover={{ scale: 1.05, rotate: flip ? -2 : 2 }}
              transition={{ duration: 0.3 }}
              className="h-auto w-full max-w-md object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: flip ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl">{item.title}</h3>
            <SkillDetails item={item} />
            <PointsDetails item={item} flip={flip} />
          </motion.div>
        </div>
      );
    })
    }
  </>

}


export default DevelopmentDetails;