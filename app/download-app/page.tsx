import Link from "next/link";

export const metadata = {
  title: "Scarica l'App",
  description: "Installa Jentu.it sul tuo dispositivo. Previsioni meteo, mare e vento sempre a portata di mano!",
};

export default function DownloadAppPage() {
  const features = [
    {
      icon: "⚡",
      title: "Veloce",
      description: "Accesso istantaneo alle previsioni senza aprire il browser"
    },
    {
      icon: "🔔",
      title: "Notifiche",
      description: "Ricevi avvisi quando le condizioni sono perfette"
    },
    {
      icon: "📍",
      title: "Offline",
      description: "Consulta le ultime previsioni anche senza connessione"
    },
    {
      icon: "🎨",
      title: "Icona Home",
      description: "Aggiungi Jentu.it alla schermata iniziale del tuo dispositivo"
    },
    {
      icon: "🔄",
      title: "Sempre Aggiornato",
      description: "Dati freschi ogni 2 ore, automaticamente"
    },
    {
      icon: "📱",
      title: "Nativo",
      description: "Esperienza simile a un'app nativa, senza download da store"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container-jentu text-center animate-slide-up">
          <div className="text-7xl md:text-8xl mb-8 animate-bounce">📱</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Jentu.it sempre con te
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Previsioni meteo, mare e vento in un tap. Installa l'app per un accesso diretto!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-jentu-teal px-8 py-4 rounded-xl font-bold 
                               hover:bg-gray-50 transition-all duration-300 shadow-2xl
                               hover:shadow-3xl transform hover:-translate-y-1 text-lg
                               inline-flex items-center gap-3 group w-full sm:w-auto justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">Disponibile su</div>
                <div>iOS & Safari</div>
              </div>
            </button>
            
            <button className="bg-white text-jentu-teal px-8 py-4 rounded-xl font-bold 
                               hover:bg-gray-50 transition-all duration-300 shadow-2xl
                               hover:shadow-3xl transform hover:-translate-y-1 text-lg
                               inline-flex items-center gap-3 group w-full sm:w-auto justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">Disponibile su</div>
                <div>Android & Chrome</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* How to Install */}
      <section className="container-jentu py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            Come Installare l'App
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* iOS */}
            <div className="animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                                rounded-xl flex items-center justify-center text-2xl">
                  🍎
                </div>
                <h3 className="text-2xl font-bold">iOS / Safari</h3>
              </div>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-jentu-teal text-white rounded-full 
                                   flex items-center justify-center font-bold">1</span>
                  <p className="text-gray-700 pt-1">
                    Apri <strong>jentu.it</strong> in Safari
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-jentu-teal text-white rounded-full 
                                   flex items-center justify-center font-bold">2</span>
                  <p className="text-gray-700 pt-1">
                    Tocca il pulsante <strong>"Condividi"</strong> (quadrato con freccia verso l'alto)
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-jentu-teal text-white rounded-full 
                                   flex items-center justify-center font-bold">3</span>
                  <p className="text-gray-700 pt-1">
                    Scorri e seleziona <strong>"Aggiungi a Home"</strong>
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-jentu-teal text-white rounded-full 
                                   flex items-center justify-center font-bold">4</span>
                  <p className="text-gray-700 pt-1">
                    Tocca <strong>"Aggiungi"</strong> in alto a destra
                  </p>
                </li>
              </ol>
            </div>

            {/* Android */}
            <div className="animate-slide-up animate-delay-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-jentu-teal to-jentu-teal-dark 
                                rounded-xl flex items-center justify-center text-2xl">
                  🤖
                </div>
                <h3 className="text-2xl font-bold">Android / Chrome</h3>
              </div>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-jentu-teal text-white rounded-full 
                                   flex items-center justify-center font-bold">1</span>
                  <p className="text-gray-700 pt-1">
                    Apri <strong>jentu.it</strong> in Chrome
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-jentu-teal text-white rounded-full 
                                   flex items-center justify-center font-bold">2</span>
                  <p className="text-gray-700 pt-1">
                    Tocca il menu <strong>⋮</strong> (tre puntini) in alto a destra
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-jentu-teal text-white rounded-full 
                                   flex items-center justify-center font-bold">3</span>
                  <p className="text-gray-700 pt-1">
                    Seleziona <strong>"Aggiungi a schermata Home"</strong>
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-jentu-teal text-white rounded-full 
                                   flex items-center justify-center font-bold">4</span>
                  <p className="text-gray-700 pt-1">
                    Tocca <strong>"Aggiungi"</strong> per confermare
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-jentu">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            Perché Installare l'App?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card p-6 text-center group hover:shadow-jentu-lg transition-all duration-300
                           animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-jentu-teal transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container-jentu py-16 text-center">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto per iniziare?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Installa Jentu.it ora e non perdere mai più le condizioni perfette!
          </p>
          <Link href="/" className="btn-primary text-lg">
            Torna alla Mappa
          </Link>
        </div>
      </section>
    </div>
  );
}
