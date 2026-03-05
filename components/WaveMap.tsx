'use client';

import { useState, useRef, useEffect, useCallback, PointerEvent } from "react";
import Image from "next/image";
import { getMapImageUrl, cn } from "@/lib/utils";

// --- Constants ---
const MAX_SCALE_FACTOR = 4;
const ZOOM_INCREMENT = 0.2;
const CONTROL_BUTTON_CLASSES = "w-10 h-10 rounded-full shadow-lg bg-white/90 backdrop-blur-sm text-jentu-teal border-2 border-jentu-teal flex items-center justify-center font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95";

// --- Data ---
const waveStates = [
    { color: "bg-[#000000]", label: "Molto Agitato", hex: "#000000" },
    { color: "bg-[#f23c3e]", label: "Agitato", hex: "#f23c3e" },
    { color: "bg-[#ff903e]", label: "Molto mosso", hex: "#ff903e" },
    { color: "bg-[#ffd931]", label: "Mosso", hex: "#ffd931" },
    { color: "bg-[#0000ff]", label: "Poco mosso", hex: "#0000ff" },
    { color: "bg-[#2aa5eb]", label: "Quasi calmo", hex: "#2aa5eb" },
    { color: "bg-[#38e257]", label: "Calmo", hex: "#38e257" },
];

// --- Hooks ---
const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

const useMapInteraction = (imageDimensions: {width: number, height: number}, imageLoaded: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [baseScale, setBaseScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [pointerCount, setPointerCount] = useState(0);

  const pointers = useRef<PointerEvent<Element>[]>([]);
  const lastPointerDist = useRef(0);

  const calculateAndSetScale = useCallback(() => {
    if (containerRef.current && imageDimensions.width > 0 && imageDimensions.height > 0) {
      const { clientHeight } = containerRef.current;
      if (clientHeight > 0) {
        const newScale = clientHeight / imageDimensions.height;
        if (!isNaN(newScale) && newScale > 0) {
          setBaseScale(newScale);
          setScale(newScale);
          setPosition({ x: 0, y: 0 });
        }
      }
    }
  }, [imageDimensions]);

  useEffect(() => {
    if (imageLoaded) {
      calculateAndSetScale();
      const container = containerRef.current;
      const resizeObserver = new ResizeObserver(calculateAndSetScale);
      if (container) resizeObserver.observe(container);
      return () => {
        if (container) resizeObserver.unobserve(container);
      };
    }
  }, [imageLoaded, calculateAndSetScale]);

  const clampPosition = useCallback((pos: {x: number, y: number}, currentScale: number) => {
    if (!containerRef.current) return pos;
    const { clientWidth, clientHeight } = containerRef.current;
    const imageWidth = imageDimensions.width * currentScale;
    const imageHeight = imageDimensions.height * currentScale;
    
    // Quando l'immagine è centrata via flexbox, il suo punto di partenza è al centro
    // Dobbiamo clamparla per non mostrare spazi bianchi ai lati
    const maxX = (imageWidth - clientWidth) / 2;
    const maxY = (imageHeight - clientHeight) / 2;
    
    // Se l'immagine è più piccola del container, permettiamo solo posizione 0
    // Altrimenti, clampamo dai limiti
    return { 
      x: imageWidth <= clientWidth ? 0 : Math.max(-maxX, Math.min(pos.x, maxX)), 
      y: imageHeight <= clientHeight ? 0 : Math.max(-maxY, Math.min(pos.y, maxY)) 
    };
  }, [imageDimensions]);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    pointers.current.push(e);
    setPointerCount(pointers.current.length);
    setIsInteracting(true);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const index = pointers.current.findIndex(p => p.pointerId === e.pointerId);
    if (index === -1) return;
    pointers.current[index] = e;

    if (pointers.current.length === 1 && (scale > baseScale || imageDimensions.width > 0)) {
      setPosition(prevPos => clampPosition({ x: prevPos.x + e.movementX, y: prevPos.y + e.movementY }, scale));
    } else if (pointers.current.length === 2) {
      const p1 = pointers.current[0];
      const p2 = pointers.current[1];
      const pointerDist = Math.hypot(p1.clientX - p2.clientX, p1.clientY - p2.clientY);
      if (lastPointerDist.current > 0) {
        const scaleChange = (pointerDist - lastPointerDist.current) * 0.01;
        handleZoom(scaleChange, (p1.clientX + p2.clientX) / 2, (p1.clientY + p2.clientY) / 2);
      }
      lastPointerDist.current = pointerDist;
    }
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    pointers.current = pointers.current.filter(p => p.pointerId !== e.pointerId);
    setPointerCount(pointers.current.length);
    if (pointers.current.length < 2) lastPointerDist.current = 0;
    if (pointers.current.length === 0) setIsInteracting(false);
  };

  const handleZoom = useCallback((zoomFactor: number, clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const maxScale = baseScale * MAX_SCALE_FACTOR;
    const newScale = Math.max(baseScale, Math.min(scale + zoomFactor, maxScale));
    if (newScale === scale) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    const imageX = (mouseX - position.x) / scale;
    const imageY = (mouseY - position.y) / scale;
    const newPosition = { x: mouseX - imageX * newScale, y: mouseY - imageY * newScale };
    const clampedPos = clampPosition(newPosition, newScale);

    setPosition(clampedPos);
    setScale(newScale);
  }, [scale, baseScale, position, clampPosition]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleZoom(-e.deltaY * 0.005, e.clientX, e.clientY);
    };

    node.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      node.removeEventListener('wheel', handleWheel);
    };
  }, [handleZoom]);

  const handleZoomIn = () => {
    if (containerRef.current) {
      handleZoom(ZOOM_INCREMENT, containerRef.current.clientWidth / 2, containerRef.current.clientHeight / 2);
    }
  };
  const handleZoomOut = () => {
    if (containerRef.current) {
      handleZoom(-ZOOM_INCREMENT, containerRef.current.clientWidth / 2, containerRef.current.clientHeight / 2);
    }
  };
  const handleZoomReset = () => calculateAndSetScale();

  return {
    containerRef, scale, baseScale, position, isInteracting, pointerCount,
    events: { onPointerDown: handlePointerDown, onPointerMove: handlePointerMove, onPointerUp: handlePointerUp, onPointerCancel: handlePointerUp },
    controls: { handleZoomIn, handleZoomOut, handleZoomReset },
  };
};

// --- Client Component ---
function WaveMapClient({ region }: { region: "salento" | "brindisi" }) {
  const [timeframe, setTimeframe] = useState<"today" | "tomorrow">("today");
  const [showControls, setShowControls] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const imageUrl = getMapImageUrl(region, timeframe);

  const { containerRef, scale, baseScale, position, isInteracting, pointerCount, events, controls } = useMapInteraction(imageDimensions, imageLoaded);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageDimensions({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight });
    setImageLoaded(true);
  };

  const handleTimeframeChange = (newTimeframe: "today" | "tomorrow") => {
    if (timeframe === newTimeframe) return;
    setImageLoaded(false);
    setImageError(false);
    setTimeframe(newTimeframe);
  };
  
  const getCursor = () => {
    if (isInteracting && pointerCount === 1) return 'grabbing';
    return 'grab';
  }

  return (
    <div className="relative rounded-2xl overflow-hidden border-2 border-gray-100 shadow-2xl bg-gray-50 h-full flex items-center justify-center touch-none select-none" ref={containerRef} {...events}>
      {!imageLoaded || imageError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          {imageError ? (
            <div className="text-center px-4"><p className="text-gray-600 font-medium">Errore mappa</p></div>
          ) : (
            <div className="text-center"><div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-jentu-teal border-t-transparent mb-4" /><p className="text-gray-600 font-medium">Caricamento...</p></div>
          )}
        </div>
      ) : null}

      <div className="absolute will-change-transform" style={{ width: imageDimensions.width, height: imageDimensions.height, transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, cursor: getCursor(), transition: isInteracting ? 'none' : 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)', opacity: imageLoaded && !imageError ? 1 : 0, left: '50%', top: '50%', marginLeft: `${-imageDimensions.width / 2}px`, marginTop: `${-imageDimensions.height / 2}px` }}>
        <Image src={imageUrl} alt={`Mappa onde ${region}`} fill priority sizes="(max-width: 768px) 100vw, 800px" onLoad={handleImageLoad} onError={() => setImageError(true)} draggable={false} />
      </div>

      <UIControls showControls={showControls} setShowControls={setShowControls} scale={scale} baseScale={baseScale} {...controls} />
      {showControls && <InfoPanel timeframe={timeframe} handleTimeframeChange={handleTimeframeChange} setShowControls={setShowControls} />}
    </div>
  );
}


// --- Main Component (Wrapper) ---
export default function WaveMap({ region }: { region: "salento" | "brindisi" }) {
  const hasMounted = useHasMounted();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-center mb-6 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold"><span className="text-gradient">Adriatico o Ionio?</span></h2>
      </div>
      <div className="relative flex-grow">
        {hasMounted ? (
          <WaveMapClient region={region} />
        ) : (
          <div className="relative rounded-2xl overflow-hidden border-2 border-gray-100 shadow-2xl bg-gray-50 h-full flex items-center justify-center">
            <div className="text-center"><div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-jentu-teal border-t-transparent mb-4" /><p className="text-gray-600 font-medium">Caricamento...</p></div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Sub-components ---
const UIControls = ({ showControls, setShowControls, handleZoomIn, handleZoomOut, handleZoomReset, scale, baseScale }: any) => (
  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
    <button onClick={() => setShowControls(!showControls)} className={cn("w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 font-bold text-lg", showControls ? "bg-jentu-teal text-white" : "bg-white/90 backdrop-blur-sm text-jentu-teal border-2 border-jentu-teal")} title="Informazioni">i</button>
    <button onClick={handleZoomIn} disabled={scale >= baseScale * MAX_SCALE_FACTOR} className={CONTROL_BUTTON_CLASSES}>+</button>
    <button onClick={handleZoomOut} disabled={scale <= baseScale} className={CONTROL_BUTTON_CLASSES}>−</button>
    {scale > baseScale && <button onClick={handleZoomReset} className="w-10 h-10 rounded-full shadow-lg bg-jentu-teal/90 text-white flex items-center justify-center text-xs font-bold transition-opacity hover:bg-jentu-teal" title="Reset Zoom">1:1</button>}
  </div>
);

const InfoPanel = ({ timeframe, handleTimeframeChange, setShowControls }: any) => (
  <>
    <div className="absolute inset-0 bg-black/30 z-20 backdrop-blur-[2px]" onClick={() => setShowControls(false)} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-xl shadow-2xl p-5 w-[90%] max-w-sm animate-fade-in-fast">
      <button onClick={() => setShowControls(false)} className="absolute top-2 right-2 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
      <div className="mb-4">
        <h3 className="text-xs font-bold mb-2 text-gray-700 uppercase">Giorno</h3>
        <div className="grid grid-cols-2 gap-2"><button onClick={() => handleTimeframeChange("today")} className={cn("py-2 px-3 rounded-lg font-semibold text-sm", timeframe === "today" ? "bg-jentu-teal text-white" : "bg-gray-100")}>OGGI</button><button onClick={() => handleTimeframeChange("tomorrow")} className={cn("py-2 px-3 rounded-lg font-semibold text-sm", timeframe === "tomorrow" ? "bg-jentu-teal text-white" : "bg-gray-100")}>DOMANI</button></div>
      </div>
      <div className="mb-4">
        <h3 className="text-xs font-bold mb-2 text-gray-700 uppercase">Legenda</h3>
        <div className="space-y-1">{waveStates.map((s) => (<div key={s.label} className="flex items-center gap-2"><span className="w-3 h-3 rounded-full border" style={{ backgroundColor: s.hex }} /><span className="text-xs">{s.label}</span></div>))}</div>
      </div>
      <div className="bg-jentu-teal/10 border-l-3 border-jentu-teal p-3 rounded"><p className="text-xs text-gray-700"><strong>Aggiornamento:</strong> Ogni 2 ore.</p></div>
    </div>
  </>
);
