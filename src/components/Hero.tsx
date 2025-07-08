import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-0 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/projects/bg4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>


      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative overflow-hidden flex items-center justify-center p-6">


              {/* Glassmorphism Hero Card */}
              <div className="relative z-10 glass-card">
                <div className="text-center space-y-1 md:space-y-4 lg:space-y-6">
                  {/* Main Heading */}
                  <h1 className="text-4xl md:text-4xl lg:text-8xl font-bold text-gray-800 tracking-tight">
                    <span className="font-dmserif bg-gradient-to-r from-purple-600 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                      Herbert Gerasimov
                    </span>
                  </h1>

                  {/* Subtitle Lines */}
                  <div className="space-y-2">
                    <p className="text-lg md:text-xl text-gray-600 font-urbanist tracking-wide">
                      Digital Designer & Developer
                    </p>
                    <p className="text-lg md:text-xl text-gray-500  font-urbanist tracking-wide">
                      UX, Web & Motion Design
                    </p>
                  </div>

                  {/* Call-to-Action Button */}
                  <div className="pt-4">
                    <button className="glass-button group relative inline-block w-fit rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3"  >

                      <a
                        href="#ux/ui"
                        className="font-urbanist relative z-10 text-xs md:text-sm lg:text-xl font-medium text-purple-500 group-hover:text-purple-400 transition-colors duration-300">
                        Portfolio ansehen
                      </a>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </button>
                  </div>
                </div>
              </div>

              <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 4rem 3rem;
          box-shadow: 
            -3px 3px 3px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          position: relative;
          max-width: 600px;
          width: 100%;
        }
        
        .glass-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }
        
        .glass-button {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 16px;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 
            -3px 3px 3px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        .glass-button:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          border-color: rgba(255, 255, 255, 0.4);
        }
        
        .glass-button:active {
          transform: translateY(0);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .glass-card {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @media (max-width: 768px) {
          .glass-card {
            padding: 2.5rem 2rem;
            margin: 1rem;
          }
        }
      `}</style>
            </div>
            {/* Profile Image Container */}
            <div className="relative h-64 sm:h-80 md:h-full lg:h-full right-0 order-2 lg:order-1 ">
              <img
                src="/images/projects/profil2.png"
                alt="Herbert Gerasimov"
                className="w-full h-full max-w-full object-contain object-bottom transition-transform duration-700 hover:scale-105 bg-transparent opacity-80"
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center z-20 animate-fade-in animation-delay-1000">
        <a
          href="#ux/ui"
          className="group text-white/80 hover:text-white transition-colors duration-300"
          aria-label="Scroll to projects"
        >
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <span className="text-xs sm:text-sm font-medium opacity-75 group-hover:opacity-100 transition-opacity">
              Scroll
            </span>
            <ChevronDown
              size={24}
              className="sm:w-8 sm:h-8 animate-bounce group-hover:transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;