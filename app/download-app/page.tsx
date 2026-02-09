export default function DownloadAppPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Scarica l'App Jentu.it</h1>
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-br from-jentu-teal to-blue-600 rounded-lg p-12 text-white mb-8">
          <div className="text-6xl mb-6">📱</div>
          <h2 className="text-3xl font-bold mb-4">Jentu.it sempre con te</h2>
          <p className="text-xl mb-8">
            Previsioni meteo, mare e vento in un tap. Installa l'app per un accesso diretto!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-jentu-teal px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              📱 Installa su iOS
            </button>
            <button className="bg-white text-jentu-teal px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              🤖 Installa su Android
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">Veloce</h3>
            <p className="text-gray-600">Accesso istantaneo alle previsioni senza aprire il browser</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-3">🔔</div>
            <h3 className="text-xl font-bold mb-2">Notifiche</h3>
            <p className="text-gray-600">Ricevi avvisi quando le condizioni sono perfette</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-xl font-bold mb-2">Offline</h3>
            <p className="text-gray-600">Consulta le ultime previsioni anche senza connessione</p>
          </div>
        </div>
      </div>
    </div>
  );
}
