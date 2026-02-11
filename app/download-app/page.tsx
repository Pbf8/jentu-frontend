import Link from "next/link";
import DownloadButtons from "../../components/DownloadButtons";

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
          
          <DownloadButtons />
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
