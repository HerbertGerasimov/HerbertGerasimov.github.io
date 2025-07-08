import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Impressum: React.FC = () => {
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

  return (
    <section id="impressum" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div 
            className="text-center mb-12 p-8"
            style={glassMorphismStyle}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Impressum
            </h2>
            <p className="text-xl text-gray-200 font-body">
              Angaben gemäß § 5 TMG
            </p>
          </div>

          <div 
            className="p-8 space-y-8"
            style={glassMorphismStyle}
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4 font-display">
                Kontaktdaten
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2 font-display">
                      Verantwortlich für den Inhalt
                    </h4>
                    <p className="text-gray-200 font-body">
                      Herbert Gerasimov<br />
                      Creative Designer & Developer
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div 
                      className="p-3 rounded-lg"
                      style={buttonGlassStyle}
                    >
                      <MapPin className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium font-body">Adresse</p>
                      <p className="text-gray-300 font-body">
                        Musterstraße 123<br />
                        10178 Berlin<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-3 rounded-lg"
                      style={buttonGlassStyle}
                    >
                      <Mail className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium font-body">E-Mail</p>
                      <a 
                        href="mailto:hello@herbertgerasimov.com" 
                        className="text-blue-300 hover:text-blue-200 transition-colors font-body"
                      >
                        hello@herbertgerasimov.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div 
                      className="p-3 rounded-lg"
                      style={buttonGlassStyle}
                    >
                      <Phone className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium font-body">Telefon</p>
                      <p className="text-gray-300 font-body">+49 123 456789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-2xl font-semibold text-white mb-6 font-display">
                Rechtliche Hinweise
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-white mb-3 font-display">
                    Haftung für Inhalte
                  </h4>
                  <p className="text-gray-200 leading-relaxed font-body">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white mb-3 font-display">
                    Haftung für Links
                  </h4>
                  <p className="text-gray-200 leading-relaxed font-body">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white mb-3 font-display">
                    Urheberrecht
                  </h4>
                  <p className="text-gray-200 leading-relaxed font-body">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact for Legal Matters */}
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-2xl font-semibold text-white mb-4 font-display">
                Rechtliche Anfragen
              </h3>
              <p className="text-gray-200 mb-4 font-body">
                Für rechtliche Anfragen und Beschwerden wenden Sie sich bitte an:
              </p>
              <a
                href="mailto:legal@herbertgerasimov.com"
                className="inline-flex items-center px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 font-body"
                style={buttonGlassStyle}
              >
                <Mail size={16} className="mr-2" />
                legal@herbertgerasimov.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;