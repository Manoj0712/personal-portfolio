
import { motion } from "framer-motion";
import Field from "./Field";
import useContactPage from "@/hooks/useContactPage";
import { FiSend } from "react-icons/fi";
const ContactForm = () => {

  const inputClass = "flex w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20";
  const { handleChange, handleSubmit, form, sent } = useContactPage();

  return <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="h-fit rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm">
    <div className="mb-8">
      <h2 className="mb-2 text-2xl font-bold text-white">Send a Message</h2>
      <p className="text-white/70">Fill out the form below and I'll get back to you soon.</p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your.email@example.com" />
      </div>
      <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
      <div>
        <label htmlFor="message" className="mb-2 block font-medium text-white/80">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or just say hello!"
          className={`${inputClass} min-h-[80px] resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:from-blue-500 hover:to-purple-500"
      >
        <FiSend className="mr-2" />
        {sent ? "Opening your mail app..." : "Send Message"}
      </button>
    </form>

    <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
      <p className="text-center text-sm text-white/70">
        By sending a message, you agree that I may contact you regarding your inquiry.
        Your information will be kept confidential.
      </p>
    </div>
  </motion.div>
}

export default ContactForm;