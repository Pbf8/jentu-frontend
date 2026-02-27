'use client';

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";
import { RegionProvider } from "@/context/RegionContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <RegionProvider>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ServiceWorkerRegistrar />
    </RegionProvider>
  );
}
