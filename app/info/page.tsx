export const metadata = {
  title: "Info & Contatti",
  description: "Contattaci per domande, suggerimenti o collaborazioni. Il team di Jentu.it è sempre disponibile ad ascoltarti.",
};

export default function InfoPage() {
  return (
    <div className="container-jentu py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Info & Contatti
          </h1>
          <p className="text-xl text-gray-600">
            Hai domande o suggerimenti? Siamo qui per aiutarti!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up animate-delay-100">
          {/* Email */}
          <div className="card p-8 group hover:shadow-jentu-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-jentu-teal/10 rounded-xl flex items-center justify-center 
                              flex-shrink-0 group-hover:bg-jentu-teal group-hover:scale-110 
                              transition-all duration-300">
                <svg className="w-7 h-7 text-jentu-teal group-hover:text-white transition-colors" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Email</h3>
                <a href="mailto:info@jentu.it" 
                   className="text-jentu-teal hover:text-jentu-teal-dark hover:underline 
                              transition-colors text-lg">
                  info@jentu.it
                </a>
                <p className="text-gray-600 text-sm mt-2">
                  Risponderemo entro 24-48 ore
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="card p-8 group hover:shadow-jentu-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-jentu-teal/10 rounded-xl flex items-center justify-center 
                              flex-shrink-0 group-hover:bg-jentu-teal group-hover:scale-110 
                              transition-all duration-300">
                <svg className="w-7 h-7 text-jentu-teal group-hover:text-white transition-colors" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Social Media</h3>
                <div className="flex flex-col gap-2">
                  <a href="https://www.instagram.com/jentu.it"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-jentu-teal hover:text-jentu-teal-dark hover:underline 
                                transition-colors inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/share/18x6GWmkaN/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-jentu-teal hover:text-jentu-teal-dark hover:underline 
                                transition-colors inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="glass p-8 md:p-10 rounded-2xl animate-slide-up animate-delay-200">
          <h2 className="text-3xl font-bold mb-8 text-center">Domande Frequenti</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2 text-jentu-teal">
                🌊 Ogni quanto vengono aggiornate le previsioni?
              </h3>
              <p className="text-gray-700">
                Le mappe e le previsioni vengono aggiornate ogni 2 ore con i dati più recenti 
                dal servizio Copernicus Marine dell'Unione Europea.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 text-jentu-teal">
                📱 Jentu.it ha un'app mobile?
              </h3>
              <p className="text-gray-700">
                Sì! Puoi installare Jentu.it come Progressive Web App (PWA) direttamente dal browser. 
                Visita il sito da mobile e segui le istruzioni per l'installazione.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 text-jentu-teal">
                🎯 Come funziona la Top 3?
              </h3>
              <p className="text-gray-700">
                La Top 3 mostra le località con le migliori condizioni del momento basandosi su 
                sole, stato del mare e intensità del vento. I dati vengono aggiornati in tempo reale.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 text-jentu-teal">
                📍 Coprite altre zone oltre al Salento?
              </h3>
              <p className="text-gray-700">
                Attualmente copriamo il Salento (provincia di Lecce) e la zona di Brindisi/Taranto. 
                Stiamo lavorando per espandere la copertura ad altre zone della Puglia!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-slide-up animate-delay-300">
          <p className="text-lg text-gray-600 mb-6">
            Non hai trovato quello che cercavi?
          </p>
          <a 
            href="mailto:info@jentu.it"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Scrivici una email
          </a>
        </div>
      </div>
    </div>
  );
}
