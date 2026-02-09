export const metadata = {
  title: "Chi Siamo",
  description: "Scopri la storia di Jentu.it e il team che ogni giorno lavora per portarti le migliori previsioni meteo marine del Salento.",
};

export default function ChiSiamoPage() {
  return (
    <div className="container-jentu py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Chi Siamo
          </h1>
          <p className="text-xl text-gray-600">
            La storia di Jentu.it e la nostra missione
          </p>
        </div>

        {/* Mission */}
        <div className="glass p-8 md:p-10 rounded-2xl mb-12 animate-slide-up animate-delay-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-jentu-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-jentu-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-jentu-teal">La nostra missione</h2>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Jentu.it nasce dalla <strong>passione per il mare</strong> e per il <strong>Salento</strong>. 
              Il nostro obiettivo è fornire previsioni meteo marine semplici, accurate e accessibili a tutti 
              coloro che amano il mare del nostro territorio.
            </p>
            <p>
              Utilizziamo dati ufficiali dal <strong>servizio Copernicus Marine dell'Unione Europea</strong>, 
              elaborandoli per renderli facilmente comprensibili attraverso mappe intuitive e consigli pratici.
            </p>
            <p>
              Vogliamo essere il <strong>tuo compagno di viaggio</strong> quando decidi dove andare al mare, 
              aiutandoti a scegliere la spiaggia perfetta in base alle condizioni reali.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up animate-delay-200">
          <div className="card p-6 text-center group hover:shadow-jentu-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                            rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4
                            transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-jentu-teal transition-colors">
              Precisione
            </h3>
            <p className="text-gray-600">
              Dati aggiornati ogni 2 ore da fonti scientifiche affidabili
            </p>
          </div>

          <div className="card p-6 text-center group hover:shadow-jentu-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                            rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4
                            transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              💙
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-jentu-teal transition-colors">
              Locale
            </h3>
            <p className="text-gray-600">
              Fatto da salentini per salentini e amanti del Salento
            </p>
          </div>

          <div className="card p-6 text-center group hover:shadow-jentu-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                            rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4
                            transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              📱
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-jentu-teal transition-colors">
              Accessibile
            </h3>
            <p className="text-gray-600">
              Disponibile su web, mobile e come app installabile
            </p>
          </div>
        </div>

        {/* Why Jentu */}
        <div className="glass p-8 md:p-10 rounded-2xl mb-12 animate-slide-up animate-delay-300">
          <h2 className="text-3xl font-bold mb-6 text-jentu-teal flex items-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Perché Jentu.it?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-jentu-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🌊</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Dati Scientifici</h3>
                <p className="text-gray-600">
                  Non ci inventiamo nulla: usiamo i dati ufficiali di Copernicus Marine Service, 
                  lo stesso sistema usato da enti di ricerca e istituzioni europee.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-jentu-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Semplicità</h3>
                <p className="text-gray-600">
                  Crediamo che le previsioni marine non debbano essere complicate. 
                  Colori, icone e mappe chiare per decisioni rapide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-jentu-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">In Continua Evoluzione</h3>
                <p className="text-gray-600">
                  Jentu.it migliora costantemente grazie al tuo feedback. 
                  Nuove funzionalità e zone coperte in arrivo!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Collaborate CTA */}
        <div className="bg-gradient-to-r from-jentu-teal to-jentu-teal-dark text-white rounded-2xl p-8 md:p-12 
                        text-center animate-slide-up animate-delay-400">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vuoi collaborare con noi?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Siamo sempre alla ricerca di feedback e suggerimenti per migliorare il servizio.
            Se hai idee, proposte o vuoi semplicemente salutarci, scrivici!
          </p>
          <a
            href="/info"
            className="inline-flex items-center gap-3 bg-white text-jentu-teal px-8 py-4 rounded-xl 
                       font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl
                       hover:shadow-2xl transform hover:-translate-y-0.5 text-lg group"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contattaci</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 animate-slide-up animate-delay-500">
          <div className="text-center p-6">
            <div className="text-4xl font-black text-jentu-teal mb-2">24/7</div>
            <p className="text-gray-600">Monitoraggio continuo</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-black text-jentu-teal mb-2">2h</div>
            <p className="text-gray-600">Aggiornamenti frequenti</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-black text-jentu-teal mb-2">100%</div>
            <p className="text-gray-600">Made in Salento</p>
          </div>
        </div>
      </div>
    </div>
  );
}
