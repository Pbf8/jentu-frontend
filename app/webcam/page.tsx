export const metadata = {
  title: "Webcam Meteo Salento",
  description: "Visualizza le condizioni meteo in tempo reale attraverso le webcam del Salento. Vista live delle spiagge e del mare.",
};

export default function WebcamPage() {
  const webcams = [
    {
      title: "Torre dell'Orso",
      location: "Melendugno",
      description: "Vista panoramica della baia",
    },
    {
      title: "Gallipoli",
      location: "Gallipoli",
      description: "Lungomare e centro storico",
    },
    {
      title: "Porto Cesareo",
      location: "Porto Cesareo",
      description: "Marina e spiaggia",
    },
    {
      title: "Otranto",
      location: "Otranto",
      description: "Porto e castello aragonese",
    },
  ];

  return (
    <div className="container-jentu py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Webcam Meteo Salento
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualizza le condizioni meteo in tempo reale attraverso le webcam del Salento
          </p>
        </div>

        {/* Webcam Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-slide-up animate-delay-100">
          {webcams.map((webcam, index) => (
            <div 
              key={index} 
              className="card p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-2">{webcam.title}</h3>
              <p className="text-jentu-teal font-medium mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {webcam.location}
              </p>
              
              {/* Placeholder per webcam */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg 
                              flex items-center justify-center mb-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-jentu-teal/10 to-jentu-teal-dark/10 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-center z-10">
                  <svg className="w-16 h-16 mx-auto mb-3 text-gray-400 group-hover:text-jentu-teal 
                                  transition-colors duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 font-medium">Webcam in arrivo</p>
                  <p className="text-sm text-gray-500 mt-1">Prossimamente disponibile</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">{webcam.description}</p>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-jentu-teal/10 border-l-4 border-jentu-teal p-6 rounded-lg 
                        animate-slide-up animate-delay-200">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-jentu-teal flex-shrink-0 mt-1" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-2">Webcam in fase di installazione</h3>
              <p className="text-gray-700">
                Stiamo lavorando per portarti le migliori webcam live del Salento. 
                Le prime webcam saranno attive nelle prossime settimane. Seguici sui social 
                per rimanere aggiornato!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
