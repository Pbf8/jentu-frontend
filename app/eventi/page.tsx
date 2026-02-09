export default function EventiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Eventi</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Scopri gli eventi e le attività legate al mare e al meteo nel Salento.
        </p>

        <div className="space-y-6">
          {/* Evento 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-jentu-teal">
            <div className="flex flex-col md:flex-row justify-between items-start mb-3">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Evento in arrivo</h2>
              <span className="bg-jentu-teal text-white px-4 py-1 rounded-full text-sm">
                Data da definire
              </span>
            </div>
            <p className="text-gray-700 mb-3">
              Resta sintonizzato per i prossimi eventi organizzati dalla community di Jentu.it!
            </p>
            <div className="text-sm text-gray-600">
              📍 Località: Salento
            </div>
          </div>

          {/* Evento 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-start mb-3">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Workshop Meteo Marino</h2>
              <span className="bg-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm">
                Prossimamente
              </span>
            </div>
            <p className="text-gray-700 mb-3">
              Impara a leggere le previsioni marine e a interpretare le condizioni del mare 
              con esperti del settore.
            </p>
            <div className="text-sm text-gray-600">
              📍 Località: Da definire
            </div>
          </div>

          {/* Evento 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-start mb-3">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Beach Clean Up</h2>
              <span className="bg-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm">
                Estate 2026
              </span>
            </div>
            <p className="text-gray-700 mb-3">
              Giornata dedicata alla pulizia delle spiagge del Salento. 
              Insieme per proteggere il nostro mare!
            </p>
            <div className="text-sm text-gray-600">
              📍 Località: Varie spiagge del Salento
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-3">Vuoi organizzare un evento con noi?</h3>
          <p className="text-gray-600 mb-6">
            Contattaci per proporre iniziative legate al mare e alla meteorologia nel Salento.
          </p>
          <a
            href="/info"
            className="inline-block bg-jentu-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Contattaci
          </a>
        </div>
      </div>
    </div>
  );
}
