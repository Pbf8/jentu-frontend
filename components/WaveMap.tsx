"use client";

import { useState, useRef, useLayoutEffect, useCallback } from "react";
import Image from "next/image";
import { getMapImageUrl, cn } from "@/lib/utils";

const waveStates = [
  { color: "bg-[#000000]", label: "Molto Agitato", hex: "#000000" },
  { color: "bg-[#f23c3e]", label: "Agitato", hex: "#f23c3e" },
  { color: "bg-[#ff903e]", label: "Molto mosso", hex: "#ff903e" },
  { color: "bg-[#ffd931]", label: "Mosso", hex: "#ffd931" },
  { color: "bg-[#0000ff]", label: "Poco mosso", hex: "#0000ff" },
  { color: "bg-[#2aa5eb]", label: "Quasi calmo", hex: "#2aa5eb" },
  { color: "bg-[#38e257]", label: "Calmo", hex: "#38e257" },
];

export default function WaveMap({ region }: { region: "salento" | "brindisi" }) {
  // State
  const [timeframe, setTimeframe] = useState<"today" | "tomorrow">("today");
  const [showControls, setShowControls] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);
  const [baseScale, setBaseScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const imageUrl = getMapImageUrl(region, timeframe);

  // Handlers
  const calculateAndSetScale = useCallback(() => {
    if (containerRef.current && imageDimensions.width > 0 && imageDimensions.height > 0) {
      const { clientHeight: cH } = containerRef.current;
      if (cH > 0) {
        const newScale = cH / imageDimensions.height;
        if (!isNaN(newScale) && newScale > 0) {
          setBaseScale(newScale);
          setScale(newScale);
          setPosition({ x: 0, y: 0 });
        }
      }
    }
  }, [imageDimensions]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (imageLoaded && container) {
      calculateAndSetScale();
      const resizeObserver = new ResizeObserver(calculateAndSetScale);
      resizeObserver.observe(container);
      return () => resizeObserver.disconnect();
    }
  }, [imageLoaded, calculateAndSetScale]);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageDimensions({
      width: event.currentTarget.naturalWidth,
      height: event.currentTarget.naturalHeight,
    });
    setImageLoaded(true);
  };

  const handleTimeframeChange = (newTimeframe: "today" | "tomorrow") => {
    if (timeframe === newTimeframe) return;
    setImageLoaded(false);
    setImageError(false);
    setImageDimensions({ width: 0, height: 0 });
    setTimeframe(newTimeframe);
  };

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.1, baseScale * 2));
  const handleZoomOut = () => {
    const newScale = Math.max(scale - 0.1, baseScale);
    if (newScale <= baseScale) setPosition({ x: 0, y: 0 });
    setScale(newScale);
  };
  const handleZoomReset = () => {
      calculateAndSetScale();
  };

  const handlePanStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  };
  
  const handlePanMove = (clientX: number, clientY: number) => {
    if (!isDragging || !containerRef.current) return;

    const { clientWidth: cW, clientHeight: cH } = containerRef.current;
    const imageWidth = imageDimensions.width * scale;
    const imageHeight = imageDimensions.height * scale;

    const overflowX = imageWidth > cW ? (imageWidth - cW) / 2 : 0;
    const overflowY = imageHeight > cH ? (imageHeight - cH) / 2 : 0;

    const minX = -overflowX;
    const maxX = overflowX;
    const minY = -overflowY;
    const maxY = overflowY;
    
    let newX = clientX - dragStart.x;
    let newY = clientY - dragStart.y;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handlePanEnd = () => setIsDragging(false);

  return (
    <div className="w-full">
      <div className="text-center mb-6 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold"><span className="text-gradient">Adriatico o Ionio?</span></h2>
      </div>

      <div className="relative" style={{ height: '70vh' }}>
        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden border-2 border-gray-100 shadow-2xl bg-gray-50 h-full flex items-center justify-center"
          style={{ touchAction: 'none'}}
          onMouseDown={(e) => handlePanStart(e.clientX, e.clientY)}
          onMouseMove={(e) => handlePanMove(e.clientX, e.clientY)}
          onMouseUp={handlePanEnd}
          onMouseLeave={handlePanEnd}
          onTouchStart={(e) => e.touches.length === 1 && handlePanStart(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchMove={(e) => e.touches.length === 1 && handlePanMove(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={handlePanEnd}
        >
          {(!imageLoaded || imageError) && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
              {imageError ? (
                  <div className="text-center px-4"><p className="text-gray-600 font-medium">Errore mappa</p></div>
              ) : (
                <div className="text-center"><div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-jentu-teal border-t-transparent mb-4" /><p className="text-gray-600 font-medium">Caricamento...</p></div>
              )}
            </div>
          )}
          
          <div
            className="relative"
            style={{
              width: imageDimensions.width,
              height: imageDimensions.height,
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              opacity: imageLoaded && !imageError ? 1 : 0,
            }}
          >
            <Image
              src={imageUrl}
              alt={`Mappa onde ${region}`}
              fill
              priority
              onLoad={handleImageLoad}
              onError={() => setImageError(true)}
              draggable={false}
            />
          </div>

          {/* UI Controls Overlay */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
             <button onClick={() => setShowControls(!showControls)} className={cn("w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 font-bold text-lg", showControls ? "bg-jentu-teal text-white" : "bg-white/90 backdrop-blur-sm text-jentu-teal border-2 border-jentu-teal")} title="Informazioni">i</button>
             <button onClick={handleZoomIn} disabled={scale >= baseScale * 2} className="w-10 h-10 rounded-full shadow-lg bg-white/90 backdrop-blur-sm text-jentu-teal border-2 border-jentu-teal flex items-center justify-center font-bold text-xl disabled:opacity-50">+</button>
             <button onClick={handleZoomOut} disabled={scale <= baseScale} className="w-10 h-10 rounded-full shadow-lg bg-white/90 backdrop-blur-sm text-jentu-teal border-2 border-jentu-teal flex items-center justify-center font-bold text-xl disabled:opacity-50">−</button>
            {scale > baseScale && <button onClick={handleZoomReset} className="w-10 h-10 rounded-full shadow-lg bg-jentu-teal/90 text-white flex items-center justify-center text-xs font-bold" title="Reset Zoom">1:1</button>}
          </div>

          {/* Info Panel */}
          {showControls && (
            <>
              <div className="absolute inset-0 bg-black/30 z-20 backdrop-blur-[2px]" onClick={() => setShowControls(false)} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-xl shadow-2xl p-5 w-[90%] max-w-sm">
                <button onClick={() => setShowControls(false)} className="absolute top-2 right-2 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                <div className="mb-4"><h3 className="text-xs font-bold mb-2 text-gray-700 uppercase">Giorno</h3><div className="grid grid-cols-2 gap-2"><button onClick={() => handleTimeframeChange("today")} className={cn("py-2 px-3 rounded-lg font-semibold text-sm", timeframe === "today" ? "bg-jentu-teal text-white" : "bg-gray-100")}>OGGI</button><button onClick={() => handleTimeframeChange("tomorrow")} className={cn("py-2 px-3 rounded-lg font-semibold text-sm", timeframe === "tomorrow" ? "bg-jentu-teal text-white" : "bg-gray-100")}>DOMANI</button></div></div>
                <div className="mb-4"><h3 className="text-xs font-bold mb-2 text-gray-700 uppercase">Legenda</h3><div className="space-y-1">{waveStates.map((s) => (<div key={s.label} className="flex items-center gap-2"><span className="w-3 h-3 rounded-full border" style={{ backgroundColor: s.hex }} /><span className="text-xs">{s.label}</span></div>))}</div></div>
                <div className="bg-jentu-teal/10 border-l-3 border-jentu-teal p-3 rounded"><p className="text-xs text-gray-700"><strong>Aggiornamento:</strong> Ogni 2 ore.</p></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
