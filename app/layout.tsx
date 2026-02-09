import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jentu.it🔆🌊💨 - Meteo Mare Salento",
  description: "Il tuo amico meteo nel Salento. Previsioni marine, onde e vento aggiornate ogni 2 ore.",
  keywords: "meteo salento, mare salento, onde salento, vento salento, previsioni marine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
