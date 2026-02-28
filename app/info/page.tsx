
import Link from "next/link";

export const metadata = {
  title: "Informazioni",
  description: "Scopri di più su Jentu.it, il tuo punto di riferimento per le previsioni meteo marine nel Salento.",
};

export default function InfoPage() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-jentu-teal mb-8">
          Informazioni Utili
        </h1>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Domande Frequenti (FAQ)
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-jentu-teal">
                  🌊 Che dati utilizzate?
                </h3>
                <p className="text-gray-700">
                  I nostri dati provengono dal servizio <strong>Copernicus Marine dell'Unione Europea</strong>. 
                  Elaboriamo queste informazioni per offrirti mappe chiare e consigli pratici.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-jentu-teal">
                  🎯 Come funziona la Top 3?
                </h3>
                <p className="text-gray-700">
                  La Top 3 mostra le località con le onde più basse (mare più calmo) in un dato momento.
                  I dati vengono aggiornati dinamicamente dal nostro server.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-jentu-teal">
                  🔄 Ogni quanto si aggiornano le mappe?
                </h3>
                <p className="text-gray-700">
                  Le mappe vengono aggiornate <strong>ogni 2 ore</strong> per garantirti previsioni sempre fresche 
                  e affidabili.
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
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contatti
            </h2>
            <p className="text-gray-700">
              Hai domande, suggerimenti o vuoi semplicemente salutarci? 
              Scrivici su Instagram!
            </p>
            <div className="mt-4">
              <Link href="https://www.instagram.com/jentu.it" target="_blank" rel="noopener noreferrer" className="text-jentu-teal hover:underline font-bold">
                @jentu.it su Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
