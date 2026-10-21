import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import { map } from "lodash";
import { motion } from "framer-motion";
import { CONTACTCARDS, DETAILS, FAQS } from "@/constrains";
import SectionHeading from "../SectionHeading";
import ProfessionalLinks from "../ProfessonalLinks";

const inputClass = "flex w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // No backend: open the visitor's mail client with the message pre-filled.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${DETAILS.mail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden pb-16 pt-20">
      <SectionHeading
        icon={FiMail}
        width="max-w-4xl"
        title="Let's Connect"
        description="Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you!"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left column */}
          <motion.div
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

            <div className="space-y-6">
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

          {/* Right column: form */}
          <motion.div
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
        </div>
      </div>

      {/* FAQ */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-white/70">Quick answers to common questions</p>
          </motion.div>
          <div className="space-y-6">
            {map(FAQS, ({ q, a }, index) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-3 font-semibold text-white">{q}</h3>
                <p className="text-white/70">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-medium text-white/80">{label} *</label>
      <input id={name} name={name} required {...props} className={`${inputClass} h-10`} />
    </div>
  );
}
