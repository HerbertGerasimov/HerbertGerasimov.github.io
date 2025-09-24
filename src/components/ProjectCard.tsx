import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectAccordionProps {
  project: Project;
}

const ProjectAccordion: React.FC<ProjectAccordionProps> = ({ project }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const glassMorphismStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '24px',
    boxShadow: `
      -3px 3px 3px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1)
    `
  };

  const buttonGlassStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    boxShadow: `
      -2px 2px 2px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1)
    `
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={glassMorphismStyle} className="overflow-hidden mb-6">
      <button 
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        onClick={toggleOpen}
      >
        <div className="flex items-center justify-between w-full">
  <div className="flex items-center gap-4">
    <div>
      <h3 className="text-xl font-semibold text-white text-left">{project.title}</h3>
      {!isOpen && (
        <p className="font-Segoe UI mt-1 text-gray-200 text-left">{project.shortDescription}</p>
      )}
    </div>
  </div>

  {!isOpen && (
    <div className="w-40 h-30 overflow-hidden rounded-md">
      <img
        src={project.previewImage}
        alt={project.title}
        className="w-full h-full object-cover object-right"
      />
    </div>
  )}
</div>

        {isOpen ? (
          <ChevronUp className="text-white" />
        ) : (
          <ChevronDown className="text-white" />
        )}
      </button>

      {isOpen && (
        <div className="p-6 grid md:grid-cols-2 gap-8 border-t border-white/20">
          {/* Media Section */}
          <div className="space-y-4">
            <div 
              className="w-auto rounded-lg overflow-hidden flex justify-center items-center p-4"
              style={buttonGlassStyle}
            >
              {project.media[activeMediaIndex].type === 'video' ? (
                <video
                  src={project.media[activeMediaIndex].url}
                  controls
                  className="w-full h-full object-cover max-w-[700px] max-h-[550px] rounded-lg"
                />
              ) : project.media[activeMediaIndex].type === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.media[activeMediaIndex].youtubeId}`}
                  title="YouTube video"
                  className="w-full h-full max-w-[700px] max-h-[550px] aspect-video rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={project.media[activeMediaIndex].url}
                  alt={project.title}
                  className="object-cover min-w-[300px] min-h-[300px] max-w-[700px] max-h-[550px] w-auto h-auto block mx-auto rounded-lg"
                />
              )}
            </div>

            {project.media.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.media.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMediaIndex(index)}
                    className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 transition-all duration-300 ${
                      activeMediaIndex === index ? 'ring-2 ring-blue-400' : ''
                    }`}
                    style={buttonGlassStyle}
                  >
                    {media.type === 'video' ? (
                      <video src={media.url} className="w-full h-full object-cover" />
                    ) : media.type === 'youtube' ? (
                      <img
                        src={`https://img.youtube.com/vi/${media.youtubeId}/mqdefault.jpg`}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={media.url}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="space-y-4">
            <p
              className="text-gray-200"
              dangerouslySetInnerHTML={{ __html: project.fullDescription }}
            />

            <div>
              <h4 className="font-medium text-white mb-2">Verwendete Tools/Methoden</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-sm text-white"
                    style={buttonGlassStyle}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {project.documents && (
              <div>
                <h4 className="font-medium text-white mb-2">Dokumente</h4>
                <ul className="space-y-2">
                  {project.documents.map((doc) => (
                    <li key={doc.title}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-300 hover:text-blue-200 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.demoUrl && (
              <div>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-white font-semibold transition-all duration-300 hover:scale-105"
                  style={buttonGlassStyle}
                >
                  Live Demo
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectAccordion;