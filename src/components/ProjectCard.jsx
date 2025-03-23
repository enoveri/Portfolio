import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, description, technologies, imageUrl, githubLink, liveLink } =
    project;

  return (
    <div className="card flex flex-col h-full relative overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            console.error(`Error loading image: ${imageUrl}`);
            e.target.src =
              "https://via.placeholder.com/400x200?text=Project+Image";
          }}
        />
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-[var(--accent)]">{title}</h3>

        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-[var(--accent-transparent)] text-[var(--accent)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--accent)] transition-colors"
              aria-label={`GitHub repository for ${title}`}
            >
              <FaGithub size={20} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--accent)] transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
