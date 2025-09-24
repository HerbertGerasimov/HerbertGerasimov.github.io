import React from 'react';
import ProjectAccordion from './ProjectAccordion';
import { Category } from '../types';

interface CategorySectionProps {
  category: Category;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
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

  return (
    <section id={category.id} className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header with Glassmorphism */}
        <div 
          className="text-center mb-16 p-8"
          style={glassMorphismStyle}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-dmserif">
            {category.title}
          </h2>
          {category.description && (
            <p className="text-xl text-gray-200 font-body max-w-3xl mx-auto">
              {category.description}
            </p>
          )}
        </div>

        {/* Projects Container */}
        <div className="space-y-8">
          {category.projects.map((project) => (
            <ProjectAccordion key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;