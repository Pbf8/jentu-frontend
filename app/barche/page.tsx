import Image from 'next/image';

export const metadata = {
  title: "Noleggio Barche",
  description: "Noleggia barche di lusso con Apulia Sea Experience. Scopri il Salento dal mare con stile e comfort.",
};

const boatImages = [
  {
    src: "/ApuliaSeaExperience-1.jpeg",
    alt: "Barca di lusso Apulia Sea Experience",
  },
  {
    src: "/ApuliaSeaExperience-2.jpeg",
    alt: "Noleggio barche premium Salento",
  },
  {
    src: "/ApuliaSeaExperience-3.jpeg",
    alt: "Esperienza mare di lusso",
  },
  {
    src: "/ApuliaSeaExperience-4.jpeg",
    alt: "Barca per escursioni costa salentina",
  },
];

const whatsappNumber = "393XXXXXXX"; // Sostituisci con il numero reale
const whatsappMessage = encodeURIComponent("Ciao! Vorrei noleggiare una barca. Potete aiutarmi a scegliere?");

export default function BarchePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ApuliaSeaExperience-1.jpeg"
            alt="Apulia Sea Experience - Noleggio barche di lusso"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Apulia Sea Experience
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-2">
            Noleggio Barche di Lusso
          </p>
          <p className="text-lg opacity-80">
            Scopri il Salento dal mare con stile e comfort
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Description Section */}
      <section className="container-jentu py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Il Tuo Partner per Escursioni Indimenticabili
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Apulia Sea Experience offre un servizio di noleggio barche premium sul Salento. 
            Scegli tra le nostre imbarcazioni di lusso e vivi un'esperienza unica lungo la costa adriatica e ionica.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-jentu-teal to-jentu-teal mx-auto mb-8" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-jentu-teal/10 rounded-full mb-4">
              <svg className="w-8 h-8 text-jentu-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Prezzi Competitivi</h3>
            <p className="text-gray-600">Tariffe trasparenti e flessibili per ogni budget</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-jentu-teal/10 rounded-full mb-4">
              <svg className="w-8 h-8 text-jentu-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Imbarcazioni Premium</h3>
            <p className="text-gray-600">Flotta moderna e ben mantenuta</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-jentu-teal/10 rounded-full mb-4">
              <svg className="w-8 h-8 text-jentu-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Supporto 24/7</h3>
            <p className="text-gray-600">Assistenza sempre disponibile</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-jentu">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              La Nostra Flotta
            </h2>
            <p className="text-lg text-gray-600">
              Scopri le nostre imbarcazioni di lusso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {boatImages.map((boat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-80 md:h-96">
                  <Image
                    src={boat.src}
                    alt={boat.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-jentu py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-jentu-teal/5 to-jentu-teal/5 rounded-2xl p-12 border border-jentu-teal/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Prenota Ora La Tua Esperienza
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contattaci via WhatsApp per ricevere informazioni e prenotare la tua barca
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-jentu-teal hover:bg-jentu-teal-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 text-lg group"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.719.738 5.335 2.139 7.592l-2.26 6.541 6.875-2.197a9.857 9.857 0 004.992 1.311h.004c5.45 0 9.85-4.37 9.85-9.773 0-2.609-.648-5.062-1.884-7.204-1.235-2.141-2.981-3.9-5.095-5.058-2.114-1.159-4.551-1.77-7.046-1.77z" />
            </svg>
            Prenota con WhatsApp
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container-jentu text-center">
          <p className="text-gray-600 text-sm md:text-base">
            Partner ufficiale di Jentu.it per il noleggio barche di lusso nel Salento
          </p>
        </div>
      </section>
    </div>
  );
}
