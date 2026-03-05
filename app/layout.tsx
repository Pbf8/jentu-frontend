import type { Viewport } from 'next';
import ClientLayout from './client-layout';
import "./globals.css";
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="icon" href="/trasparent_logo.png" type="image/png" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
