"use client";

import { useState } from "react";
import Image from "next/image";

interface WaveMapProps {
  region: "salento" | "brindisi";
}

export default function WaveMap({ region }: WaveMapProps) {
  const [timeframe, setTimeframe] = useState<"today" | "tomorrow">("today");
  const [showInfo, setShowInfo] = useState(false);

  const getImageUrl = () => {
    const baseUrl = "https://jentu-production.up.railway.app/static/";
    
    if (timeframe === "today") {
      return region === "salento" 
        ? `${baseUrl}salento/salento_wave_map.png`
        : `${baseUrl}%20brindisi/itria_wave_map.png`;
    } else {
      return region === "salento"
        ? `${baseUrl}salento/salento_forecast_map.png`
        : `${baseUrl}%20brindisi/itria_forecast_map.png`;
    }
  };

  const waveStates = [
    { color: "#8B0000", label: "Molto Agitato" },
    { color: "#FF0000", label: "Agitato" },
    { color: "#FF6B35", label: "Molto mosso" },
    { color: "#FFA500", label: "Mosso" },
    { color: "#FFD700", label: "Poco mosso" },
    { color: "#90EE90", label: "Quasi calmo" },
    { color: "#00CED1", label: "Calmo" },
  ];

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">Adriatico o Ionio?</h2>
          <p className="text-gray-600 mb-4">
            Mappa Desktop con Scroll Verticale e Controlli Fissi
          </p>
          <p className="text-sm text-gray-500">Scorri verso il basso per esplorare la mappa</p>
        </div>

        <div className="relative">
          {/* Fixed Controls */}
          <div className="absolute top-4 right-4 z-10 bg-white p-4 rounded-lg shadow-lg">
            {/* Legend */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">Legenda</h3>
              <div className="wave-legend">
                {waveStates.map((state, index) => (
                  <div key={index} className="wave-legend-item">
                    <span className="wave-dot" style={{ backgroundColor: state.color }}></span>
                    <span className="text-sm">{state.label}</span>
                  </div>
                ))}
                <div className="wave-legend-item">
                  <span className="text-lg">★</span>
                  <span className="text-sm">Top</span>
                </div>
              </div>
            </div>

            {/* Time Toggle */}
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setTimeframe("today")}
                className={`px-4 py-2 rounded-lg transition ${
                  timeframe === "today"
                    ? "bg-jentu-teal text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Oggi
              </button>
              <button
                onClick={() => setTimeframe("tomorrow")}
                className={`px-4 py-2 rounded-lg transition ${
                  timeframe === "tomorrow"
                    ? "bg-jentu-teal text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Domani
              </button>
            </div>

            {/* Info Button */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
            >
              Info
            </button>
          </div>

          {/* Map Image */}
          <div className="scroll-container rounded-lg overflow-hidden border-2 border-gray-200">
            <Image
              src={getImageUrl()}
              alt={`Mappa onde ${region} - ${timeframe === "today" ? "Oggi" : "Domani"}`}
              width={1200}
              height={1600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-2">Adriatico o Ionio?</h2>
          <p className="text-sm text-gray-600 mb-3">Mappa per Mobile e Tablet</p>
          <p className="text-xs text-gray-500">Scorri per esplorare la mappa</p>
        </div>

        <div className="scroll-container rounded-lg overflow-x-auto border-2 border-gray-200 mb-4">
          <Image
            src={getImageUrl()}
            alt={`Mappa onde ${region}`}
            width={1200}
            height={1600}
            className="min-w-[600px]"
            priority
          />
        </div>

        {/* Mobile Controls */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition mb-3"
          >
            Info
          </button>

          {/* Legend */}
          <div className="mb-4">
            <h3 className="font-bold mb-2">Legenda</h3>
            <div className="wave-legend">
              {waveStates.map((state, index) => (
                <div key={index} className="wave-legend-item">
                  <span className="wave-dot" style={{ backgroundColor: state.color }}></span>
                  <span className="text-sm">{state.label}</span>
                </div>
              ))}
              <div className="wave-legend-item">
                <span className="text-lg">★</span>
                <span className="text-sm">Top</span>
              </div>
            </div>
          </div>

          {/* Time Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setTimeframe("today")}
              className={`flex-1 px-4 py-2 rounded-lg transition ${
                timeframe === "today"
                  ? "bg-jentu-teal text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Oggi
            </button>
            <button
              onClick={() => setTimeframe("tomorrow")}
              className={`flex-1 px-4 py-2 rounded-lg transition ${
                timeframe === "tomorrow"
                  ? "bg-jentu-teal text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Domani
            </button>
          </div>
        </div>
      </div>

      {/* Info Modal/Alert */}
      {showInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <h3 className="text-xl font-bold mb-3">Informazioni</h3>
            <p className="text-gray-700 mb-4">
              Le mappe vengono aggiornate ogni 2 ore con i dati più recenti dal servizio Copernicus Marine.
              I colori indicano lo stato del mare, dalla calma (azzurro) all'agitazione (rosso scuro).
            </p>
            <button
              onClick={() => setShowInfo(false)}
              className="w-full px-4 py-2 bg-jentu-teal text-white rounded-lg hover:bg-opacity-90 transition"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
