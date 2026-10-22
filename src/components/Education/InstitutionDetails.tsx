import { FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const InstitutionDetails = ({ education }: { education: any }) => {

  return <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-3xl shadow-lg">
    </div>
    <div className="min-w-0 flex-1">
      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-white md:text-2xl">{education.institution}</h2>
        <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white">
          {education.status}
        </span>
      </div>
      <p className="mb-2 text-lg font-medium text-blue-400">{education.degree}</p>
      <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
        <span className="flex items-center gap-1.5"><FiCalendar size={16} />{education.period}</span>
        <span className="flex items-center gap-1.5"><FiMapPin size={16} />{education.location}</span>
        <span className="flex items-center gap-1.5"><FiAward size={16} />{education.grade}</span>
      </div>
    </div>
  </div>
}

export default InstitutionDetails;