import { details } from "@/constrains";
import { FiMail } from "react-icons/fi";

const ContactSection = () => {

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-black/[0.06] dark:border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 lg:px-0">
        <div className="relative overflow-hidden rounded-[28px] border
         border-black/[0.08] bg-gradient-to-br from-[#fff3ed]
          to-[#f9e8e0] px-6 py-14 text-center dark:border-white/[0.08]
           dark:from-[#251b17] dark:to-[#211917] sm:px-12">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

          <div className="relative">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#e85b24]">
              {details.getInTouch}
            </span>

            <h2 className="mt-4 text-[38px] font-bold tracking-[-0.045em] sm:text-[52px] text-white">
              {details.letsBuildSomething}
              <span className="block text-[#df5730]">{details.greatTogether}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[580px] text-[16px] leading-7">
              {details.openToOpportunities}
            </p>
            <a
              href={`mailto:${details.mail}`}
              className="mt-8 inline-flex items-center gap-3 rounded-[14px] bg-[#d95338] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/10 transition hover:-translate-y-0.5 hover:bg-[#c94b32]"
            >
              <FiMail size={18} />
              {details.sayhello}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;