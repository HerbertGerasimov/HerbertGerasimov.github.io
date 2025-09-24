import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronUp, ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  
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

  const toggleImpressum = () => {
    setIsImpressumOpen(!isImpressumOpen);
  };

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div 
        className="container mx-auto text-center p-6"
        style={glassMorphismStyle}
      >
        <div className="mb-4">
          <h2 className="text-white text-xl font-semibold mb-2 font-urbanist">Herbert Gerasimov</h2>
          <p className="text-gray-300 text-sm font-urbanist">Digital Designer & Developer</p>
        </div>
        
        <div className="border-t border-white/20 pt-4">
          <p className="text-gray-300 font-urbanist">
            © {currentYear} Herbert Gerasimov. Alle Rechte vorbehalten.
          </p>
          <div className="mt-2">
            <button 
              onClick={toggleImpressum}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-urbanist hover:underline"
            >
              Impressum
              {isImpressumOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>

        {/* Impressum Content - Expandable */}
        {isImpressumOpen && (
          <div className="mt-8 border-t border-white/20 pt-8">
            <div className="text-left space-y-8">
              {/* Header */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2 font-urbanist">
                  Impressum
                </h3>
                <p className="text-lg text-gray-200 font-urbanist">
                  Angaben gemäß § 5 TMG
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-lg font-medium text-white mb-2 font-urbanist">
                        Seitenbetreiber
                      </h5>
                      <p className="text-gray-200 font-urbanist">
                        Herbert Gerasimov<br />
                        Dronstetterstraße 19<br />
                        72293 Glatten
                      </p>
                    </div>

                    <div>
                      <h5 className="text-lg font-medium text-white mb-2 font-urbanist">
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                      </h5>
                      <p className="text-gray-200 font-urbanist">
                        DE360809134
                      </p>
                    </div>

                    <div>
                      <h5 className="text-lg font-medium text-white mb-2 font-urbanist">
                        Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:
                      </h5>
                      <p className="text-gray-200 font-urbanist">
                        Herbert Gerasimov (Anschrift wie oben)
                      </p>
                    </div>

                    
                  </div>

                  
                </div>
              </div>

              {/* Legal Information */}
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-xl font-semibold text-white mb-4 font-urbanist">
                  Rechtliche Hinweise
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-medium text-white mb-2 font-urbanist">
                      Haftung für Inhalte
                    </h5>
                    <p className="text-gray-200 leading-relaxed font-urbanist text-sm">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                      unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-medium text-white mb-2 font-urbanist">
                      Haftung für Links
                    </h5>
                    <p className="text-gray-200 leading-relaxed font-urbanist text-sm">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-medium text-white mb-2 font-urbanist">
                      Urheberrecht
                    </h5>
                    <p className="text-gray-200 leading-relaxed font-urbanist text-sm">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                      Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                      Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </div>

              

              {/* Close Button */}
              <div className="text-center pt-4">
                <button
                  onClick={toggleImpressum}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white transition-colors font-urbanist"
                  style={buttonGlassStyle}
                >
                  <ChevronUp size={16} />
                  Schließen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;