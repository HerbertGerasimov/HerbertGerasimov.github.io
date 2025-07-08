import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Play, Eye } from 'lucide-react';
import { Project } from '../types';

interface ProjectAccordionProps {
  project: Project;
}

const ProjectAccordion: React.FC<ProjectAccordionProps> = ({ project }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const glassMorphismStyle = {
    background: 'rgba(30,144,255, 0.1)',
    backdropFilter: 'blur(20px)',
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
    background: 'rgba(0,144,255 0.15)',
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
    <div style={glassMorphismStyle} className="overflow-hidden mb-8 group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
      <button 
        className="w-full text-left overflow-hidden transition-all duration-500 relative"
        onClick={toggleOpen}
      >
        {!isOpen ? (
          // Enhanced Closed State with right-aligned image
          <div className="relative h-full flex">
            {/* Content Section - Takes most space */}
            <div className="flex-1 relative z-10 flex flex-col justify-between p-6 md:p-8">
              {/* Top Section - Category & Preview Indicator */}
              <div className="flex justify-between items-start">
                {project.category && (
                  <span 
                    className="px-3 py-1 text-xs font-medium text-white/90 uppercase tracking-wider"
                    style={buttonGlassStyle}
                  >
                    {project.category}
                  </span>
                )}
                
                <div className="flex items-center gap-2">
                  {project.demoUrl && (
                    <div 
                      className="p-2 rounded-full text-white/80 group-hover:text-white transition-colors"
                      style={buttonGlassStyle}
                    >
                      <ExternalLink size={16} />
                    </div>
                  )}
                  
                  {project.media.some(m => m.type === 'video' || m.type === 'youtube') && (
                    <div 
                      className="p-2 rounded-full text-white/80 group-hover:text-white transition-colors"
                      style={buttonGlassStyle}
                    >
                      <Play size={16} />
                    </div>
                  )}
                  
                  <div 
                    className="p-2 rounded-full text-white/80 group-hover:text-white transition-colors"
                    style={buttonGlassStyle}
                  >
                    <Eye size={16} />
                  </div>
                </div>
              </div>

              {/* Bottom Section - Main Content */}
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 leading-tight drop-shadow-lg font-dmserif">
                  {project.title}
                </h3>
                
                {/* Description with custom font */}
                <p className="font-anton text-lg md:text-xl lg:text-6xl uppercase font-medium text-white leading-relaxed drop-shadow-lg">
                  {project.shortDescription}
                </p>
                
                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 max-w-full">
                  {project.tools.slice(0, 4).map((tool, index) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium text-white/80 transition-all duration-300 font-urbanist"
                      style={{
                        ...buttonGlassStyle,
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 4 && (
                    <span
                      className="px-3 py-1 text-xs font-medium text-white/60 font-urbanist"
                      style={buttonGlassStyle}
                    >
                      +{project.tools.length - 4} more
                    </span>
                  )}
                </div>

                {/* Expand Indicator */}
                <div className="flex items-center justify-between pt-2">
                  <div className="text-white/70 text-sm font-medium font-urbanist">
                    Click to explore details
                  </div>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <ChevronDown className="text-white/80 w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section - Right aligned, partially hidden */}
            <div className="absolute right-0 top-0 bottom-0 w-4/4 md:w-3/4 lg:w-3/4">
              <div className="relative w-full h-full">
                {/* Image positioned to show right side */}
                <img
                  src={project.previewImage}
                  alt={project.title}
                  className="absolute right-0 top-0 w-full h-full object-cover object-right transition-all duration-700 group-hover:scale-105"
                  style={{
                    clipPath: ''
                  }}
                />
                
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent"></div>
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                                   radial-gradient(circle at 60% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                }}></div>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ) : (
          // Minimal Expanded Header
          <div className="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors">
            <h3 className="text-xl font-semibold text-white font-dmserif">{project.title}</h3>
            <ChevronUp className="text-white" />
          </div>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMediaIndex(index);
                    }}
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
              className="text-gray-200 font-urbanist leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.fullDescription }}
            />

            <div>
              <h4 className="font-medium text-white mb-2 font-urbanist">Verwendete Tools/Methoden</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-sm text-white font-urbanist"
                    style={buttonGlassStyle}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {project.documents && (
              <div>
                <h4 className="font-medium text-white mb-2 font-urbanist">Dokumente</h4>
                <ul className="space-y-2">
                  {project.documents.map((doc) => (
                    <li key={doc.title}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-300 hover:text-blue-200 transition-colors font-urbanist"
                        onClick={(e) => e.stopPropagation()}
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
                  className="inline-flex items-center px-4 py-2 text-white font-semibold transition-all duration-300 hover:scale-105 font-urbanist"
                  style={buttonGlassStyle}
                  onClick={(e) => e.stopPropagation()}
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