import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/galleria", label: "Galleria" },
    { href: "/info", label: "Contatti" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/eventi", label: "Eventi" },
  ];

  return (
    <footer className="bg-jentu-dark text-white mt-20">
      {/* Main Footer */}
      <div className="container-jentu py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <div className="relative w-48 h-14 brightness-0 invert transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Jentu.it"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Il tuo amico meteo nel Salento. Previsioni marine, onde e vento aggiornate ogni 2 ore 
              grazie ai dati Copernicus Marine.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/jentu.it"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-jentu-teal rounded-full transition-all duration-300 
                           transform hover:scale-110 hover:rotate-6"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/18x6GWmkaN/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-jentu-teal rounded-full transition-all duration-300 
                           transform hover:scale-110 hover:rotate-6"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-jentu-teal transition-colors duration-200 
                               inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-jentu-teal transition-all duration-200 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Informazioni</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-jentu-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Aggiornamenti ogni 2 ore</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-jentu-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Dati Copernicus Marine</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-jentu-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Copertura Salento</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Credits & Copyright */}
      <div className="border-t border-white/10">
        <div className="container-jentu py-6">
          <div className="text-center text-sm text-gray-400 space-y-3">
            <p className="leading-relaxed">
              <strong className="text-white">References:</strong> Korres, G., Oikonomou, C., Denaxa, D., & Sotiropoulou, M. (2023). 
              Mediterranean Sea Waves Analysis and Forecast (Copernicus Marine Service MED-Waves, MEDWAΜ4 system) 
              (Version 1) [Data set]. Copernicus Marine Service (CMS).
            </p>
            <p>
              <strong className="text-white">DOI (product):</strong>{" "}
              <a
                href="https://doi.org/10.25423/cmcc/medsea_analysisforecast_wav_006_017_medwam4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-jentu-teal hover:text-jentu-teal-light hover:underline transition-colors duration-200"
              >
                https://doi.org/10.25423/cmcc/medsea_analysisforecast_wav_006_017_medwam4
              </a>
            </p>
            <p className="italic">Generated using E.U. Copernicus Marine Service Information</p>
            <p className="pt-3 border-t border-white/10">
              © {currentYear} Jentu.it - Tutti i diritti riservati
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="h-1 bg-gradient-to-r from-jentu-teal via-jentu-teal-light to-jentu-teal" />
    </footer>
  );
}
