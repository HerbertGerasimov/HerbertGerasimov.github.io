import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatIDo from './components/WhatIDo';
import { categories } from './data/projects';

function App() {
  return (

    <div className="relative min-h-screen">
      {/* Fixed video background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/projects/bg10.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for readability */}
      </div>

      {/* Scrollable content above video */}
      <div className="relative z-20">
        <Header />
        <Hero />
          {/* <div className="p-6 space-y-6 bg-white"> */}
          {/* <h1 className="text-3xl font-bold mb-4">Font Test Preview</h1> */}
{/*  */}
          {/* <p className="font-inter text-2xl">Inter – <code>className="font-inter"</code></p> */}
          {/* <p className="font-poppins text-2xl">Poppins – <code>className="font-poppins"</code></p> */}
          {/* <p className="font-fredoka text-2xl">Fredoka – <code>className="font-fredoka"</code></p> */}
          {/* <p className="font-baloo text-2xl">Baloo 2 – <code>className="font-baloo"</code></p> */}
          {/* <p className="font-quicksand text-2xl">Quicksand – <code>className="font-quicksand"</code></p> */}
          {/* <p className="font-lilita text-2xl">Lilita One – <code>className="font-lilita"</code></p> */}
          {/* <p className="font-changa text-2xl">Changa One – <code>className="font-changa"</code></p> */}
          {/* <p className="font-rubik text-2xl">Rubik – <code>className="font-rubik"</code></p> */}
          {/* <p className="font-barlow text-2xl">Barlow – <code>className="font-barlow"</code></p> */}
          {/* <p className="font-nunito text-2xl">Nunito – <code>className="font-nunito"</code></p> */}
          {/* <p className="font-manrope text-2xl">Manrope – <code>className="font-manrope"</code></p> */}
          {/* <p className="font-lexend text-2xl">Lexend – <code>className="font-lexend"</code></p> */}
          {/* <p className="font-mulish text-2xl">Mulish – <code>className="font-mulish"</code></p> */}
          {/* <p className="font-urbanist text-2xl">Urbanist – <code>className="font-urbanist"</code></p> */}
          {/* <p className="font-titillium text-2xl">Titillium Web – <code>className="font-titillium"</code></p> */}
          {/* <p className="font-raleway text-2xl">Raleway – <code>className="font-raleway"</code></p> */}
          {/* <p className="font-archivo text-2xl">Archivo – <code>className="font-archivo"</code></p> */}
          {/* <p className="font-kanit text-2xl">Kanit – <code>className="font-kanit"</code></p> */}
          {/* <p className="font-prompt text-2xl">Prompt – <code>className="font-prompt"</code></p> */}
          {/* <p className="font-signika text-2xl">Signika – <code>className="font-signika"</code></p> */}
          {/* <p className="font-worksans text-2xl">Work Sans – <code>className="font-worksans"</code></p> */}
          {/* <p className="font-jost text-2xl">Jost – <code>className="font-jost"</code></p> */}
          {/* <p className="font-exo2 text-2xl">Exo 2 – <code>className="font-exo2"</code></p> */}
          {/* <p className="font-asap text-2xl">Asap – <code>className="font-asap"</code></p> */}
          {/* <p className="font-bevietnam text-2xl">Be Vietnam Pro – <code>className="font-bevietnam"</code></p> */}
          {/* <p className="font-hind text-2xl">Hind – <code>className="font-hind"</code></p> */}
          {/* <p className="font-cabin text-2xl">Cabin – <code>className="font-cabin"</code></p> */}
          {/* <p className="font-mukta text-2xl">Mukta – <code>className="font-mukta"</code></p> */}
          {/* <p className="font-fira text-2xl">Fira Sans – <code>className="font-fira"</code></p> */}
          {/* <p className="font-ibmplex text-2xl">IBM Plex Sans – <code>className="font-ibmplex"</code></p> */}
          {/* <p className="font-merriweather text-2xl">Merriweather – <code>className="font-merriweather"</code></p> */}
          {/* <p className="font-playfair text-2xl">Playfair Display – <code>className="font-playfair"</code></p> */}
          {/* <p className="font-lora text-2xl">Lora – <code>className="font-lora"</code></p> */}
          {/* <p className="font-crimson text-2xl">Crimson Pro – <code>className="font-crimson"</code></p> */}
          {/* <p className="font-dmserif text-2xl">DM Serif Display – <code>className="font-dmserif"</code></p> */}
          {/* <p className="font-garamond text-2xl">EB Garamond – <code>className="font-garamond"</code></p> */}
          {/* <p className="font-cormorant text-2xl">Cormorant Garamond – <code>className="font-cormorant"</code></p> */}
          {/* <p className="font-notoserif text-2xl">Noto Serif – <code>className="font-notoserif"</code></p> */}
          {/* <p className="font-sourceserif text-2xl">Source Serif 4 – <code>className="font-sourceserif"</code></p> */}
          {/* <p className="font-libre text-2xl">Libre Baskerville – <code>className="font-libre"</code></p> */}


          {/* <p className="font-sora text-2xl">Sora – <code>className="font-sora"</code></p> */}
          {/* <p className="font-spacegrotesk text-2xl">Space Grotesk – <code>className="font-spacegrotesk"</code></p> */}
          {/* <p className="font-syne text-2xl">Syne – <code>className="font-syne"</code></p> */}
          {/* <p className="font-outfit text-2xl">Outfit – <code>className="font-outfit"</code></p> */}
          {/* <p className="font-bebas text-2xl">Bebas Neue – <code>className="font-bebas"</code></p> */}
          {/* <p className="font-anton text-2xl">Anton – <code>className="font-anton"</code></p> */}
          {/* <p className="font-audiowide text-2xl">Audiowide – <code>className="font-audiowide"</code></p> */}
          {/* <p className="font-orbitron text-2xl">Orbitron – <code>className="font-orbitron"</code></p> */}
          {/* <p className="font-ptsans text-2xl">PT Sans – <code>className="font-ptsans"</code></p> */}
          {/* <p className="font-publicsans text-2xl">Public Sans – <code>className="font-publicsans"</code></p>*/}

        </div>
        <WhatIDo />
        <main className="py-8">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </main>
        <Contact />
        <Footer />
      </div>
  

  );
}

export default App;