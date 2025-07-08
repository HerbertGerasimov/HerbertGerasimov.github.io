import React from 'react';
import { Code, Palette, PenTool , Video,} from 'lucide-react';

const WhatIDo: React.FC = () => {
  const glassMorphismStyle = {
    background: 'rgba(64,224,208, 0.1)',
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

  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Entwicklung",
      description: "Moderne, leistungsstarke Websites und Webanwendungen, entwickelt mit aktuellen Technologien wie React, TypeScript und modernen Frameworks – optimiert für alle Endgeräte.",
      features: ["Responsive Design", "Kompatibilität mit allen gängigen Browsern", "Moderne Frameworks", "Frontend-Entwicklung mit Code oder CMS"]
    },
    {
      icon: <Palette size={40} />,
      title: "UX/UI Design",
      description: "Gestaltung intuitiver und ästhetischer Benutzeroberflächen, die auf allen Geräten und Plattformen ein herausragendes Nutzungserlebnis bieten.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systeme"]
    },
    {
      icon: <PenTool  size={40} />,
      title: "Grafik Design",
      description: "Kreatives Grafikdesign für starke visuelle Identitäten – von Logos und Typografie bis hin zu Flyern, Plakaten und digitalen Werbemitteln.",
      features: ["Flyer & Plakate", "Typografie", "Social Media Assets", "Logo-Design"]
    },
    {
      icon: <Video size={40} />,
      title: "Motion Graphics",
      description: "Umsetzung von Designs mit lebendigen Animationen, Videoinhalten und interaktiven Motion Graphics, die fesselnde Geschichten erzählen.",
      features: ["2D/3D Animation", "Video Editing", "Sound-Design", "Storytelling"]
    },
  ];

  return (
    <section id="leistungen" className="py-20 px-6">
      <div className="container mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={glassMorphismStyle}
        >
          <h2 className="text-4xl font-dmserif md:text-5xl font-bold text-white mb-4">
            Meine Leistungen
          </h2>
          <p className="text-xl text-gray-200 font-urbanist max-w-3xl mx-auto">
            I offer a comprehensive range of creative services to help bring your vision to life, 
            from initial concept to final implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-8 group transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={glassMorphismStyle}
            >
              {/* Icon */}
              <div className="text-green-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 font-dmserif">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 font-urbanist mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider font-urbanist">
                  Schwerpunkte
                </h4>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-400 flex items-center font-urbanist">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;