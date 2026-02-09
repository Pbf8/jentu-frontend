"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { getMapImageUrl, cn } from "@/lib/utils";

interface WaveMapProps {
  region: "salento" | "brindisi";
}

const waveStates = [
  { color: "bg-[#000000]", label: "Molto Agitato", hex: "#000000" },
  { color: "bg-[#f23c3e]", label: "Agitato", hex: "#f23c3e" },
  { color: "bg-[#ff903e]", label: "Molto mosso", hex: "#ff903e" },
  { color: "bg-[#ffd931]", label: "Mosso", hex: "#ffd931" },
  { color: "bg-[#0000ff]", label: "Poco mosso", hex: "#0000ff" },
  { color: "bg-[#2aa5eb]", label: "Quasi calmo", hex: "#2aa5eb" },
  { color: "bg-[#38e257]", label: "Calmo", hex: "#38e257" },
];

export default function WaveMap({ region }: WaveMapProps) {
  const [timeframe, setTimeframe] = useState<"today" | "tomorrow">("today");
  const [showControls, setShowControls] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageUrl = getMapImageUrl(region, timeframe);

  const handleTimeframeChange = (newTimeframe: "today" | "tomorrow") => {
    setImageLoaded(false);
    setTimeframe(newTimeframe);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 1));
    if (scale <= 1.2) setPosition({ x: 0, y: 0 });
  };
  const handleZoomReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale <= 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || scale <= 1) return;
    const touch = e.touches[0];
    setPosition({ x: touch.clientX - dragStart.x, y: touch.clientY - dragStart.y });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-gradient">Adriatico o Ionio?</span>
        </h2>
      </div>

      {/* Mappa Container */}
      <div className="relative">
        
        {/* MAPPA */}
        <div 
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden border-2 border-gray-100 shadow-2xl bg-gray-50"
          style={{ 
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
            touchAction: scale > 1 ? 'none' : 'auto'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* CONTROLLI IN ALTO A DESTRA - Colonna verticale */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            {/* Pulsante Info */}
            <button
              onClick={() => setShowControls(!showControls)}
              className={cn(
                "w-10 h-10 rounded-full shadow-lg",
                "flex items-center justify-center transition-all duration-200",
                "hover:scale-110 active:scale-95 font-bold text-lg",
                showControls 
                  ? "bg-jentu-teal text-white" 
                  : "bg-white/90 backdrop-blur-sm text-jentu-teal border-2 border-jentu-teal"
              )}
              title="Informazioni"
            >
              i
            </button>

            {/* Pulsante Zoom + */}
            <button
              onClick={handleZoomIn}
              disabled={scale >= 3}
              className="w-10 h-10 rounded-full shadow-lg bg-white/90 backdrop-blur-sm 
                         text-jentu-teal border-2 border-jentu-teal
                         flex items-center justify-center transition-all duration-200
                         hover:scale-110 active:scale-95 font-bold text-xl
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              title="Zoom +"
            >
              +
            </button>

            {/* Pulsante Zoom - */}
            <button
              onClick={handleZoomOut}
              disabled={scale <= 1}
              className="w-10 h-10 rounded-full shadow-lg bg-white/90 backdrop-blur-sm 
                         text-jentu-teal border-2 border-jentu-teal
                         flex items-center justify-center transition-all duration-200
                         hover:scale-110 active:scale-95 font-bold text-xl
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              title="Zoom -"
            >
              −
            </button>

            {/* Pulsante Reset (se zommato) */}
            {scale > 1 && (
              <button
                onClick={handleZoomReset}
                className="w-10 h-10 rounded-full shadow-lg bg-jentu-teal/90 backdrop-blur-sm 
                           text-white border-2 border-jentu-teal
                           flex items-center justify-center transition-all duration-200
                           hover:scale-110 active:scale-95 text-xs font-bold"
                title="Reset Zoom"
              >
                1:1
              </button>
            )}
          </div>

          {/* PANNELLO CONTROLLI - Overlay SOPRA la mappa */}
          {showControls && (
            <>
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/30 z-[5] backdrop-blur-[2px] animate-fade-in"
                onClick={() => setShowControls(false)}
              />
              
              {/* Pannello */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[6] 
                              bg-white rounded-xl shadow-2xl p-5 animate-scale-in
                              w-[90%] max-w-sm">
                
                {/* Pulsante Chiudi */}
                <button
                  onClick={() => setShowControls(false)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-gray-100 
                             hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* OGGI/DOMANI */}
                <div className="mb-5">
                  <h3 className="text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">Giorno</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleTimeframeChange("today")}
                      className={cn(
                        "py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-200",
                        timeframe === "today"
                          ? "bg-jentu-teal text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      OGGI
                    </button>
                    <button
                      onClick={() => handleTimeframeChange("tomorrow")}
                      className={cn(
                        "py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-200",
                        timeframe === "tomorrow"
                          ? "bg-jentu-teal text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      DOMANI
                    </button>
                  </div>
                </div>

                {/* LEGENDA - PIÙ PICCOLA */}
                <div className="mb-5">
                  <h3 className="text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">Legenda</h3>
                  <div className="space-y-1">
                    {waveStates.map((state, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full flex-shrink-0 border border-gray-300"
                          style={{ backgroundColor: state.hex }}
                        />
                        <span className="text-xs text-gray-700">{state.label}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 pt-1 border-t border-gray-200 mt-2">
                      <span className="text-xs">★</span>
                      <span className="text-xs font-semibold text-jentu-teal">Miglior punto</span>
                    </div>
                  </div>
                </div>

                {/* INFO */}
                <div className="bg-jentu-teal/10 border-l-3 border-jentu-teal p-3 rounded">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    <strong>Aggiornamento:</strong> Ogni 2 ore con dati Copernicus Marine. 
                    {scale > 1 && " Trascina la mappa per spostarti."}
                  </p>
                </div>

              </div>
            </>
          )}

          {/* Loading */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 shimmer animate-pulse min-h-[400px] md:min-h-[600px]">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-jentu-teal border-t-transparent mb-4" />
                  <p className="text-gray-600 font-medium">Caricamento mappa...</p>
                </div>
              </div>
            </div>
          )}

          {/* Error */}
          {imageError && (
            <div className="flex items-center justify-center min-h-[400px] md:min-h-[600px] bg-gray-50">
              <div className="text-center px-4">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600 font-medium mb-2">Errore nel caricamento</p>
                <button
                  onClick={() => {
                    setImageError(false);
                    setImageLoaded(false);
                  }}
                  className="btn-secondary"
                >
                  Riprova
                </button>
              </div>
            </div>
          )}

          {/* Immagine Mappa */}
          <div
            className="relative w-full transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src={imageUrl}
              alt={`Mappa onde ${region} - ${timeframe === "today" ? "Oggi" : "Domani"}`}
              width={1200}
              height={1600}
              className={cn(
                "w-full h-auto transition-opacity duration-500",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              priority={timeframe === "today"}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              draggable={false}
            />
          </div>

          {/* Indicatore Zoom */}
          {scale > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 text-white 
                            px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {Math.round(scale * 100)}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
}