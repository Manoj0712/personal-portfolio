import { motion } from "framer-motion";
import ContactCards from "./ContactCards";
import ProfessionalLinks from "../ProfessonalLinks";


const ContactDetails = () => {


  return <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="space-y-8"
  >
    <div>
      <h2 className="mb-6 text-3xl font-bold text-white">Get in Touch</h2>
      <p className="mb-8 text-lg leading-relaxed text-white/70">
        I'm always open to discussing new opportunities, interesting projects, or just having a
        chat about technology and development. Don't hesitate to reach out!
      </p>
    </div>
    <ContactCards />
    <div className="border-t border-white/10 pt-8">
      <h3 className="mb-6 font-semibold text-white">Find me online</h3>
      <div className="flex space-x-4">
        <ProfessionalLinks variant="contact" />
      </div>
    </div>

    <div className="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6">
      <div className="mb-2 flex items-center">
        <div className="mr-3 h-2 w-2 rounded-full bg-green-400" />
        <span className="font-medium text-green-400">Usually responds within 24 hours</span>
      </div>
      <p className="text-sm text-white/70">
        I check my messages regularly and try to respond as quickly as possible.
      </p>
    </div>
  </motion.div>
}

export default ContactDetails;