import { professionalLinks } from "@/constrains";
import { map } from "lodash";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ProfessionalLinks = () => {
  return (<>
    {
      map(professionalLinks, (link, index) => {
        return <a
          key={`professionalLinks-${index}`}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg p-2 transition hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
        >
          {link.name == "LinkedIn"
            ? <FaLinkedinIn size={17} />
            : <FaGithub size={17} />
          }
        </a>
      })
    }
  </>
  )

}

export default ProfessionalLinks;