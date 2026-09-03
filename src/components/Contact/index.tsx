import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMessageCircle,
  FiSend,
  FiHome,
  FiBookOpen,
  FiBriefcase,
  FiCode,
} from "react-icons/fi";



const contactCards = [
  {
    icon: FiMail,
    title: "Email",
    sub: "Send me an email",
    value: "contact.manojchandran@gmail.com",
    href: "mailto:contact.manojchandran@gmail.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    sub: "Give me a call",
    value: "8637469722",
    href: "tel:8637469722",
  },
  {
    icon: FiMapPin,
    title: "Location",
    sub: "Visit my location",
    value: "BK Pudur, Kuniamuthur, Coimbatore - 641008",
    href: "#",
  },
  {
    icon: FiGithub,
    title: "GitHub",
    sub: "Check my code",
    value: "github.com/Manoj-kumar-C",
    href: "https://github.com/Manoj-kumar-C",
  },
];

const socialIcons = [
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMessageCircle,
];

const faqs = [
  {
    q: "What's your typical response time?",
    a: "I usually respond to messages within 24 hours, often sooner. If it's urgent, feel free to mention that in your message.",
  },
  {
    q: "Are you available for freelance projects?",
    a: "Yes! I'm always interested in discussing new projects. Feel free to reach out with details about your project and timeline.",
  },
  {
    q: "Do you offer consulting services?",
    a: "Absolutely. I provide consulting on web development, architecture decisions, and technology choices. Let's discuss your specific needs.",
  },
  {
    q: "Can you help with existing projects?",
    a: "Yes, I can help with code reviews, debugging, performance optimization, and feature development on existing projects.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">


      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Hero */}
        <section className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-24">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg sm:h-20 sm:w-20">
            <FiMail size={30} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Let's Connect
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
            Have a project in mind? Want to collaborate? Or just want to say
            hello? I'd love to hear from you!
          </p>
        </section>

        {/* Get in touch + form */}
        <section className="grid gap-12 pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-28">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-5 max-w-md text-base text-slate-400 sm:text-lg">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and
              development. Don't hesitate to reach out!
            </p>

            <div className="mt-10 space-y-5">
              {contactCards.map(({ icon: Icon, title, sub, value, href }) => (
                <a
                  key={title}
                  href={href}
                  className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-indigo-500"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-base font-semibold">
                      {title}
                    </span>
                    <span className="block text-sm text-slate-400">{sub}</span>
                    <span className="mt-1 block text-sm text-indigo-300 hover:underline sm:text-base">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 border-t border-slate-800 pt-8">
              <h3 className="mb-4 text-base font-semibold">Find me online</h3>
              <div className="flex gap-3">
                {socialIcons.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-indigo-500 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time status */}
            <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-950 p-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-base font-semibold text-emerald-400">
                  Usually responds within 24 hours
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                I check my messages regularly and try to respond as quickly
                as possible.
              </p>
            </div>
          </div>

          {/* Right column: form */}
          <div
            id="contact-form"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-xl font-bold sm:text-2xl">Send a Message</h3>
            <p className="mt-2 text-sm text-slate-400">
              Fill out the form below and I'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Name"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
                <Field
                  label="Email"
                  required
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>

              <Field
                label="Subject"
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Message <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 py-3.5 text-sm font-medium shadow-lg transition hover:opacity-90 sm:text-base"
              >
                <FiSend size={16} />
                {sent ? "Message Sent!" : "Send Message"}
              </button>

              <p className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-center text-xs text-slate-400">
                By sending a message, you agree that I may contact you
                regarding your inquiry. Your information will be kept
                confidential.
              </p>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20 lg:pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Quick answers to common questions
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-base font-semibold sm:text-lg">{q}</h3>
                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
          <div>
            <h4 className="text-lg font-bold text-indigo-300 sm:text-xl">
              Manojkumar C
            </h4>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              Full Stack Developer, Gen AI Engineer, and Cloud Engineer.
              Founder of Fresh Spar Technologies, passionate about creating
              innovative solutions and contributing to the tech community.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">About</a>
              <a href="#" className="hover:text-white">Projects</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
          © 2026 Manojkumar C ( Fresh Spar Technologies ). Made with{" "}
          <span className="text-pink-500">♥</span> using React &amp; Tailwind
          CSS
        </div>
      </footer>
    </div>
  );
}

function Field({ label, required, ...props }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-200">
        {label} {required && <span className="text-indigo-400">*</span>}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-400"
      />
    </div>
  );
}