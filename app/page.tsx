import Link from "next/link";
import WaveMap from "@/components/WaveMap";
import { getTodayProverb } from "@/data/proverbs";

export default function Home() {
  const todayProverb = getTodayProverb();

  return (
    <div>
      {/* Link to Brindisi & Taranto */}
      <div className="bg-jentu-teal text-white text-center py-3">
        <Link href="/itria" className="font-semibold hover:underline">
          Brindisi & Taranto →
        </Link>
      </div>

      {/* Hero Section with Map */}
      <section className="container mx-auto px-4 py-8">
        <WaveMap region="salento" />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            c'è <span className="italic text-jentu-teal">jentu.it</span>
          </h1>
          <Link 
            href="/download-app"
            className="inline-block bg-jentu-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Scarica l'App
          </Link>
        </div>

        {/* Proverbio del giorno */}
        <div className="max-w-3xl mx-auto mb-16 bg-gray-50 rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Proverbio del giorno</h2>
          <div className="text-center">
            <p className="text-xl font-semibold text-jentu-teal mb-2">
              <strong>Salentino:</strong> {todayProverb.salentino}
            </p>
            <p className="text-lg text-gray-700 mb-3 italic">
              {todayProverb.italian}
            </p>
            <p className="text-gray-600">
              <strong>Spiegazione:</strong> {todayProverb.explanation}
            </p>
          </div>
        </div>

        <hr className="my-12 border-gray-300" />

        {/* Top 3 Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Ecco la top 3 del momento
          </h3>
          <p className="text-center text-gray-600 mb-8">In base a Sole, Mare e jentu:</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-jentu-teal">
              <h4 className="text-5xl font-bold text-jentu-teal mb-2">1°</h4>
              <p className="text-xl font-semibold">Torre dell'Orso</p>
              <p className="text-sm text-gray-600 mt-2">Condizioni ottimali</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-gray-400">
              <h4 className="text-5xl font-bold text-gray-600 mb-2">2°</h4>
              <p className="text-xl font-semibold">Porto Cesareo</p>
              <p className="text-sm text-gray-600 mt-2">Mare calmo</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-orange-400">
              <h4 className="text-5xl font-bold text-orange-600 mb-2">3°</h4>
              <p className="text-xl font-semibold">Gallipoli</p>
              <p className="text-sm text-gray-600 mt-2">Buone condizioni</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Il tuo amico meteo nel Salento
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Scopri le nostre funzioni principali
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-jentu-teal text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🔆
              </div>
              <h3 className="text-xl font-bold mb-2">Previsioni Facili</h3>
              <p className="text-gray-600">
                Accedi a previsioni meteo marine semplici e immediate
              </p>
            </div>

            <div className="text-center">
              <div className="bg-jentu-teal text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🌊
              </div>
              <h3 className="text-xl font-bold mb-2">Consigli Utili sulle Onde</h3>
              <p className="text-gray-600">
                Suggerimenti aggiornati ogni 2 ore per scegliere la spiaggia perfetta
              </p>
            </div>

            <div className="text-center">
              <div className="bg-jentu-teal text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🗺️
              </div>
              <h3 className="text-xl font-bold mb-2">Mappa Interattiva</h3>
              <p className="text-gray-600">
                Esplora il meteo con la nostra mappa dettagliata del Salento
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
