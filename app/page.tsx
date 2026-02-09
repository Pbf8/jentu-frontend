import Link from "next/link";
import Image from "next/image";
import WaveMap from "@/components/WaveMap";
import { ProverbSkeleton, Top3Skeleton } from "@/components/Skeleton";
import { getTodayProverb } from "@/data/proverbs";
import { Suspense } from "react";

export const metadata = {
  title: "Home",
  description: "Scopri le previsioni meteo marine del Salento. Mappe interattive delle onde, vento e condizioni del mare aggiornate ogni 2 ore.",
};

export default function Home() {
  const todayProverb = getTodayProverb();

  return (
    <div>
      {/* Top Banner - Brindisi & Taranto Link */}
      <div className="bg-gradient-to-r from-jentu-teal to-jentu-teal-dark text-white text-center py-3 shadow-md">
        <Link 
          href="/itria" 
          className="font-semibold hover:underline inline-flex items-center gap-2 group transition-all duration-300"
        >
          <span>Brindisi & Taranto</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Hero Section with Map */}
      <section className="container-jentu py-8 md:py-12">
        <WaveMap region="salento" />
      </section>

      {/* Main Content */}
      <section className="container-jentu py-12 md:py-16">
        {/* Title & CTA */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            c'è <span className="text-gradient italic">jentu.it</span>
          </h1>
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
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Proverbio del giorno */}
        <div className="max-w-4xl mx-auto mb-20 animate-slide-up animate-delay-100">
          <Suspense fallback={<ProverbSkeleton />}>
            <div className="glass rounded-2xl p-8 md:p-10 shadow-jentu-lg border border-jentu-teal/10">
              <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-jentu-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                Proverbio del giorno
              </h2>
              <div className="text-center space-y-4">
                <p className="text-2xl md:text-3xl font-bold text-jentu-teal leading-relaxed">
                  {todayProverb.salentino}
                </p>
                <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                  {todayProverb.italian}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    <strong className="text-gray-900">Spiegazione:</strong> {todayProverb.explanation}
                  </p>
                </div>
                {todayProverb.category && (
                  <span className="inline-flex items-center px-4 py-2 bg-jentu-teal/10 text-jentu-teal 
                                   rounded-full text-sm font-medium">
                    {todayProverb.category === 'mare' && '🌊 Mare'}
                    {todayProverb.category === 'meteo' && '⛅ Meteo'}
                    {todayProverb.category === 'vita' && '💭 Vita'}
                    {todayProverb.category === 'lavoro' && '⚒️ Lavoro'}
                  </span>
                )}
              </div>
            </div>
          </Suspense>
        </div>

        <hr className="my-16 border-gray-200 max-w-4xl mx-auto" />

        {/* Top 3 Section */}
        <div className="max-w-5xl mx-auto mb-20 animate-slide-up animate-delay-200">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-3">
              <svg className="w-9 h-9 text-jentu-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Ecco la top 3 del momento
            </h3>
            <p className="text-gray-600 text-lg">In base a Sole, Mare e jentu</p>
          </div>
          
          <Suspense fallback={<Top3Skeleton />}>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* 1° Posto */}
              <div className="card card-hover bg-gradient-to-br from-white to-jentu-teal/5 
                              border-t-4 border-jentu-teal group">
                <div className="p-8 text-center">
                  <div className="mb-4 relative">
                    <div className="text-7xl font-black text-jentu-teal relative">
                      1°
                      <div className="absolute -top-2 -right-2 text-3xl">🏆</div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-jentu-teal transition-colors">
                    Torre dell'Orso
                  </h4>
                  <p className="text-jentu-teal font-semibold mb-4">Condizioni ottimali</p>
                  <div className="flex justify-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      ☀️ <strong>10</strong>/10
                    </span>
                    <span className="flex items-center gap-1">
                      🌊 <strong>3</strong>/10
                    </span>
                    <span className="flex items-center gap-1">
                      💨 <strong>5</strong>/10
                    </span>
                  </div>
                </div>
              </div>

              {/* 2° Posto */}
              <div className="card card-hover bg-gradient-to-br from-white to-gray-50 
                              border-t-4 border-gray-400 group">
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <div className="text-7xl font-black text-gray-500 relative">
                      2°
                      <div className="absolute -top-2 -right-2 text-3xl">🥈</div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                    Porto Cesareo
                  </h4>
                  <p className="text-gray-600 font-semibold mb-4">Mare calmo</p>
                  <div className="flex justify-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      ☀️ <strong>9</strong>/10
                    </span>
                    <span className="flex items-center gap-1">
                      🌊 <strong>2</strong>/10
                    </span>
                    <span className="flex items-center gap-1">
                      💨 <strong>4</strong>/10
                    </span>
                  </div>
                </div>
              </div>

              {/* 3° Posto */}
              <div className="card card-hover bg-gradient-to-br from-white to-orange-50 
                              border-t-4 border-orange-400 group">
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <div className="text-7xl font-black text-orange-500 relative">
                      3°
                      <div className="absolute -top-2 -right-2 text-3xl">🥉</div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                    Gallipoli
                  </h4>
                  <p className="text-orange-600 font-semibold mb-4">Buone condizioni</p>
                  <div className="flex justify-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      ☀️ <strong>8</strong>/10
                    </span>
                    <span className="flex items-center gap-1">
                      🌊 <strong>4</strong>/10
                    </span>
                    <span className="flex items-center gap-1">
                      💨 <strong>6</strong>/10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto animate-slide-up animate-delay-300">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Il tuo amico meteo nel Salento
            </h2>
            <p className="text-xl text-gray-600">
              Scopri le nostre funzioni principali
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-24 h-24 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                                rounded-2xl flex items-center justify-center text-5xl shadow-jentu-lg
                                transform group-hover:scale-110 group-hover:rotate-6 
                                transition-all duration-300 mx-auto">
                  ☀️
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-jentu-teal transition-colors">
                Previsioni Facili
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Accedi a previsioni meteo marine semplici e immediate. 
                Niente grafici complicati, solo info chiare.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-24 h-24 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                                rounded-2xl flex items-center justify-center text-5xl shadow-jentu-lg
                                transform group-hover:scale-110 group-hover:rotate-6 
                                transition-all duration-300 mx-auto">
                  🌊
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-jentu-teal transition-colors">
                Consigli Utili sulle Onde
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Suggerimenti aggiornati ogni 2 ore per scegliere la spiaggia perfetta 
                in base alle condizioni del mare.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-24 h-24 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                                rounded-2xl flex items-center justify-center text-5xl shadow-jentu-lg
                                transform group-hover:scale-110 group-hover:rotate-6 
                                transition-all duration-300 mx-auto">
                  🗺️
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-jentu-teal transition-colors">
                Mappa Interattiva
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Esplora il meteo con la nostra mappa dettagliata del Salento. 
                Visualizza onde, vento e condizioni in tempo reale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
