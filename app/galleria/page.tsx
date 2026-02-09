import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Galleria",
  description: "Scopri le più belle spiagge del Salento attraverso la nostra galleria fotografica. Porto Miggiano, Leuca, Otranto, Torre dell'Orso e molto altro.",
};

const beachImages = [
  {
    src: "https://www.jentu.it/wp-content/uploads/2025/02/photo_2025-02-01_16-56-43.jpg",
    alt: "Porto Miggiano",
    title: "Porto Miggiano",
    location: "Tricase",
  },
  {
    src: "https://www.jentu.it/wp-content/uploads/2025/02/IMG_20250213_080840_001.jpg",
    alt: "Leuca",
    title: "Leuca",
    location: "Castrignano del Capo",
  },
  {
    src: "https://www.jentu.it/wp-content/uploads/2025/02/photo_2025-02-01_16-56-44.jpg",
    alt: "Otranto",
    title: "Otranto",
    location: "Otranto",
  },
  {
    src: "https://www.jentu.it/wp-content/uploads/2025/01/0d6b501a200e66024fea37f520b5f60df438feb2.jpg",
    alt: "Torre Lapillo",
    title: "Torre Lapillo",
    location: "Porto Cesareo",
  },
  {
    src: "https://www.jentu.it/wp-content/uploads/2025/02/IMG_20250213_080840_235.jpg",
    alt: "Roca",
    title: "Roca",
    location: "Melendugno",
  },
  {
    src: "https://www.jentu.it/wp-content/uploads/2025/02/photo_2025-02-01_16-56-52.jpg",
    alt: "Torre dell'Orso",
    title: "Torre dell'Orso",
    location: "Melendugno",
  },
];

export default function GalleriaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://www.jentu.it/wp-content/uploads/2025/02/IMG-20250131-WA0010.jpg"
            alt="Costa del Salento"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Scirocco o Tramontana?
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            C'è Jentu!
          </p>
          <p className="text-xl md:text-2xl opacity-90">
            Metti il costume, il mare te lo suggeriamo noi.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container-jentu py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {beachImages.map((beach, index) => (
            <div
              key={index}
              className="card-hover group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                {/* Image */}
                <Image
                  src={beach.src}
                  alt={beach.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 
                                group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-1">
                    {beach.title}
                  </h3>
                  <p className="text-sm opacity-90 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {beach.location}
                  </p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm 
                                rounded-full flex items-center justify-center opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-jentu-teal to-jentu-teal-dark text-white py-16">
        <div className="container-jentu text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vuoi scoprire le condizioni in tempo reale?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Controlla la mappa interattiva e trova la tua spiaggia perfetta
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-3 bg-white text-jentu-teal px-8 py-4 rounded-xl 
                       font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl
                       hover:shadow-2xl transform hover:-translate-y-0.5 text-lg group"
          >
            <span>Vai alla Mappa</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
