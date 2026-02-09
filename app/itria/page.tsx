import Link from "next/link";
import WaveMap from "@/components/WaveMap";

export const metadata = {
  title: "Brindisi & Taranto",
  description: "Previsioni meteo marine per la zona di Brindisi, Taranto e Valle d'Itria. Onde, vento e condizioni del mare aggiornate ogni 2 ore.",
};

export default function ItriaPage() {
  return (
    <div>
      {/* Top Banner - Back to Lecce */}
      <div className="bg-gradient-to-r from-jentu-teal to-jentu-teal-dark text-white text-center py-3 shadow-md">
        <Link 
          href="/" 
          className="font-semibold hover:underline inline-flex items-center gap-2 group transition-all duration-300"
        >
          <svg 
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Lecce</span>
        </Link>
      </div>

      {/* Hero Section with Map */}
      <section className="container-jentu py-8 md:py-12">
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Brindisi & Taranto
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Previsioni meteo marine per la zona adriatica tra Brindisi e Taranto. 
            Dati aggiornati ogni 2 ore dal servizio Copernicus Marine.
          </p>
        </div>
        
        <WaveMap region="brindisi" />
      </section>

      {/* Info Section */}
      <section className="container-jentu py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              c'è <span className="text-gradient italic">vientu!</span>
            </h2>
            <Link 
              href="/download-app"
              className="inline-flex items-center gap-3 bg-jentu-teal text-white px-8 py-4 rounded-xl 
                         font-semibold hover:bg-jentu-teal-dark transition-all duration-300 
                         shadow-jentu-lg hover:shadow-jentu-xl transform hover:-translate-y-0.5
                         text-lg group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Scarica l'App</span>
            </Link>
          </div>

          <hr className="my-12 border-gray-200" />

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 animate-slide-up animate-delay-100">
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                                rounded-2xl flex items-center justify-center text-4xl shadow-jentu-lg
                                transform group-hover:scale-110 group-hover:rotate-6 
                                transition-all duration-300 mx-auto">
                  ☀️
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-jentu-teal transition-colors">
                Previsioni Facili
              </h3>
              <p className="text-gray-600">
                Accedi a previsioni meteo marine semplici
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                                rounded-2xl flex items-center justify-center text-4xl shadow-jentu-lg
                                transform group-hover:scale-110 group-hover:rotate-6 
                                transition-all duration-300 mx-auto">
                  🗺️
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-jentu-teal transition-colors">
                Mappa Interattiva
              </h3>
              <p className="text-gray-600">
                Esplora il meteo con la nostra mappa
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                                rounded-2xl flex items-center justify-center text-4xl shadow-jentu-lg
                                transform group-hover:scale-110 group-hover:rotate-6 
                                transition-all duration-300 mx-auto">
                  🌊
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-jentu-teal transition-colors">
                Consigli Utili sulle Onde
              </h3>
              <p className="text-gray-600">
                Suggerimenti aggiornati ogni 2 ore
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
