export default function ChiSiamoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Chi Siamo</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-jentu-teal">La nostra missione</h2>
          <p className="text-gray-700 mb-4">
            Jentu.it nasce dalla passione per il mare e per il Salento. Il nostro obiettivo è fornire 
            previsioni meteo marine semplici, accurate e accessibili a tutti coloro che amano il mare 
            del nostro territorio.
          </p>
          <p className="text-gray-700 mb-4">
            Utilizziamo dati ufficiali dal servizio Copernicus Marine dell'Unione Europea, 
            elaborandoli per renderli facilmente comprensibili attraverso mappe intuitive e 
            consigli pratici.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-jentu-teal">Perché Jentu.it?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-bold mb-1">Precisione</h3>
                <p className="text-gray-600">Dati aggiornati ogni 2 ore da fonti scientifiche affidabili</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">💙</span>
              <div>
                <h3 className="font-bold mb-1">Locale</h3>
                <p className="text-gray-600">Fatto da salentini per salentini e amanti del Salento</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-bold mb-1">Accessibile</h3>
                <p className="text-gray-600">Disponibile su web, mobile e come app installabile</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-jentu-teal text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Vuoi collaborare con noi?</h2>
          <p className="mb-6">
            Siamo sempre alla ricerca di feedback e suggerimenti per migliorare il servizio.
          </p>
          <a
            href="/info"
            className="inline-block bg-white text-jentu-teal px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contattaci
          </a>
        </div>
      </div>
    </div>
  );
}
