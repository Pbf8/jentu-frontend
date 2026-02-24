'use client';

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";
import { RegionProvider } from "@/context/RegionContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        {/* Metatag e link verranno inseriti qui da Next.js */}
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <RegionProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </RegionProvider>
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
