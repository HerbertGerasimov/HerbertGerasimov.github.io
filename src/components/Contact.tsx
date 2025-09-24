import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const glassMorphismStyle = {
    background: 'rgba(255,255,255, 0.1)',
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
    background: 'rgba(255,255,255, 0.15)',
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

  return (
    <section id="kontakt" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center mb-12 p-8"
            style={glassMorphismStyle}
          >
            <h2 className="text-4xl  md:text-5xl font-bold text-white mb-4 font-dmserif">
              Interesse an einer Zusammenarbeit?
            </h2>
            <p className="text-xl text-gray-200 font-urbanist">
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            style={glassMorphismStyle}>


            {/* Contact Info */}
            <div
              className="p-16">
              <h3 className="text-2xl font-semibold text-white mb-6 font-urbanist">Kontakt</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={buttonGlassStyle}
                  >
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium font-urbanist">Email</p>
                    <p className="text-gray-300 font-urbanist"><a href="mailto:Herbert.Gerasimov@web.de" className="hover:underline">
                      Herbert.Gerasimov@web.de
                    </a></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={buttonGlassStyle}
                  >
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium font-urbanist">Telefon</p>
                    <p className="text-gray-300 font-urbanist"><a href="tel:+491751510033" className="hover:underline">
                      +49 175 1510033
                    </a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={buttonGlassStyle}
                  >
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium font-urbanist">Standort</p>
                    <p className="text-gray-300 font-urbanist">Furtwangen, Deutschland</p>
                  </div>
                </div>

              </div>


            </div>
            {/* Profile Image Container */}
            <div className="relative h-full sm:h-80 md:h-full lg:h-full flex items-end order-2 lg:order-2 ">
              <img
                src="/images/projects/profil.png"
                alt="Herbert Gerasimov"
                className="w-full h-full max-w-full object-contain object-bottom transition-transform duration-700  bg-transparent opacity-80"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-end justify-center lg:justify-end p-4 rounded-lg">
                      <div class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">HG</div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;