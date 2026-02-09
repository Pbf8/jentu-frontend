import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-jentu-dark text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Jentu.it"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com/jentu.it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-jentu-teal transition"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/18x6GWmkaN/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-jentu-teal transition"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-6">
          <p className="mb-2">
            <strong>References:</strong> Korres, G., Oikonomou, C., Denaxa, D., & Sotiropoulou, M. (2023). 
            Mediterranean Sea Waves Analysis and Forecast (Copernicus Marine Service MED-Waves, MEDWAΜ4 system) 
            (Version 1) [Data set]. Copernicus Marine Service (CMS).
          </p>
          <p className="mb-2">
            <strong>DOI (product):</strong>{" "}
            <a
              href="https://doi.org/10.25423/cmcc/medsea_analysisforecast_wav_006_017_medwam4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-jentu-teal hover:underline"
            >
              https://doi.org/10.25423/cmcc/medsea_analysisforecast_wav_006_017_medwam4
            </a>
          </p>
          <p className="italic">Generated using E.U. Copernicus Marine Service Information</p>
        </div>
      </div>
    </footer>
  );
}
