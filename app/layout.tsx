import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#20B2AA',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://jentu.it'),
  title: {
    default: "Jentu.it🔆🌊💨 - Meteo Mare Salento",
    template: "%s | Jentu.it"
  },
  description: "Il tuo amico meteo nel Salento. Previsioni marine, onde e vento aggiornate ogni 2 ore. Scopri dove andare al mare oggi con le mappe interattive di Jentu.it!",
  keywords: [
    "meteo salento",
    "mare salento",
    "onde salento",
    "vento salento",
    "previsioni marine",
    "meteo marino",
    "spiagge salento",
    "jentu",
    "vento puglia",
    "mare puglia",
    "adriatico",
    "ionio",
    "copernicus",
    "torre dell'orso",
    "otranto",
    "gallipoli",
    "leuca",
    "porto cesareo"
  ],
  authors: [{ name: "Jentu.it" }],
  creator: "Jentu.it",
  publisher: "Jentu.it",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://jentu.it',
    title: 'Jentu.it🔆🌊💨 - Meteo Mare Salento',
    description: 'Il tuo amico meteo nel Salento. Previsioni marine, onde e vento aggiornate ogni 2 ore.',
    siteName: 'Jentu.it',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jentu.it - Meteo Mare Salento',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jentu.it🔆🌊💨 - Meteo Mare Salento',
    description: 'Previsioni marine, onde e vento aggiornate ogni 2 ore per il Salento.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Jentu.it',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        {/* Google Analytics - Sostituire con il tuo ID */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
