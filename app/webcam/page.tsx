export default function WebcamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Webcam Meteo Salento</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Visualizza le condizioni meteo in tempo reale attraverso le webcam del Salento.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Webcam 1</h3>
            <div className="bg-gray-300 aspect-video rounded flex items-center justify-center">
              <span className="text-gray-600">Stream Webcam</span>
            </div>
            <p className="mt-3 text-gray-600">Località: Torre dell'Orso</p>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Webcam 2</h3>
            <div className="bg-gray-300 aspect-video rounded flex items-center justify-center">
              <span className="text-gray-600">Stream Webcam</span>
            </div>
            <p className="mt-3 text-gray-600">Località: Gallipoli</p>
          </div>
        </div>
      </div>
    </div>
  );
}
