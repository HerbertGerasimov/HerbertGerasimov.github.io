import Header from '../components/Header';
import CaseStudySection from '../components/CaseStudySection';

export default function UxCase1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Table of Contents / Navigation */}
      <CaseStudySection
        title="Case Study – athenia.brain"
        subtitle="KI-gestütztes Offboarding-System für Unternehmen"
        titleSize="4xl"
        titleWeight="bold"
        subtitleSize="xl"
        subtitleWeight="bold"
        columns={1}
        titleFont="dmserif"
        bodyFont="body"
        className="pt-20"
        background="glass"
        showDivider={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <a href="#problemstellung" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2">1. Problemstellung</h3>
            <p className="text-sm text-gray-600">Herausforderungen beim Mitarbeiter-Offboarding</p>
          </a>
          <a href="#zielsetzung" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2">2. Zielsetzung & Rolle</h3>
            <p className="text-sm text-gray-600">Projektziele und meine Verantwortung</p>
          </a>
          <a href="#vorgehen" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2">3. Vorgehen</h3>
            <p className="text-sm text-gray-600">Double-Diamond Prozessmodell</p>
          </a>
          <a href="#designprozess" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2">4. Designprozess</h3>
            <p className="text-sm text-gray-600">Nutzergruppen, Journeys & Designsystem</p>
          </a>
          <a href="#evaluation" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2">5. Evaluation</h3>
            <p className="text-sm text-gray-600">Nutzerfeedback und Ergebnisse</p>
          </a>
          <a href="#learnings" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2">6. Learnings & Ausblick</h3>
            <p className="text-sm text-gray-600">Erkenntnisse und zukünftige Entwicklung</p>
          </a>
        </div>
      </CaseStudySection>

      {/* Problem Statement Section */}
      <CaseStudySection
        id="problemstellung"
        title="1. Problemstellung"
        titleSize="3xl"
        columns={1}
        paragraphColumns = {2}
        imageColumns = {2}
        textAlignment="left"
        paragraphs={[
          {
            subheading: "Herausforderung beim Mitarbeiter-Offboarding",
            text: "Wenn langjährige Mitarbeiter den Ruhestand antreten, stellt das oft eine Herausforderung für die Unternehmen dar. So viele Jahre an Fachwissen lassen sich meistens nicht so einfach erfassen, und laufen Gefahr zusammen mit dem Mitarbeiter auszuscheiden. Um dem vorzugehen, stellten die Unternehmen die Mitarbeiter oft noch als Berater ein. Das kostet allerdings nicht nur finanzielle Mittel, sondern ist auch nicht immer eine Option, sollte der Mitarbeiter kein Interesse oder keine Möglichkeit an einer Beraterfunktion haben, steht das Unternehmen vor einem Problem."
          },
          {
            subheading: "Innovative Lösung durch KI-Technologie",
            text: "Die Gründer von athenia.brain haben sich eine Lösung für dieses Problem überlegt. Sie möchten eine Anwendung entwickeln, welche mithilfe von Large-Language-Model Technologie alle betriebsrelevanten Informationen des Mitarbeiters erfasst, und diese dann in Form eines „Digital Twins\" dem Unternehmen zur Verfügung stellt."
          }
        ]}
        images={[
          {
            src: "/images/projects/athenia.png",
            alt: "Athenia Brain - KI-gestütztes Offboarding-System"
          }
        ]}
        titleFont="dmserif"
        bodyFont="body"
        background="white"
        showDivider={true}
      />

      {/* Goal & Role Section */}
      <CaseStudySection
        id="zielsetzung"
        title="2. Zielsetzung und meine Rolle"
        titleSize="3xl"
        columns={1}
        paragraphColumns = {2}
        imageColumns = {3}
        paragraphs={[
          {
            subheading: "Zielsetzung",
            text: "Die Arbeit hatte zum Ziel, zentrale Aspekte der User Experience sowie das gesamte User Interface in Form eines interaktiven Prototyps umzusetzen. Der Fokus lag darauf, eine konsistente Gestaltung und eine klare Nutzerführung zu schaffen, die als Grundlage für die weitere Entwicklung und als visuelle Vision des Projekts dienen konnte."
          },
          {
            subheading: "Meine Rolle",
            text: "Ich war verantwortlich für den gesamten UX/UI-Designprozess: von der Analyse und Konzeption über Wireframes, User Journeys und den Aufbau eines Designsystems bis hin zur Umsetzung eines klickbaren UI-Prototyps. Ergänzend habe ich eine Evaluation durchgeführt, um die Benutzerfreundlichkeit zu überprüfen und Optimierungspotenziale abzuleiten."
          }
        ]}
        images={[
          {
            src: "/images/projects/fig1.gif",
            alt: "Design Process Animation 1"
          },
          {
            src: "/images/projects/fig2.gif",
            alt: "Design Process Animation 2"
          },
          {
            src: "/images/projects/fig3.gif",
            alt: "Design Process Animation 3"
          }
        ]}
        titleFont="dmserif"
        bodyFont="body"
        textAlignment="justify"
        background="glass"
        showDivider={true}
      />

      {/* Process Section */}
      <CaseStudySection
        id="vorgehen"
        title="3. Vorgehen"
        titleSize="3xl"
        columns={1}
        paragraphColumns = {1}
        imageColumns = {1}
        paragraphs={[
          {
            subheading: "Double-Diamond Prozessmodell",
            text: "<p>Für die Umsetzung habe ich mich am <strong>Double-Diamond-Modell</strong> orientiert. Der Prozess lässt sich grob in vier Phasen gliedern:</p><ul><li><strong>Discover</strong> – Verstehen des Problems: Sammlung erster Anforderungen durch Gespräche mit den Gründern und Analyse des geplanten Konzepts.</li><li><strong>Define</strong> – Eingrenzung der Anforderungen: Priorisierung von Funktionen, Definition der drei Hauptnutzergruppen (Administration, Offboarding-Mitarbeiter, Informationssuchende).</li><li><strong>Develop</strong> – Gestaltung & Iteration: Erstellung von User Journeys, Wireframes und ersten Designkomponenten.</li><li><strong>Deliver</strong> – Umsetzung des Prototyps und Evaluation durch eine Nutzerumfrage.</li></ul><p>"
          },
          
        ]}
        images={[
          {
            src: "/images/projects/dd.png",
            alt: "Double Diamond Process Model"
          }
        ]}
        titleFont="dmserif"
        bodyFont="body"
        textAlignment="left"
        background="white"
        showDivider={true}
      />

      {/* Design Process Section */}
      <CaseStudySection
        id="designprozess"
        title="4. Designprozess"
        titleSize="3xl"
        columns={1}
        paragraphs={[
          {
            subheading: "4.1 Nutzergruppen & Personas",
            text: "<p><strong>Drei Hauptnutzergruppen wurden identifiziert:</strong></p><ul><li><strong>Administration</strong> → Verwaltung von Zugängen, Rollen und Prozessen.</li><li><strong>Offboarding-Mitarbeiter</strong> → Dokumentation von Wissen, Übergabe von Erfahrungen.</li><li><strong>Informationssuchende</strong> → Zugriff auf den Digital Twin und gezielte Wissensabfragen.</li></ul><p>Für jede Gruppe wurden Personas und typische Nutzungsszenarien entworfen, die als Grundlage für die User Journeys dienten.</p>"
          }
        ]}
        
        titleFont="dmserif"
        bodyFont="body"
        textAlignment="justify"
        background="glass"
      />

      {/* User Journeys */}
      <CaseStudySection
        title="4.2 User Journeys & Flows"
        titleSize="2xl"
        columns={1}
        paragraphColumns = {1}
        imageColumns = {2}
        paragraphs={[
          {
            text: "Anhand der Personas wurden User Journeys erstellt, um die wichtigsten Touchpoints zu verstehen. Besonders zentral war der Prozess des Offboardings: Von der ersten Aufforderung durch die Administration, über die Eingabe von Wissen, bis hin zur späteren Nutzung durch Informationssuchende. Diese Journeys halfen, die Navigationsstruktur der Anwendung klar aufzubauen."
          }
        ]}
        images={[
          {
            src: "/images/projects/Thesis1.1.jpg",
            alt: "User Journey Diagram 1"
          },
          {
            src: "/images/projects/Thesis1.jpg",
            alt: "User Journey Diagram 2"
          }
        ]}
        titleFont="dmserif"
        bodyFont="body"
        textAlignment="justify"
        background="white"
      />

      {/* Wireframes */}
      <CaseStudySection
        title="4.3 Wireframes"
        titleSize="2xl"
        columns={2}
        paragraphs={[
          {
            text: "Die Wireframes dienten als erster visueller Entwurf. Sie zeigten die grundlegende Navigation (Dashboard, Chat mit dem Digital Twin, Verwaltungsbereiche). Dabei war mir wichtig, die Informationshierarchie klar darzustellen und überflüssige Elemente zu vermeiden."
          }
        ]}
        images={[
          {
            src: "/images/projects/Thesis2.jpg",
            alt: "Wireframe Designs"
          }
        ]}
        titleFont="dmserif"
        bodyFont="body"
        textAlignment="justify"
        background="glass"
      />

      {/* Design System */}
      <CaseStudySection
        title="4.4 Designsystem"
        titleSize="2xl"
        columns={1}
        paragraphColumns = {1}
        imageColumns = {2}
        paragraphs={[
          {
            text: "<p>Um eine konsistente Gestaltung sicherzustellen, habe ich ein <strong>Designsystem nach dem Atomic-Design-Prinzip</strong> aufgebaut:</p><ul><li><strong>Atoms</strong>: Buttons, Inputs, Typografie.</li><li><strong>Molecules</strong>: Formulare, Karten, Navigations-Elemente.</li><li><strong>Organisms</strong>: Dashboard, Chat-Interface, Übersichtsseiten.</li></ul><p>Das System ermöglichte es, schnell neue Screens zu entwickeln und gleichzeitig visuelle Konsistenz zu wahren.</p>"
          }
        ]}
        images={[
          {
            src: "/images/projects/Thesis3.jpg",
            alt: "Design System Components 1"
          },
          {
            src: "/images/projects/Thesis4.jpg",
            alt: "Design System Components 2"
          }
        ]}
        titleFont="dmserif"
        bodyFont="body"
        textAlignment="left"
        background="white"
      />

      {/* Prototype */}
      <CaseStudySection
        title="4.5 Prototyp"
        titleSize="2xl"
        columns={1}
        paragraphColumns = {1}
        imageColumns = {2}
        paragraphs={[
          {
            text: "Der interaktive Prototyp wurde in Figma umgesetzt und machte die Journeys der drei Nutzergruppen erlebbar. Besonders wichtig war die Umsetzung des Digital-Twin-Chats, der später als Kernfunktion dienen soll. Der Prototyp visualisiert, wie ein Nutzer Fragen stellt und darauf strukturierte Antworten vom Digital Twin erhält."
          }
        ]}
        images={[
          {
            src: "/images/projects/Thesis5.jpg",
            alt: "Interactive Prototype"
          },
          {
            src: "/images/projects/Thesis6.jpg",
            alt: "Interactive Prototype"
          }
        ]}
        titleFont="dmserif"
        bodyFont="body"
        textAlignment="justify"
        background="glass"
        showDivider={true}
      />

      {/* Evaluation Section */}
      <CaseStudySection
        id="evaluation"
        title="5. Evaluation"
        titleSize="3xl"
        columns={1}
        paragraphs={[
          {
            subheading: "Nutzerumfrage und Ergebnisse",
            text: "Um die Benutzerfreundlichkeit des Prototyps zu überprüfen, habe ich eine Umfrage mit Testnutzern durchgeführt. Die Teilnehmer bekamen zentrale Aufgaben (z. B. eine Wissensabfrage im Chat starten, Rollen im Admin-Bereich verwalten) und gaben anschließend Feedback."
          },
          {
            subheading: "Ergebnisse:",
            text: "<ul><li><strong>Positiv:</strong> Die meisten Nutzer fanden die Anwendung intuitiv bedienbar und lobten die klare Struktur.</li><br><li><strong>Verbesserungsbedarf:</strong> Vor allem die Navigation und die Individualisierungsmöglichkeiten wurden kritisch gesehen. Einige Nutzer wünschten sich mehr Flexibilität bei der Darstellung von Inhalten und eine noch klarere Orientierung innerhalb der Anwendung.</li></ul><br><p>Diese Rückmeldungen halfen mir, konkrete Optimierungsvorschläge abzuleiten, z. B. eine verbesserte Navigationsleiste, mehr visuelles Feedback und erweiterte Filterfunktionen im Informationsbereich.</p>"
          }
        ]}
        titleFont="dmserif"
        bodyFont="body"
        textAlignment="justify"
        background="white"
        showDivider={true}
      />

      {/* Learnings & Outlook Section */}
      <CaseStudySection
        id="learnings"
        title="6. Learnings und Ausblick"
        titleSize="3xl"
        columns={1}
        paragraphs={[
          {
            subheading: "Workflow-Erkenntnisse",
            text: "Ich habe gemerkt, dass ein linearer Workflow bei so einem Projekt nicht die beste Vorgehensweise ist. Hintergrund dieser Erkenntnis ist, dass die optimale Umsetzung von Projekten dieser Art große Design-Teams erfordert, die mehrere Arbeitsschritte asynchron voneinander umsetzen. So musste ich beispielsweise nicht unbedingt alle Wireframes oder User-Flows abgeschlossen haben, um mit der Entwicklung des Design-Systems anzufangen. Zwar bauen die einzelnen Arbeitsschritte irgendwo aufeinander auf, doch nicht in einem Umfang, dass sie linear abgearbeitet werden müssen. Ich würde sogar behaupten, eine asynchrone Herangehensweise hilft, den gesamten Prozess besser visualisieren zu können."
          },
          {
            subheading: "Fokussetzung",
            text: "Wie schon erwähnt, ist die optimale Umsetzung sehr zeit- und ressourcenaufwändig, jedoch nicht unmöglich oder unbrauchbar für eine einzelne Person. Es muss einfach der richtige Fokus gesetzt werden. So wurde z. B. im Vorfeld kein präzises UX-Research betrieben. Klar haben die Gründer ein paar Interviews gemacht und konnten in Erfahrung bringen, dass an einer Anwendung in der Form ein potenzielles Nutzerinteresse besteht, doch haben trotzdem klare Nutzer-Erkenntnisse gefehlt. Ohne diese ist es schwierig, präzise Anforderungen zu definieren. Es macht also Sinn, die Anforderungen im Moment gröber zu lassen und den Fokus auf einen relevanteren Aspekt zu setzen."
          },
          {
            subheading: "Erfahrung und Entwicklung",
            text: "Ich denke, dieses Projekt konnte mir gut vor Augen führen, was einen guten UX-Designer ausmacht. Die Fähigkeit zu erkennen, wie er für sich und damit auch für das Projekt am besten arbeiten kann, und die Erfahrung einzuschätzen, welche Aspekte den größten Fokus benötigen. Wenn man zudem die Fähigkeit besitzt, sich selbst kritisch zu evaluieren, dann hat man eine gute Grundlage, um nicht nur aktuelle Herausforderungen zu meistern, sondern auch bei zukünftigen Projekten gezielt bessere Entscheidungen zu treffen, die Qualität der eigenen Arbeit stetig zu steigern und damit langfristig zu einem besseren Designer zu werden."
          }
        ]}
        titleFont="dmserif"
        bodyFont="body"
        textAlignment="justify"
        background="glass"
      />
    </div>
  );
}
