import React from 'react';
import { Code, Palette, Smartphone, Video } from 'lucide-react';

const Skills: React.FC = () => {
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

  const skills = [
    { icon: <Code size={32} />, title: "Frontend Development", desc: "React, TypeScript, Vue.js" },
    { icon: <Palette size={32} />, title: "UI/UX Design", desc: "Figma, Adobe Creative Suite" },
    { icon: <Smartphone size={32} />, title: "Mobile Design", desc: "Responsive & Native Apps" },
    { icon: <Video size={32} />, title: "Motion Graphics", desc: "After Effects, Cinema 4D" }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={glassMorphismStyle}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-200 font-body">
            Core competencies that drive exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="p-8 text-center group transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={glassMorphismStyle}
            >
              {/* Icon */}
              <div className="text-blue-400 mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-changa font-bold text-white mb-4 font-display">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed font-body">
                {skill.desc}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;