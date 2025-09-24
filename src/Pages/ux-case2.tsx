import React from 'react';
import CaseStudySection from '../components/CaseStudySection';

export default function UXCase2() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <CaseStudySection
        title="Fighting Game Interface Design"
        subtitle="Ein Interface Design Projekt zum Thema 'Destruktion'"
        titleSize="4xl"
        titleWeight="extrabold"
        subtitleSize="2xl"
        subtitleWeight="medium"
        titleFont="dmserif"
        bodyFont="urbanist"
        background="glass"
        titleColor ="text-red-500"
        subtitleColor = 'text-white'
        paragraphColor = 'text-white'
        className="pt-20"
        contentClassName="text-center"
      />

      {/* Section 1: Aufgabenstellung */}
      <CaseStudySection
        title="1. Aufgabenstellung"
        titleSize="3xl"
        titleWeight="bold"
        titleFont="dmserif"
        bodyFont="urbanist"
        textAlignment="justify"
        titleColor ="text-red-500"
        subtitleColor = 'text-white'
        paragraphColor = 'text-white'
        paragraphs={[
          {
            text: "Dieses Projekt entstand im Rahmen des Moduls Interface Design während meines Studiums. Die Aufgabe war bewusst offen, gleichzeitig aber durch klare gestalterische Vorgaben definiert: Das Interface durfte ausschließlich in Schwarz-Weiß gestaltet werden, ergänzt durch eine Akzentfarbe. Darüber hinaus stand das übergeordnete Thema „Destruktion\" im Mittelpunkt. Ziel war es, diese abstrakte Leitidee visuell und konzeptionell in eine konkrete digitale Anwendung zu übersetzen und so sowohl gestalterische als auch inhaltliche Tiefe zu erzeugen."
          }
        ]}
        images={[
          {
            src: "/images/projects/StartMenu.png",
            alt: "Start Menu Design"
          }
        ]}
        imageColumns={1}
        showDivider={true}
      />

      {/* Section 2: Mein Vorhaben */}
      <CaseStudySection
        title="2. Mein Vorhaben"
        titleSize="3xl"
        titleWeight="bold"
        titleFont="dmserif"
        bodyFont="urbanist"
        textAlignment="justify"
        paragraphs={[
          {
            text: "Mein Vorhaben bestand darin, einen Fighting-Game-Select-Screen zu gestalten, der den gesamten Ablauf vom Main-Menü über die Charakter- und Stage-Auswahl bis hin zu einer kurzen Pre-Fight-Animation abbildet. Damit wollte ich den kompletten Prozess bis zum Start des eigentlichen Gameplays simulieren. Die Idee entstand aus meiner persönlichen Begeisterung für Fighting-Games, die sich mit dem Thema Destruktion hervorragend verknüpfen ließ – sei es durch visuelle Elemente der Zerstörung oder durch die Atmosphäre des Wettbewerbs. Besonders reizvoll fand ich dabei, wie sich bereits vor Beginn des Gameplays über gezielt eingesetzte Interface-Elemente eine bestimmte Stimmung aufbauen lässt, die das Spielerlebnis vorbereitet und verstärkt."
          }
        ]}
        background="white"
        showDivider={true}
      />

      {/* Section 3: Designprozess */}
      <CaseStudySection
        title="3. Designprozess"
        titleSize="3xl"
        titleWeight="bold"
        titleFont="dmserif"
        bodyFont="urbanist"
        textAlignment="justify"
        background="glass"
        titleColor ="text-red-500"
        subtitleColor = 'text-white'
        paragraphColor = 'text-white'
        showDivider={true}
      >
        {/* Subsection 3.1: User-Journey */}
        <CaseStudySection
          title="3.1 User-Journey"
          titleSize="2xl"
          titleWeight="semibold"
          titleFont="dmserif"
          bodyFont="urbanist"
          textAlignment="justify"
          titleColor ="text-red-500"
        subtitleColor = 'text-white'
        paragraphColor = 'text-white'
          paragraphs={[
            {
              text: "Im Design-Prozess habe ich zunächst die komplette User-Journey definiert, von den einzelnen Screens bis hin zu den geplanten Ladezeiten. Diese sollten durch Animationen überbrückt werden, die zugleich die Stimmung Schritt für Schritt verstärken. Dabei folgt der Ablauf einer klaren Stimmungskurve: von Ruhe über neutrale Spannung bis hin zum maximalen Hype unmittelbar vor dem Kampf."
            }
          ]}
          images={[
            {
              src: "/images/projects/kod1.jpg",
              alt: "User Journey Design"
            }
          ]}
          imageColumns={1}
          className="!py-8"
        />

        {/* Subsection 3.2: Prototyping */}
        <CaseStudySection
          title="3.2 Prototyping"
          titleSize="2xl"
          titleWeight="semibold"
          titleFont="dmserif"
          bodyFont="urbanist"
          textAlignment="justify"
          titleColor ="text-red-500"
        subtitleColor = 'text-white'
        paragraphColor = 'text-white'
          paragraphs={[
            {
              text: "In diesem Schritt habe ich erste Low-Fidelity-Screens erstellt und damit den gesamten User-Flow aufgebaut. Auch wenn zu diesem Zeitpunkt noch Inhalte fehlten, war bereits die komplette Struktur des Prototyps erkennbar und der Ablauf von Menü über Auswahl bis zur Pre-Fight-Animation nachvollziehbar."
            }
          ]}
          images={[
            {
              src: "/images/projects/CharSelect.png",
              alt: "Character Selection Prototype"
            }
          ]}
          columns={2}
          imageColumns={1}
          className="!py-8"
        />

        {/* Subsection 3.3: Asset-Produktion */}
        <CaseStudySection
          title="3.3 Asset-Produktion"
          titleSize="2xl"
          titleWeight="semibold"
          titleFont="dmserif"
          bodyFont="urbanist"
          textAlignment="justify"
          titleColor ="text-red-500"
        subtitleColor = 'text-white'
        paragraphColor = 'text-white'
          paragraphs={[
            {
              text: "Für die Charaktere nutzte ich die Bildgenerierungs-AI Stable Diffusion, die zu diesem Zeitpunkt noch recht neu war und ausschließlich lokal auf dem eigenen Rechner gerendert werden musste. Ergänzend habe ich Charakter-Voicelines und kurze One-Liner mit 11Labs erstellt, während Sound-Effekte und UI-Sounds aus gängigen Libraries stammten. Das Logo sowie weitere grafische Elemente habe ich selbst entworfen und so ein stimmiges Set an Assets für den Prototyp zusammengestellt."
            }
          ]}
          images={[
            {
              src: "/images/projects/blitz1.png",
              alt: "Blitz Character"
            },
            {
              src: "/images/projects/ice.png",
              alt: "Ice Character"
            },
            {
              src: "/images/projects/tokyo2100.png",
              alt: "Tokyo Character"
            },
            {
              src: "/images/projects/Drilling.png",
              alt: "Drilling Character"
            }
          ]}
          imageColumns={2}
          className="!py-8"
        />
      </CaseStudySection>

      {/* Section 4: Ergebnis */}
      <CaseStudySection
        title="4. Ergebnis"
        titleSize="3xl"
        titleWeight="bold"
        titleFont="dmserif"
        bodyFont="urbanist"
        textAlignment="justify"
        paragraphs={[
          {
            text: "Das Resultat ist ein voll funktionsfähiger Prototyp in Adobe XD, der den kompletten Ablauf von Menü bis Pre-Fight-Animation abbildet. Da Sound-UI-Elemente in XD nicht nativ umsetzbar sind, habe ich zusätzlich ein Demo-Video erstellt, das diese Elemente integriert und die gewünschte Atmosphäre transportiert. Damit liegt sowohl ein interaktiver Prototyp zur direkten Erkundung als auch eine audiovisuelle Vorschau vor, die den finalen Eindruck des Projekts erlebbar macht."
          }
        ]}
        videos={[
          {
            src: "https://www.youtube.com/embed/Cn-CXOACPtE",
            title: "Demo Video - Fighting Game Interface Design"
          },
          {
            src: "https://xd.adobe.com/embed/ae33d3a2-599e-4da8-a768-92f1badfe05d-fb60/",
            title: "Adobe XD Prototype - Interactive Experience"
          }
        ]}
        background="white"
        showDivider={true}
      />

      {/* Section 5: Learnings */}
      <CaseStudySection
        title="5. Learnings"
        titleSize="3xl"
        titleWeight="bold"
        titleFont="dmserif"
        bodyFont="urbanist"
        textAlignment="justify"
        titleColor ="text-red-500"
        subtitleColor = 'text-white'
        paragraphColor = 'text-white'
        paragraphs={[
          {
            text: "Das Projekt war für mich eine sehr spannende Erfahrung, die mir nicht nur viel Freude bereitet hat, sondern auch ein Ergebnis hervorgebracht hat, mit dem ich insgesamt zufrieden bin. Rückblickend würde ich vor allem an einzelnen visuellen Interface-Elementen noch feilen – etwa durch eine klarere Typografie und eine präzisere visuelle Hierarchie, um das Gesamtbild noch stimmiger zu machen. Besonders wertvoll war für mich das Erlernen eines komplexen Prototyping-Prozesses, der in seiner Umsetzung durchaus aufwendig was. Zudem konnte ich meine Erfahrungen in der Asset-Produktion erweitern, wobei mir die Arbeit an Sound-UI-Elementen besonders viel Spaß gemacht hat."
          }
        ]}
        background="glass"
      />
    </div>
  );
}
