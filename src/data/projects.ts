import { Category } from '../types';

export const categories: Category[] = [
  {
    id: "ux/ui",
    title: 'UX/UI',
    projects: [

      {
        id: 'fighting-game-ui',
        title: 'Fighting Game User Interface: King of Destruction',
        shortDescription: 'Jetzt wirds destruktiv – in Schwarz-Weiß',
        fullDescription: '<p>Im Rahmen des Projekts „Interface Design“ bestand die Aufgabe darin, ein schwarz-weißes Interface zu gestalten. Ich entschied mich für ein charakterbasiertes Fighting Game Select Menu. Ziel war es, ein visuelles Konzept zu entwickeln, das beim User Vorfreude und Spannung auf das bevorstehende Spiel auslöst.<br><br>Die größte Herausforderung lag darin, mit reduzierter Farbgebung dennoch eine kraftvolle Stimmung zu erzeugen. Durch gezielte typografische Akzente, starke Kontraste und visuelles Sounddesign sollte der Hype-Moment vor dem Kampf spürbar werden.<br><br>Für die Umsetzung kam Adobe XD zum Einsatz, um ein klickbares Interface zu gestalten. Die Animationen und der Look des finalen Prototyps wurden anschließend in DaVinci Resolve aufbereitet. Zur Bildgenerierung habe ich außerdem KI-gestützte Tools genutzt, um individuelle Charaktervisualisierungen zu erstellen.</p>',
        tools: ['Adobe XD', 'DaVinci'],
        previewImage: '/images/projects/Thumb.png',
        media: [
          {
            type: 'youtube',
            youtubeId: 'Cn-CXOACPtE'
          }
        ],
        demoUrl: 'https://xd.adobe.com/view/ae33d3a2-599e-4da8-a768-92f1badfe05d-fb60/'
      },
      {
        id: 'app',
        title: 'App Prototype: "PTSD Recovery" ',
        shortDescription: 'Von der Studie bis zur Anwendung.',
        fullDescription: '<p>Im Projekt „UX-Design“ entstand in einer vierköpfigen Gruppe die medizinische App „PTSD Recovery“. Ziel der Anwendung ist es, Menschen mit posttraumatischer Belastungsstörung im Rahmen einer begleiteten Therapie zu unterstützen. Die App wurde speziell für den Einsatz in ärztlicher Begleitung konzipiert und basiert auf einer wissenschaftlichen Studie zur digitalen Umsetzung von Expositionstherapie.<br><br>Die Herausforderung bestand darin, komplexe psychologische Prozesse in eine sensible, intuitive und technisch umsetzbare Nutzererfahrung zu übersetzen. Wir entwickelten ein Interface, das sowohl Patienten als auch behandelnden Ärzten gerecht wird und den Therapieprozess strukturiert begleitet.<br><br>Der UX-Prozess umfasste eine ausführliche Recherchephase, das Erarbeiten von Nutzerbedürfnissen, Wireframing, Prototyping und iteratives Testing. Der Fokus lag dabei stets auf Sicherheit, Vertrauen und einfacher Handhabung in einem sensiblen medizinischen Kontext.</p>',
        tools: ['Adobe XD', 'DaVinci'],
        previewImage: '/images/projects/ux.png',
        media: [
          {
            type: 'image',
            url: '/images/projects/ux1.gif'
          },
          {
            type: 'image',
            url: '/images/projects/ux2.gif'
          },
          {
            type: 'image',
            url: '/images/projects/ux3.gif'
          },
          {
            type: 'image',
            url: '/images/projects/ux4.gif'
          },
          {
            type: 'image',
            url: '/images/projects/ux5.gif'
          },
          {
            type: 'image',
            url: '/images/projects/ux6.gif'
          },

        ],
        demoUrl: 'https://xd.adobe.com/view/ae33d3a2-599e-4da8-a768-92f1badfe05d-fb60/'
      },
      {
        id: 'ux-designsystem',
        title: 'UX/UI Designsystem für ein Start-up',
        shortDescription: 'Digitale Zwillinge?',
        fullDescription: '<p>Meine Bachelorarbeit beschäftigt sich mit der Konzeption und prototypischen Umsetzung eines interaktiven User Interfaces für ein KI-gestütztes Offboarding-System, das auf der Idee von „Digital Twins“ basiert. Ziel der Arbeit war es, das Fachwissen ausscheidender Mitarbeitender mithilfe von Technologien wie Large Language Models (LLMs) langfristig im Unternehmen zu erhalten und für andere Mitarbeitende über ein intelligentes Interface zugänglich zu machen.<br><br>Die Arbeit gliederte sich in mehrere Phasen: Zunächst wurde ein UX-Konzept entwickelt, das sich an drei klar definierten Nutzergruppen orientiert – Administratoren, Offboarding-Personen und informationssuchenden Mitarbeitenden. Auf Basis des Double Diamond Design Prozesses und der Atomic Design Methode entstand ein strukturiertes Designsystem.<br><br>Darauf aufbauend wurde ein interaktiver UI-Prototyp mit Figma realisiert. Ein wesentlicher Bestandteil war die Erstellung von User Flows, Wireframes und einer modular aufgebauten UI-Komponentenstruktur, die sowohl Funktionalität als auch Design konsistent abbildet. Die Anwendung beinhaltet unter anderem eine KI-gestützte Chat-Funktion zur Wissenserfassung, Fortschrittsbalken zur Motivation sowie Rollen- und Berechtigungsverwaltung im Admin-Modus.<br><br>Zur Evaluation des Konzepts wurde eine Umfrage durchgeführt, die qualitative und quantitative Daten zur Nutzerfreundlichkeit und Verständlichkeit des Prototyps lieferte. Die Ergebnisse zeigten ein grundsätzlich positives Nutzerverständnis, aber auch Potenzial zur Verbesserung in Bereichen wie Navigation und Individualisierung. Diese Erkenntnisse flossen in konkrete Optimierungsvorschläge ein.<br><br>Der finale Prototyp dient sowohl als Grundlage für eine mögliche technische Umsetzung als auch als Kommunikationsmittel, um Investoren oder Stakeholder von der Idee hinter dem Projekt zu überzeugen.</p>',
        tools: ['Figma', 'Miro'],
        previewImage: '/images/projects/figma.png',
        media: [
          {
            type: 'image',
            url: '/images/projects/fig1.gif'
          },
          {
            type: 'image',
            url: '/images/projects/fig2.gif'
          },
          {
            type: 'image',
            url: '/images/projects/fig3.gif'
          },

          {
            type: 'image',
            url: '/images/projects/Thesis1.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/Thesis2.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/Thesis3.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/Thesis4.jpg'
          },



        ],
        demoUrl: 'https://www.figma.com/proto/xaob591Frg0wGmdMp6VrHz/Athena.brain-Design?node-id=158-3845&t=xw8iT6LaMKpfUNVS-1'

      },
      {
        id: 'Web Analytics & UX Research',
        title: 'Web Analytics & UX Research',
        shortDescription: 'Daten lügen nicht!',
        fullDescription: '<p>Im Rahmen einer Case Study wurden Web Analytics und UX Research kombiniert, um die Nutzererfahrung eines bestehenden Online-Shops namens "yuicy.de" zu analysieren und zu optimieren. Ziel war es, datenbasierte Handlungsempfehlungen für den Shop-Betreiber zu entwickeln.<br><br>Für die Webanalyse kam Google Analytics zum Einsatz. Anhand definierter KPIs wurde untersucht, welche Bereiche des Shops gut funktionierten und wo Nutzer absprangen. Auf Basis dieser Daten wurden konkrete Verbesserungsvorschläge abgeleitet.<br><br>Parallel dazu wurde eine qualitative Nutzerumfrage durchgeführt. Randomisiert ausgewählte Testpersonen wurden befragt, wie sie die Nutzerführung, das Design und die Verständlichkeit des Shops wahrnahmen. Die subjektiven Eindrücke lieferten wertvolle Erkenntnisse, die die analytischen Ergebnisse sinnvoll ergänzten.<br><br>Die Case Study vereint beide Perspektiven – quantitativer Datenblick und qualitative Nutzersicht – und resultierte in einer strukturierten Empfehlung zur Optimierung des Online-Shops in Bezug auf Usability, Performance und Conversion-Potenzial.</p>',
        tools: ['Google Analytics', 'Qualitative User-Umfrage'],
        previewImage: '/images/projects/yu.png',
        media: [
          {
            type: 'video',
            url: '/videos/projects/uxvideo.mp4'
          }
        ],
        documents: [
          {
            title: 'Dokumentation Web-Analytics',
            url: '/images/projects/WebAnalytics.pdf'
          },
          {
            title: 'Dokumentation UX Research',
            url: '/images/projects/UX_Research.pdf'
          },
        ],
        demoUrl: 'https://www.yuicy.de/'
      },

    ]
  },
  {
    id: 'interaktive anwendungen & web',
    title: 'Interaktive Anwendungen & Web',
    projects: [

      {
        id: 'Interaktive Anwendung',
        title: 'VR Anwendung: CineDventure',
        shortDescription: 'Popcorn war gestern – jetzt wird’s immersiv!',
        fullDescription: '<p>Im Rahmen des Projekts „CineDventure“ entstand eine VR-Anwendung, die das Erlebnis eines Kinobesuchs in eine virtuelle Welt überträgt. Ziel war es, eine immersive, atmosphärisch dichte Umgebung zu gestalten, in der sich Nutzer frei umsehen, Elemente entdecken und ein digitales Kinogefühl erleben können. Umgesetzt wurde der Prototyp mit A-Frame, JavaScript und HTML. Partikeleffekte und interaktive Objekte wurden verwendet, um die Szene lebendig zu gestalten. CineDventure versteht sich als experimenteller',
        tools: ['HTML', 'JavaScript', 'A-Frame'],
        previewImage: '/images/projects/vr.png',
        media: [
          {
            type: 'image',
            url: '/images/projects/Titelbild.jpg'
          }
        ],
        demoUrl: '/anwendungen/EIA2RauschEndabgabe/index.html'
      },
      {
        id: 'Entwicklung und Hosting einer Restaurant Webseite',
        title: 'Hosting Gastronomie-Webseite',
        shortDescription: 'Vom HTML zur bestellung.',
        fullDescription: '<p>Für das Restaurant, in dem ich arbeitete, habe ich eine funktionale Website erstellt, um dem Betrieb erstmals eine Online-Präsenz zu verschaffen. Die Seite wurde mit HTML, CSS und JavaScript umgesetzt, gehostet über GitHub Pages und ergänzt durch eine eigene Domain. Die Struktur der Website ist bewusst schlank gehalten und fokussiert sich auf essenzielle Inhalte wie Öffnungszeiten, Speisekarte und Kontaktmöglichkeiten. Besonderer Fokus lag auf mobiler Nutzbarkeit und einfacher Bedienung. Ich betreue die Website weiterhin und nehme regelmäßig Anpassungen vor.</p>',
        tools: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
        previewImage: '/images/projects/pizza.png',
        media: [
          {
            type: 'image',
            url: '/images/projects/lp1.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/lp2.jpg'
          },
        ],
        demoUrl: 'https://pizzaexpressdamario.de/'
      },
    ]


  },
  {
    id: 'grafikdesign',
    title: 'Grafikdesign',
    projects: [
      {
        id: 'event',
        title: 'Event-Flyer-Gestaltung',
        shortDescription: 'Studenten feiern gerne.',
        fullDescription: '<p>Während meines Studiums habe ich regelmäßig Veranstaltungen mitgestaltet, insbesondere durch die Erstellung von Flyern. Meine Gestaltung legte Wert auf eine zielgruppengerechte Ansprache, abgestimmt auf Studierende – mit einer Mischung aus klarer Typografie, abgestimmter Farbwahl und durchdachter Bildkomposition. Die Designstile variierten je nach Anlass zwischen modern-minimalistisch und auffällig-lebendig. Zum Einsatz kamen primär Adobe Photoshop für das Layout und Lightroom für die Bildbearbeitung. Dieses Projekt vertiefte mein Verständnis für visuelle Kommunikation und zielgerichtetes Design.</p>',
        tools: ['Photoshop', 'Lightroom'],
        previewImage: '/images/projects/grafik.png',
        media: [
          {
            type: 'image',
            url: '/images/projects/flyer1.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/flyer.jpg'
          }
        ],

      },
      {
        id: 'speisekarte',
        title: 'Design und Layout einer Speisekarte',
        shortDescription: 'Design zum Anbeißen.',
        fullDescription: '<p>Neben der Website gestaltete ich für das Restaurant auch die komplette Speisekarte neu und entwickelte das Branding weiter. Zu Beginn überarbeitete ich das bestehende Logo und entwarf ein sympathisches Maskottchen zur Stärkung der Markenidentität. Im Mittelpunkt stand die typografische und visuelle Aufbereitung der Speisekarte – mit klarer Struktur, übersichtlicher Preisgestaltung und einem harmonischen Gesamtbild. Ein selbst organisiertes Fotoshooting lieferte hochwertiges Bildmaterial für die Karte, das ich auch selbst bearbeitet habe. Seit der Einführung übernehme ich laufend Aktualisierungen – ein praxisnahes Beispiel für ganzheitliches Design im Kleinbetrieb.</p>',
        tools: ['InDesign', 'Photoshop', 'Lightroom', 'Illustrator'],
        previewImage: '/images/projects/pizza2.png',
        media: [
          {
            type: 'image',
            url: '/images/projects/front1.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/Preis.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/Rueck2.jpg'
          }
        ],

      },
    ]
  },
  {
    id: 'motion & video',
    title: 'Motion & Video',
    projects: [
      {
        id: 'mapping',
        title: 'Projection Mapping in the Wild',
        shortDescription: 'Licht trifft Beton',
        fullDescription: '<p>Im Rahmen des Projektstudiums „Projection Mapping in the Wild“ an der Hochschule Furtwangen arbeitete ich gemeinsam mit vier Kommilitonen und zwei betreuenden Dozenten an einem realitätsnahen Gestaltungsprozess. Unterstützt wurde das Projekt von der Vioso GmbH, einem Unternehmen, das auf automatische Kalibrierung für komplexe Projektionssysteme spezialisiert ist.<br><br>Ziel des Projekts war es, eine audiovisuelle Projektion für das Reservoir Festival an der Linachtalsperre in Vöhrenbach zu konzipieren und umzusetzen. Die Besonderheit dabei: Unsere Animationen sollten sich exakt an die architektonischen Gegebenheiten der Talsperre anpassen. Dies erforderte nicht nur kreatives Feingefühl, sondern auch ein tiefes technisches Verständnis im Umgang mit 3D-Mapping, Kalibrierung und multimedialer Gestaltung.<br><br>Meine Aufgaben im Team umfassten unter anderem die Entwicklung der Animationsinhalte, den Schnitt der ersten Projektion sowie das Sounddesign der zweiten Projektion. Zudem war ich intensiv an der Konzeptentwicklung und der finalen Dokumentation beteiligt. Auch die Aufnahme und Nachbearbeitung der fertigen Projektionen zählten zu meinem Aufgabenbereich.<br><br>Durch dieses Projekt konnte ich wertvolle Erfahrungen im Bereich visuelle Inszenierung im öffentlichen Raum sammeln – von der Konzeption über die technische Umsetzung bis hin zur Live-Präsentation. Besonders fasziniert hat mich, wie stark visuelle und auditive Elemente zusammenspielen müssen, um in einer echten Umgebung zu wirken. Diese Erfahrung hat mein Verständnis für immersive Mediengestaltung und räumliches Erzählen nachhaltig geprägt.</p>',
        tools: ['DaVinci Resolve', 'After Effects', 'VIOSO 6', 'Blender'],
        previewImage: '/images/projects/mapping.png',
        media: [
          {
            type: 'youtube',
            youtubeId: '7UraV-n9Fzo'
          },
          {
            type: 'youtube',
            youtubeId: 'CPtZuhyASag'
          },
          {
            type: 'image',
            url: '/images/projects/mapping3.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/mapping4.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/mapping1.jpg'
          },
          {
            type: 'image',
            url: '/images/projects/mapping2.jpg'
          },
        ]
      },
      {
        id: 'vertonung',
        title: 'Sound-Design eines Kurzfilms: Lifted',
        shortDescription: 'Wenn der Sound zum Hauptdarsteller wird.',
        fullDescription: '<p>In diesem Projekt habe ich den animierten Kurzfilm „Lifted“ neu vertont – mit Fokus auf filmisches Sound Design und der Relevanz auditiver Gestaltung auch im Bereich von Sound UI. Zum Einsatz kam Adobe Audition.<br><br>Bei der Vertonung habe ich mich an den fünf zentralen Kategorien des Sound Designs orientiert: Foley (z. B. Schritte, Kleidung), Soundeffekte (für Maschinen oder Bewegungen), Hintergrundgeräusche (Ambience), Voice-over/Dialoge und Musik. Besonders wichtig war mir dabei das präzise Timing, um die Gags und Bewegungsabläufe des Films passend zu unterstützen.<br><br>Das Projekt war nicht nur eine Übung in technischer Umsetzung, sondern auch ein Experiment in Wahrnehmung: Wie stark beeinflusst Sound die Wirkung einer Szene? Und wie lässt sich dieses Wissen auf UI-Sound Design übertragen? Die Arbeit zeigt, wie wichtig gezielte akustische Gestaltung in digitalen Anwendungen und audiovisuellen Medien ist.</p>',
        tools: ['Adobe Audition'],
        previewImage: '/images/projects/lifted.png',
        media: [
          {
            type: 'youtube',
            youtubeId: 'Iw1jevzwCp8'
          },

        ],

      },
      {
        id: 'adorno',
        title: 'Medientheoretischer Video-Essay',
        shortDescription: 'Kulturkritik trifft YouTube.',
        fullDescription: '<p>In diesem Projekt habe ich einen Video-Essay über Theodor W. Adorno verfasst, in dem ich seine medientheoretischen Ansätze auf die heutige Medienlandschaft übertrage. Auch wenn ich sicher nicht der beste Sprecher bin, war es mir wichtig, den Essay aufzunehmen – vor allem, weil ich hier eigene Gedanken zu einem komplexen Thema formulieren konnte.<br><br>Im Mittelpunkt stand die Frage, wie Adornos Kritik an der Kulturindustrie sich auf moderne Plattformen, Social Media und heutige Medienpraktiken anwenden lässt. Dabei habe ich versucht, möglichst neutral und aus verschiedenen Perspektiven zu argumentieren. Es war mir wichtig, die politischen Dimensionen seiner Theorie zu berücksichtigen, ohne dabei in einfache Bewertungen abzurutschen.<br><br>Der Essay ist eine persönliche Auseinandersetzung mit einem schwierigen, aber relevanten Thema – und der Versuch, klassische Theorie verständlich und zeitgemäß in einen neuen Kontext zu setzen. Das Ergebnis ist eine reflektierte Analyse, die sowohl historische Zusammenhänge als auch gegenwärtige Phänomene einbezieht.</p>',
        tools: ['DaVinci Resolve'],
        previewImage: '/images/projects/adorno.png',
        media: [
          {
            type: 'youtube',
            youtubeId: '/00fx6Xe8ioo'
          },

        ],

      },
    ]
  }
];