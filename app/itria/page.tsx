import Link from "next/link";
import WaveMap from "@/components/WaveMap";

export default function ItriaPage() {
  return (
    <div>
      {/* Link back to Salento */}
      <div className="bg-jentu-teal text-white text-center py-3">
        <Link href="/" className="font-semibold hover:underline">
          ← Torna a Salento
        </Link>
      </div>

      {/* Hero Section with Map */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Brindisi & Taranto
          </h1>
          <p className="text-gray-600">
            Previsioni meteo marine per la zona di Brindisi e Valle d'Itria
          </p>
        </div>
        
        <WaveMap region="brindisi" />
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            Consulta le previsioni marine aggiornate per la costa adriatica tra Brindisi e Taranto.
            Dati aggiornati ogni 2 ore dal servizio Copernicus Marine.
          </p>
        </div>
      </section>
    </div>
  );
}
