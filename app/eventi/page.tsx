export const metadata = {
  title: "Eventi",
  description: "Scopri gli eventi e le attività legate al mare e al meteo organizzati da Jentu.it e dai nostri partner nel Salento.",
};

const events = [
  {
    title: "Beach Clean Up Primavera 2026",
    date: "Aprile 2026",
    location: "Varie spiagge del Salento",
    status: "In programma",
    description: "Giornata dedicata alla pulizia delle spiagge del Salento. Insieme per proteggere il nostro mare!",
    icon: "🌊",
    color: "jentu-teal"
  },
  {
    title: "Workshop Meteo Marino",
    date: "Maggio 2026",
    location: "Da definire",
    status: "In programma",
    description: "Impara a leggere le previsioni marine e a interpretare le condizioni del mare con esperti del settore.",
    icon: "📚",
    color: "blue-500"
  },
  {
    title: "Jentu Fest Estate 2026",
    date: "Luglio 2026",
    location: "Torre dell'Orso",
    status: "In programma",
    description: "Festival estivo dedicato al mare, al vento e alle tradizioni salentine. Musica, sport acquatici e buon cibo!",
    icon: "🎉",
    color: "orange-500"
  },
];

export default function EventiPage() {
  return (
    <div className="container-jentu py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Eventi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri gli eventi e le attività legate al mare e al meteo nel Salento
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6 mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="card p-6 md:p-8 border-l-4 group hover:shadow-jentu-lg transition-all duration-300
                         animate-slide-up"
              style={{ 
                borderColor: event.color === 'jentu-teal' ? '#20B2AA' : 
                            event.color === 'blue-500' ? '#3B82F6' : '#F97316',
                animationDelay: `${index * 100}ms` 
              }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-jentu-teal/10 to-jentu-teal/5 
                                  rounded-2xl flex items-center justify-center text-4xl
                                  group-hover:scale-110 transition-transform duration-300">
                    {event.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h2 className="text-2xl md:text-3xl font-bold group-hover:text-jentu-teal transition-colors">
                      {event.title}
                    </h2>
                    <span className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold
                                     ${event.status === 'In programma' ? 'bg-jentu-teal/10 text-jentu-teal' : 
                                       'bg-gray-100 text-gray-600'}`}>
                      {event.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-jentu-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-jentu-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-jentu-teal/10 border-l-4 border-jentu-teal p-6 md:p-8 rounded-lg mb-12
                        animate-slide-up animate-delay-300">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-jentu-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold text-xl mb-2">Resta aggiornato!</h3>
              <p className="text-gray-700 mb-3">
                Seguici sui social per non perdere gli annunci sui prossimi eventi. 
                Aggiorneremo questa pagina non appena avremo date e dettagli confermati!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/jentu.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-jentu-teal hover:text-jentu-teal-dark 
                             font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/18x6GWmkaN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-jentu-teal hover:text-jentu-teal-dark 
                             font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Organize Event CTA */}
        <div className="glass p-8 md:p-12 rounded-2xl text-center animate-slide-up animate-delay-400">
          <div className="text-5xl mb-4">🎪</div>
          <h3 className="text-3xl font-bold mb-4">Vuoi organizzare un evento con noi?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Contattaci per proporre iniziative legate al mare, alla meteorologia o 
            alla salvaguardia ambientale nel Salento. Siamo sempre aperti a nuove collaborazioni!
          </p>
          <a
            href="/info"
            className="inline-flex items-center gap-3 bg-jentu-teal text-white px-8 py-4 rounded-xl 
                       font-bold hover:bg-jentu-teal-dark transition-all duration-300 
                       shadow-jentu-lg hover:shadow-jentu-xl transform hover:-translate-y-0.5
                       text-lg group"
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
      </div>
    </div>
  );
}
