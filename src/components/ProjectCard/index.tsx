import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";
import type { ProjectCardProps } from "@/types";

const MAX_TAGS = 4;

const ProjectCard = ({
  title,
  description,
  category,
  technologies,
  icon: Icon,
  color,
  featured,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  const hasLinks = Boolean(liveUrl || githubUrl);

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur transition duration-500 group-hover:opacity-20" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
        <div className="relative h-48 overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          ) : (
            <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br transition-transform duration-700 group-hover:scale-110 ${color}`}>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:20px_20px]" />
              <Icon size={64} className="relative text-white/90 drop-shadow-2xl" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute left-3 top-3">
            <span className="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              {category}
            </span>
          </div>
          {featured && (
            <div className="absolute right-3 top-3">
              <div className="rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 p-2">
                <FiStar size={14} className="fill-white text-white" />
              </div>
            </div>
          )}

          {hasLinks && (
            <div className="absolute bottom-3 left-3 right-3 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noreferrer"
                  className="inline-flex h-9 flex-1 items-center justify-center rounded-md bg-white px-3 text-sm font-medium text-black shadow-lg hover:bg-gray-100">
                  <FiExternalLink className="mr-2" />View
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noreferrer"
                  className="inline-flex h-9 flex-1 items-center justify-center rounded-md bg-white px-3 text-sm font-medium text-black shadow-lg hover:bg-gray-100">
                  <FiGithub className="mr-2" />Code
                </a>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 line-clamp-1 text-lg font-bold text-white transition-colors group-hover:text-blue-400">
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 flex-grow text-sm text-white/60">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, MAX_TAGS).map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-2.5 py-1 text-xs font-medium text-blue-300"
              >
                {technology}
              </span>
            ))}
            {technologies.length > MAX_TAGS && (
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60">
                +{technologies.length - MAX_TAGS}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
