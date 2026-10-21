import { FiMail } from "react-icons/fi";
import SectionHeading from "../SectionHeading";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";
import ContactDetails from "./ContactDetails";
import ContactForm from "./contactForm";

export default function ContactPage() {

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
          {<ContactDetails />}
          {<ContactForm />}
        </div>
      </div>
      {/* FAQ */}
      <FrequentlyAskedQuestion />
    </div>
  );
}


