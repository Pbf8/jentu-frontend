"use client";

import { useState, useEffect } from 'react';

// Helper to detect iOS
const isIOS = () => {
  if (typeof window !== 'undefined') {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  }
  return false;
};

export default function DownloadButtons() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    // Check if it's an Apple device on mount
    setIsAppleDevice(isIOS());

    console.log("DownloadButtons: Component mounted. Listening for beforeinstallprompt...");

    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI to show the install button
      setIsInstallable(true);
      console.log("DownloadButtons: 'beforeinstallprompt' event caught and stored.");
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Track if the app is successfully installed
    window.addEventListener('appinstalled', () => {
      console.log('DownloadButtons: PWA was installed');
      // Hide the install button
      setIsInstallable(false);
      setDeferredPrompt(null);
    });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      console.log("DownloadButtons: Component unmounted. Event listener removed.");
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      console.log("DownloadButtons: Install button clicked, but deferredPrompt is not available.");
      // Maybe show instructions here if the prompt isn't available
      return;
    }

    console.log("DownloadButtons: deferredPrompt.prompt() called.");
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`DownloadButtons: User choice was: ${outcome}`);
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  // On Apple devices, the programmatic install prompt is not available.
  // The UI should guide the user to use the "Add to Home Screen" feature.
  // We'll hide the dynamic buttons and rely on the static instructions on the page.
  if (isAppleDevice) {
    return (
      <div className="text-center p-4 bg-blue-100 border-t-4 border-blue-500 text-blue-900 rounded-b shadow-md">
        <p className="font-bold">Per utenti Apple:</p>
        <p>Per installare l'app, segui le istruzioni "Come Installare l'App" qui sotto.</p>
      </div>
    );
  }

  // If the app is installable, show the install button.
  if (isInstallable) {
    return (
      <button 
        onClick={handleInstallClick} 
        className="bg-jentu-teal text-white px-8 py-4 rounded-xl font-bold 
                   hover:bg-jentu-dark transition-all duration-300 shadow-2xl
                   hover:shadow-3xl transform hover:-translate-y-1 text-lg
                   inline-flex items-center gap-3 group w-full sm:w-auto justify-center animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Installa l'App Jentu.it
      </button>
    );
  }

  // Default state: if not installable and not an Apple device, maybe it's already installed or on an unsupported browser.
  return (
    <div className="text-center p-4 bg-gray-100 border-t-4 border-gray-500 text-gray-700 rounded-b shadow-md">
        <p className="font-bold">App già installata o browser non supportato</p>
        <p>Puoi usare il sito normalmente. Se non hai installato l'app, prova con Chrome sul tuo dispositivo.</p>
      </div>
  );
}
