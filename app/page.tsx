'use client';

import Link from 'next/link';
import Image from 'next/image';
import WaveMap from '@/components/WaveMap';
import { ProverbSkeleton, Top3Skeleton } from '@/components/Skeleton';
import { getTodayProverb } from '@/data/proverbs';
import { Suspense, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useRegion } from '@/context/RegionContext';
import Top3LowestWaves from '@/components/Top3LowestWaves';

export default function Home() {
  const todayProverb = getTodayProverb();
  const [showFab, setShowFab] = useState(false);
  const [fabLabelVisible, setFabLabelVisible] = useState(false);
  const { currentRegion } = useRegion();

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200;
      if (shouldShow && !showFab) {
        setShowFab(true);
        setFabLabelVisible(true);
        setTimeout(() => setFabLabelVisible(false), 3000);
      }
      if (!shouldShow && showFab) {
        setShowFab(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showFab]);

  return (
    <div>
      {/* Hero Section with Map & Title */}
      <section className="container-jentu pt-4 md:pt-6 text-center">
        <div className="h-[65vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-jentu-lg">
          <WaveMap region={currentRegion} />
        </div>
        <div className="py-8 grid grid-cols-3 gap-4">
          <Link href="/alloggi" className="text-center group">
            <div className="mb-2 text-4xl">🏨</div>
            <h2 className="text-xl font-bold group-hover:text-jentu-teal transition-colors">Alloggi</h2>
          </Link>
          <Link href="/barche" className="text-center group">
            <div className="mb-2 text-4xl">⛵️</div>
            <h2 className="text-xl font-bold group-hover:text-jentu-teal transition-colors">Barche</h2>
          </Link>
          <Link href="/servizi" className="text-center group">
            <div className="mb-2 text-4xl">🛠️</div>
            <h2 className="text-xl font-bold group-hover:text-jentu-teal transition-colors">Servizi</h2>
          </Link>
        </div>
      </section>
      {/* Main Content */}
      <section className="container-jentu pb-12 md:pb-16">
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
              Top 3: Mare più calmo
            </h3>
            <p className="text-gray-600 text-lg">Le località con le onde più basse in questo momento.</p>
          </div>
          
          <Suspense fallback={<Top3Skeleton />}>
            <Top3LowestWaves />
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
      {/* FAB - Scarica l'App */}
      <div
        className={cn(
          "fixed bottom-5 right-5 z-50 flex items-center",
          {
            "animate-bounce-in": showFab,
            "opacity-0 pointer-events-none": !showFab,
          }
        )}
      >
        <Link
          href="/download-app"
          className={cn(
            "bg-jentu-teal text-white rounded-full shadow-fab",
            "flex items-center font-semibold",
            "transform transition-all duration-200 ease-in-out",
            "active:scale-90",
            "w-14 h-14 justify-center relative group animate-pulse-custom"
          )}>

          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>

        </Link>
        {fabLabelVisible && (
          <span className="ml-3 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-xl label-fade-out">
            Scarica l'App
          </span>
        )}
      </div>
    </div>
  );
}
